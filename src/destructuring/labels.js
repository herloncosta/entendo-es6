const Pessoa = {
    nome: "Herlon",
    sobrenome: "Costa",
};

const { sobrenome: apelido } = Pessoa;

try {
    console.log(sobrenome);
} catch (err) {
    console.log(`${err.name}: ${err.message}`); // ReferenceError: sobrenome is not defined
} finally {
    console.log(apelido); // Costa
}
