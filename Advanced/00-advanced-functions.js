// Ciudadanos de primera clase

// Significa que tienen los mismos derechos y privilegios que por ejemplo cualquier variable

function greet(name) {
    console.log(`Hola, ${name}`)
}

function bye(name) {
    console.log(`Adiós, ${name}`)
}

greet("Miguel")

const greet3 = function (name) {
    console.log(`Hola, ${name}`)
}

const greet5 = greet

greet3("Miguel Romero")
greet5("Miguel Romero 5")

// Pasar función como parámetro

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "María")
processGreeting(bye, "María")


// Función podría retornar otra función

function returnGreeting(){
    // aquí no le pasamos los parámetros a la función, sino que devolvemos o retornamos la función completa
    return greet
}

const greet6 = returnGreeting()
greet6("Antonio")

// Arrow functions avanzadas

// Retorno implícito

const multiply = (a, b) => a * b
console.log(multiply(2,5))

// this léxico

const handler = {
    name: "María",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
// Cuidado con arrow function, el ámbtio cambia y no se puede acceder a las propiedades el objeto
handler.arrowGreeting()


const handler2 = {
    name: "María",
    greeting () {
        console.log(`Hola, ${this.name}`)
    }
}

handler2.greeting();


// IIFE - (Inmediatly Invoque Function Expression - Expresión de Función Invocada Inmediatamente)


// No es necesario ponerle nombre a la función porque se va a ejecutar inmediatamente
(function () {
    console.log(`IIFE clásica`)
})();

(function (name) {
    console.log(`IIFE clásica - hola ${name}`)
})("Antonio");

(() => {
    console.log(`IIFE con arrow function`)
})();


// Parámetros Rest

function sum1(...numbers) {
    console.log(numbers)
}


// Fijaros, que mete el resultado en un array 
sum1(1,2,3,4,5) // [1,2,3,4,5]
sum1(1,2,3) // [1,2,3]
sum1(1,2,3,4,5,6,7,8,9) // [1,2,3,4,5,6,7,8,9]
sum1([1,2,3,4,5]) // [ [ 1, 2, 3, 4, 5 ] ]


function sum(...numbers) {
   let result = 0
   for (let number of numbers) {
        result += number
   }
   return result
}


console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1,1, 2,3)) // 6
console.log(sum(1,2,3,4,5,6,7,8,9)) // 45
console.log(sum([1,2,3,4,5])) // 01,2,3,4,5


// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a,b,c) {
    return a + b +c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread, lo expande
console.log(sumWithSpread(numbers[0], numbers[1], numbers[2])) // Sin Spread

// Combinamos Rest y Spread en funciones
const numbers2 = [5, 7, 9, 11, 13, 15, 8]
console.log(sum(...numbers2))

// Clousures (Clausuras)

function createCounter1(){
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

createCounter1()
createCounter1()

function createCounter2(){
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

const counter2 = createCounter2()
// Error nos dice que counter no es una función porque no devuelve un return
// counter2()


function createCounter(){
    let counter = 0
    return function() {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()


const counter3 = createCounter()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()
counter3()














