//EJERCICIO 2
function crearPerfil(nom,ed,...af){
    return {
        nombre:nom,
        edad:ed,
        aficiones:[...af]
    }
}
function combinarPerfiles(...perfiles){
    return [...perfiles]
}
let obj=crearPerfil("Paco",2,"Pescar","Nadar")
let obj2=crearPerfil("Ana",3,"Correr","Saltar")
console.log(obj)
console.log(obj2)
let obj3=combinarPerfiles(obj,obj2)
console.log(obj3)

//------------------EJERCICIO 3-----------------------
function crearGenerador(prefijo){
    let cont=0
    return function(){
        ++cont    
        return `${prefijo}-${cont}`
    } 

}
let generarPref=crearGenerador("ALU")
console.log(generarPref())
console.log(generarPref())
console.log(generarPref())
let generarPref2=crearGenerador("PRO")
console.log(generarPref2())
console.log(generarPref2())
console.log(generarPref2())

//------------------EJERCICIO 4-----------------------
function clasificarNota(minimo){
    return function(nota){
        if(nota>=minimo){return "Aprobado"}
        else{
            return "Suspenso"
        }
    }
}
const clasificar=clasificarNota(5)
console.log(clasificar(7))
console.log(clasificar(4))
const clasificarN=clasificarNota(7)
console.log(clasificarN(8))
console.log(clasificarN(6))

//------------------EJERCICIO 5-----------------------
function mostrarResult(suma,cantidad,aprobados){
    console.log(`La suma es ${suma}`)
    console.log(`Se han corregido ${cantidad} notas`)
    console.log(`Han aprobado ${aprobados} alumnos`)
}

function mediaResult(suma,cantidad){
    console.log(`La media es ${suma/cantidad}`)
}

function analizarNotas(notas,callback,callback2){
    let tot=0
    notas.forEach(element => {
        tot+=element
    });   

    let cont=0
    notas.forEach(element=>{
        cont++
    })
    let aprob=0
    notas.forEach(element=>{
        if(element>=5){aprob++}
    })
    callback(tot,cont,aprob)
    callback2(tot,cont)
}
analizarNotas([4,7,5,9,3],mostrarResult,mediaResult)

