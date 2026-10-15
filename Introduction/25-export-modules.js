// Exportación de módulos

// Propiedades

export const PI = 3.1416
export let  name = "Miguel"

// Funciones
export function add(a,b) {
    return a + b
}

console.log(add(5,10))

// Clases

export class Circle {
    
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter(){
        return 2 * Math.PI + this.radius
    }
}


// Exportación por defecto
//Solo puede haber una exportación por defecto por archivo.
// Si intentas poner dos export default, JavaScript lanzará un error de sintaxis.

export default function substract(a,b) {
    return a - b
}

