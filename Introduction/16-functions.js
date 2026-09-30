// Funciones

// Simple

function miFuncion() {
    console.log("Hola, función")
}

for (let i = 0; i < 10; i++) {
    miFuncion()
}

// Con parámetros
function miFuncionConParametros(name) {
    console.log(`Hola, ${name}`)
}
miFuncionConParametros("Miguel")
miFuncionConParametros("Sergio")

// Funciones anónimas
const miFuncionAnonima = function () {
    console.log("Hola función anónima")
}

miFuncionAnonima()


const miFuncionAnonimaconParametros = function (name) {
    console.log(`Hola función anónima de ${name}`)
}

miFuncionAnonimaconParametros("Miguel")
miFuncionAnonimaconParametros("Antonio")


// Funciones Flecha o Arrow functions

const myFunc = (name) => {
    console.log(`Hola, ${name}`)
}
myFunc("flecha")

const myFunc2 = (name) => console.log(`Hola, ${name}`)
myFunc2("flecha2")

// Parámetros

function suma(a,b){
    console.log(a+b)
}

suma(5,10)
suma(5)
suma()

function sumaPorDefecto(a = 0, b= 0){
    console.log(a+b)
}

sumaPorDefecto(5,10)
sumaPorDefecto(5)
sumaPorDefecto()
sumaPorDefecto("8")

// Retorno de valores

function multiplicacion (a,b){
    return a * b
}

let resultado = multiplicacion(5,10)
console.log(resultado)


// Funciones anidadas

function externa(){
    console.log("Estamos en la función externa")
    
    
    function interna(){
        console.log("Estamos en la función interna")
    }
    interna()
}
externa()

//interna() // Error porque estoy fuera de su ámbito

// Funciones de orden superior o callBack

function funcionOrdenSuperior(funcion, parametros) {
    funcion(parametros)
}

funcionOrdenSuperior(miFuncionConParametros,"Antonio")


// forEach
const myArray = [1, 2, 3, 4]

const mySet = new Set(["Ortiz", "Antonio", "antoniodev", 37, true, "ortizantonio@antoniodev.com"])

const myMap = new Map([
    ["name", "Miguel"],
    ["email", "mromcar454@g.educaand.es"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))
mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))



// forEach con Arrays

let vector = [12,334,111,52,98]
vector.forEach(function (elemento, posicion){
console.log(`Posición: ${posicion}, Elemento: ${elemento}`)
})


let conjunto = new Set()
conjunto.add(12).add(334).add(111).add(52).add(98)
conjunto.forEach(function (elemento){
console.log(`elemento: ${elemento}`)
})

// conjunto.forEach((elemento) => console.log(`elemento: ${posicion}`))


// Mapas

let mapa = new Map()
mapa.set('a',12).set('b',334).set('c',56)
mapa.forEach(function (valor, clave){
console.log(`Clave: ${clave} / Valor: ${valor}`)
})




