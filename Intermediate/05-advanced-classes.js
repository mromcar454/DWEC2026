// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person("Miguel", 37)
person.greet()

person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()


const otraPerson = new Person("María", 33)
// otraPerson.sayAge() -> Error, no es una función

// - Abstracción

// Una clase abstracta es una plantilla que no se puede instanciar directamente, sino que sirve como base para que otras clases (subclases)
//  la hereden e implementen su comportamiento.


// Dado que JavaScript no incluye una palabra clave nativa como abstract, el código de la clase Animal la emula mediante dos mecanismos:
class Animal {
    constructor(name) {

  
        // 1. Bloqueo de instanciación con new.target
    
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }

        // new.target detecta qué función constructora fue invocada con el operador new.

        // Si intentas hacer new Animal("Nombre"), new.target será igual a Animal y lanzará el error.

        // Si instancias una subclase (por ejemplo, new Dog("Rufo")), new.target apuntará a Dog, por lo que la validación pasará sin problemas.

        this.name = name
    }


    // 2. Simulación de método abstracto
    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }

    // Establece un "contrato": define la firma del método en la clase padre, pero fuerza a que cada subclase escriba su propia implementación.
    // Si una subclase no sobrescribe makeSound(), al llamarlo heredará esta versión base y devolverá el error.
}

// Error
// const animal = new Animal("Mou")
// console.log(animal)

// - Polimorfismo

