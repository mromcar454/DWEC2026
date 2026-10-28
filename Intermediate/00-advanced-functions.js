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

// Fijaros, mete el resultado dentro de un array,
// ya que el parámetro rest recoge todos los argumentos en un array.

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
// Propaga los elementos de un array o las propiedades de un objeto en otro array u objeto,respectivamente.
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread lo expande, lo que hace es propagar
//  los elementos del array como argumentos individuales para la función sumWithSpread
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
// El contador se queda en 1
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

// Error Nos dice que counter no es una función porque no devuelve un return.

// counter1()
// counter1()


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


 // La recursividad intenta descomponer un problema grande en una versión idéntica pero más pequeña,
 // hasta llegar a un caso tan simple que se resuelve directamente sin más llamadas.
 // 1. La lógica matemática (La analogía de la muñeca rusa)
 // El factorial de un número n (denotado n!) es la multiplicación de todos los enteros desde 1 hasta n.
 //  4! = 4 x 3 x 2 x 1 = 24 
 //  3! = 3 \times 2 \times 1 = 6 \end{aligned}$$
 // 
 // De aquí se deduce la regla clave: $4! = 4  3!. 
 // En términos generales:n! = n x (n - 1)!
 // Para resolver n!, necesitas saber cuánto vale (n-1)!. Y para saber (n-1)!, necesitas (n-2)!, 
 // hasta llegar al caso base: por definición, 0! = 1 y 1! = 1.
 // 
 // 2. Implementación en JavaScript


 function factorial(n) {
    // 1. CASO BASE: La condición de parada
    if (n === 0 || n === 1) {
        return 1;
    }
    // 2. CASO RECURSIVO: La función se llama a sí misma con un problema más pequeño
    return n * factorial(n - 1);
}

console.log(factorial(4)); // 24


// Comparación con implementación iterativa:
function factorialIterativo(n) {
  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i; // Multiplica acumulando el resultado
  }

  return resultado;
}

console.log(factorialIterativo(4)); // 24


// 3. La Pila de Llamadas (Call Stack): Viaje de Ida y Vuelta
// 
// Fase 1: La Fase de Expansión (Viaje de Ida / "Poner platos en la pila")
// Cada llamada queda en pausa esperando la respuesta de la siguiente:
// factorial(4) evalúa 4 * factorial(3) -> Pausa. Llama a factorial(3)
// factorial(3) evalúa 3 * factorial(2) -> Pausa. Llama a factorial(2)
// factorial(2) evalúa 2 * factorial(1) -> Pausa. Llama a factorial(1)
// factorial(1) detecta el caso base (n === 1) y devuelve 1.
// 
// Fase 2: La Fase de Extracción (Viaje de Vuelta / "Desapilar")
// 
// Los resultados se devuelven hacia arriba:
// factorial(1) retorna 1.
// factorial(2) reanuda: 2 x 1 = 2.
// factorial(3) reanuda: 3 x 2 = 6.
// factorial(4) reanuda: 4 x 6 = 24.
// 

// 4. Puntos clave 
// Toda función recursiva necesita dos partes obligatorias:
// Caso base: La salida de emergencia. Sin él, la función se llama infinitamente hasta
// provocar un error (RangeError: Maximum call stack size exceeded).
// Caso recursivo: El paso que reduce la distancia hacia el caso base
// (siempre debe avanzar restando o dividiendo, ej. n - 1).
// 
// Comparación con el bucle for: La recursividad no usa variables de estado externas ni índices explícitos;
// confía en el propio contexto de ejecución de las funciones para guardar el estado temporal.



// Funciones parciales

function partialSum(a) {
    return function (b, c) {
        return sum(a, b, c)
    }
}
 // Una aplicación parcial (o función parcial) es una técnica de programación funcional que consiste
 // en fijar previamente uno o más argumentos de una función original,
 // devolviendo una nueva función que acepta los argumentos restantes.

// partialSum(a) recibe únicamente el primer argumento (a).

// Retorna una nueva función que espera los dos argumentos faltantes (b y c).

// Mantiene en memoria el valor de a mediante un closure (clausura).

// Cuando se ejecuta la función resultante con (b, c), esta evalúa sum(a, b, c) combinando el valor guardado de a con los nuevos valores de b y c.


//Clausura (Closure): La función devuelta "recuerda" el ámbito donde fue creada y conserva el acceso al parámetro a, incluso después de que partialSum haya finalizado su ejecución.

// Especialización: Permite reutilizar lógica común creando funciones específicas a partir de una función general (por ejemplo, fijar un tipo de IVA o una configuración por defecto en vez de pasarla en cada llamada).

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
    console.log(sum(...data))
    
}

processData([1,2,3])



// Ahora en vez de console log guardamos el resultado y llamamos a una función que muestre el resultado
function processData2(data, callback) {
    const result = sum(...data)
    callback(result)
    
}

function processResult(data){
    console.log(data)
}

processData([1,2,3], processResult)






function processData2(data, callback) {
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

