//transforma um array em outro array de mesmo tamanho, mas com suas devidas alterações

//for com propósito

const nums = [1,2,3,4,5]

let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10

let resultado2 = nums.map(soma10)
console.log(resultado2)