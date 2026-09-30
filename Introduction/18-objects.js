// Objetos

// Sintaxis

let person = {
    name: "Miguel",
    age: 30,
    alias: "Miguel R"
}

// Acceso a Propiedades

// Notación punto
console.log(person.name)

// Notación de corchets
console.log(person["name"])
console["log"](person["name"])

// Modificación de propiedades

//person.name = "Miguel Ángel"
console.log(person.name)

console.log(typeof person.name)
console.log(typeof person.age)
person.age = "37"
console.log(typeof person.age)

// Eliminación de propiedades

delete person.age
console.log(person)

// Nueva propiedad

person.age= 30
person.email = "mromcar454@g.educaand.es"
console.log(person)


// Métodos (funciones)

let person2 = {
    name: "Miguel",
    age: 30,
    alias: "Miguel R",
    walk: function () {
        console.log("La persona camina.")
    }
}


person2.walk()

// Anidación de objetos
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

person3.job.work()


let viaje = {
    origen: "Granada",
    destino: "El Cairo",
    dias: 8,
    precio: 750,
    mostrar: function(){
        console.log(`${this.origen} / ${this.destino}`)
        console.log(`curante ${this.dias} : EUR ${this.precio}`)
    }

}

let oferta = viaje;
viaje = null
oferta.mostrar()




// Igualdad de objetos



let person4 = {
    name: "Miguel",
    age: 20,
    alias: "Toni"
}


let person6 = {
    name: "Miguel",
    age: 20,
    alias: "Toni"
}



console.log(person6 == person4)
console.log(person6 === person4) 

console.log(person6) 
console.log(person4) 


/*
console.log(person.name == person4.name)
console.log(person.name)
console.log(person4.name)*/


// Iteración

for (let key in person6) {
    console.log(key + ":" + person6[key])
}

// Funciones como objetos

function Person(name, age) {
    this.name= name 
    this.age= age

}

let person7 = new Person("Miguel", 37)
console.log(person7)
console.log(person7.name)
console.log(typeof person7)

