const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidadesFiltradas = (cidades) => {
    const filtracidade = cidades.filter((cidade) => {
        return cidade.length <= 8;

    });
    return filtracidade.join(", ")
}

console.log(cidadesFiltradas(cidades));