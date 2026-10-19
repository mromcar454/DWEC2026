

// 1. Crea un función que utilice error correctamente

function mostrarError(mensaje) {
	console.error("Error:", mensaje)
}

mostrarError("No se pudo completar la operación.")

// 2. Crea una función que utilice warn correctamente

function mostrarAdvertencia(mensaje) {
	console.warn("Advertencia:", mensaje)
}

mostrarAdvertencia("El almacenamiento está casi lleno.")

// 3. Crea una función que utilice info correctamente

function mostrarInformacion(mensaje) {
	console.info("Información:", mensaje)
}

mostrarInformacion("La aplicación está lista.")

// 4. Utiliza table

const usuarios = [
	{ nombre: "Lucía", edad: 24 },
	{ nombre: "Pablo", edad: 31 }
]

console.table(usuarios)

// 5. Utiliza group

console.group("Usuario")
console.log("Nombre: Lucía")
console.log("Edad: 24")
console.groupEnd()

// 6. Utiliza time

console.time("Calcular suma")
const suma = Array.from({ length: 1000 }, (_, indice) => indice)
	.reduce((total, numero) => total + numero, 0)
console.timeEnd("Calcular suma")
console.log("Resultado:", suma)


// 7. Valida con assert si un número es positivo

const numero = 5




console.assert(numero > 0, "El número debe ser positivo.")


// 8. Utiliza count

for (let intento = 0; intento < 3; intento++) {
	console.count("Intentos")
}


// 9. Utiliza trace

function iniciarProceso() {
	registrarProceso()
}

function registrarProceso() {
	console.trace("Traza del proceso")
}

iniciarProceso()

// 10. Utiliza clear

console.clear()


