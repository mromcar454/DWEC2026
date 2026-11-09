// Objetos avanzados


// - Prototipos y Herencia

// En Javascript, un prototipo es un objeto base del cual otro objetos heredan propiedades 
// y métodos a través de un enlace interno

let person = {
    name: "Miguel",
    age: 30,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}


// Obtener el prototipo de un objeto

// console.log(person.__proto__)
//  Con accedemos al prototipo, pero se ha quedado obsoleto.


console.log(Object.getPrototypeOf(person))
// Es el método estándar y oficial desde ES6+ 

// El objeto Object.prototype, contiene métodos integrados para poder usar por ejemplo .toString()



person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge()


// Creación de un objeto a través de una función

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log(`Hola, soy ${this.name}`)
}

const miguel = new Person("Miguel", 30)
const ana = new Person("Ana", 25)


miguel.greet()
ana.greet()

console.log(miguel.greet === ana.greet) // true


// Herecia

let programmer = Object.create(person)

// Al usar Object.creat(objeto), creas un objeto totalmente vacío pero cuyo prototipo interno apunta 
// directamente al objeto 

programmer.language = "JavaScript"
programmer.name = "Miguel R"

console.log(person.name)
console.log(person.language)


console.log(programmer.name)
console.log(programmer.age)
console.log(programmer.language)

programmer.greet()
programmer.sayAge()


// Equivalente moderno usando Clases (class / extends)


class Person3 {
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
class Programmer extends Person3 {
    constructor(name, age, language) {
        super(name, age); 
        this.language = language;
    }
}

const programmer2 = new Programmer("Miguel R", 30, "JavaScript");

programmer2.greet();  // "Hola, soy Miguel R"
programmer2.sayAge(); // "Tengo 30 años"


// - Métodos estáticos y de instancia

function Person2(name, age) {
    this.name = name
    this.age = age
}

// Método de instancia (vía prototipo)

Person2.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

// Método ESTÁTICO (se asigna directamente a Person)
Person2.isAdult = function (age)  {
    return age >= 18
}

console.log(Person2.isAdult(37))
console.log(Person2.isAdult(18))

let newPerson2 = new Person2("Miguel", 30)
newPerson2.greet()

// newPerson2.isAdult(37) // Da error, TypeError.


// En sintaxis moderna
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Método de Instancia
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }

    // Método ESTÁTICO
    static isAdult(age) {
        return age >= 18
    }
}

// Se ejecuta directamente sobre la clase
console.log(Person.isAdult(37)) // true