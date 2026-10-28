// Arrays avanzados

// Métodos funcionales

// forEach
// El bucle tradicional, recorre el array elemento por elemento y 
// ejecuta una acción
// No devuelve nada, solo sirve para provocar efectos seundarios
let numbers = [1,2,3,4,5,6,7,8]
numbers.forEach(element => console.log(element))

// map
// Recorre el array y devuelve un nuevo array del mismo tamaño
// donde cada elemento del array ha sido transformado por la función que le pases
let doubled = numbers.map(element => element * 2)
console.log(doubled)


//filter
// Recorre el array y devuelve un nuevo array
// conservando solo los elementos que cumplen una condición

let impares = numbers.filter(element => element % 2 !=0)
console.log(impares)

// reduce
// Es como un acumulador, recorre el array y lo procesa
//  para llegar a un único valor final

// al final devuelve el parámetro acumulador una vez que lo ha procesado entero

let numbers2 = [5,5,5]

console.log(numbers2.reduce((acumulador, elementoActual) => acumulador * elementoActual,1))
                                                                                        // 1 es el acumulador cuando empiezas a iterar


let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum)

// Ejercicio, usa reduce para conseguir el número más alto de un array.

let numeros = [5 , 12 , 8 , 130 ,44]

let mayor = numeros.reduce((acumulador, actual) => {
    return actual > acumulador ? actual : acumulador
    // return actual >= result ? result = actual : result = result

},numeros[0]) // Empezamos comparando con el primer elemento del array, 
console.log(mayor)

// flat

// Aplanar un array

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
let flatArray2 = nestedArray.flat(2)
console.log(flatArray2)
let flatArray3 = nestedArray.flat(3)
console.log(flatArray3)


// flatMap

let phrases = ["Hola Mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

const usuarios = [
  { nombre: "Ana", hobbies: ["leer", "correr"] },
  { nombre: "Luis", hobbies: ["cocinar"] },
  { nombre: "Carlos", hobbies: ["leer", "videojuegos"] }
];

// Extraemos y aplanamos todos los hobbies en un solo array
const todosLosHobbies = usuarios.flatMap(usuario => usuario.hobbies);

console.log(todosLosHobbies);
// Resultado: ["leer", "correr", "cocinar", "leer", "videojuegos"]



