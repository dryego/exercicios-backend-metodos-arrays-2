const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const buscaLivro = () => {
    const busca = livros.findIndex((elementoAtual) => {
        return elementoAtual === nomeDoLivro;
    })

    if (busca != -1) {
        console.log(`O livro está na posição ${busca + 1}`)
    } else {
        console.log(`Livro não encontrado.`)
    }

}
buscaLivro();
