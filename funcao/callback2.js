const notas = [7.7,8.0,9.0,5.4,3.1,2.0]

let notasBaixas = []
//sem callback
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
// com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)