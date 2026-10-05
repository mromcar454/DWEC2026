// Desestructuración

let myArray = [1,2,3,4]



let myValue = myArray[1]
console.log(myValue)

// let myName = person.name
// console.log(myName)

// Sintaxis para arrays

let [myValue0, myValue1, myValue3, myValue4, myValue5] = myArray
console.log(myValue0)
console.log(myValue1)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5) // undefined

// Syntaxya arrays para valores por defecto
let [myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0, myValue10 = 0] = myArray
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)
console.log(myValue10) 

// Ignorar elementos array

let [myValue11, , ,myValue12] = myArray
console.log(myValue11)
console.log(myValue12) 





// Sintaxis para objetos

let person = {
    name: "Miguel",
    age: 30,
    alias: "Miguel R"
}

let { age, alias, name } = person

console.log(name) 
console.log(age) 
console.log(alias) 

// Sintaxis de objetos con valores predeterminados

person.email="otroemail@gmail.com"

let { name : name3, age : age3, email = "mromcar454@g.educaand.es" } = person
console.log(name3) 
console.log(age3) 
console.log(email) 


/// Sintaxis de objetos con nuevos nombres de variables
let { age: age4, alias: alias4 , name: name4 } = person
console.log(name4) 
console.log(age4) 
console.log(alias4)


// Objetos anidados

let person3 = {
    name: "Miguel",
    age: 30,
    alias: "Miguel R",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 10,
        work: function () {
            console.log(`La persona ${person3.name} tiene ${this.exp} 
                años de experiencia como ${this.name}`)
        }
    }
}

let {name: personName, job: { name: jobName}} = person3

console.log(personName)
console.log(jobName)

// Propagación (...)

// Sintaxis arrays

let myArray2 = [...myArray, 5, 6]
console.log(myArray2)

// Copia de arrays

let myArray3 = [...myArray]
console.log(myArray3)

let myArray4 = myArray
myArray.push(5)
console.log(myArray)
console.log(myArray4)
console.log(myArray3)

// Combinación de arrays

let myArray5 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray5)

// Sintaxis de propagación de objetos

let person2 = {...person, address: "Calle amargura 1"}
console.log(person2)


// Copia de objetos
let person4 = {...person2}








