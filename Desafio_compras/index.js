const listaCompras = {
    frutas: ["Banana"],
    verduras: [],
    congelados: [],
    doces: [],
    liquidos: [],
    limpeza: [],
}

const adiçaoProduto = prompt("você deseja adicionar um produto na sua lista de compras? Responda S ou N")

function validaProduto() {
    if (adiçaoProduto === "S") {
        let novoProduto = prompt("Qual o produto?")
        const classificaProduto = prompt("Qual o tipo desse produto?")
        const teste = novoProduto.push(listaCompras)
    }
}

validaProduto()

console.log(listaCompras)