const alunos = [
    {nome: "João", nota: 9.9, bolsista: true},
    {nome: "Antônio", nota: 10.0, bolsista: true},
    {nome: "Marcos", nota: 8.7, bolsista: true},
    {nome: "Pedro", nota: 9.9, bolsista: false},
    {nome: "Ana", nota: 4.0, bolsista: false}
]

const nota = obj => obj.nota
const resultado = alunos.map(nota).reduce(function(acumulador, atual){
    return acumulador + atual
})
console.log(resultado)