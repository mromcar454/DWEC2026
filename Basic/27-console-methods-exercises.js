

// 10. Limpia los mensajes anteriores sin borrar los resultados de este ejercicio.
console.clear()

// 1. Utiliza error para comunicar un error.
function mostrarError(mensaje) {
	console.error("Error:", mensaje)
}

mostrarError("No se pudo completar la operación.")

// 2. Utiliza warn para mostrar una situación que requiere atención.
function mostrarAdvertencia(mensaje) {
	console.warn("Advertencia:", mensaje)
}

mostrarAdvertencia("El almacenamiento está casi lleno.")

// 3. Utiliza info para mostrar información general.
function mostrarInformacion(mensaje) {
	console.info("Información:", mensaje)
}

mostrarInformacion("La aplicación está lista.")

// 4. Muestra datos estructurados en una tabla.
const usuarios = [
	{ nombre: "Lucía", edad: 24 },
	{ nombre: "Pablo", edad: 31 }
]

console.table(usuarios)

// 5. Agrupa mensajes relacionados.
console.group("Usuario")
console.log("Nombre: Lucía")
console.log("Edad: 24")
console.groupEnd()

// 6. Mide cuánto tarda una operación.
console.time("Calcular suma")
const suma = Array.from({ length: 1000 }, (_, indice) => indice)
	.reduce((total, numero) => total + numero, 0)
console.timeEnd("Calcular suma")
console.log("Resultado:", suma)

// 7. La aserción solo muestra un mensaje si la condición es falsa.
const numero = 5
console.assert(numero > 0, "El número debe ser positivo.")

// 8. Cuenta las veces que se ejecuta una acción.
for (let intento = 0; intento < 3; intento++) {
	console.count("Intentos")
}

// 9. Muestra la pila de llamadas para facilitar la depuración.
function iniciarProceso() {
	registrarProceso()
}

function registrarProceso() {
	console.trace("Traza del proceso")
}

iniciarProceso()