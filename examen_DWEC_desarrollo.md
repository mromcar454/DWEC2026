# Examen práctico de Desarrollo Web en Entorno Cliente

Resuelve cada apartado redactando en papel el código JavaScript necesario. En los ejercicios que incluyan datos iniciales, utilízalos como punto de partida. Se valorarán la corrección, la claridad y el uso adecuado de la sintaxis solicitada. La puntuación total es de 10 puntos.

## 1. Tipos primitivos y variables (0,75 puntos)

Escribe un programa que declare variables para representar los siete tipos primitivos de JavaScript: `string`, `number`, `bigint`, `boolean`, `undefined`, `null` y `symbol`. Muestra el valor y el tipo de cada variable. Después, modifica una variable declarada con `let` por otro valor del mismo tipo y vuelve a mostrarla. Incluye también una constante y úsala sin intentar reasignarla.

## 2. Presupuesto de una compra (1,25 puntos)

Desarrolla un programa para calcular el importe de una compra con estos datos:

- Nombre del cliente: `"  Lucía Martín  "`
- Edad: `67`
- Correo: `"lucia@example.com"`
- Mes de compra: `7`
- Unidades: `4`
- Precio por unidad: `19.95`

El programa debe:

1. Limpiar los espacios exteriores del nombre y crear una etiqueta en mayúsculas con sus espacios sustituidos por guiones.
2. Aplicar un descuento del 10 % si se compran al menos 3 unidades y un 5 % adicional si la persona tiene 65 años o más. Los descuentos se suman y se aplican sobre el subtotal.
3. Calcular el IVA del 21 % sobre el importe después de los descuentos y el total final.
4. Indicar mediante `switch` la estación correspondiente al mes (1 a 12).
5. Comprobar si el correo contiene `"@"` y, mediante un operador ternario, indicar si la persona es mayor de edad.
6. Mostrar un resumen con los datos y los importes redondeados a dos decimales.

Emplea operadores aritméticos, asignación, comparación y lógicos en la solución.

## 3. Gestión de almacén con arrays, `Set` y `Map` (1,25 puntos)

Partiendo de este inventario de nombres:

```js
const productosIniciales = ["teclado", "ratón", "monitor", "ratón", "webcam"]
```

Redacta el código completo que:

1. Cree una copia del array; añada `"alfombrilla"` al principio y `"altavoces"` al final; y elimine el elemento que quede en tercera posición.
2. Cree un `Set` a partir del array, añada dos veces `"ratón"`, elimine `"webcam"` y compruebe si `"monitor"` está presente.
3. Convierta el `Set` en un array.
4. Cree un `Map` con las existencias: teclado (5), ratón (2), monitor (1), alfombrilla (8) y altavoces (3).
5. Recorra el mapa para calcular las unidades totales y crear un array con los productos que tengan menos de 3 unidades. Muestre también el tamaño del `Set` y consulte en el mapa las existencias del ratón.

## 4. Funciones para analizar datos (1,5 puntos)

Escribe las funciones necesarias para procesar estos datos:

```js
const numeros = [4, 11, 8, 3, 20]
const palabras = ["hola", "Mundo"]
const frase = "Desarrollo web"
```

La solución debe incluir:

1. Una función que devuelva la suma de los números pares del array.
2. Una función que devuelva el mayor número del array, o `null` si está vacío.
3. Una función que cuente las vocales de una cadena sin distinguir entre mayúsculas y minúsculas.
4. Una función de orden superior que reciba un array y una función de transformación, y devuelva un nuevo array con la transformación aplicada mediante `forEach`. Úsala para convertir las palabras a mayúsculas y para elevar los números al cuadrado.
5. Una función que invierta los caracteres de una cadena mediante un bucle.
6. Una función que calcule el factorial de un entero no negativo.

Invoca las funciones con los datos proporcionados y guarda sus resultados en variables.

## 5. Objetos, desestructuración y propagación (1 punto)

Con los siguientes datos:

```js
const empleado = {
    nombre: "Nora",
    edad: 29,
    puesto: "Desarrolladora",
    direccion: {
        ciudad: "Sevilla",
        codigoPostal: "41001"
    }
}

const tareas = ["revisar", "probar", "documentar"]
```

