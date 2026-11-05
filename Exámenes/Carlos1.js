function sumarDigitos(numero){
    if(numero>=10){
        return numero%10+sumarDigitos(parseInt(numero/10))
    }else{
        return numero%10
    }
}
console.log(sumarDigitos(1000))