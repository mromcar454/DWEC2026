// Excepción

let myObject
// console.log(myObject.email)


// try-catch

try {
 // código que intenta ejecutar
 console.log("Empiezo la ejecución sin errores")
 console.log(myObject.email)
 console.log("Finaliza la ejecución sin errores")

} catch {
 // Bloque de error
 console.log("Se ha producido un error")

}

// finally

try { 
 console.log(myObject.email) 
} catch { 
 console.log("Se ha producido un error")
} finally {
    console.log("Este código se ejecuta siempre")
}


// Ponemos siempre try con catch
/*
try {
    console.log(myObject.email)
} finally {
    console.log("Este código se ejecuta siempre")
}
*/

// Lanzamiento de errores


// throw

 // throw new Error("Se ha producido un error")


  //Errores en JavaScript
/*
  Propiedades principales de un objeto Error

Cuando se crea o se lanza un error, el objeto resultante suele contener estas propiedades:
• message: Un mensaje descriptivo que explica qué salió mal.
• name: El tipo o nombre del error (por ejemplo, "Error", "TypeError", "ReferenceError").
• stack: La traza de la pila (muestra las funciones y líneas de código por las que pasó el programa hasta llegar al error).


Tipos de errores derivados

JavaScript incluye varios subtipos o clases que heredan de Error:
• SyntaxError: Ocurre cuando el código no cumple con las reglas de sintaxis de JavaScript y el motor no puede interpretarlo.
• Reference: (ReferenceError) Sucede cuando intentas usar una variable que no ha sido declarada o no existe en el ámbito actual.
• TypeError: Aparece cuando un valor no es del tipo esperado (por ejemplo, intentar llamar a algo que no es una función o leer una propiedad de null).
• RangeError: Se lanza cuando un valor numérico está fuera de su rango permitido (por ejemplo, al crear un array con una longitud negativa).
• URIError: Se produce cuando se usan mal las funciones globales de codificación/decodificación de URI (como encodeURI o decodeURI).
*/

class MiClaseError extends Error {
    constructor(message, a, b){
        super(message)
        this.a = a
        this.b = b
    }
}

function sumIntegers(a, b){
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("TypeError - Esta operación sólo suma números")
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Error - Esta función solo suma números enteros")
    }

    if (a ==0 || b == 0 ) {
        throw new MiClaseError("SumZeroIntegerError - Esta función no puede sumar un número con 0")
    }
        
    return a + b
}

try {

    console.log(typeof 5)
    console.log(typeof 5.5)
    console.log(typeof "5")
    console.log(sumIntegers(5,10))
    console.log(sumIntegers(0,10))
    //console.log(sumIntegers("5",10))
    //console.log(sumIntegers(5.5,10))   

} catch (error) {
    console.log("Se ha producido un error", error.message)
    
}


/*Capturar y diferenciar varios errores (Manejo Específico)
A diferencia de lenguajes como Java o Python (que permiten escribir varios bloques catch),
 en JavaScript solo existe un bloque catch.
 Para manejar múltiples errores, se evalúa el tipo de error dentro del catch con instanceof 
 o error.name.

Ventaja: Te permite tomar acciones correctivas distintas según la causa del problema.

Inconveniente: Requiere más código y conocer las clases de error que pueden lanzarse.
*/

try {
    console.log(sumIntegers(10,0))
}catch(error){
if (error instanceof TypeError) {
    console.log("Revisa los datos, ha lanzado error tipo TypeError")
} else if (error instanceof MiClaseError) {
    console.log("No se permite sumar ceros en esta función")
} else {
    console.log("No sabemos el tipo de error, error genérico")
}

}




