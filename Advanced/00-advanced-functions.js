// Ciudadanos de primera clase

// Significa que tienen los mismos derechos y privilegios que por ejemplo cualquier variable

function greet(name) {
    console.log(`Hola, ${name}`)
}

function bye(name) {
    console.log(`Adiós, ${name}`)
}

greet("Miguel")

const greet3 = function (name) {
    console.log(`Hola, ${name}`)
}

const greet5 = greet

greet3("Miguel Romero")
greet5("Miguel Romero 5")

// Pasar función como parámetro

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

processGreeting(greet, "María")
processGreeting(bye, "María")


// Función podría retornar otra función

function returnGreeting(){
    // aquí no le pasamos los parámetros a la función, sino que devolvemos o retornamos la función completa
    return greet
}

const greet6 = returnGreeting()
greet6("Antonio")

// Arrow functions avanzadas

// Retorno implícito

const multiply = (a, b) => a * b
console.log(multiply(2,5))

// this léxico

const handler = {
    name: "María",
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting()
// Cuidado con arrow function, el ámbtio cambia y no se puede acceder a las propiedades el objeto
handler.arrowGreeting()


const handler2 = {
    name: "María",
    greeting () {
        console.log(`Hola, ${this.name}`)
    }
}

handler2.greeting();


// IIFE - (Inmediatly Invoque Function Expression - Expresión de Función Invocada Inmediatamente)


// No es necesario ponerle nombre a la función porque se va a ejecutar inmediatamente
(function () {
    console.log(`IIFE clásica`)
})();

(function (name) {
    console.log(`IIFE clásica - hola ${name}`)
})("Antonio");

(() => {
    console.log(`IIFE con arrow function`)
})();


// Parámetros Rest

function sum1(...numbers) {
    console.log(numbers)
}


// Fijaros, que mete el resultado en un array 
sum1(1,2,3,4,5) // [1,2,3,4,5]
sum1(1,2,3) // [1,2,3]
sum1(1,2,3,4,5,6,7,8,9) // [1,2,3,4,5,6,7,8,9]
sum1([1,2,3,4,5]) // [ [ 1, 2, 3, 4, 5 ] ]


function sum(...numbers) {
   let result = 0
   for (let number of numbers) {
        result += number
   }
   return result
}

console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1,1, 2,3)) // 6
console.log(sum(1,2,3,4,5,6,7,8,9)) // 45
console.log(sum([1,2,3,4,5])) // 01,2,3,4,5


// Operador Spread (...)

const numbers = [1, 2, 3]
function sumWithSpread(a,b,c) {
    return a + b +c
}

console.log(sumWithSpread(1, 2, 3)) // Sin Spread
console.log(sumWithSpread(...numbers)) // Con Spread, lo expande
console.log(sumWithSpread(numbers[0], numbers[1], numbers[2])) // Sin Spread

// Combinamos Rest y Spread en funciones
const numbers2 = [5, 7, 9, 11, 13, 15, 8]
console.log(sum(...numbers2))

// Clousures (Clausuras)

