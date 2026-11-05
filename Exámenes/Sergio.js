//Ejercicio 2

function crearPerfil(nombre, edad, ...aficiones){
    return {
        nombre: nombre,
        edad: edad,
        aficiones:[...aficiones]
    }
}
function combinarPerfiles(...perfiles){
    let nuevoPerfil = []

    for(const perfil of perfiles){
        nuevoPerfil+= perfil.legth 
    }

    return nuevoPerfil
}

const aficiones =["leer", "escribir", "viajar"]

const perfil1=crearPerfil("ana",20,...aficiones)
const perfil2= crearPerfil("luis",22, "videojuegos","cine")

const perfiles=combinarPerfiles(...[perfil1,perfil2])
console.log(perfiles)


//Ejercicio 3

function crearGenerador(prefijo){
    let contA = 0
    let contP = 0
    return (() => {
        generarAlumno 
            contA++
            return console.log(`ALU-${contA}`),
        
        generarProducto
            contP++
            return console.log(`PRO-${contP}`)
        
    })
}

const generarAlumno= crearGenerador("ALU")
const generarProducto= crearGenerador("PRO")

generarAlumno()
generarAlumno()
generarAlumno()



//Ejercicio 4

function clasificarNotas(notaMinima){
    return function(nota){

        if(nota>=notaMinima){
           return "Aprobado"
        }else{
            return "Suspenso"
        }
    }
}

const clasificar = clasificarNotas(5)
console.log(clasificar(7))
console.log(clasificar(4))

//Ejercicio 5

const notas =[4,7,5,9,3]

function analizarNotas(notas, callback){

    let suma = 0
    let totalNotas
    let aprobados=[]
    for(const nota of notas){
        suma += nota
        totalNotas= nota.lenght 

        if (nota.lenght>= 5){
            aprobados = nota.lenght
        }
    }
    callback(suma,totalNotas, aprobados)
    callback(notas(suma,totalNotas))
}

analizarNotas(notas,(suma, cantidad, aprobados)=>{
    console.log(`La suma es ${suma}`)
    console.log(`Se han corregido ${cantidad} notas`)
    console.log(`Han aprobado ${aprobados} alumnos`)
})

analizarNotas(notas,(suma,cantidad)=>{
    console.log(`La nota media es ${suma/cantidad}`)
})