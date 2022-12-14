const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const todosHabilitados = (usuarios) => {
    const filtraArray = usuarios.filter((usuario) => {
        return usuario.idade > 18 && usuario.idade < 65;
    });

    const verificarHabilitados = filtraArray.every((habilitado) => {
        return habilitado.habilitado === true;
    });

    const validar = verificarHabilitados === true ? "Todos passaram no teste." : "Todos precisam estar habilitados."
    return validar
}

console.log(todosHabilitados(usuarios));

