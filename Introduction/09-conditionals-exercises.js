// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Miguel"

if (myName == "Miguel") {
    console.log("Miguel")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "usuario"
let password = "12345"

if (user == "usuario") {
    if (password == "1234") {
        console.log("Enhorabuena, has entrado")
    } else {
        console.log("Contraseña incorrecta")
    }
} else {
    console.log("Usuario incorrecto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0

if (numero > 0 ){
    console.log("El número es positivo")
} else if (numero < 0 ) {
    console.log("El número es negativo")
} else {
    console.log("El número es 0")
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 17

if (age >=18 ) {
    console.log("Puedes votar")
}else { 
    console.log(`No puedes votar, te faltan ${18 - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let persona

if (age >=18 ) {
    persona = "adulto"
}else { 
    persona = "menor"
}
console.log(persona)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7