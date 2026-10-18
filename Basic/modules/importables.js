export function saludar(nombre) {
    return `Hola, ${nombre}.`
}

export const nombreDelCurso = "Desarrollo web en entorno cliente"

export class Curso {
    constructor(nombre) {
        this.nombre = nombre
    }

    presentar() {
        return `Curso: ${this.nombre}`
    }
}