Redacta código que:

1. Recorra las propiedades del empleado y muestre cada clave y su valor.
2. Extraiga `nombre` y `puesto` mediante desestructuración, asignando a `puesto` el nombre de variable `rol`.
3. Extraiga la ciudad del objeto anidado mediante desestructuración.
4. Use un valor predeterminado en una propiedad inexistente llamada `departamento`.
5. Cree una copia del empleado con propagación y añada la propiedad `departamento: "Producto"`, sin modificar el objeto original.
6. Cree un nuevo array que incluya todas las tareas y `"publicar"` al final, sin modificar el array original.

## 6. Clases, encapsulación y herencia (1,5 puntos)

Implementa una clase `Cuenta` con:

- Una propiedad privada `#saldo`, inicializada en el constructor.
- Un getter `saldo` para consultar el saldo.
- Un método `ingresar(cantidad)` que solo acepte cantidades positivas.
- Un método estático `validarImporte(cantidad)` que devuelva `true` si la cantidad es positiva.

Implementa además una clase `CuentaAhorro` que herede de `Cuenta`, reciba un saldo inicial y un porcentaje de interés, y sobrescriba un método `resumen()` para devolver un texto con el saldo y el interés. Utiliza `super` correctamente. Crea una instancia, ingresa una cantidad y muestra el saldo y el resumen.

## 7. Validación y gestión de errores (1 punto)

Desarrolla una función `registrarEdad(valor)` que:

- Lance un `TypeError` si `valor` no es de tipo `number`.
- Lance un error personalizado `EdadInvalidaError` si el número no es entero o no está entre 0 y 120, inclusive.
- Devuelva el texto `"Edad registrada: <edad>"` si el valor es válido.

Escribe también el código que llame a la función dentro de `try...catch...finally`, diferencie el error personalizado del error de tipo y muestre un mensaje de finalización en `finally`.

## 8. Consola como herramienta de seguimiento (0,75 puntos)

Escribe un bloque de código de diagnóstico para estos registros:

```js
const usuarios = [
    { nombre: "Lucía", edad: 24 },
    { nombre: "Pablo", edad: 31 }
]
```

El bloque debe limpiar primero la consola y, a continuación, agrupar mensajes informativos, mostrar los usuarios en una tabla, comprobar con `console.assert` que todos tienen al menos 18 años, contar con una etiqueta las dos iteraciones de un bucle y medir con `console.time`/`console.timeEnd` el recorrido de los usuarios. Incluye también un aviso y una traza de llamadas desde una función.

## 9. Módulos ES: exportaciones e importaciones (1 punto)

Diseña dos módulos JavaScript:

1. En `utilidades.js`, exporta con nombre una función `sumar(a, b)` y una constante `IVA` con valor `0.21`. Exporta por defecto una función `duplicar(numero)`.
2. En `app.js`, importa las tres exportaciones, asignando el nombre `doble` a la exportación por defecto, calcula la suma de `12` y `8`, duplica el resultado y calcula el importe del IVA sobre `100`. Muestra los tres resultados.

# SOLUCIONARIO PARA EL PROFESORADO

## 1. Tipos primitivos y variables

```js
let texto = "DWEC"
let numero = 2
let grande = 12345678901234567890n
let activo = true
let sinAsignar
let nulo = null
let identificador = Symbol("identificador")
const curso = "Desarrollo Web"

console.log(texto, typeof texto)
console.log(numero, typeof numero)
console.log(grande, typeof grande)
console.log(activo, typeof activo)
console.log(sinAsignar, typeof sinAsignar)
console.log(nulo, typeof nulo)
console.log(identificador, typeof identificador)
console.log(curso, typeof curso)

numero = 3
console.log(numero, typeof numero)
```

`typeof null` devuelve `"object"` por una particularidad histórica de JavaScript; el valor `nulo` sigue siendo el primitivo `null`.

## 2. Presupuesto de una compra

