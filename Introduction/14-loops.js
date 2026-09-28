// Loops y bucles

// for

for (let i =0; i<10; i++) {
    console.log(`Hola ${i}`)    
}

const numbers = [0,1,2,3,4,5,6,7,8,9]
let salida = ""
for (let i = 0; i < numbers.length; i++) {
    salida = salida + " " + numbers[i]
}
console.log(salida)

// while

let i = 0
while (i < 5) {
    console.log(`Hola  ${i}`)
    i++
}

// Bucle infinito
//while(true) {
//}

// do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


// for of


const myArray = [1,2,3,4]


for (let value of myArray) {
    console.log(value)
}

const mySet = new Set(["Hola", "Mundo", "Adiós", 87])

for (let value of mySet) {
    console.log(value)
}

const myMap = new Map ([
    ["name", "Miguel"],
    ["apellido1", "Romero"],
    ["apellido2", "Carmona"]
])

for (let value of myMap) {
    console.log(value)
}

for (let [clave,valor] of myMap) {
    console.log(valor)
}

const myString = "Hola, Javascript"


for (let value of myString) {
    console.log(value)
}



// break y continue

for (let i =0; i<10; i++) {
    if (i == 5) {
        continue
    }else if (i==7){
        break
    }
    console.log(`Hola ${i}`)    
}