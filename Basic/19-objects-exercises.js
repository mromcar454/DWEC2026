
// 1. Crea un objeto con 3 propiedades

let objeto = {
    propiedad1: "p1",
    propiedad2: "p2",
    propiedad3: "p3"
}

// 2. Accede y muestra su valor
console.log(objeto.propiedad1)
console.log(objeto.propiedad2)
console.log(objeto.propiedad3)

for (let key in objeto) {
    console.log(`Clave:  ${key} / Valor: ${objeto[key]}`)
}

for (let key in objeto) { 
    console.log(key)
    console.log(objeto[key])

}

// 3. Agrega una nueva propiedad

objeto.propiedad4 = "p4"
console.log(objeto)


// 4. Elimina una de las 3 primeras propiedades

delete objeto.propiedad3
console.log(objeto)


// 5. Agrega una función e invócala
objeto.funcion = function () {
    console.log("Estoy en la función")
}

objeto.funcion()



// 6. Itera las propiedades del objeto
for (let key in objeto) {
    console.log(`Clave:  ${key} / Valor: ${objeto[key]}`)
}

// 7. Crea un objeto anidado


let objetoanidado = {
    propiedad1: "p1",
    propiedad2: "p2",
    anidado: {
        propiedadAnidada1: "pa1",
        propiedadAnidada2: "pa2",
    }
}


// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objetoanidado.anidado.propiedadAnidada1)
console.log(objetoanidado.anidado.propiedadAnidada2)

// 9. Comprueba si los dos objetos creados son iguales

let objetoanidado2 = objetoanidado

if (objetoanidado2 == objetoanidado) {
    console.log ("Los objetos son iguales")
}

// 10. Comprueba si dos propiedades diferentes son iguales


if (objetoanidado.anidado.propiedadAnidada2 == objetoanidado.anidado.propiedadAnidada1) {
    console.log ("Las propiedades son iguales")
}else { 
    console.log ("Las propiedades no son iguales")

}