// ES5
var pessoa = {
    nome: "Herlon Costa",
    idade: 25,
    seApresentar: function () {
        console.log(
            "Olá, eu me chamo " +
                this.nome +
                " e tenho " +
                this.idade +
                " anos."
        );
    },
};

pessoa.seApresentar();

// ES6
let nome = "Herlon Costa";
let idade = 25;

function seApresentar() {
    console.log(`Olá, eu sou o ${this.nome} ${this.idade}.`);
}

const outraPessoa = { nome, idade, seApresentar };
console.log(outraPessoa.nome);
outraPessoa.seApresentar();

const estudante = {
    nome: "Herlon Costa",
    linguagem: "Javascript",
    seApresentar() {
        console.log(
            `Olá, sou o ${this.nome} e estou estudando ${this.linguagem}.`
        );
    },
};

estudante.seApresentar();