function createCounter1(){
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

createCounter1()
createCounter1()

function createCounter2(){
    let counter = 0
    function executeCounter() {
        counter++
        console.log(`Contador: ${counter}`)
    }
    executeCounter()
}

const counter2 = createCounter2()
// Error nos dice que counter no es una función porque no devuelve un return
// counter2()


function createCounter(){
    let counter = 0
    return function() {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter()
counter()
counter()
counter()


const counter3 = createCounter()
counter3()
counter3()
counter3()
counter3()



// Recursividad
/*
 La recursividad intenta descomponer un problema grande en un versión IDÉNTICA pero más pequeña
 hasta llegar a un caso tan simple que se resuelve directamente. IMPORTANTE, SIEMPRE debe haber un 
 caso simple o caso base.

4! = 4 * 3 * 2 * 1
4! = 4 * 3! // Funciones IDÉNTICAS (más pequeñas)
3! = 3 * 2! // Funciones IDÉNTICAS (más pequeñas)
2! = 2 * 1! // Funciones IDÉNTICAS (más pequeñas)
1! = 1 // Caso base
*/
// Implementación en JavaScript

function factorial(n) {
    // 1. CASO BASE. La condición de parada
    if (n === 0 ||  n === 1) {
        return 1
    }
    return n * factorial(n-1) // Llamada a funciones idénticas
}
console.log(factorial(4))


// Comparación con implementación iterativa:
function factorialIterativo(n) {
  let resultado = 1;

  for (let i = 2; i <= n; i++) {
    resultado *= i; // Multiplica acumulando el resultado
  }

  return resultado;
}

console.log(factorialIterativo(4));

// Potencia de un número (potencia(base, exponente))


// 2^3 = 2 * 2^2 // Funciones IDÉNTICAS (más pequeñas)
// 2^2 = 2 * 2^1 // Funciones IDÉNTICAS (más pequeñas)
// 2^1 = 2 * 2^0 // Funciones IDÉNTICAS (más pequeñas)
// 2^0 = 1 // Caso base
// Objetivo: Elevar un número a una potencia entera sin usar Math.pow() ni el operador **.
function potencia(base, exponente){
    if (exponente === 0){
        return 1
    }
    return base * potencia(base, exponente-1)
}

console.log(potencia(2,5))

// 3. La Pila de Llamadas (Call Stack): Viaje de Ida y Vuelta
// 
// Fase 1: La Fase de Expansión (Viaje de Ida / "Poner platos en la pila")
// Cada llamada queda en pausa esperando la respuesta de la siguiente:
// factorial(4) evalúa 4 * factorial(3) -> Pausa. Llama a factorial(3)
// factorial(3) evalúa 3 * factorial(2) -> Pausa. Llama a factorial(2)
// factorial(2) evalúa 2 * factorial(1) -> Pausa. Llama a factorial(1)
// factorial(1) detecta el caso base (n === 1) y devuelve 1.
// 
// Fase 2: La Fase de Extracción (Viaje de Vuelta / "Desapilar")
// 
// Los resultados se devuelven hacia arriba:
// factorial(1) retorna 1.
// factorial(2) reanuda: 2 x 1 = 2.
// factorial(3) reanuda: 3 x 2 = 6.
// factorial(4) reanuda: 4 x 6 = 24.
// 

// 4. Puntos clave 
// Toda función recursiva necesita dos partes obligatorias:
// Caso base: La salida de emergencia. Sin él, la función se llama infinitamente hasta
// provocar un error (RangeError: Maximum call stack size exceeded).
// Caso recursivo: El paso que reduce la distancia hacia el caso base
// (siempre debe avanzar restando o dividiendo, ej. n - 1).
// 
// Comparación con el bucle for: La recursividad no usa variables de estado externas ni índices explícitos;
// confía en el propio contexto de ejecución de las funciones para guardar el estado temporal.




/*

// Ejercicio 1: Suma acumulativa hasta N (suma(n))

Objetivo: Calcular la suma de todos los números enteros desde 1 hasta n.
Suma(4) = 4 + 3 + 2 + 1
Suma(4) = 4 + Suma(3)
Suma(3) = 3 + Suma(2)
Suma(2) = 2 + Suma(1)
Suma(1) = 1 // Caso base


*/

function suma(n) {
    // 1. CASO BASE: Si n es 1, la suma es simplemente 1
    if (n === 1) {
        return 1;
    }
    // 2. LLAMADA RECURSIVA: Sumamos n a la suma de (n - 1)
    return n + suma(n - 1);
}

console.log(suma(4)); // Resultado: 10 (4 + 3 + 2 + 1)

// Sumar los elementos de un Array (sumarArray(arr))

// Objetivo: Sumar todos los elementos de un array numérico.
/*
sumarArray([10,2,30,4]) = 10 + sumarArray ([2,30,4])
sumarArray([2,30,4]) = 2 + sumarArray ([30,4])
sumarArray([30,4]) = 30 + sumarArray ([4])
sumarArray([4]) = 4 + sumarArray ([])
sumarArray([]) = 0 // Caso base
*/

function sumarArray(arr) {
    // 1. CASO BASE
    if (arr.length === 0 ) {
        return 0
    }
    // 2. LLAMADA RECURSIVA
    // return arr[0] + sumarArray(arr.slice(1)) 
    let [primerElemento, ...resto] = arr
    return primerElemento + sumarArray(resto)

}

console.log(sumarArray([10,2,30,4]))

// Invertir una cadena de texto (invertirCadena(str))
// Objetivo: Invertir los caracteres de un texto sin usar .reverse().



// Sucesión de Fibonacci (`fibonacci(n)`)
// **Objetivo:** Obtener el n-ésimo número de la secuencia de Fibonacci 


// Funciones parciales

// Una función parcial es una técnica de programación que consiste 
// en fijar previamente uno o más argumentos de la función original
// devolviendo una nueva función que acepta los argumentos restantes


function parcialSum(a) {
    return function (b,c) {
        return sum(a,b,c)
    }
}

const sumWith = parcialSum(4)
console.log(sumWith(2, 3))
console.log(sumWith(1, 2))




// Fijamos el valor de a, por ejemplo a 5
const sumarConCinco = parcialSum(5)

// Ejecutamos pasando b y c
const resultado1 = sumarConCinco(2,3)
const resultado2 = sumarConCinco(10,20)

console.log(resultado1)
console.log(resultado2)

// Llamada encadenada
const resultado = parcialSum(5)(10,20)
console.log(resultado)

// Calculador de Descuentos Parciales
// Crea una función llamada crearDescuento que reciba un porcentaje de descuento fijo
// (por ejemplo, 15 para un 15%) 
// y devuelva una función que tome el precio unitario de un producto y la cantidad comprada,
//  retornando el total a pagar tras aplicar el descuento.

function calcularTotal(porcentaje,precio,cantidad){
    const subtotal = precio * cantidad
    const totalDecuento = subtotal * (porcentaje/100)
    return subtotal - totalDecuento
}

function crearDescuento(porcentaje) {
       return function (precio,cantidad) {
        return calcularTotal(porcentaje,precio,cantidad)
    }
}



const total = crearDescuento(15)(30,3)
console.log(`El total con descuento es ${total}`)
const total2 = crearDescuento(15)(45,30)
console.log(`El total con descuento es ${total2}`)
const total3 = crearDescuento(15)(105,5)
console.log(`El total con descuento es ${total3}`)

const totalBF = crearDescuento(20)(30,3)
console.log(`El total con descuento es ${totalBF}`)
const totalCD = crearDescuento(20)
console.log(totalCD(5,10))



// Curryng o Acarreo

function currySum(a) {
    return function (b){
        return function (c) {
            return function (d) {
                return sum(a,b,c,d)
            }
        }
    }
}

console.log(currySum(1)(2)(3)(4))

const sumAB = currySum(1)

const sumC = sumAB(3)

console.log(sumC(3))
console.log(sumC(4))
console.log("Estamos aquí")
console.log(sumAB(5)(7))

// Currying con sintaxis 

const calculateTotal = (taxRate) => (shippingCost) => (price) => price + (price * taxRate) + shippingCost


// 1. Preconfiguramos la tasa de IVA (ej. 21% para España)
const calculateSpainTotal = calculateTotal(0.21);

// 2. Preconfiguramos una tarifa de envío estándar (5€)
const calculateStandardSpainTotal = calculateSpainTotal(5);

// 3. Calculamos el total para diferentes precios de productos
console.log(calculateStandardSpainTotal(100)); // 100 + 21 (IVA) + 5 (envío) = 126
console.log(calculateStandardSpainTotal(50));  // 50 + 10.5 (IVA) + 5 (envío) = 65.5

// También podemos reocupar 'calculateSpainTotal' con envío exprés (10€)
const calculateExpressSpainTotal = calculateSpainTotal(10);

console.log(calculateExpressSpainTotal(100)); // 100 + 21 (IVA) + 10 (envío exprés) = 131

// Callbacks


function sum4(...numbers) {
   let result = 0
   for (let number of numbers) {
        result += number
   }
   return result
}

function processData(data, callback) {
    console.log(sum4(...data))
}


function processData2(data, callback) {
    const result = sum4(...data)
    callback(result)
}

function processResult(data){
    console.log(data)
}

function processResult2(data){
    console.log(`El resultado de los datos suministrados son ${data}`)
}


processData2([1,2,3], processResult)
processData2([1,2,3], processResult2)

processData2([1,2,3], (data) => {
    console.log(`El resultado de los datos suministrados son ${data}`)
})
