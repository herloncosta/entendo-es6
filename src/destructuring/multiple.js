// Realizando destructuring de multiplos atributos de um mesmo objeto

const suco = {
    sabor: "uva",
    quantidade: "500ml",
};

const doce = {
    tipo: "açúcar",
};

function descreveSuco({ sabor, quantidade }) {
    return `Este suco tem sabor ${sabor} e quantidade ${quantidade}.`;
}

console.log(descreveSuco(suco));

// acessando mais de um objeto na mesma chamada da função
// apenas a título de exemplo, podem ser utilizados mais
function comMaisDetalhes({ sabor, quantidade }, { tipo }) {
    return `Este suco tem saber ${sabor}, quantidade ${quantidade} e foi adocicado com ${tipo}.`;
}

console.log(comMaisDetalhes(suco, doce));
