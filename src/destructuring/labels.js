const Pessoa = {
    nome: "Herlon",
    sobrenome: "Costa",
};

const { sobrenome: apelido } = Pessoa;

try {
    console.log(sobrenome);
} catch (err) {
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log(apelido);
}
