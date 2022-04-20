// EXEMPLO 01
// método utilizado na versão ES5
let args = [1, 2, 3];
console.log.apply(console, args); // 1 2 3

// implementação do operador spread na versão ES6
console.log(...args); // 1 2 3

// EXEMPLO 02
let lista1 = ["leite", "ovos", "papel"];
let lista2 = ["arroz", "feijão", "suco"];

// concatenando as duas listas
// usando o .concat()
let listaUnidaConcat = lista1.concat(lista2);
console.log(listaUnidaConcat); // [ 'leite', 'ovos', 'papel', 'arroz', 'feijão', 'suco' ]

// usando o operador spread temos o mesmo resultado
let listaUnidaSpread = [...lista1, ...lista2];
console.log(listaUnidaSpread); // [ 'leite', 'ovos', 'papel', 'arroz', 'feijão', 'suco' ]

// SIMULANDO OPERAÇÃO EM UM CARRINHO DE COMPRAS

const produtoSelecionado = {
    descricao: "Blusa de Lã",
    preco: "R$ 59,90",
};

const carrinho = [
    { descricao: "Bota de Cano Médio", preco: "R$ 199,90" },
    { descricao: "Saia Colorida", preco: "R$ 29,90" },
    { descricao: "Vestido Longo", preco: "R$ 399,90" },
];

const carrinhoAtualizado = [...carrinho, produtoSelecionado];

for (let item of carrinhoAtualizado) {
    console.log(item.descricao);
}

// SAÍDA
// Bota de Cano Médio
// Saia Colorida
// Vestido Longo
// Blusa de Lã

// APLICAÇÃO DO OPERADOR SPREAD NO USO DE FUNÇÕES
function soma(a, b) {
    return a + b;
}

console.log(soma(10, 10)); // 20

const valores = [10, 10];
console.log(soma(...valores)); // 20

// contando vogais sem acento em um texto passado por parâmetro
function contaQuantidadeVogaisSemAcentoNo(texto) {
    let quantidade = 0; // inicia o contador
    const textoEmCaixaBaixa = texto.toLowerCase(); // transforma todas as letras em minúsculas para verificação
    const letras = [...textoEmCaixaBaixa]; // cria um array com todas as letras
    for (let letra of letras) {
        if ("aeiou".includes(letra)) {
            // verifica se a letra é uma vogal sem acento
            quantidade++; // incrementa o contador
        }
    }
    return quantidade; // retorna a quantidade de letras que atende aos critérios da função
}

console.log(contaQuantidadeVogaisSemAcentoNo("teste")); // 2
