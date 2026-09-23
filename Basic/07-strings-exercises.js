// 1. Concatena dos cadenas de texto
let cadena1 ="Hola"
let cadena2 ="Adiós"
console.log(cadena1 + " " + cadena2)
// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length)
console.log(cadena2.length)
// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0])
console.log(cadena1[cadena1.length-1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena1.toUpperCase())
console.log(cadena1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let cadena3 = `Cadena de texto
en varias líneas`
// 6. Interpola el valor de una variable en un string
let cadena4 = `${cadena1} - ${cadena2} - ${cadena3}`
console.log(cadena4)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConGuiones = "Esta-es-una-cadena-con-guiones"
console.log(cadenaConGuiones.replaceAll("-", " "))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
cadena1.includes(cadenaConGuiones) ? console.log(`${cadena1} contiene la cadena de texto en ${cadena2}`) : console.log(`${cadena1} no contiene la cadena de texto en ${cadena2}`)

// 9. Comprueba si dos strings son iguales
cadena1 === "Hola" ? console.log(`${cadena1} es exactamente igual a ${cadena2}`) : console.log(`${cadena1} no es igual a  ${cadena2}`)


// 10. Comprueba si dos strings tienen la misma longitud

cadena1.length == cadena2.length ? console.log(`${cadena1} tiene la misma longitud ${cadena2}`) : console.log(`${cadena1} no tiene la misma longitud ${cadena2}`)