function darInfo(suma, cantidad, aprobados){
    console.log(`La suma es: ${suma}`)
    console.log(`Se han sumado ${cantidad} notas`)
    console.log(`Han aprobado ${aprobados} personas`)
}

function media(suma, cantidad){
    console.log(`La media es: ${suma/cantidad}`)
}

function analizarNotas(notas, callback){
    let suma = notas.reduce((anterior, presente) => anterior+presente,0)
    let cantidad = notas.length
    let aprobados = 0
    notas.forEach(element => {
        if(element>=5){
            aprobados++
        }
    });
    callback(suma, cantidad, aprobados)
}

const notas = [4,7,5,9,3]
analizarNotas(notas, darInfo)
analizarNotas(notas, media)