const palavras = ["arroz", "feijão", "carne", "cervej", "macarrão", "vodk"];
const produtoProibido = ["cerveja", "vodka"];

const pordutosLista = (palavras) => {
    const buscaProdutoProibido = palavras.some((elementoAtual) => {
        return elementoAtual === produtoProibido[0] || elementoAtual === produtoProibido[1];
    })

    const teste = buscaProdutoProibido === true ? "Revise sua lista, joão. possui bebida com venda proibida!" : "Tudo certo, vamos as compras!";
    return teste;
}

console.log(pordutosLista(palavras));