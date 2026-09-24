// Arrays


// Declaración
let array1 = new Array()
let array2 = []


let fruits = ["Apple", "Orange", "Plum"]

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

fruits[2] = "Pearl"
console.log(fruits[2])
console.log(fruits[0])
console.log(fruits[1])

fruits[3] = "Banana"
console.log(fruits[3])

// Longitud
console.log(fruits.length)

console.log(fruits)

// 2 formas de mostrar o acceder al último elemento del array
console.log(fruits[fruits.length-1])
console.log(fruits.at(-1))

console.log(fruits[-1]) // Undefined




fruits[fruits.length] = "watermelon"
console.log(fruits)
console.log(fruits.at(-2))

// Push y Pop

console.log(fruits)
console.log(fruits.pop()) // Sacamos el último elemento del array
console.log(fruits)

fruits.push("peach") // Metemos un elemento en el array

// Métodos


// delete
let arr = ["hola", "mundo", "adiós"]

console.log(arr)
delete arr[1] // elimina "mundo" pero el array sigue manteniendo los elementos
console.log(arr)
console.log(arr.length)

 
// splice (empalme)

let arr2 = ["hola", "mundo", "adiós"]


arr2.splice(1,1) //array.splice(índice, elementos) Desde índice eliminar n elementos
console.log(arr2)



// Con splice podemos por ejemplo eliminar 3 elementos y añadir 2 elementos...

let array3 = ["Yo", "estudio", "JavaScript", "ahora", "mismo"]
console.log(array3)

array3.splice(0,3,"a","bailar");

console.log(array3)

// Cómo añadir elementos desde la posición que tú quieras con splice
array3.splice(2,0,"Programar", "Escribiendo", "Código")
console.log(array3)


//slice -> Devuelve un array
// Similar al método para Strings str.slice, pero en lugar de substrings, genera subarrays
 
let array4 = ["a", "b", "c", "d"]
let subarray4 = (array4.slice(1,3)) // [ 'b', 'c' ]
console.log(subarray4)

// Quiero crear un subarray con los 2 últimos elementos
let subarray2ultimos = (array4.slice(-1)) 
console.log(subarray2ultimos)




