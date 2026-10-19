// Módulos externos

// const os = require("os")

// Opción 1: Importar todo el módulo como un objeto.
import os from "node:os"

console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())

// Opción 2: Importación nombrada
import {platform, arch, totalmem, freemem} from "node:os"

console.log(platform())
console.log(arch())
console.log(totalmem())
console.log(freemem())

// Para que Node.js te permita usar import en lugar de require,
// debes habilitar el soporte de módulos ECMAScript 
// mediante una de estas dos opciones:

// 1.- En el package.json (Recomendado): Añade la propiedad "type": "module" en la raíz de tu proyecto:

JSON
{
  "type": "module"
}
// 2.-  Cambiando la extensión:
//  Renombra tu archivo de .js a .mjs (por ejemplo, app.mjs).







