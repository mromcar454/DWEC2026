

import { Curso, nombreDelCurso, saludar } from "./modules/importables.js"
import duplicar from "./modules/defaults/duplicar.js"
import IVA from "./modules/defaults/iva.js"
import Producto from "./modules/defaults/producto.js"
import { crearMensaje, mensajeInicial, Mensaje } from "./modules/carpeta-uno/index.js"
import { crearAviso, avisoInicial, Aviso } from "./modules/carpeta-dos/index.js"

// 1. Exporta una función.
export function sumar(a, b) {
	return a + b
}

// 2. Exporta una constante.
export const PI = 3.1416

// 3. Exporta una clase.
export class Persona {
	constructor(nombre) {
		this.nombre = nombre
	}

	presentarse() {
		return `Hola, soy ${this.nombre}.`
	}
}

// 4. Importa una función.
console.log(saludar("Lucía"))

// 5. Importa una constante.
console.log("Curso:", nombreDelCurso)

// 6. Importa una clase.
const curso = new Curso("JavaScript")
console.log(curso.presentar())

// 7. Cada archivo solo puede tener una exportación por defecto.
// La función, la constante y la clase se exportan por defecto desde archivos distintos.

// 8. Importa la función, la constante y la clase exportadas por defecto.
console.log("Duplicar 4:", duplicar(4))
console.log("IVA:", IVA)
console.log("Producto:", new Producto("Cuaderno").nombre)

// 9. Importa elementos que se exportan desde una carpeta.
console.log(crearMensaje(mensajeInicial))
console.log(new Mensaje("Hola desde la carpeta uno").texto)

// 10. Importa elementos desde otro directorio.
console.log(crearAviso(avisoInicial))
console.log(new Aviso("Hola desde la carpeta dos").texto)