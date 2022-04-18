// quando invocado dentro de uma função
// o arguments retorna um objeto

function logAllParameters() {
    for (let i = 0; i < arguments.length; i++) {
        return arguments[i];
    }
}

logAllParameters(1, 2, 3); // 1 2 3

// com o uso do arguments podemos resgatar
// parâmetros passados para a função mesmo
// que não tenham sido declarados na assinatura

function sumAllParameters() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

sumAllParameters(1, 2, 3); // 6
