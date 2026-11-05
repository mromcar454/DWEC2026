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

const ana = crearPerfil("Ana", 20, "leer", "nadar", "viajar")
const luis = crearPerfil("Luis", 22, "videojuegos", "cine")

const perfiles = combinarPerfiles(ana,luis)
console.log(perfiles)