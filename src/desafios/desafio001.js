// Utilizando a função auxiliar reduce, escreva uma função chamada
// validaParenteses que avalia se os parênteses estão balanceados.
// Isso significa que, pra cada parênteses esquerdo “(“ é necessário
// ter um parênteses direito “)” correspondente. A função deve
// aceitar uma string e retornar um valor booleano (true ou false).

// Exemplo: validaParenteses(')((()()())))'); → false
// Exemplo: "()()()" → true
// Exemplo: ")(" → false

function validaParenteses(parenteses) {
    const arrParenteses = parenteses.split("");
    const resultado = arrParenteses.reduce((acc, item, index, arr) => {
        if (arr[0] === ")") return false;
        if (item === "(") {
            ++acc;
            return acc;
        }
        if (item === ")") {
            --acc;
            return acc;
        }
    }, 0);
    return resultado === 0 ? true : false;
}

console.log(validaParenteses(")((()()())))"));
console.log(validaParenteses("()()()"));
console.log(validaParenteses(")("));
