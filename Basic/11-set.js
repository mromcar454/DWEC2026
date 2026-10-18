
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Miguel", "Romero", "romerodev", 37, true, "Miguelromero@romerodev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://romero.dev")

console.log(mySet)

mySet.delete("https://romero.dev")

console.log(mySet)

console.log(mySet.delete("Miguel"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Romero"))
console.log(mySet.has("Miguel"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("Miguelromero@romerodev.com")
mySet.add("Miguelromero@romerodev.com")
mySet.add("Miguelromero@romerodev.com")
mySet.add("MiguelRomero@romerodev.com")
console.log(mySet)