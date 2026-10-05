
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

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 