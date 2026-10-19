// Console

// log

console.log("¡Hola, Javascript!")

// Es el método más utilizado para imprimir mensajes informativos generales
// o comprobar el valor de variables durante el desarrollo. No aplica ningún filtro o color especial por defecto.


// error
// Se utiliza para notificar fallos o excepciones.


// Visualmente: En la consola del navegador se muestra resaltado en color rojo, 
// generalmente acompañado de un icono de error (❌).

// Stack Trace: Si le pasas un objeto de tipo new Error(), 
// además del mensaje mostrará la traza completa de llamadas (stack trace) para indicar exactamente en qué archivo y 
// línea ocurrió el problema.

console.error("Este es un mensaje de error.")
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn

// Muestra avisos o advertencias sobre situaciones que no detienen la ejecución del programa, 
// pero que requieren atención (como el uso de librerías obsoletas o parámetros poco seguros).

// Visual: Se muestra en color amarillo o naranja con un icono de advertencia (⚠️).

console.warn("Este es un mensaje de advertencia")


// info
// Muestra mensajes de carácter informativo.

// Diferencia con log: En la práctica es casi idéntico a console.log(), 
// pero en algunos entornos o navegadores incluye un icono de información (ℹ️) 
// o permite filtrar la consola específicamente para ver solo los registros de tipo "Info".

console.info("Este es un mensaje de información adicional")


// table

// Formatea y muestra datos estructurados (como arrays u objetos)
// en una tabla visual con filas y columnas.
//  Es mucho más cómodo de leer que un console.log() tradicional.

// Con arrays bidimensionales (matriz):
// Usa los índices numéricos como encabezados de columna (0, 1).


let data = [
    ["1DAW", 20]
    ["2DAW", 70]
]

console.table(data)

data = [
    { clase: "1DAW", alumnos: 20},
    { clase: "2DAW", alumnos: 7}
]

console.table(data)



// group

// Sirven para agrupar y organizar visualmente los mensajes en la consola de desarrollador 
// mediante sangrías y bloques desplegables.

console.group("1DAW")
// implementamos código y sigue agrupando
console.log("tiene 20 alumnos, algunos repetidores")
// implementamos código y sigue agrupando
console.log("la media de edad es de 19 años")
console.groupEnd() // para terminar


// Otro ejemplo
console.group("2DAW")
console.log("tiene 7 alumnos, ningún repetidor")
console.log("la media de edad es de 22 años")
console.groupEnd()



// time

console.time("Tiempo de ejecución 1")

for (let i=0; i< 1000000000; i++){

}
console.timeEnd("Tiempo de ejecución 1")

console.time("Tiempo de ejecución 2")
for (let i=0; i< 1000000000; i++){

}

console.timeEnd("Tiempo de ejecución 2")


// assert

/*
Aserción viene de afirmación: es una declaración o 
condición que el programador asume que siempre es verdadera en un punto concreto del código.
console.assert() evalúa una condición lógica y muestra un mensaje de error únicamente si la condición es falsa. 
Si la condición es verdadera, no hace nada y el código continúa en silencio.

Características clave de console.assert()
Solo actúa ante el fallo: Sirve para validar suposiciones en tu código. 
Es equivalente a escribir un if (!condicion) console.error(...).

No detiene la ejecución: A diferencia de las afirmaciones (assertions) en otros lenguajes de programación o 
entornos de pruebas, console.assert en JavaScript no interrumpe la ejecución del programa ni lanza una excepción; 
solo imprime la alerta en la consola.

Uso principal: Se utiliza durante la etapa de desarrollo y depuración para comprobar rápidamente que ciertas variables
 o estados del programa tengan los valores esperados.

*/


let age = 18

console.assert(age >=18, "El usuario debe ser mayor de edad")

// count


console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

for (let i=0; i< 10; i++){
    console.count("Click")
}
console.countReset("Click")


// trace

// Muestra una traza de la pila de llamadas (stack trace).
// Revela la ruta exacta de funciones por las que ha pasado el programa

function funcA(){
    funcB()
}


function funcB(){
    funcC()
}

function funcC(){
    console.trace("Seguimos la ejecución")
}


funcA()


// clear


/*

Borra todos los mensajes e historial impresos previamente en la consola.

Detalles importantes sobre su comportamiento:
En el navegador: Limpia la pantalla dejando la consola vacía o mostrando un aviso informativo como
"Console was cleared" (La consola ha sido limpiada).

En Node.js / Terminal: Limpia la ventana de la terminal de comandos donde se esté ejecutando el script.

Un detalle a tener en cuenta (Ajustes del navegador)
En las herramientas de desarrollo de navegadores como Chrome o Firefox, 
existe una opción en la configuración de la consola llamada "Preserve log" (Conservar registro).

Si esa casilla está activada, el navegador ignorará la llamada a console.clear() 
para evitar que un script borre información importante mientras depuras tu código.
*/


console.clear()

