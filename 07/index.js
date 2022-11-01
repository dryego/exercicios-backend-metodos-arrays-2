const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];
const cep = 00222444;

const acharCEP = (endereços) => {
    const buscarCEP = endereços.find((elementoAtual) => {
        return elementoAtual.cep === cep;
    });
    return buscarCEP.rua
}
console.log(acharCEP(endereços));