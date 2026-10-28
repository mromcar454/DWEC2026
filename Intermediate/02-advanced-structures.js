/*
Clases 13 a 22 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=4355
*/

// Arrays avanzados

// - Métodos funcionales

// forEach
// forEach (El bucle tradicional): Recorre el array elemento por elemento y ejecuta una acción (como imprimir en pantalla o guardar en una base de datos).
// No devuelve nada (undefined), solo sirve para provocar "efectos secundarios".
let numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach(element => console.log(element))








// map
// Recorre el array y devuelve un nuevo array del mismo tamaño, // donde cada elemento ha sido transformado por la función que le pases

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter
// Recorre el array y devuelve un nuevo array (de igual o menor tamaño) conservando solo los elementos que cumplen una condición especificada.
// filter SIEMPRE devuelve un Array.
let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce
// El acumulador: Recorre el array y lo colapsa a un único valor final (un número, un texto, un objeto, etc.) combinando los elementos uno a uno.

let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)


// Ejemplo
miArray.reduce((acumulador, elementoActual, indice, array) => {
  // Código...
  return nuevoAcumulado;
}, valorInicial);


let numeros = [10, 20, 30];

let total = numeros.reduce((acumulador, elementoActual) => {
  return acumulador + elementoActual;
}, 0); // <-- valorInicial es 0


No sirve solo para números; sirve para transformar datos. Por ejemplo, para encontrar el número más alto:

let numeros = [5, 12, 8, 130, 44];

let maximo = numeros.reduce((acumulador, actual) => {
  // Comparamos el acumulador con el número actual
  return actual > acumulador ? actual : acumulador;
}, numeros[0]); // Empezamos comparando con el primer número (5)

console.log(maximo); // 130

// - Manipulación

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// - Ordenación

// sort

let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort()
console.log(sorted)

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b)

console.log(sorted)

// reverse

sorted.reverse()
console.log(sorted)

// - Búsqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex

let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Sets avanzados

// - Operaciones

// Eliminación de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// Unión

const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
console.log(union)

// Intersección

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia

const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// - Conversión

// Set a Array

console.log([...setA])

// - Iteración

// forEach

setA.forEach(element => console.log(element))

// Maps avanzados

// - Iteración

let myMap = new Map([
    ["name", "RomeroDev"],
    ["age", 37]
])

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// - Conversión

// Map a Array

const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// Map a Objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// Objeto a Map

const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)