
// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Ortiz", "Antonio", "antoniodev", 37, true, "ortizantonio@antoniodev.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://antonio.dev")

console.log(mySet)

mySet.delete("https://antonio.dev")

console.log(mySet)

console.log(mySet.delete("Ortiz"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Antonio"))
console.log(mySet.has("Ortiz"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("ortizantonio@antoniodev.com")
mySet.add("ortizantonio@antoniodev.com")
mySet.add("ortizantonio@antoniodev.com")
mySet.add("OrtizAntonio@antoniodev.com")
console.log(mySet)