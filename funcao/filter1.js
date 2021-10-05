const produtos = [
    {nome: "Notebook", preco: 2999, fragil: true},
    {nome: "Airpods pro", preco: 1499, fragil: true},
    {nome: "Copo de vidro", preco: 19.99, fragil: true},
    {nome: "Copo de plástico", preco: 8.99, fragil: false}
]

const fragil = produto => produto.fragil

console.log(produtos.filter(fragil))