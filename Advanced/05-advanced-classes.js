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


const otherPerson = new Person("María", 33)
// otherPerson.sayAge() // Error, no es una función


// Abstracción

// Una clase abstracta es una plantilla que no se puede instanciar directamente,
// sino que sirve como base para que otras clases (subclases) la hereden e implementen su comportamiento.

// Dado que JavaScript no incluye la palabra resevadad abstract, 
// el código de la clase Animal la emula mediante dos mecanismos:


// 1. Bloque de instanciación con new.target -> detecta qué la función constructora fue invocada con el operador new.

class Animal {
    constructor(name) {
        // Si intentas hacer new Animal("Nombre"), new.target será igual a Animal y lanzará el error.
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        // Si instancias una subclase (por ejemplo, new Dog("Rufo")), new.target apuntará a Dog,
        // por lo que la validación pasará sin problemas.
        this.name = name
    }
    // 2. Simulación de método abstracto
    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
    // Establece un "contrato": define la firma del método en la clase padre
    // pero fuerza a que cada subclase escriba su propia implementación.
    // Si una subclase no sobrescribe makeSound(), al llamarlo heredará esta versión base y devolverá el error.
}

// Devuelve Error
// const animal = new Animal("Mou")
// console.log(animal)

// Polimorfismo (Muchas formas)

// Es la habilidad de interactuar con distintos tipos de objetos usando un mismo nombre de método (makeSound()),
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

const cat = new Cat("Gato con Botas")
console.log(cat)
cat.makeSound()

const dog = new Dow("Dartacán")
console.log(dog)
dog.makesound()


// La verdadera ventaja del polimorfismo

// El beneficio real aparece cuando trabajas con grupos de objetos heterogéneos 
// sin tener que verificar qué tipo específico representa cada uno:


const misMascotas = [
    new Cat("MyCat"),
    new Dog("MyDog")
];

misMascotas.forEach(animal => animal.makeSound())


// Sin polimorfismo, tendrías que llenar tu código de comprobaciones tipo
// if (animal instanceof Cat) o 
// if (animal instanceof Dog) para saber qué hacer en cada caso.
// El polimorfismo elimina esa complejidad haciendo que cada objeto sepa cómo comportarse.


// Mixins
// Un mixin es un patrón de diseño que permite añadir comportamientos (métodos) a múltiples clases sin recurrir a la herencia.

// En JavaScript, una clase solo puede heredar de una única clase padre (extends)
// Los mixins solucionan esta limitación permitiendo la reutilización horizontal de código
// entre clases que no comparten necesariamente la misma jerarquía.

const FlyMixin = {
    fly(){
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }
class Dragon extends Animal { }

// Inyección del comportamiento en los prototipos
// Object.assign(destino, origen) copia todas las propiedades del objeto origen en el objeto destino.
Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("Donald")
console.log(bird.name)
bird.fly()

const dragon = new Dragon("Drako")
console.log(dragon.name)
dragon.fly()












