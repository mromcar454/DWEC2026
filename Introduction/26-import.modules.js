// Importación de módulos

import { add, PI, name, Circle } from "./25-export-modules.js"

import defaultImport from "./25-export-modules.js"

// import defaultImport, { add, PI, name, Circle } from "./28-export-modules.js"

// Propiedades

console.log(PI)
console.log(name)

// Funciones
console.log(add(5,10))


// Clases
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2))
console.log(circle.perimeter().toFixed(2))

// Importación por defecto

console.log(defaultImport(10,5))