```js
const nombre = "  Lucía Martín  ".trim()
const etiqueta = nombre.toUpperCase().replaceAll(" ", "-")
const edad = 67
const correo = "lucia@example.com"
const mes = 7
const unidades = 4
const precioUnidad = 19.95

const subtotal = unidades * precioUnidad
let porcentajeDescuento = 0

if (unidades >= 3 && edad >= 65) {
    porcentajeDescuento = 0.15
} else if (unidades >= 3) {
    porcentajeDescuento = 0.10
} else if (edad >= 65) {
    porcentajeDescuento = 0.05
}

const descuento = subtotal * porcentajeDescuento
const baseImponible = subtotal - descuento
const iva = baseImponible * 0.21
const total = baseImponible + iva

let estacion
switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "invierno"
        break
    case 3:
    case 4:
    case 5:
        estacion = "primavera"
        break
    case 6:
    case 7:
    case 8:
        estacion = "verano"
        break
    case 9:
    case 10:
    case 11:
        estacion = "otoño"
        break
    default:
        estacion = "mes no válido"
}

const correoValido = correo.includes("@")
const situacionEdad = edad >= 18 ? "mayor de edad" : "menor de edad"

console.log(`Cliente: ${nombre} (${etiqueta})`)
console.log(`Correo válido: ${correoValido}`)
console.log(`Situación: ${situacionEdad}; estación: ${estacion}`)
console.log(`Subtotal: ${subtotal.toFixed(2)} €`)
console.log(`Descuento: ${descuento.toFixed(2)} €`)
console.log(`IVA: ${iva.toFixed(2)} €`)
console.log(`Total: ${total.toFixed(2)} €`)
```

## 3. Gestión de almacén con arrays, `Set` y `Map`

```js
const productosIniciales = ["teclado", "ratón", "monitor", "ratón", "webcam"]

const productos = [...productosIniciales]
productos.unshift("alfombrilla")
productos.push("altavoces")
productos.splice(2, 1)

const productosUnicos = new Set(productos)
productosUnicos.add("ratón")
productosUnicos.add("ratón")
productosUnicos.delete("webcam")

const contieneMonitor = productosUnicos.has("monitor")
const listaUnica = Array.from(productosUnicos)

const existencias = new Map([
    ["teclado", 5],
    ["ratón", 2],
    ["monitor", 1],
    ["alfombrilla", 8],
    ["altavoces", 3]
])

let unidadesTotales = 0
const pocasExistencias = []

for (const [producto, unidades] of existencias) {
    unidadesTotales += unidades
    if (unidades < 3) {
        pocasExistencias.push(producto)
    }
}

console.log(productos)
console.log("¿Está el monitor?", contieneMonitor)
console.log("Lista sin duplicados:", listaUnica)
console.log("Tamaño del Set:", productosUnicos.size)
console.log("Unidades totales:", unidadesTotales)
console.log("Menos de 3 unidades:", pocasExistencias)
console.log("Existencias de ratón:", existencias.get("ratón"))
```

## 4. Funciones para analizar datos

```js
const numeros = [4, 11, 8, 3, 20]
const palabras = ["hola", "Mundo"]
const frase = "Desarrollo web"

function sumaPares(array) {
    let suma = 0
    for (const numero of array) {
        if (numero % 2 === 0) {
            suma += numero
        }
    }
    return suma
}

function mayor(array) {
    if (array.length === 0) {
        return null
    }

    let maximo = array[0]
    for (const numero of array) {
        if (numero > maximo) {
            maximo = numero
        }
    }
    return maximo
}

function contarVocales(cadena = "") {
    let total = 0
    for (const caracter of cadena.toLowerCase()) {
        if ("aeiou".includes(caracter)) {
            total++
        }
    }
    return total
}

function transformarArray(array, transformacion) {
    const resultado = []
    array.forEach((elemento) => resultado.push(transformacion(elemento)))
    return resultado
}

function invertirCadena(cadena) {
    let invertida = ""
    for (const caracter of cadena) {
        invertida = caracter + invertida
    }
    return invertida
}

function factorial(numero) {
    let resultado = 1
    for (let i = 2; i <= numero; i++) {
        resultado *= i
    }
    return resultado
}

const resultadoSumaPares = sumaPares(numeros)
const resultadoMayor = mayor(numeros)
const totalVocales = contarVocales(frase)
const palabrasMayusculas = transformarArray(palabras, (palabra) => palabra.toUpperCase())
const numerosAlCuadrado = transformarArray(numeros, (numero) => numero ** 2)
const fraseInvertida = invertirCadena(frase)
const factorialDeCinco = factorial(5)
```

