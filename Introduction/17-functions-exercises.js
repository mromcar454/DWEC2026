// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

function suma (a,b) {
    return ( a + b )
}

const suma = function (a,b){
    return ( a + b )
}


const suma = (a,b) => {
    return ( a + b )
}

const suma = (a,b) => (a +b)






// 1. Crea una función que reciba dos números y devuelva su suma

function getSuma (a=0, b=0){
    return (a + b)
}

let suma = getSuma(8,9)
console.log (suma)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let miArray = [8,10,20,40,4]

function mayorArray (array) {
let mayor = array[0]

for (let value of array){
    if (value > mayor){
        mayor = value
    }
    
}

return mayor
}


// Con foreach

let numeroMayor = mayorArray(miArray)
console.log(`El número mayor es ${numeroMayor}`)



const mayorArray = (array) => {
    let mayor = array[0] 
    array.forEach(value => {
        if (value > mayor) {
            mayor = value
        } 
    })
    return mayor
}








// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function totalVocales (palabra){
let cuenta = 0
for (let value of palabra){
    
    if ((value === "a") || (value === "e") || (value === "i") || (value === "o") || (value === "u")){
        cuenta++
    }
}
return cuenta
}
let total = totalVocales("Miguel")
console.log(total)



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function arrayUpperCase (array) {
    let newArray = []
    for (let value of array)  {
        newArray.push(value.toUpperCase())
    }
    return newArray
}


let myArray = ["hola", "mundo"]
console.log(arrayUpperCase(myArray))


// const arrayUpperCase = (array) => array.map(value => value.toUpperCase());


// con foreach
const arrayUpperCase = (array) => {
    let newArray = []
    array.forEach(value => newArray.push(value.toUpperCase()))
    return newArray
}


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function isPrime (number) {    
    if (number <= 1) return false;
    for (let i = 2; i < Math.sqrt(number); i++)
        if ((number % i) === 0) {
            return false
        } 
    return true
}
if (isPrime(11)){
    console.log("Es primo")

}else{
    console.log("No es primo")
}


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


function contains (value1, array) {
    let isInside = false
    for (let value2 of array) {       
        if (value2 == value1){
            isInside = true
        }
    }
    return isInside
}    


function commonElementsArray (array1, array2) {
    let comunes = []
    for (let value1 of array1) { 
        if (contains(value1, array2)){
            comunes.push(value1)
        }
    }
    return comunes
}

let array1 = [1,2,3,4,7]
let array2 = [4,5,6,7]
let dosArrays = []
dosArrays = commonElementsArray(array1,array2)
console.log(dosArrays)

// con foreach
const commonElementsArray = (array1, array2) => {
    let comunes = []
    array1.forEach(value => {
        if (contains(value, array2)) comunes.push(value)
    })
    return comunes
}



function commonElementsArray(array1, array2) {
    return array1.filter(element => array2.includes(element))
}

let array1 = [1, 2, 3, 4]
let array2 = [4, 5, 6, 7]

console.log(commonElementsArray(array1, array2))




// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function isPar (number) { 
    if ((number % 2 ) == 0 ){
        return true
    } else {
        return false
    }
}


 function sumArray (array) {
    let sum = 0
    for (let value of array) {
        if (isPar(value)){
            sum = sum + value
        }
    }
    return sum
 }

 let myArray7 = [4,20,50,1]
 let total7 = sumArray(myArray7)
console.log(total7)



// con foreach
const sumArray = (array) => {
    let sum = 0
    array.forEach(value => {
        if (isPar(value)) sum += value
    })
    return sum
}

/*
function sumEvenNumbers(array) {
    return array
        .filter(number => number % 2 === 0)
        .reduce((acc, current) => acc + current, 0)
}

let myArray7 = [4, 20, 50, 1]
console.log(sumEvenNumbers(myArray7)) 
*/

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado



function cuadrado (array) {
    let newArray = []
    for (let value of array){
        newArray.push(Math.pow(value, 2))
    }
    return newArray
}


// foreach
const cuadrado = (array) => {
    let newArray = []
    array.forEach(value => newArray.push(value ** 2))
    return newArray
}


let array8 = [4,5,20,9]
let array8cuadrado = cuadrado(array8)
console.log(array8cuadrado)

function cuadrado(array) {
    return array.map(value => value * 1,21)
}

let array8 = [4, 5, 20, 9]
let array8cuadrado = cuadrado(array8)

console.log(array8cuadrado)


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function ordenInverso (cadena) {
    let cadenaInversa = ""
    for ( let caracter of cadena) { 
        cadenaInversa = caracter + cadenaInversa
    }   
    return cadenaInversa
}
let texto9 = "Hola Mundo"
let texto9Invertido = ordenInverso(texto9)
console.log (texto9Invertido)

// 10. Crea una función que calcule el factorial de un número dado

function factorial (number) {
    let result = 1
    for (let i=2; i<= number; i++){
        result = result * i
    }
    return result
}

console.log(factorial(5))
