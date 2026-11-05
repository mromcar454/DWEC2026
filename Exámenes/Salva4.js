function clasificarNota(notaMinima) {
    return function (nota) {
        if (nota < notaMinima) {
            return "Suspenso";
        } else {
            return "Aprobado"
        }
    }
}

const clasificacionSuficiente = clasificarNota(5);

const clasificarNotaConSobresaliente = clasificarNota(9)


console.log("Clasificando sobresalientes")
console.log(clasificarNotaConSobresaliente(8))
console.log(clasificarNotaConSobresaliente(9))
console.log(clasificarNotaConSobresaliente(10))

console.log("Clasificando con suficiente")
console.log(clasificacionSuficiente(6))
console.log(clasificacionSuficiente(4))
console.log(clasificacionSuficiente(10))


console.log("Clasificando encapsular en variable")
console.log(clasificarNota(10)(9))


