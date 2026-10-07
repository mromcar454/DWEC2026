

// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Ortiz", 37, "AntonioDev")
let person2 = new Person("Ortiz", 37, "AntonioDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Ortiz", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

person3.alias = "AntonioDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Ortiz", 37, "AntonioDev")
person4.walk()

// Propiedades privadas

/*

Las propiedades privadas en JavaScript son variables definidas dentro de una clase a 
las que solo se puede acceder o modificar desde el código de la propia clase.
Se identifican mediante el símbolo # antes de su nombre.

Reglas clave de las propiedades privadas
Protección real a nivel de lenguaje: Si intentas leer o modificar una propiedad privada
directamente desde fuera del objeto (objeto.#propiedad), JavaScript lanzará un error de sintaxis (SyntaxError).

Declaración previa obligatoria: A diferencia de las propiedades públicas (que se pueden crear directamente dentro del constructor), 
las propiedades privadas deben declararse obligatoriamente en el cuerpo de la clase antes de usarse.

Acceso mediante métodos internos: La única forma de consultar o alterar su contenido desde fuera es
a través de métodos públicos, getters o setters definidos en la misma clase.

*/




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

let person5 = new PrivatePerson("Ortiz", 37, "AntonioDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)



class CuentaBancaria {
    // 1. Declaración obligatoria en el cuerpo de la clase
    #saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial
    }

    // Método para modificar la propiedad de forma segura
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto
            console.log(`Has depositado ${monto}`)
        }
    }

    // Getter para consultar el valor sin permitir alteración directa
    get saldoActual() {
        return `$${this.#saldo}`
    }
}

const miCuenta = new CuentaBancaria(100)

// Acceso correcto a través del getter y métodos
miCuenta.depositar(50)           // "Has depositado $50"
console.log(miCuenta.saldoActual) // "$150"

// Intento de acceso directo desde fuera (Error)
// console.log(miCuenta.#saldo)   // ❌ Uncaught SyntaxError: Private field '#saldo' must be declared in an enclosing class
// miCuenta.#saldo = 999999      // ❌ Da error, el saldo no se puede hackear directamente



// Getters y Setters

/*
Los getters y setters sirven principalmente para controlar el acceso a los datos de un objeto (encapsulamiento). Sus ventajas principales son:

Validación de datos: En el setter puedes comprobar si el valor asignado es válido antes de guardarlo (por ejemplo, evitar un texto vacío o un número negativo).

Protección y ocultamiento: Evitan que el código externo modifique directamente las variables internas de la clase, obligándolo a pasar por la lógica que tú definas.

Transformación al leer: El getter puede modificar cómo se entrega el dato (por ejemplo, devolver el valor formateado o en mayúsculas) sin alterar la variable interna.

Sintaxis limpia: Permiten ejecutar código de validación o transformación manteniendo la apariencia de leer/escribir una propiedad común (objeto.propiedad = valor).*/


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

/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/

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

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))