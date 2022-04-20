// simulando cadastro de rede social
const Usuario = {
    nome: "Elliot",
    sobrenome: "Alderson",
    senha: "mrrobot",
    email: "elliot.alderson@gmail.com",
    profissao: "Engenheiro de Cibersegurança",
    github: "https://github.com/ElliotAlderson",
};

function validaEmail(email) {
    // lógica da implementação
}

// extraindo email com ES5
// const email = Usuario.email

// agora com destructuring (ES6)
const { email } = Usuario;
validaEmail(email);

// caso o atributo não exista, undefined é retornado como resultado
const { inexistente } = Usuario;
console.log(inexistente); // undefined
