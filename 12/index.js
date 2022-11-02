const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];
//   nome: "Antonio",
//       idade: 30,
//       profissao: "Jornalista",

const devMaiorQue20 = pessoas.filter((pessoa) => {
    return pessoa.idade > 20 && pessoa.profissao == "Programador";
});

const jornalistaMaiorde30 = pessoas.filter((pessoa) => {
    return pessoa.idade > 30 && pessoa.profissao == "Jornalista";
});

const jovensProficionais = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29;
});

console.log(devMaiorQue20);
console.log(jornalistaMaiorde30);
console.log(jovensProficionais);