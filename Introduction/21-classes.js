// Clases

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias

    }
}

let person1 = new Person("Miguel", 30, "Miguel R")
let person2 = new Person("María", 25)
let person5 = new Person(25)

console.log(person1)
console.log(person2)
console.log(person5)

console.log(typeof person1)


// Valores por defecto

class DefaultPerson {
    constructor(name ="Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias

    }
}

let person3 = new DefaultPerson("Miguel")
console.log(person3)


// Acceso a propiedades

console.log(person1.alias)
console.log(person1["alias"])
person1.alias = "Otro alias"
console.log(person1.alias)

// Funciones en clases

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias

    }
    walk(){
        console.log("La persona camina")
    }

}

let person7 = new PersonWithMethod("Miguel", 30, "Miguel R")
person7.walk()