// El polimorfismo (que literalmente significa "muchas formas") es la habilidad de interactuar con distintos tipos de objetos usando un mismo nombre de método (makeSound()),
//  dejando que cada objeto responda según su propia naturaleza.

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("RomeroCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("RomeroDog")
console.log(dog)
dog.makeSound()


// La verdadera ventaja del polimorfismo

// El beneficio real aparece cuando trabajas con grupos de objetos heterogéneos sin tener que verificar qué tipo específico representa cada uno:
const misMascotas = [
    new Cat("RomeroCat"),
    new Dog("RomeroDog")
];

// Tratas a todos simplemente como "Animales"
misMascotas.forEach(animal => animal.makeSound())
// Imprime:
// Miau!
// Guau!

// Sin polimorfismo, tendrías que llenar tu código de comprobaciones tipo if (animal instanceof Cat) o 
// if (animal instanceof Dog) para saber qué hacer en cada caso.
// El polimorfismo elimina esa complejidad haciendo que cada objeto sepa cómo comportarse.



// Mixins
// Un mixin es un patrón de diseño que permite añadir comportamientos (métodos) a múltiples clases sin recurrir a la herencia.

// En JavaScript, una clase solo puede heredar de una única clase padre (extends). 
// Los mixins solucionan esta limitación permitiendo la reutilización horizontal de código entre clases que no comparten necesariamente la misma jerarquía.

//Definición del Mixin (FlyMixin)

// Se crea un objeto literal ordinario llamado FlyMixin. 
// Contiene el método fly(), que accede a this.name. 
// No es una clase ni una instancia; es solo un contenedor de comportamientos reutilizables.
const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

// Declaración de subclases (Bird y Dragon)
// Se definen dos clases vacías que extienden de Animal.
// Al no escribir un constructor explícito en Bird o Dragon, JavaScript llama implícitamente al constructor de Animal,
// heredando la asignación de this.name y las protecciones de la clase abstracta

class Bird extends Animal { }

class Dragon extends Animal { }


// Inyección del comportamiento en los prototipos
// Object.assign(destino, origen) copia todas las propiedades del objeto origen en el objeto destino.
Object.assign(Bird.prototype, FlyMixin)
// Copia la función fly dentro de Bird.prototype.
Object.assign(Dragon.prototype, FlyMixin)
// Copia la función fly dentro de Dragon.prototype.

// A partir de este momento, cualquier instancia de Bird o Dragon tendrá acceso al método fly() a través de la cadena de prototipos.

const bird = new Bird("Gorrión")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("Drako")

console.log(dragon.name)
dragon.fly()


/*
Ejercicio: Sistema de Habilidades para Personajes
Objetivo: Combinar una clase abstracta con la inyección de Mixins para componer habilidades de forma flexible.

Requisitos
Clase Abstracta Character:

Su constructor debe recibir name y hp (puntos de vida).

Debe lanzar un error si se intenta instanciar directamente usando new.target.

Mixins de Habilidades:

AttackMixin: Contiene el método attack(), que imprime en consola:

"${this.name} realiza un ataque."

HealMixin: Contiene el método heal(amount), que suma amount a this.hp e imprime:

"${this.name} se cura ${amount} HP. Vida total: ${this.hp}"

Subclases:

Warrior: Hereda de Character e incorpora únicamente AttackMixin.

Cleric: Hereda de Character e incorpora únicamente HealMixin.

Paladin: Hereda de Character e incorpora ambos mixins (AttackMixin y HealMixin).

Prueba de Funcionamiento:

Intenta instanciar new Character("Nadie", 100) para confirmar que lanza el error.

Crea una instancia de Warrior, Cleric y Paladin.

Invoca sus métodos para verificar que cada tipo de personaje tenga solo las habilidades que le corresponden.
*/

// - Patrón Singleton
// El patrón Singleton es un patrón de diseño creacional que garantiza que una clase tenga una única instancia en toda la aplicación
// y proporciona un punto de acceso global a ella.

// ¿Cuándo se utiliza el patrón Singleton?
// Gestión de sesiones: Guardar los datos del usuario logueado en un solo lugar centralizado.
// Conexiones a base de datos: Reutilizar un único canal de conexión en lugar de abrir miles de conexiones simultáneas.
// Configuración global / Estado de la app: Guardar variables del entorno (modo oscuro/claro, idioma seleccionado, tokens).


class Session {

    constructor(name) {
        // comprueba si la propiedad instance dentro de la función constructora Session ya contiene algo
        // si no hay ninguna instancia devuelve undefined (falsy) y crea una instancia
        if (Session.instance) {             
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}



const session1 = new Session("Miguel Romero")
const session2 = new Session()
console.log(session1.name) // Imprime: Miguel Romero
console.log(session2.name) // Imprime: Miguel Romero
console.log(session1 === session2) // true

const session3 = new Session("RomeroDev") 
console.log(session3.name) // Imprime: Miguel Romer
console.log(session2 === session3) // true


// Enfoque moderno en JavaScript (Campos y métodos estáticos)
class Session {
    // 1. Variable privada estática para guardar la única instancia
    static #instance = null;

    constructor(name) {
        // Si ya existe una instancia guardada, la devuelve inmediatamente
        if (Session.#instance) {
            return Session.#instance;
        }
        this.name = name;
        Session.#instance = this;
    }

    // 2. Método estático de acceso oficial
    static getInstance(name) {
        if (!Session.#instance) {
            console.log(`-> Creando la primera sesión para: "${name}"...`);
            Session.#instance = new Session(name);
        } else {
            console.log(`-> Ya existe una sesión activa. Ignorando el nuevo intento...`);
        }
        return Session.#instance;
    }
}

// --- PRUEBAS EN TERMINAL ---

console.log("=== LLAMADA 1 ===");
const s1 = Session.getInstance("Miguel Romero");
console.log("Nombre en s1:", s1.name);

console.log("\n=== LLAMADA 2 ===");
const s2 = Session.getInstance("María López");
console.log("Nombre en s2:", s2.name);

console.log("\n=== LLAMADA 3 (usando new directamente) ===");
const s3 = new Session("RomeroDev");
console.log("Nombre en s3:", s3.name);

console.log("\n=== VERIFICACIONES DE IDENTIDAD ===");
console.log("¿s1 es exactamente igual a s2?:", s1 === s2);
console.log("¿s2 es exactamente igual a s3?:", s2 === s3);



// - Symbol
// Un Symbol es un tipo de dato primitivo introducido en ES6 cuyo valor es único e inmutable.

// A diferencia de las clases normales, Symbol no se instancia con new (hacer new Symbol() da error). 
// Se genera invocando la función Symbol().
const ID = Symbol("id")

// Cada vez que ejecutas Symbol(), el motor de JavaScript (como V8 en Chrome/Node.js) crea en memoria una estructura interna con dos elementos: 
// Un Identificador Único de Memoria: Una dirección o puntero interno único que genera el motor de JS.
// Es un valor de bajo nivel imposible de replicar o falsificar.

// En la Programación Orientada a Objetos en JavaScript,
// los símbolos se utilizan principalmente para crear propiedades privadas/ocultas 

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

// this[ID] = Math.random(): Al usar corchetes [ID], JavaScript evalúa el contenido de la variable ID.
// La propiedad queda guardada en el objeto con esa clave Symbol única en lugar de un texto tradicional.

// getId(): Define un método que sí sabe qué variable contiene el Symbol (ID), por lo que puede acceder internamente a this[ID].

const user = new User("Miguel")
console.log(user.name)
console.log(user.ID) // Imprime: undefined
console.log(user.getId()) // Imprime el random


// Alternativa moderna


class User {
    // 1. Es obligatorio declarar la propiedad privada arriba, en el cuerpo de la clase
    #id;

    constructor(name) {
        this.name = name;
        this.#id = Math.random(); // Se le asigna el valor usando #
    }

    getId() {
        return this.#id; // Acceso interno permitido dentro de la clase
    }
}

const user = new User("Miguel");

console.log(user.name);    // Imprime: "Miguel"
console.log(user.getId()); // Imprime: 0.7483... (el número aleatorio)

// Intentar acceder directamente a la propiedad privada desde fuera:
console.log(user.#id);     // Error de sintaxis (SyntaxError: Private field '#id' must be declared...)


Los símbolos (`Symbol`) nunca ofrecieron privacidad real en JavaScript: cualquier código externo puede inspeccionar y leer las propiedades con clave `Symbol` usando `Object.getOwnPropertySymbols(user)` o `Reflect.ownKeys(user)`. La sintaxis `#` (introducida en ES2022) es la única que proporciona una privacidad dura e inaccesible fuera de la clase.

El propósito real de `Symbol` en JavaScript va enfocado a la **metaprogramación**, la **unicidad absoluta de claves** y la **modificación del comportamiento interno del lenguaje**.

### 1. Símbolos del Sistema (Well-Known Symbols)

JavaScript utiliza varios `Symbol` integrados para permitirte engancharte a funciones nativas de la sintaxis sin romper el lenguaje.

* **`Symbol.iterator`**: Permite hacer que cualquier objeto o clase sea iterable con bucles `for...of` o el operador de propagación (`...`).

```javascript
const coleccion = {
  elementos: ["Manzana", "Pera", "Plátano"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.elementos.length) {
          return { value: this.elementos[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const fruta of coleccion) {
  console.log(fruta); // Imprime: Manzana, Pera, Plátano
}

```

* **`Symbol.toPrimitive`**: Define cómo debe comportarse un objeto cuando JavaScript intenta convertirlo implícitamente a un tipo primitivo (número, texto, etc.).

```javascript
const producto = {
  nombre: "Teclado",
  precio: 50,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.precio;
    if (hint === "string") return `${this.nombre} (${this.precio}€)`;
    return this.precio;
  }
};

console.log(+producto);                 // 50 (conversión a número)
console.log(`Producto: ${producto}`);   // "Producto: Teclado (50€)" (conversión a string)

```

Otros símbolos nativos clave incluyen `Symbol.toStringTag` (para personalizar `Object.prototype.toString`), o `Symbol.dispose` / `Symbol.asyncDispose` (utilizados en la gestión explícita de recursos con la sintaxis `using`).

---

### 2. Evitar colisiones de nombres (Librerías, Middleware y Plugins)

Al desarrollar un plugin o librería que añade metadatos a objetos de terceros, usar claves en cadena de texto como `obj.id` o `obj.metadata` corre el riesgo de sobreescribir propiedades existentes o futuras del usuario.

```javascript
// La librería define un símbolo único e irrepetible
const MI_PLUGIN_KEY = Symbol("metadata_interna");

function adjuntarMetadatos(objetoUsuario) {
  // Garantizado que no sobreescribirá ninguna propiedad 'name', 'id' o similar
  objetoUsuario[MI_PLUGIN_KEY] = { creadoEn: Date.now() };
}

```

---

### 3. Registro Global entre Entornos (`Symbol.for`)

Los campos privados `#` pertenecen exclusivamente al contexto de la clase instanciada. Los símbolos creados con `Symbol.for("clave")` se guardan en un registro global que permite compartir identificadores únicos entre diferentes contextos de ejecución, como **iframes, Web Workers o microfrontends**.

```javascript
// En el iframe 1 o módulo A
const symA = Symbol.for("app.session.id");

// En el iframe 2 o módulo B
const symB = Symbol.for("app.session.id");

console.log(symA === symB); // true (apuntan exactamente al mismo símbolo global)

```

---

### 4. Creación de Enums y Constantes Garantizadas

Como JavaScript no incluye tipos `enum` nativos, usar `Symbol` asegura que dos constantes nunca coincidan, incluso si comparten la misma descripción en texto.

```javascript
const ESTADOS = {
  PENDIENTE: Symbol("PENDIENTE"),
  APROBADO: Symbol("APROBADO"),
  RECHAZADO: Symbol("RECHAZADO")
};

// Ningún valor de texto "PENDIENTE" externo podrá igualar o suplantar a ESTADOS.PENDIENTE

```

---

### Comparativa: `Symbol` vs `#`

| Característica | Propiedad con `Symbol` | Campo privado `#` |
| --- | --- | --- |
| **Privacidad Real** | ❌ No (accesible vía `Object.getOwnPropertySymbols`) | ✅ Sí (privacidad dura en compilación/ejecución) |
| **Propósito Principal** | Metaprogramación, iteradores, evitar colisiones | Encapsulación estricta de datos dentro de clases |
| **Disponibilidad** | Cualquier objeto de JavaScript | Exclusivo del cuerpo de una `class` |

La sintaxis `#` reemplazó el uso *truco* de usar `Symbol` para simular privacidad en clases, pero `Symbol` sigue siendo la herramienta fundamental para alterar comportamientos internos del lenguaje y asegurar claves verdaderamente únicas.


// - instanceof

class Car { }

const car = new Car()

console.log(car instanceof Car)

// - create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)

// - Proxy

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)

// Error
// account.balance = -10


Este código aborda tres conceptos fundamentales de JavaScript: la verificación de tipos con `instanceof`, la creación directa de objetos vinculados por prototipos con `Object.create`, y la interceptación de comportamientos mediante `Proxy`.

---

### 1. El operador `instanceof`

```javascript
class Car { }
const car = new Car()
console.log(car instanceof Car) // true

```

El operador `instanceof` verifica si la propiedad `.prototype` de una clase/función constructora existe en la cadena de prototipos del objeto evaluado.

* Al usar `new Car()`, JavaScript crea un objeto cuya cadena de prototipos incluye a `Car.prototype`.
* Por lo tanto, `car instanceof Car` devuelve `true`.

---

### 2. Creación con `Object.create()`

```javascript
const anotherCar = Object.create(Car.prototype)
console.log(anotherCar instanceof Car) // true

```

`Object.create(prototipo)` crea un objeto totalmente nuevo cuyo prototipo queda vinculado directamente al objeto que le pases como parámetro.

* **Diferencia clave con `new`:** `Object.create(Car.prototype)` **no ejecuta el constructor** de `Car`. Solo hereda la estructura de su prototipo.
* Dado que el prototipo de `anotherCar` apunta explícitamente a `Car.prototype`, `anotherCar instanceof Car` también evalúa como `true`.

---

### 3. El patrón `Proxy` (Validación e Interceptación)

Un **Proxy** envuelve a un objeto (el `target`) para interceptar y modificar el comportamiento por defecto de operaciones clave como leer (`get`) o escribir (`set`) sus propiedades.

```javascript
const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

```

#### Funcionamiento paso a paso:

1. **`const account = new Proxy(new BankAccount(100), proxy)`**
Crea la instancia de `BankAccount` con `balance = 100` y la envuelve dentro del objeto `Proxy`.
2. **Lectura (`console.log(account.balance)`)**
* Se activa la trampa **`get`**.
* Imprime en consola: `"Se accede a la propiedad balance"`.
* Retorna y muestra el valor original (`100`).


3. **Modificación válida (`account.balance = 50`)**
* Se activa la trampa **`set`**.
* Evalúa si `property === "balance"` y `value < 0` (`50 < 0` es `false`).
* Pasa la validación y actualiza `target.balance = 50`.


4. **Modificación inválida (`account.balance = -10`)**
* Se activa la trampa **`set`**.
* Evalúa la condición: `-10 < 0` resulta `true`.
* Lanza un `Uncaught Error: El saldo no puede ser negativo` deteniendo la ejecución y protegiendo la integridad del objeto original.