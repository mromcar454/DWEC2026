// 1. Crea una función que retorne a otra función
function crearSaludador(saludo) {
    return function(nombre) {
        console.log(`${saludo}, ${nombre}!`);
    };
}

const saludarEnEspanol = crearSaludador("Hola");
saludarEnEspanol("Carlos"); // "Hola, Carlos!"

// 2. Implementa una función currificada que multiplique 3 números
const multiplicarTres = (a) => (b) => (c) => a * b * c;

// Ejemplo de uso:
console.log(multiplicarTres(2)(3)(4)); // 24


// función currificada es una técnica de la programación funcional que consiste en transformar una función que acepta múltiples argumentos
// en una secuencia de funciones anidadas, donde cada una de ellas recibe un único argumento.

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números
// (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total * multiplier;
}

// Ejemplo de uso:
console.log(sumManyTimes(2, 1, 2, 3)); // (1 + 2 + 3) * 2 = 12
console.log(sumManyTimes(3, 10, 20));  // (10 + 20) * 3 = 90

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los
// números que se le pasan a una función

function sumarYProcesar(callback, ...numbers) {
    let sumaTotal = 0;
    for (let num of numbers) {
        sumaTotal += num;
    }
    callback(sumaTotal);
}

// Ejemplo de uso:
sumarYProcesar((resultado) => {
    console.log(`El resultado final de la suma es: ${resultado}`);
}, 5, 10, 15); // Imprime: "El resultado final de la suma es: 30"

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

const numerosA = [1, 2, 3];
const numerosB = [4, 5, 6];

// 1. Expandir array para pasar argumentos individuales
const maximo = Math.max(...numerosA, ...numerosB);
console.log(maximo); // 6

// 2. Combinar arrays
const todosLosNumeros = [...numerosA, ...numerosB];
console.log(todosLosNumeros); // [1, 2, 3, 4, 5, 6]

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico

const temporizador = {
    nombre: "Reloj principal",
    iniciar() {
        // La arrow function conserva el `this` del contexto del método `iniciar` (el objeto temporizador)
        setTimeout(() => {
            console.log(`Iniciado por: ${this.nombre}`);
        }, 1000);
    }
};

temporizador.iniciar(); // Después de 1 seg: "Iniciado por: Reloj principal"