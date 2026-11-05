function analizarNotas(notas, callback) {
    let suma = 0;
    let cantidad = 0;
    let aprobados = 0;
    for (let nota of notas) {
        suma += nota;
        cantidad++;
        if (nota >= 5) {
            aprobados++;
        }
    }
    callback(suma, cantidad, aprobados)

}

let notas = [4,4,4,4,5,5,5,10,4]

analizarNotas(notas,(suma,cantidad,aprobados) => {
    console.log(`La suma es ${suma}`);
    console.log(`Se han corregido ${cantidad} notas`);
    console.log(`Han aprobado ${aprobados} alumnos`)
})

analizarNotas(notas,(suma,cantidad) => {
    console.log(`La nota media es ${suma / cantidad}`)
})