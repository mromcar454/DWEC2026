// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización
myMap = new Map([
    ["name", "Miguel"],
    ["email", "mromcar454@g.educaand.es"],
    ["age", 37]

])

console.log(myMap)

// Métodos y propiedades

// set
myMap.set("alias", "migue")
myMap.set("name", "Miguel Romero")

console.log(myMap)


// get
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// delete

myMap.delete("email")
console.log(myMap)


// keys -> Devuelve todas las claves
console.log(myMap.keys())


// values -> Devuelve todos los valores

console.log(myMap.values())


// entries -> Devuelve un iterable para las entradas [clave, valor]. Se usará por defecto en for.. of
console.log(myMap.entries())



let recipeMap = new Map([
  ['pepino', 500],
  ['tomates', 350],
  ['cebollas',    50]
]);

// iterando sobre las claves (verduras)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // pepino, tomates, cebollas
}

// iterando sobre los valores (precios)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterando sobre las entradas [clave, valor]
for (let entry of recipeMap) { 
  console.log(entry); // pepino,500 (etc)
}

for (let entry of recipeMap.entries()) {
    console.log(entry); // pepino,500 (etc)
}



