
//1



//2

let crearPerfil = (nombre, edad, ...aficones) => {
    return {
        nombre: nombre,
        edad: edad,
        aficones: [aficones]
    }
}

let combinarPerfiles = (...perfiles) => {
    return perfiles
}

console.log(crearPerfil("Ana", 20, "leer", "nadar", "viajar"))

let ana = crearPerfil("Ana", 20, "leer", "nadar", "viajar")

let pepe = crearPerfil("pepe", 20, "leer", "nadar", "viajar")

const perfiles = combinarPerfiles(ana, pepe)

console.log(perfiles)

//3

let crearGenerador = (prefijo) => {
    let id = 0
    return function generardor() {
        id++
        return `${prefijo}-${id}`  
    }
}

const generarAlumno = crearGenerador("ALU")

const generarProducto = crearGenerador("PRO")

console.log(generarAlumno())
console.log(generarAlumno())
console.log(generarAlumno())

console.log(generarProducto())
console.log(generarProducto())
console.log(generarProducto())

//4

let clasificarNota = (minima) => {
    return (nota) => {
        if (nota >= minima){
            return "aprobado"
        }
        return "suspenso"
    }
}

let minimo5 = clasificarNota(5)

let minimo6 = clasificarNota(6)

console.log(minimo5(7))
console.log(minimo5(4))

console.log(minimo6(5))
console.log(minimo6(6))

//5

let analizarNotas = (notas, ...callback) => {
    console.log(`suma: ${callback[0](notas)}`)
    console.log(`contar: ${callback[1](notas)}`)
    console.log(`contar aprobados: ${callback[2](notas)}`)
}

const notas = [4,7,5,9,3]

let suma = (nums) => {
    let total = 0
    nums.forEach((value) => {
        total=total+value
    })
    return total
}
let cantidadNotas = (notas) => {
    let cantidad = 0
    notas.forEach( (value) => {
        cantidad++
    })
    return cantidad
}
let cantidadNotasA = (notas) => {
    let cantidad = 0
    notas.forEach( (value) => {
        if (value>=5){
        cantidad++
        }
    })
    return cantidad
}
let notaMedia = (notas, ...callback) => {
    console.log(`Nota media: ${callback[0](notas)/callback[1](notas)}`)
}

analizarNotas(notas, suma, cantidadNotas, cantidadNotasA)

notaMedia(notas, suma, cantidadNotas)


