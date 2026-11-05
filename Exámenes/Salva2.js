function crearPerfil(nombre, edad, ...aficiones) {
    return {
        "nombre": nombre,
        "edad": edad,
        "aficiones": aficiones
    }
}

function combinarPerfiles(...perfiles) {
    const perfiles1 = [...perfiles]
    return perfiles1;
}

const ana = crearPerfil("Ana", 20, ["leer", "nadar", "viajar"])

const salva = crearPerfil("Salva", 34, ["vibecoding", "saltar", "gaming"])

const rodolfo = crearPerfil("Rodolfo", 23, ["leer comics", "surf", "basket"])

console.log(combinarPerfiles(...[ana,salva,rodolfo]))