// Excepción

// Produce una excepción
let myObject
// console.log(myObject.email)

// Captura de errores

// try-catch

try {
    // Código que intenta ejecutar
    console.log(myObject.email)
    console.log("Finaliza la ejecución sin errores")
} catch {
    // Bloque de error
    console.log("Se ha producido un error")
}

// Captura del error

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// finally

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Se ha producido un error:", error.message)
} finally {
    console.log("Este código se ejecuta siempre")
}

// No está soportado
// try {
//     console.log(myObject.email)
// } finally {
//     console.log("Este código se ejecuta siempre")
// }

// Lanzamiento de errores

// throw

// throw new Error("Se ha producido un error")

function sumIntegers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Esta operación sólo suma números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación sólo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new SumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a + b
}

try {

    console.log("----------------------")
    console.log(typeof 5)
    console.log(typeof "5")
    console.log(sumIntegers(5, 10))
    //console.log(sumIntegers(5.5, 10))
    //console.log(sumIntegers("5", 10))
    // console.log(sumIntegers(5, "10"))
    // console.log(sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:", error.message)
}

// Capturar varios tipos de errores



try {
    // console.log(sumIntegers(5.5, 10))
    console.log(sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo:", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error:", error.message)
    }
}


/*Capturar y diferenciar varios errores (Manejo Específico)
A diferencia de lenguajes como Java o Python (que permiten escribir varios bloques catch), en JavaScript solo existe un bloque catch. Para manejar múltiples errores, se evalúa el tipo de error dentro del catch con instanceof o error.name.

Ventaja: Te permite tomar acciones correctivas distintas según la causa del problema.

Inconveniente: Requiere más código y conocer las clases de error que pueden lanzarse.
*/

JavaScript
try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    if (error instanceof TypeError) {
        // Solución/Respuesta específica cuando los datos no son números
        console.warn("Revisa los tipos de datos enviados.")
    } else if (error instanceof SumZeroIntegerError) {
        // Solución/Respuesta cuando se intenta sumar cero
        console.warn("No se permite sumar ceros en esta función.")
    } else {
        // Para cualquier otro error no contemplado, se relanza o se trata de forma genérica
        throw error
    }
}

// Crear excepciones personalizadas


/*
¿Cuándo es útil crear errores personalizados?
Para añadir información de depuración: Por ejemplo, guardar un código de estado HTTP (this.statusCode = 404) o el ID de un usuario que falló al autenticarse.

Para diferenciar errores en tu código: Te permite identificar exactamente la causa del fallo usando instanceof:
*/

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message) // aquí ejecuta el constructor padre, lanza error
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(this.a, " + ", this.b)
    }
}

try {
    console.log(sumIntegers(0, 10))
} catch (error) {
    console.log("Se ha producido un error personalizado:", error.message)
    error.printNumbers()
}
    