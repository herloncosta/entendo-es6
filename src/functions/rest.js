// se o último argumento de uma função estiver acompanhado de ... (trẽs pontos),
// ele vai setornar um Array no qual os elementos são disponibilizados pelos
// argumentos atuais passados à função

function sum(...values) {
    let sum = 0;
    const amountOfValues = values.length;
    for (let index = 0; index < amountOfValues; index++) {
        sum += values[index];
    }

    return sum;
}

// refactoring
// const sum = (...values) => values.reduce((acc, value) => (acc += value), 0);

sum(1, 2, 3); // 6
