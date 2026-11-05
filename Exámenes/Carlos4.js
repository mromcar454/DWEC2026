function clasificarNota(minimo){
    return (nota) => {
        if(nota>=0){
            if(nota>=minimo){
                return "Aprobado"
            }else{
                return "Suspenso"
            }
        }else if(nota<0){
            return "Nota incorrecta"
        }
    }
}

const clasificar = clasificarNota(5);

console.log(clasificar(7))
console.log(clasificar(4))

const clasificarConNotable = clasificarNota(7)

console.log(clasificarConNotable(8))
console.log(clasificarConNotable(6))