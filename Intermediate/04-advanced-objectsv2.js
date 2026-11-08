

// Objetos avanzados

// - Prototipos y Herencia

// Prototipos

// En JavaScript, un prototipo es un objeto base del cual otros objetos heredan propiedades 
// y métodos a través de un enlace interno. 
// Prácticamente todo en JavaScript es un objeto o se comporta como uno, y el mecanismo de prototipos es la forma en que JavaScript implementa la herencia.

let person = {
    name: "Miguel",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

// Acceso al prototipo:

console.log(person.__proto__)
// person.__proto__: Es la propiedad histórica para acceder o modificar el prototipo. 
// Aunque sigue funcionando en los navegadores, se considera una práctica obsoleta y desaconsejada en código moderno.



console.log(Object.getPrototypeOf(person))

// Object.getPrototypeOf(person): Es el método estándar y oficial de ES6+ para obtener el prototipo 
// de un objeto.

// Ambos comandos devuelven exactamente lo mismo: el objeto Object.prototype, que contiene métodos
// integrados como .toString(), .hasOwnProperty(), etc.


// Propiedades propias vs. Prototipo:

// En JavaScript, cada objeto tiene dos tipos de propiedades: propiedades propias y propiedades del prototipo.
// Las propiedades propias son aquellas que se definen directamente en el objeto.
// Las propiedades del prototipo son aquellas que se heredan del objeto prototipo.


person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

// Aquí no estamos modificando el prototipo; estamos añadiendo una propiedad propia (own property) directamente al objeto person. 
// Si crearas otro objeto diferente, ese nuevo objeto no tendría el método sayAge.


console.log(person)
person.sayAge()



// Para asignarlo directamente a su prototipo actual (Object.getPrototypeOf) 
// Puedes acceder al prototipo del objeto y añadir el método ahí.

let person = {
    name: "Miguel",
    age: 37,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
};

// Asignar la función al prototipo del objeto
Object.getPrototypeOf(person).sayAge = function () {
    console.log(`Tengo ${this.age} años`);
};

person.sayAge(); // Imprime: Tengo 37 años

// Comprobación:
console.log(person.hasOwnProperty("sayAge")); // false (no es propia)
console.log("sayAge" in person);              // true (se hereda del prototipo)


/*
¿Cómo funciona la Cadena de Prototipos (Prototype Chain)?
Cuando ejecutas una propiedad o método como person.toString(), JavaScript realiza la siguiente búsqueda:

Busca en el propio objeto: ¿Tiene person la propiedad toString? No.

Sube al prototipo: ¿Tiene Object.getPrototypeOf(person) la propiedad toString? Sí, está en Object.prototype.

Ejecuta el método: Lo invoca usando el contexto de person.

Fin de la cadena: Si no estuviera ahí, buscaría en el prototipo del prototipo hasta llegar a null. Si llega a null y no lo encuentra, devuelve undefined.



El verdadero poder del prototipo: Reutilizar memoria
Si creas 100 personas directamente como objetos literales con métodos internos, cada persona creará una copia nueva de las funciones en memoria. 
Usando prototipos (a través de funciones constructoras o clases), compartes una sola función entre todas las instancias:

*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Asignamos el método al prototipo, no a cada objeto individual
Person.prototype.greet = function() {
    console.log(`Hola, soy ${this.name}`);
};

const miguel = new Person("Miguel", 37);
const ana = new Person("Ana", 30);

miguel.greet(); // "Hola, soy Miguel"
ana.greet();    // "Hola, soy Ana"

// Ambas instancias comparten exactamente la misma referencia en memoria:
console.log(miguel.greet === ana.greet); // true



// También podemos asignar el método al prototipo con
// Opción B: Con Object.setPrototypeOf (Para objetos ya existentes)
const personPrototype = {
    sayAge() {
        console.log(`Tengo ${this.age} años`);
    }
};

let person = { name: "Miguel", age: 37 };

// Reasignamos el prototipo de person
Object.setPrototypeOf(person, personPrototype);

person.sayAge();


// Con Clases (ES6+):

// class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Los métodos definidos aquí van automáticamente a Person.prototype
    sayAge() {
        console.log(`Tengo ${this.age} años`);
    }
}

let person = new Person("Miguel", 37);

console.log(person.hasOwnProperty("sayAge")); // false
console.log(Object.getPrototypeOf(person).hasOwnProperty("sayAge")); // true



// Con Función Constructora (Sintaxis clásica):
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Añadimos el método al prototipo de la función constructora
Person.prototype.sayAge = function() {
    console.log(`Tengo ${this.age} años`);
};

let person = new Person("Miguel", 37);

// Herencia

/*

La herencia en JavaScript no funciona mediante la "copia" de propiedades de un objeto padre a un objeto hijo, 
sino mediante la delegación de búsqueda a través de la cadena de prototipos.

Al usar let programmer = Object.create(person), creas un objeto totalmente vacío (programmer),
pero cuyo prototipo interno apunta directamente al objeto person.

Análisis de los resultados de tu código


*/

let programmer = Object.create(person)
programmer.language = "JavaScript"

programmer.name = "Miguel"
console.log(person.name)
console.log(person.language)
// El objeto padre sigue intacto (person.name y person.language)




console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)
// El padre (person) no tiene acceso a las propiedades creadas en sus "hijos" (programmer.language resulta en undefined).
programmer.greet()
programmer.sayAge()

// Este es el detalle más importante de la herencia prototípica: el valor de this se determina en el momento en que se llama al método, 
// apuntando al objeto a la izquierda del punto (programmer).Al ejecutar programmer.greet()
// 1- JS busca el método greet en programmer -> No está.
// Sube a person -> Lo encuentra y lo ejecuta.Dentro del método greet, evalúa this.name. 
// Como llamaste a la función desde programmer, this es programmer. Por lo tanto, imprime "RomeroDev" (su propiedad propia) y no "Miguel".Al ejecutar programmer.sayAge():Encuentra el método sayAge en person.Dentro del método, evalúa this.age.Busca age en programmer -> No está.
// Sube a person -> Encuentra 37. Imprime "Tengo 37 años".

// Equivalente moderno usando Clases (class / extends)
// Este mismo comportamiento que escribiste manualmente con Object.create es exactamente lo que hace la palabra clave extends por detrás:

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hola, soy ${this.name}`);
    }

    sayAge() {
        console.log(`Tengo ${this.age} años`);
    }
}

// Programmer hereda el prototipo de Person
class Programmer extends Person {
    constructor(name, age, language) {
        super(name, age); // Llama al constructor de Person
        this.language = language;
    }
}

const programmer = new Programmer("RomeroDev", 37, "JavaScript");

programmer.greet();  // "Hola, soy RomeroDev"
programmer.sayAge(); // "Tengo 37 años"


/*


// - Métodos estáticos y de instancia

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Miguel", 37)
newPerson.greet()

// - Métodos avanzados

// assign

let personCore = { name: "Miguel" }
let personDetails = { age: 37, alias: "RomeroDev" }

let fullPerson = Object.assign(personCore, personDetails)
console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))

*/