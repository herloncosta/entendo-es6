// Faça uma função chamada removeDuplicatas que recebe um array de números inteiros
// e remove todas as suas duplicadas.

// Utilize as funções auxiliares: reduce e find.

// Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]

function removeDuplicatas(arr) {
    let unicos = [];
    arr.forEach((item) => {
        unicos.length === 0
            ? unicos.push(item)
            : unicos.indexOf(item) === -1
            ? unicos.push(item)
            : undefined;
    });
    return unicos;
}

console.log(removeDuplicatas([1, 2, 3, 3, 4, 5]));
