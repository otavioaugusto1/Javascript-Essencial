const carrinho = [
    '{"Tipo": "Borracha", "Cor": "Branca", "Preco": 3.50}',
    '{"Tipo": "Cardeno", "Cor": "Preto", "Preco": 4.20}',
    '{"Tipo": "Mochila", "Cor": "Azul", "Preco": 5.30}',
    '{"Tipo": "Lápis", "Cor": "Verde", "Preco": 6.40}'
]

const paraObjeto = json => JSON.parse(json)
const soPreco = obj => obj.Preco

const result = carrinho.map(paraObjeto).map(soPreco)
console.log(result)

