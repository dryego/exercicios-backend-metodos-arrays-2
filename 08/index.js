const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasComIndice = frutas.map((fruta) => {

    const indece = frutas.indexOf(fruta);
    const formatar = fruta.slice(0, 1).toUpperCase();
    const formatarResto = fruta.slice(1).toLowerCase();

    return `${indece} - ${formatar + formatarResto}`;
})

console.log(frutasComIndice);
