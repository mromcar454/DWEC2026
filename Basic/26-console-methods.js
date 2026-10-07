
// Console

// log

console.log("¡Hola, JavaScript!")

// Es el método más utilizado para imprimir mensajes informativos generales o comprobar el valor de variables durante el desarrollo. No aplica ningún filtro o color especial por defecto.

// error

// Se utiliza para notificar fallos o excepciones.

//Visual: En la consola del navegador se muestra resaltado en color rojo, generalmente acompañado de un icono de error (❌).

// Stack Trace: Si le pasas un objeto de tipo new Error(), además del mensaje mostrará la traza completa de llamadas (stack trace) para indicar exactamente en qué archivo y línea ocurrió el problema.

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

// Muestra avisos o advertencias sobre situaciones que no detienen la ejecución del programa, pero que requieren atención (como el uso de librerías obsoletas o parámetros poco seguros).

// Visual: Se muestra en color amarillo o naranja con un icono de advertencia (⚠️).

console.warn("Este es un mensaje de advertencia.")

// info

// Muestra mensajes de carácter informativo.

// Diferencia con log: En la práctica es casi idéntico a console.log(), pero en algunos entornos o navegadores incluye un icono de información (ℹ️) o permite filtrar la consola específicamente para ver solo los registros de tipo "Info".

console.info("Este es un mensaje de información adicional.")

// table

// Formatea y muestra datos estructurados (como arrays u objetos) en una tabla visual con filas y columnas. Es mucho más cómodo de leer que un console.log() tradicional.

// Con arrays bidimensionales (matriz):
// Usa los índices numéricos como encabezados de columna (0, 1).

let data = [
    ["Ortiz", 37],
    ["Sara", 21]
]

console.table(data)


// Con arrays de objetos:
// Toma el nombre de cada propiedad (name, age) y los convierte automáticamente en las columnas de la tabla.

data = [
    { name: "Ortiz", age: 37 },
    { name: "Sara", age: 21 }
]

console.table(data)

// group

// Sirven para agrupar y organizar visualmente los mensajes en la consola de desarrollador mediante sangrías (indentación) y bloques desplegables.

console.group("Usuario:")
console.log("Nombre: Ortiz")
console.log("Edad: 37")
console.groupEnd()

// time

/*console.time() y console.timeEnd() sirven para medir con precisión cuánto tarda en ejecutarse un bloque de código (medido en milisegundos). Es una herramienta esencial para evaluar el rendimiento y optimizar tu programa.

¿Cómo funcionan?
console.time("etiqueta"): Inicia un temporizador interno identificado por una etiqueta o nombre en texto.

console.timeEnd("etiqueta"): Detiene el temporizador correspondiente a esa misma etiqueta y muestra en la consola el tiempo exacto transcurrido desde que comenzó.

Puedes tener varios temporizadores activos de forma simultánea, siempre que tengan nombres o etiquetas distintas.
*/

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

// assert


/*
Aserción viene de afirmación: es una declaración o condición que el programador asume que siempre es verdadera en un punto concreto del código.
console.assert() evalúa una condición lógica y muestra un mensaje de error únicamente si la condición es falsa. 
Si la condición es verdadera, no hace nada y el código continúa en silencio.

Características clave de console.assert()
Solo actúa ante el fallo: Sirve para validar suposiciones en tu código. Es equivalente a escribir un if (!condicion) console.error(...).

No detiene la ejecución: A diferencia de las afirmaciones (assertions) en otros lenguajes de programación o entornos de pruebas, console.assert en JavaScript no interrumpe la ejecución del programa ni lanza una excepción; solo imprime la alerta en la consola.

Uso principal: Se utiliza durante la etapa de desarrollo y depuración para comprobar rápidamente que ciertas variables o estados del programa tengan los valores esperados.

*/
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad.")

// count

/*
Servirán para contar cuántas veces se ejecuta una línea de código asociada a una etiqueta específica.

console.count("etiqueta"): Incrementa en 1 el contador con ese nombre y muestra el valor en consola. Si la etiqueta no existe, la crea con valor 1.

console.countReset("etiqueta"): Reinicia a cero el contador correspondiente a esa etiqueta.

Salida en consola de tu código:
*/

console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace

/*
Muestra una traza de la pila de llamadas (stack trace). Revela la ruta exacta de funciones por las que ha pasado el programa hasta llegar al punto donde se llamó a console.trace().

Se lee de abajo hacia arriba en orden cronológico:

El programa principal llamó a funcA().

Dentro de funcA(), se llamó a funcB().

Dentro de funcB(), se ejecutó console.trace().

Uso práctico: Es imprescindible para depurar cuando tienes una función reutilizable que se invoca desde múltiples partes de tu aplicación y necesitas saber quién la ha llamado exactamente y con qué flujo de ejecución llegó hasta ahí.


*/

function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecución.")
}

funcA()

// clear

/*

borra todos los mensajes e historial impresos previamente en la consola.

Detalles importantes sobre su comportamiento:
En el navegador: Limpia la pantalla dejando la consola vacía o mostrando un aviso informativo como "Console was cleared" (La consola ha sido limpiada).

En Node.js / Terminal: Limpia la ventana de la terminal de comandos donde se esté ejecutando el script.

Un detalle a tener en cuenta (Ajustes del navegador)
En las herramientas de desarrollo de navegadores como Chrome o Firefox, existe una opción en la configuración de la consola llamada "Preserve log" (Conservar registro).

Si esa casilla está activada, el navegador ignorará la llamada a console.clear() para evitar que un script borre información importante mientras depuras tu código.
*/

// console.clear()