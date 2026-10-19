// 1. Captura una excepción utilizando try-catch
try {
    throw new Error("Se produjo un error de prueba en el ejercicio 1");
} catch (error) {
    console.error("Excepción capturada:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
    throw new Error("Se produjo un error de prueba en el ejercicio 2");
} catch (error) {
    console.error("Excepción capturada:", error.message);
} finally {
    console.log("El bloque finally siempre se ejecuta");
}

// 3. Lanza una excepción genérica
function lanzarGenerica() {
    throw new Error("Esta es una excepción genérica");
}

// 4. Crea una excepción personalizada
class MiErrorPersonalizado extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiErrorPersonalizado";
    }
}

// 5. Lanza una excepción personalizada
function lanzarPersonalizada() {
    throw new MiErrorPersonalizado("Esta es mi excepción personalizada");
}

// 6. Lanza varias excepciones según una lógica definida
function procesarNumero(numero) {
    if (typeof numero !== "number") {
        throw new TypeError("El valor debe ser un número");
    }
    if (numero < 0) {
        throw new Error("El número no puede ser negativo");
    }
    if (numero === 0) {
        throw new MiErrorPersonalizado("El número no puede ser cero");
    }
    return numero * 2;
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    procesarNumero(0);
} catch (error) {
    if (error instanceof MiErrorPersonalizado) {
        console.error("Error personalizado capturado:", error.message);
    } else if (error instanceof TypeError) {
        console.error("Error de tipo capturado:", error.message);
    } else if (error instanceof Error) {
        console.error("Error genérico capturado:", error.message);
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const valores = ["10.5", "abc", "20.1", null, "30"];
for (const val of valores) {
    try {
        if (val === null || val === undefined || isNaN(Number(val))) {
            throw new Error(`'${val}' no se puede convertir a float`);
        }
        console.log(`Convertido: ${parseFloat(val)}`);
    } catch (error) {
        console.error(`Error de conversión: ${error.message}`);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class PropiedadFaltanteError extends Error {
    constructor(propiedad) {
        super(`Falta la propiedad requerida: '${propiedad}'`);
        this.name = "PropiedadFaltanteError";
    }
}

function verificarPropiedad(objeto, propiedad) {
    if (!objeto || !objeto.hasOwnProperty(propiedad)) {
        throw new PropiedadFaltanteError(propiedad);
    }
    return true;
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function operacionInestable() {
    if (Math.random() < 0.8) { // Falla el 80% de las veces
        throw new Error("Fallo de red simulado");
    }
    return "Operación exitosa";
}

function ejecutarConReintentos(funcion, maxReintentos = 10) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            intentos++;
            const resultado = funcion();
            console.log(`Éxito en el intento ${intentos}: ${resultado}`);
            return resultado;
        } catch (error) {
            console.warn(`Fallo en el intento ${intentos}: ${error.message}`);
            if (intentos >= maxReintentos) {
                throw new Error(`Se alcanzó el máximo de ${maxReintentos} reintentos. Último error: ${error.message}`);
            }
        }
    }
}