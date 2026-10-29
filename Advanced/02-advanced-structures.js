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
const todosLosHobbies = usuarios.flatMap(usuario => usuario.hobbies)

console.log(todosLosHobbies)
// Resultado: ["leer", "correr", "cocinar", "leer", "videojuegos"]

// Convertir un Array en Set 
const todosLosHobbiesSet = new Set(todosLosHobbies)
// usando el operador Spread
const todosLosHobbiesSet2 = [...new Set(todosLosHobbies)]
// Usando Array.from
const todosLosHobbiesSet3 = Array.from(new Set(todosLosHobbies))


console.log(todosLosHobbiesSet)
console.log(todosLosHobbiesSet2)
console.log(todosLosHobbiesSet3)


// Ordenación

// sort()
// Convierte todos los elementos a Strings y los compara lexicograficamente
// según su valor Unicode

// Problema con números: Si se aplicara a números
// [3, 4, 1, 6, 10] daría como resultado [1, 10, 3, 4, 6], ya que la cadena "10" precede a "3".

let numbers3 = [1,8,10,2,4] 



let unsorted = ["B", "a", "d", "c"]

let sorted = unsorted.sort()

console.log(unsorted)
console.log(sorted)
sorted.push("Z")
console.log(unsorted)
console.log(sorted)


let numbersSort = numbers3.sort()
console.log(numbers3)
console.log(numbersSort)


// Ordenación de números
let numbers4 = [1,8,10,2,4] 
let numbersSort2 = numbers4.sort((a,b) => a - b)
console.log(numbers4)

// Evalúa matemáticamente los pares de números del array mediante la resta:
// Si a - b < 0: coloca a antes que b.
// Si a - b > 0: coloca b antes que a.
//Si a - b === 0: mantiene el orden original entre ambos.


// Ordenación entre Strings sin distinguir Mayúsculas y minúsculas

let prueba = ["B", "a", "d", "c"]
prueba.sort((a,b) => 
{
const palabraA = a.toLowerCase()
const palabraB = b.toLowerCase()

if (palabraA < palabraB) return -1
if (palabraA > palabraB) return 0
return 0
})


console.log(prueba)


// reverse

let sortedReverse = sorted.reverse(sorted)
console.log(sorted)

// Modifica el array original: No crea una copia nueva igual que sort!!
//  altera directamente el array sobre el que se invoca.

// Valor devuelto: Devuelve la referencia al mismo array ya invertido.


// includes
console.log(sorted.includes(4))
console.log(sorted.includes("a"))


// find

// Recorre el array de izquierda a derecha buscando el primer elemento 
// que haga que la condición sea verdadera (true).

// Devuelve: El elemento/valor encontrado. Si ningún elemento cumple la condición, devuelve undefined.

let firstEven = numbers4.find(element => element % 2 === 0)
console.log(firstEven)

// Si queremos obtener el último que cumpla la condición
let lastEven = numbers4.reverse().find(element => element % 2 === 0)
console.log(lastEven)


// findIndex
let firstEvenIndex = numbers4.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// Qué hace: Realiza la misma búsqueda de izquierda a derecha, pero registra la posición.

// Devuelve: El índice numérico (empezando en 0) de la posición donde está ese elemento.
// Si no encuentra ninguno, devuelve -1.


// Sets avanzados

// -Operaciones

// Eliminación de duplicados
let numbersArrays = [1,2,2,3,4,5,6,7,7]


numbersArrays = [...new Set(numbersArrays)]
// numbersArrays = Array.from(new Set(numbersArrays))


console.log(numbersArrays)


// Unión 

const setA = new Set([1, 2, 3])
const setB = new Set([1, 2, 4, 5]) 
const union = new Set([...setA, ...setB])
console.log(union)


// Intersección

const interseccion =  new Set([...setA].filter(element => setB.has(element)))
console.log(interseccion)