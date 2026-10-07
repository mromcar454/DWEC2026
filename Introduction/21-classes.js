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


// Propiedades privadas

class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank

    }

    pay() {
        this.#bank
    }
}

let person6 = new PrivatePerson("Miguel",30,"Miguel R", "IBAN123456789")

// console.log(person6.#bank)
person6.bank ="newIBAN123456"

// console.log(person6.#bank)

class CuentaBancaria {
    // Declaración obligatoria en el cuerpo de la clase
    #saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial
    }

    // Getter para consultar el valor sin permitir alteración directa

    get saldoActual(){
        return this.#saldo
    }

    set saldoActual(importe) {
        this.#saldo = importe
    }

    depositar(cantidad) {
        if (cantidad > 0 ){
            this.#saldo += cantidad
            console.log(`Has despositado ${cantidad}`)
        }
    }

}

let cuentaBancaria = new CuentaBancaria(3000)
console.log(cuentaBancaria.saldoActual)
cuentaBancaria.saldoActual= 5000
console.log(cuentaBancaria.saldoActual)
cuentaBancaria.depositar(50)
console.log(cuentaBancaria.saldoActual)

/*

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Miguel", 30, "Miguel R", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

*/

// Herencia

// Herencia

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("AntonioDog")
myDog.run()
myDog.sound()

let myFish = new Fish("AntonioFish", 10)
myFish.swim()
myFish.sound()



// Métodos estáticos

class MathOperations {

    static sum (a, b){
        return a + b
    }

}

console.log(MathOperations.sum(5,10))

