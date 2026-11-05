function crearGenerador(prefijo){
    let contador = 0
    return () => {
        contador ++
        return prefijo+"-"+contador
    }
}

const generarAlumno = crearGenerador("ALU")
console.log(generarAlumno())
console.log(generarAlumno())
console.log(generarAlumno())

const generarProducto = crearGenerador("PRO")

console.log(generarProducto())
console.log(generarProducto())
console.log(generarProducto())

console.log(generarAlumno())