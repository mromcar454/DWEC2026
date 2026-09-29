// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function getSuma (a=0, b=0){
    return (a + b)
}

let suma = getSuma(8,9)
console.log (suma)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let miArray = [8,10,20,40,4]

function mayorArray (array) {
let mayor = 0
for (let value of array){
    if (value > mayor){
        mayor = value
    }
    
}

return mayor
}

let numeroMayor = mayorArray(miArray)
console.log(`El número mayor es ${numeroMayor}`)


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

function commonElementsArray (array1, array2) {
    let newArray = []
    for (let value1 of array1) { 
        for ((let value2 of array) { 
            let contiene = false
            if (value2 == value1){
                contiene = true
            }
        }
        if 
        array2.push(value1)
    }

    return newArray
}


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares




// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado