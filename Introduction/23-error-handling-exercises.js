// 1. Captura una excepción utilizando try-catch

try {
    myobjeto.hola
}catch {
    console.log("Error")
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    myobjeto.hola
}catch {
    console.log("Error")
}finally{
    console.log("Sigue adelante")
}

// 3. Lanza una excepción genérica

function potencia (a, b){
    if (!(typeof a == "number") || !(typeof b == "number")){
        throw new Error("Excepción genérica")
    }
    return Math.pow(a,b)
}

try {
    console.log(potencia(5,3))
    console.log(potencia(5,"3"))


}catch {
    console.log("Error", error.message)
}

// 4. Crea una excepción personalizada

class ExcepcionPersonalizada extends Error {
    constructor (mensaje, a, b){
    super(mensaje)
    this.a= a
    this.b= b
}

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10