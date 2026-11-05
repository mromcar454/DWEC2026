
function sumarDigitos(numero) {
    if (numero < 10) {
        return numero 
    } else {
        return (numero % 10) + sumarDigitos(Math.floor(numero / 10))
    }

    
}

console.log(sumarDigitos(2435))