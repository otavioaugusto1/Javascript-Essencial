//criar de forma literal
function fun1(){

}
//se não tiver o "return", é retornado undefined
// ---------------------------------------------

//armazenar em uma variável
const fun2 = function (){}
// ---------------------------------------------

// armazenar em um array
const array = [function(a,b){return a + b}, fun1,fun2]
console.log(array[0](2,3))
// ---------------------------------------------

//armazenar em atributos de objetos
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())
// ---------------------------------------------

// passar uma função como parâmetro
function run(fun){
    fun()
}
run(function(){console.log( "executando...")})
// ---------------------------------------------

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,5)(2)
//ou
const seteMais = soma(2,5)
seteMais(2)