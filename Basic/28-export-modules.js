/*
Diferencias entre Exportación Nombrada y por Defecto
1. Exportación Nombrada (export)
Cantidad: Puedes tener múltiples exportaciones nombradas dentro de un mismo archivo.

Sintaxis de importación: Se deben envolver obligatoriamente entre llaves { }.

Nombre estricto: El nombre al importar debe coincidir exactamente con el nombre exportado. Si quieres cambiarlo, debes usar la palabra clave as:

JavaScript
import { add as sumar } from "./28-export-modules.js"
Casos de uso: Ideal para archivos que sirven como utilidades o colecciones de funciones y constantes independientes.

2. Exportación por Defecto (export default)
Cantidad: Solo puede haber una exportación por defecto por archivo. Si intentas poner dos export default, JavaScript lanzará un error de sintaxis.

Sintaxis de importación: Se importa sin llaves.

Nombre libre: Al importar, puedes asignarle el nombre que prefieras directamente sin usar as:

JavaScript
import miFuncionDeRestar from "./28-export-modules.js"
Casos de uso: Ideal cuando un archivo representa una sola entidad o responsabilidad principal (como un componente de React, una clase principal o un controlador).
*/

// Exportación de módulos

// Funciones

export function add(a, b) {
    return a + b
}

console.log(add(5, 10))

// Propiedades

export const PI = 3.1416
export let name = "Miguel"

// Clases

export class Circle {

    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }

}

// Exportación por defecto

export default function substract(a, b) {
    return a - b
}

// export default class MyClass {

//     func() {
//         console.log("Mi clase")
//     }
// }
