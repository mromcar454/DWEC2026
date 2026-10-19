

let myArray = [1,2,3,4,]

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let [myValue1, myValue2] = myArray
console.log(myValue1)
console.log(myValue2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [myValue3 = 0, myValue4 = 0, myValue5 = 0, myValue6 = 0, myValue7 = 0] = myArray
console.log(myValue3)
console.log(myValue7)


// 3. Usa desestructuración para extraer dos propiedades de un objeto

let objeto = {
    propiedad1: "1",
    propiedad2: "2",
    propiedad3: "3"
}

let {propiedad1, propiedad2} = objeto

console.log(propiedad1)
console.log(propiedad2)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {propiedad1: miPropiedad1, propiedad2: miPropiedad2} = objeto
console.log(miPropiedad1)
console.log(miPropiedad2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado


let objetoAnidado = {
    propiedad1: "1",
    propiedad2: "2",
    propiedad3: "3",
    anidado: {
        propiedadAnidada1: "4",
        propiedadAnidada2: "5",
        propiedadAnidada6: "6"
    }
}

let {anidado: {propiedadAnidada6: miPropiedad6, propiedadAnidada2: miPropiedad21} } = objetoAnidado

console.log(miPropiedad6)
console.log(miPropiedad21)


// 6. Usa propagación para combinar dos arrays en uno nuevo

let myArray5 = [5,6,7,8]

let myArray6 = [...myArray, ...myArray5]
console.log(myArray6)


// 7. Usa propagación para crear una copia de un array

let copiaArray = [...myArray]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let nuevoObjeto = {...objeto, ...objetoAnidado}

// 9. Usa propagación para crear una copia de un objeto

let nuevoObjeto2 = {...objeto}

// 10. Combina desestructuración y propagación

let objeto2 = {
    propiedad4: "p4",
    propiedad5: "p5"
}


let {propiedad3, propiedad4 } = {...objeto, ...objeto2}

console.log(propiedad3)
console.log(propiedad4)