// Conjuntos

// Declaración

let mySet = new Set()


console.log(mySet)

// Inicialización
mySet = new Set(["Hola", "Mundo",37, true, "mromcar454@g.educaand.es"])

console.log(mySet)

// Métodos comunes

// add y delete
mySet.add("http://iesgbrenan.com")
console.log(mySet)
mySet.add("http://iesgbrenan.com")
console.log(mySet)


mySet.delete("Mundo")
console.log(mySet)
mySet.delete(37)
console.log(mySet)


// Añadir más elementos a la vez

mySet.add("nuevo").add("elemento").add(70).add("mySet")
console.log(mySet)



// has
console.log(mySet.has("Hola"))
console.log(mySet.has("mromcar454@g.educaand.es"))
console.log(mySet.has(1))
console.log(mySet.has("1"))

// un conjunto no admite duplicados
mySet.add("http://iesgbrenan.com")
mySet.add("http://iesgbrenan.com")
mySet.add("http://iesgbrenan.com")
mySet.add("http://iesgbrenan.com")
console.log(mySet)

