const soma = function(a, b){
    return a + b
}
console.log(soma(4,3))

const UsaFuncoes = function (a, b, func = soma){
    console.log(func(a,b))
}
UsaFuncoes(4,3,soma)

// assim
const pessoa = {
    falar: function(){
        console.log("Olá!")
    }
}
//ou assim
const pessoa1 = {
    falar(){
        console.log("Olá!")
    }
}
pessoa1.falar()

pessoa.falar()