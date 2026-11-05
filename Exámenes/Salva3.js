function crearGenerador(prefijo) {
    let idGenerable = 0;

    return function () {
        return `${prefijo}-${idGenerable++}`
    }
}

const generarAlumno = crearGenerador('ALU');

console.log(generarAlumno())
console.log(generarAlumno())
console.log(generarAlumno())
console.log(generarAlumno())

const generarProducto = crearGenerador('PRO');

console.log(generarProducto())
console.log(generarProducto())
console.log(generarProducto())
console.log(generarProducto())
