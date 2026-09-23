// String (cadenas de texto)

// Concatenación

let myName = "Miguel"
let greeting = "Hola, " + myName + "!" + "Hola"
console.log(greeting) 

// Longitud

console.log(greeting.length)
console.log(myName.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[12])

// Métodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Miguel"))
console.log(greeting.indexOf("Z"))
console.log(greeting.includes("miguel"))
// slice(dónde empieza, dónde acaba - 1) cuidado que empieza en 0
console.log(greeting.slice(2, 4)) // Sección
// slice sin segundo parámetro llega al final
console.log(greeting.slice(2))
// slice(-1) empieza desde el último carácter
console.log(greeting.slice(-1))
console.log(greeting.replace("Miguel", "Jose")) //Reemplazo
console.log(greeting.replaceAll("Hola", "Adiós")) //Reemplazo


let message = `Hola, este 
es mi 
curso de 
DWEC`
console.log(message)


// Iterpolación de valores
let email = "mromcar454@g.educaand.es"
console.log('Hola, ${myName}! Tu email es ${email}.')

