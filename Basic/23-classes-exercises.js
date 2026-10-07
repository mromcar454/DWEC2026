
// 1. Crea una clase que reciba dos propiedades


class Clase {
    constructor (propiedad1, propiedad2){
        this.propiedad1 = propiedad1,
        this.propiedad2 = propiedad2
    }
}


// 2. Añade un método a la clase que utilice las propiedades

class ClaseConMétodo {
    constructor (propiedad1, propiedad2){
        this.propiedad1 = propiedad1,
        this.propiedad2 = propiedad2
    }

    mostrar (){
        console.log(`La propiedad1 es ${this.propiedad1} y la propiedad2 es ${this.propiedad2}`)
    }
}


// 3. Muestra los valores de las propiedades e invoca a la función

let claseConMetodo = new ClaseConMétodo("p1","p2")
console.log(claseConMetodo.propiedad1)
console.log(claseConMetodo.propiedad2)
claseConMetodo.mostrar()

// 4. Añade un método estático a la primera clase

class Clase2 {
    constructor (parametro1, parametro2) {
        this.parametro1 = parametro1
        this.parametro2 = parametro2
    }
    static metodoEstatico () {
        console.log("Este es un método estático")    
    }

}




// 5. Haz uso del método estático
Clase2.metodoEstatico()


// 6. Crea una clase que haga uso de herencia


class Vehículo {
    constructor(marca, modelo){
        this.marca = marca
        this.model = modelo
    }

    enMarcha() {
        console.log("El vehículo está andando")
    }
}

class Coche extends Vehículo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo)
        this.puertas = puertas
    }
    // 10. Sobrescribe un método de una clase que utilice herencia
    enMarcha() {
        // Reemplazamos el comportamiento original por uno específico para Coche
        console.log(`El coche ${this.marca} ${this.modelo} con ${this.puertas} puertas está en marcha`)
    }
}


// 7. Crea una clase que haga uso de getters y setters

class Moto {
    constructor(marca, modelo){
        this.marca = marca
        this.model = modelo
    }

    enMarcha() {
        console.log("La moto está andando")
    }
}




// 8. Clase Moto corregida con propiedades privadas (#)
class Moto {
    // Declaración de propiedades privadas
    #marca
    #modelo

    constructor(marca, modelo) {
        this.#marca = marca
        this.#modelo = modelo
    }

    enMarcha() {
        console.log("La moto está andando")
    }

    // Getter y Setter para 'marca'
    get marca() {
        return this.#marca
    }

    set marca(nuevaMarca) {
        // Ejemplo de validación en un setter
        if (nuevaMarca.trim() !== "") {
            this.#marca = nuevaMarca
        }
    }

    // Getter y Setter para 'modelo'
    get modelo() {
        return this.#modelo
    }

    set modelo(nuevoModelo) {
        this.#modelo = nuevoModelo
    }
}


// 9. Utiliza los get y set y muestra sus valores

// Creación de la instancia
const miMoto = new Moto("Honda", "CBR 600")

// Lectura de valores mediante los GETTERS
console.log("--- Valores iniciales ---")
console.log(`Marca: ${miMoto.marca}`)   // Invoca el getter 'marca'
console.log(`Modelo: ${miMoto.modelo}`) // Invoca el getter 'modelo'

// Modificación de valores mediante los SETTERS
miMoto.marca = "Yamaha"                 // Invoca el setter 'marca'
miMoto.modelo = "MT-07"                 // Invoca el setter 'modelo'

// Lectura de los nuevos valores actualizados
console.log("\n--- Valores modificados ---")
console.log(`Nueva Marca: ${miMoto.marca}`)
console.log(`Nuevo Modelo: ${miMoto.modelo}`)

miMoto.enMarcha()



// 10. Sobrescribe un método de una clase que utilice herencia 

class Vehículo {
    constructor(marca, modelo){
        this.marca = marca
        this.model = modelo
    }

    enMarcha() {
        console.log("El vehículo está andando")
    }
}

class Coche extends Vehículo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo)
        this.puertas = puertas
    }
    // 10. Sobrescribe un método de una clase que utilice herencia
    enMarcha() {
        // Reemplazamos el comportamiento original por uno específico para Coche
        console.log(`El coche ${this.marca} ${this.modelo} con ${this.puertas} puertas está en marcha`)
    }
}