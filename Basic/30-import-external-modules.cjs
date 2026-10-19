
// Módulos externos

/*
Los módulos externos o módulos del entorno son librerías de código que no forman parte del núcleo del lenguaje JavaScript nativo (como Math, Array o Date), sino que son proporcionados por el entorno de ejecución donde corre tu código (como Node.js) o por la comunidad de desarrolladores.


Tipos de módulos fuera del JS nativo
Módulos del Core (Nativos de Node.js):

Vienen preinstalados con Node.js.

Ejemplo del código: const os = require("os") importa el módulo del sistema operativo.

Otros ejemplos comunes: fs (para leer y escribir archivos en el disco), path (para manejar rutas de carpetas) o http (para crear servidores web).

No requieren instalación: Solo los importas y los usas.

Módulos de Terceros (Paquetes de NPM):

Son librerías creadas por otros desarrolladores o empresas para resolver problemas comunes (express, axios, react, etc.).

Se descargan e instalan mediante un gestor de paquetes como npm (npm install express).

Se guardan en una carpeta llamada node_modules dentro de tu proyecto.

¿Qué hace exactamente el módulo os en tu código?
JavaScript en el navegador no tiene permiso para consultar las especificaciones del hardware de la máquina por razones de seguridad. En cambio, en Node.js, el módulo os permite interactuar directamente con el sistema operativo:

os.platform(): Devuelve la plataforma del sistema operativo (p. ej., win32, darwin para macOS, linux).

os.arch(): Devuelve la arquitectura del procesador (p. ej., x64, arm64).

os.totalmem(): Muestra la cantidad total de memoria RAM del sistema en bytes.

os.freemem(): Muestra la cantidad de memoria RAM libre disponible en bytes.

Nota sobre la sintaxis: require vs import
En tu ejemplo anterior usaste import / export (sistema ES Modules, estándar moderno de JS).
En este ejemplo usas const os = require("os") (sistema CommonJS, el estándar tradicional de Node.js).

Ambos sirven para lo mismo (importar código de otro lado), pero hoy en día Node.js también permite usar import agregando "type": "module" en tu archivo package.json o usando la extensión .mjs.
*/


const os = require("os")

console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem())
console.log(os.freemem())




// Para importar el módulo os usando la sintaxis moderna de ES Modules (import) en lugar de require, puedes hacerlo directamente así:

// Opción 1: Importar todo el módulo como un objeto
import os from "node:os"

console.log(os.platform())
console.log(os.arch())
// También puedes importar solo las funciones específicas que vayas a usar:


// Opción 2: Importación nombrada
import { platform, arch, totalmem, freemem } from "node:os"

console.log(platform())
console.log(arch())
console.log(totalmem())
console.log(freemem())
// Buena práctica: Usar el prefijo node: (como en "node:os") es la convención moderna recomendada en Node.js.
// Le indica explícitamente al entorno que es un módulo nativo del sistema y evita conflictos con paquetes instalados. Aunque escribir "os" a secas también funciona, se prefiere "node:os".

// Requisito para que funcione en Node.js
// Para que Node.js te permita usar import en lugar de require, debes habilitar el soporte de módulos ECMAScript 
// mediante una de estas dos opciones:

// 1.- En el package.json (Recomendado): Añade la propiedad "type": "module" en la raíz de tu proyecto:

JSON
{
  "type": "module"
}
// 2.-  Cambiando la extensión: Renombra tu archivo de .js a .mjs (por ejemplo, app.mjs).

