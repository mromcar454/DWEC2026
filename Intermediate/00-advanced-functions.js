// Ciudadanos de primera clase

// En JavaScript, decir que las funciones son ciudadanos de primera clase 
// (first-class citizens o first-class functions) significa que se tratan como cualquier otro valor 
// o tipo de dato en el lenguaje (como un número, un string o un objeto).

// Esto implica que no están limitadas a ser solo bloques de código que se ejecutan; tienen los mismos "derechos y privilegios" que cualquier variable.

function greet1(name) {
    console.log(`Hola, ${name}`)
}

greet1("Miguel")

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

// Se invoca a una función a través de una constante, que es una variable que almacena la función como valor
greet("Miguel")


// Pasar función como parámetro

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "Miguel R")


// Función podría retornar otra función

function returnGreeting() {
    // aquí no le pasamos los parámetros a la función, sino que retornamos la función completa
    return greet
}

const greet2 = returnGreeting()
greet2("Miguel Romero")



// Arrow functions avanzadas

// - Retorno implícito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// - this léxico
const handler = {
    name: "Miguel",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()

// Cuidado que con arrow function, el ámbito cambia y no se puede acceder a las propiedades del objeto
handler.arrowGreeting();



// IIFE (Inmediatly Invoque Function Expression - Expresión de Función Invocada Inmediatamente)

//  Es importantísimo ponler un ; antes de la IIFE, ya que si no, puede dar problemas si la línea anterior no termina con un ;.
// Esto es porque el intérprete de JavaScript puede interpretar la IIFE como una llamada a la función de la línea anterior.

// No es necesario ponerle nombre a la función, ya que se invoca inmediatamente después de ser definida.
(function () {
    console.log("IIFE clásico")
})();

(() => {
    console.log("IIFE con arrow function")
})();

// Para qué sirve una IIFE? Para encapsular código y evitar que las variables definidas dentro de la IIFE se filtren al ámbito global. 
// Esto es útil para evitar conflictos de nombres y mantener el código más limpio y modular.

// Parámetros Rest (...)

// Los parámetros rest permiten a una función aceptar un número indefinido de argumentos como un array,
//  proporcionando una forma más flexible de manejar los argumentos de la función.

function sum1(...numbers) {
        console.log(numbers)
}
sum1([1, 2, 3, 4, 5])

// Fijaros, mete el resultado dentro de un array, ya que el parámetro rest recoge todos los argumentos en un array.

sum1(1, 2, 3, 4, 5)
sum1(1, 2, 3)

function sum(...numbers) {
    let result = 0
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log(sum(1, 2, 3, 4, 5))
console.log(sum(10, 15))

// Operador Spread (...)
// Propaga los elementos de un array o las propiedades de un objeto en otro array u objeto, respectivamente.
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread lo expande, lo que hace es propagar los elementos del array como argumentos individuales para la función sumWithSpread
//  es como si hiciera:
console.log(sumWithSpread(numbers[0], numbers[1], numbers[2])) // Sin Spread

// Closures (Clausuras)


function createCounter1() {
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

createCounter1()
createCounter1()


// Como es ciudadano de primera clase hacemos lo siguiente:

function createCounter2() {
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

const counter1 = createCounter2()
// Nos dice que counter no es una función porque no devuelve un return.

function createCounter2() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }    
}

const counter2 = createCounter2()
counter2()
counter2()
counter2()
counter2()




function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()

const otroCounter = createCounter()
otroCounter()
otroCounter()
otroCounter()


// Recursividad

function factorial(n) {
    if (n <= 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))

// Currying

function currySum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)
console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// Callbacks

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})