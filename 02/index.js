const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const testaTamanho = (palavras) => {
    const buscaTamanho = palavras.some((elementoAtual) => {
        return elementoAtual.length > 5;
    })

    if (buscaTamanho === true) {
        console.log("Existe palavra inválida.");
    } else {
        console.log("Array validado.")
    }
}

testaTamanho(palavras);