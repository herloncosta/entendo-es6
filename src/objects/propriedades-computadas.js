// nome do método como propriedade computada
let nomeMetodo = "invocar";

const usuario1 = {
    nome: "Herlon",
    [nomeMetodo]() {
        console.log(this.nome);
    },
};

usuario1[nomeMetodo]();

// nome do método como propriedade computada concatenada
let nomeFuncao = "mostrar";
let propriedade = "Nome";

const usuario2 = {
    nome: "Diego",
    [`${nomeFuncao}${propriedade}`]() {
        console.log(this.nome);
    },
};

usuario2.mostrarNome();

// nome da propriedade como propriedade computada

let apelido = "apelido";

const pessoa = {
    nome: "José",
    [apelido]: "Zé",
};

console.log(pessoa.apelido);
