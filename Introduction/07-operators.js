// Operadores Aritméticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo o resto de la división
console.log(a ** b) // Exponente

// Incremento
// forma 1
a++
console.log(a)
// forma 2
console.log(++a)

// Decremento
// forma 1
b-- 
console.log(b)

// forma 2
console.log(--b)

// Operadores de Asignación

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicación con asignación
myVariable /= 2 // División con asignación
myVariable %= 2 // Módulo con asignación
myVariable **= 2 // Exponente con asignación

// Operadores de comparación

a=6
console.log(a > b) // Mayor que
console.log(a < b) // Menor que

console.log(a >= b) // Mayor o igual que
console.log(a <= b) // Menor o igual que
console.log(a == b) // Igualdad por valor
console.log(a == 6) 
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6) 
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta

// JavaScript convierte el booleano con 0 (falso) y con 1 (verdadero)
console.log(0 == true)
console.log(1 == true)


console.log(2 == false) // falso
console.log(2 == true) // falso

console.log(0 == "")
console.log(0 == "") // true
console.log(0 == " ") 
console.log(0 == '')
console.log(0 == "0")

console.log(0 == "Hola")  // false



console.log(0 === "")
console.log(0 === false)

console.log("Estamos aquí")
console.log(undefined == null)
console.log(undefined === null)


/*

Truthy values (valores verdaderos)

- Todos los números positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true



Falsy values (valores falsos

- 0
- 0n
- null
- undefined
- NaN (Not a Number)
- Cadenas de texto vaías



1. Falsy (Valores equivalentes a false)
Son los únicos valores en todo el lenguaje que JavaScript considera negativos en una condición:

false

0, -0

0n (BigInt cero)

"", '', \` (cadenas de texto vacías)

null (ausencia de valor)

undefined (variable no definida)

NaN (Not a Number / resultado matemático inválido)

2. Truthy (Valores equivalentes a true)
Es absolutamente cualquier otro valor que no pertenezca a la lista de los falsy. Se evalúan como verdaderos:

Números diferentes de cero (ej. 1, -5, 3.14)

Cadenas de texto con contenido (ej. "Hola", incluso "0" o "false" porque no están vacías)

Estructuras de datos (objetos {} y arrays [], incluso si están vacíos)

El booleano true

¿Para qué sirve en la práctica?
Permite escribir código más limpio y directo para validar si una variable 
tiene datos útiles antes de usarla, sin necesidad de hacer comparaciones explícitas:


*/

//JavaScript

let usuario = "Ana"; // Truthy (cadena con texto)
let mensajes = 0;    // Falsy (número cero)

// En lugar de escribir: if (usuario !== "" && usuario !== null)
if (usuario) {
  console.log(`Bienvenida, ${usuario}`); // Se ejecuta
}

// En lugar de escribir: if (mensajes > 0)
if (mensajes) {
  console.log("Tienes mensajes nuevos"); // NO se ejecuta porque 0 es falsy
}


// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)


// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!)
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios

const isRaining = true
isRaining ? console.log("Está lloviendo") : console.log("no está lloviendo")















