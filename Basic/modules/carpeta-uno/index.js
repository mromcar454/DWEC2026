export function crearMensaje(texto) {
    return `Mensaje: ${texto}`
}

export const mensajeInicial = "Exportado desde carpeta-uno"

export class Mensaje {
    constructor(texto) {
        this.texto = texto
    }
}