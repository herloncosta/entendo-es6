// Mesmo passando o segundo parâmetro como undefined,
// como o mesmo foi definido de forma nomeada, o valor
// definidido na declaração da função tem precedência
// em relação ao argumento undefined passado.

function sum(x, y = 2) {
    return x + y;
}

console.log(sum(10, 3)); // 13
console.log(sum(10)); // 12
console.log(sum(10, undefined)); // 12

// A única forma de mudar esse comportamento é
// passando o parâmetro como null

console.log(sum(10, null)); // 10

// Podemos definir o valor de um parâmetro nomeado
// como valor de um parâmetro nomeado vizinho

function pow(x = 2, y = x) {
    return x ** y;
}

// De todas as formas obtemos o mesmo resultado

console.log(pow()); // 4
console.log(pow(2)); // 4
console.log(pow(2, 2)); // 4

// Atribuindo valor de uma variável como valor padrão

// const v = "valor 1"; // variável global, pode ser referenciada em qualquer escopo
function funcao(x = v) {
    const v = "valor 2"; // variável local, escopo delimitado pela função
    return x;
}

// Com a definição da variável v o resultado é igual
// a "valor 1", mas como a variável foi omitida será
// retornado um erro

try {
    const result = funcao();
    console.log(result);
} catch (err) {
    console.log(`${err.name}: ${err.message}`); // ReferenceError: v is not defined
}

// Utilizando função como valor padrão

function doSomethingWithMyName(
    name,
    callback = (z) => {
        console.log(z);
    }
) {
    callback(name);
}

doSomethingWithMyName("Herlon Costa");