## 5. Objetos, desestructuración y propagación

```js
const empleado = {
    nombre: "Nora",
    edad: 29,
    puesto: "Desarrolladora",
    direccion: {
        ciudad: "Sevilla",
        codigoPostal: "41001"
    }
}

const tareas = ["revisar", "probar", "documentar"]

for (const clave in empleado) {
    console.log(`${clave}: ${empleado[clave]}`)
}

const { nombre, puesto: rol, departamento = "Sin asignar" } = empleado
const { direccion: { ciudad } } = empleado

const empleadoActualizado = {
    ...empleado,
    departamento: "Producto"
}

const nuevasTareas = [...tareas, "publicar"]

console.log(nombre, rol, ciudad, departamento)
console.log(empleadoActualizado)
console.log(empleado)
console.log(nuevasTareas)
console.log(tareas)
```

## 6. Clases, encapsulación y herencia

```js
class Cuenta {
    #saldo

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial
    }

    get saldo() {
        return this.#saldo
    }

    ingresar(cantidad) {
        if (Cuenta.validarImporte(cantidad)) {
            this.#saldo += cantidad
        }
    }

    static validarImporte(cantidad) {
        return cantidad > 0
    }

    resumen() {
        return `Saldo: ${this.#saldo.toFixed(2)} €`
    }
}

class CuentaAhorro extends Cuenta {
    constructor(saldoInicial, interes) {
        super(saldoInicial)
        this.interes = interes
    }

    resumen() {
        return `${super.resumen()}; interés: ${this.interes}%`
    }
}

const cuenta = new CuentaAhorro(100, 2.5)
cuenta.ingresar(50)
console.log(cuenta.saldo)
console.log(cuenta.resumen())
```

## 7. Validación y gestión de errores

```js
class EdadInvalidaError extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.name = "EdadInvalidaError"
    }
}

function registrarEdad(valor) {
    if (typeof valor !== "number") {
        throw new TypeError("La edad debe ser un número.")
    }

    if (!Number.isInteger(valor) || valor < 0 || valor > 120) {
        throw new EdadInvalidaError("La edad debe ser un entero entre 0 y 120.")
    }

    return `Edad registrada: ${valor}`
}

try {
    console.log(registrarEdad(25))
} catch (error) {
    if (error instanceof EdadInvalidaError) {
        console.error("Edad no válida:", error.message)
    } else if (error instanceof TypeError) {
        console.error("Tipo de dato no válido:", error.message)
    } else {
        throw error
    }
} finally {
    console.info("Finalizada la operación de registro.")
}
```

## 8. Consola como herramienta de seguimiento

```js
const usuarios = [
    { nombre: "Lucía", edad: 24 },
    { nombre: "Pablo", edad: 31 }
]

console.clear()
console.group("Diagnóstico de usuarios")
console.info(`Usuarios cargados: ${usuarios.length}`)
console.table(usuarios)

for (const usuario of usuarios) {
    console.assert(usuario.edad >= 18, `${usuario.nombre} debe tener al menos 18 años.`)
}

console.time("Recorrido de usuarios")
for (const usuario of usuarios) {
    console.count("Usuarios procesados")
    console.log(`Procesado: ${usuario.nombre}`)
}
console.timeEnd("Recorrido de usuarios")

console.warn("Comprobación informativa finalizada.")

function iniciarDiagnostico() {
    registrarDiagnostico()
}

function registrarDiagnostico() {
    console.trace("Traza del diagnóstico")
}

iniciarDiagnostico()
console.groupEnd()
```

## 9. Módulos ES: exportaciones e importaciones

`utilidades.js`:

```js
export function sumar(a, b) {
    return a + b
}

export const IVA = 0.21

export default function duplicar(numero) {
    return numero * 2
}
```

`app.js`:

```js
import doble, { sumar, IVA } from "./utilidades.js"

const suma = sumar(12, 8)
const resultadoDuplicado = doble(suma)
const importeIVA = 100 * IVA

console.log("Suma:", suma)
console.log("Resultado duplicado:", resultadoDuplicado)
console.log("IVA sobre 100:", importeIVA)
```


