// EJERCICIO 1
function sumarDigitos(n){
    if (n === 0){
        return 0
    }

    return sumarDigitos((n-n%10)/10)+n%10
}

console.log(sumarDigitos(1234))
console.log(sumarDigitos(508))
console.log(sumarDigitos(7))
console.log(sumarDigitos(1000))

// EJERCICIO 2
function crearPerfil(nombre, edad, ...aficiones){
    return {
        nombre: nombre,
        edad: edad,
        aficiones: aficiones
    }
}

function combinarPerfiles(...perfiles){
    return perfiles
}

const aficiones = ["leer", "nadar", "viajar"]

const perfil1=crearPerfil("Ana",20,...aficiones)
const perfil2=crearPerfil("Luis",22,"videojuegos","cine")

const perfiles=combinarPerfiles(...[perfil1,perfil2])

console.log(perfiles)


// EJERCICIO 3
function crearGenerador(){
    let pref = 0
    return function (prefijo){
        pref++
        return prefijo+"-"+pref
    }
}
const generarAlumno=crearGenerador()

console.log(generarAlumno("ALU"))
console.log(generarAlumno("ALU"))
console.log(generarAlumno("ALU"))

const generarProducto=crearGenerador()

console.log(generarProducto("PRO"))
console.log(generarAlumno("ALU"))

// EJERCICIO 4
function clasificarNota(min){
    return function (a){
        return a>min ? "Aprobado" : "Suspenso"
    }
}

const clasificar=clasificarNota(5)

console.log(clasificar(2))
console.log(clasificar(7))

// EJERCICIO 5
function analizarNotas(notas, callback){
    suma=0
    cantidad=0
    cantidadAprobadas=0
    for (v of notas) {
        cantidad++
        suma +=v
        if (v>=5){
            cantidadAprobadas++
        }
    }

    callback(suma,cantidad,cantidadAprobadas)
}

const notas = [4,7,5,9,3]

analizarNotas(notas,(suma,cantidad,aprobados) => {
    console.log(`La suma es ${suma}`)
    console.log(`Se han corregido ${cantidad} notas`)
    console.log(`Han aprobado ${aprobados} alumnos`)
})

analizarNotas(notas, (suma,cantidad) => {
    console.log(`La nota media es ${suma/cantidad}`)
})