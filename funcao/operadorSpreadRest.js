// rest(juntar)
//spread(espalhar)

//spread
const funcionario = {
    nome: "Maria",
    salario: 1.299
}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//spread em array
const grupoA = ["Marta","Glória", "Maria"]
const grupoFinal = ["Mariana","Josefa", ...grupoA]