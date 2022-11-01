const numeros = [0, 122, 4, 70, 6, 8, 44];

const validarPares = (numeros) => {
    const pares = numeros.every((elementoAtual) => {
        return elementoAtual % 2 === 0;
    })
    const validar = pares === true ? "Array válido." : "Array inválido."
    return validar
}

console.log(validarPares(numeros));