const fabricantes = ["Mercedes", "Audi","Porsche", "BMW"]


function imrpimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imrpimir)

fabricantes.forEach(fabricante => console.log(fabricante))