export function crearAviso(texto) {
    return `Aviso: ${texto}`
}

export const avisoInicial = "Exportado desde carpeta-dos"

export class Aviso {
    constructor(texto) {
        this.texto = texto
    }
}