
// 1. Crea un array que almacene cinco animales
let arrayAnimals = ["Tiger", "Dog", "Cat", "Lion", "Cow"]
// 2. Añade dos más. Uno al principio y otro al final
arrayAnimals.push("Horse")
arrayAnimals.push("Bird")
console.log(arrayAnimals)


// 3. Elimina el que se encuentra en tercera posición

// Elimino pero el array sigue manteniendo esa posición vacía
//delete arrayAnimals[2]
//console.log(arrayAnimals)

// Elimino con splice
arrayAnimals.splice(2,1)
console.log(arrayAnimals)

// 4. Crea un set que almacene cinco libros
let setBooks = new Set(["Book1", "Book2", "Book3", "Book4", "Book5"])
console.log(setBooks)


// 5. Añade dos más. Uno de ellos repetido
setBooks.add("Book6")
setBooks.add("Book7")
setBooks.add("Book1")
console.log(setBooks)


// 6. Elimina uno concreto a tu elección
setBooks.delete("Book6")
console.log(setBooks)


// 7. Crea un mapa que asocie el número del mes a su nombre
let mapCalendario = new Map([
[1, "enero"],
[2, "febrero"],
[3, "marzo"],
[4, "abril"],
[5, "mayo"],
])  
console.log(mapCalendario)


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if (mapCalendario.has(5)) {
    console.log("El elemento 5 es " +  mapCalendario.get(5) + " y existe en el map")
}


// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapCalendario.set("verano", ["junio", "julio", "agosto", "septiembre"])
console.log(mapCalendario)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let nuevoArray = [1,2,3,4]
let nuevoSet = new Set(nuevoArray)
let nuevoMap = new Map()
nuevoMap.set("miArray", nuevoSet)
console.log(nuevoMap)

