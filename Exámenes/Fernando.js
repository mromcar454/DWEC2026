//Ejercicio 1
console.log("Ejercicio 1")
function sumarDigitos(numero){
    let suma=0
    suma= suma+ Math.floor()
    return suma
}

console.log(sumarDigitos(28))

//Ejercicio 2

function crearPerfil(nombre,edad,...aficiones){

}


//Ejercicio 3
console.log("Ejercicio 3")

function crearGenerador(prefijo){
    let id=0
    return function(){
        id++
        return prefijo +"-"+ id
    }
    
}
const generarAlumno = crearGenerador("ALU")

console.log(generarAlumno());
console.log(generarAlumno());
console.log(generarAlumno());

const generarProducto = crearGenerador("PRO")

console.log(generarProducto());
console.log(generarAlumno());



//Ejercicio 4
console.log("Ejercicio 4")

function clasificarNota(a){
    return function(b){
        if(b>=a){
            return "Aprobado";
        }else{
            return "Suspenso";
        }
    }
}
const clasificar= clasificarNota(5)

console.log(clasificar(7));
console.log(clasificar(4));

//Ejercicio 5
console.log("Ejercicio 5")

const notas=[4,7,5,9,3]

function analizarNotas(notas,callback){
    let suma = 0
    let cantidad = 0
    let aprobados = 0
    for(let i=0;i<notas.length;i++){
        suma += notas[i]
        cantidad ++
        if(notas[i]>=5){
            aprobados++
        }
    }
    callback(suma,cantidad,aprobados)
};

analizarNotas(notas,(suma,cantidad,aprobados) =>{
    console.log(`La suma es ${suma}`)
    console.log(`Se han corregido ${cantidad} notas`)
    console.log(`Han aprobado ${aprobados} alumnos`)
});

analizarNotas(notas,(suma,cantidad) =>{
    console.log(`La nota meida es ${suma/cantidad}`)
});

