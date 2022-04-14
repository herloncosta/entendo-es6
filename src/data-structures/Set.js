// Implementação básica de um Set() com recursos ES5
function mySet() {
    let array = [];
    this.add = function (valor) {
        if (array.indexOf(valor) === -1) {
            array.push(valor);
        }
    };
    this.mostrarValores = function () {
        console.log(array);
    };
}

let set = new mySet();

set.add(2);
set.add(1);
set.add(2);

set.mostrarValores();

// Implementação nativa no ES6
set = new Set();

set.add(2);
set.add(1);
set.add(2);

for (let n of set) {
    console.log(n); // mesmo resultado do método mostrarValores()
}

// Exemplo: Lista de músicas
let musicas = new Set();

function adicionar(musica) {
    if (!musica) {
        console.log("Nenhuma música foi selecionada!");
    } else if (musicas.has(musica)) {
        console.log(`${musica} já está na lista!`);
    } else {
        musicas.add(musica);
        console.log("Adicionada!");
    }
}

function remover(musica) {
    if (!musica) {
        console.log("Nenhuma música foi selecionada!");
    } else {
        musicas.delete(musica);
        console.log(`${musica} foi excluída!`);
    }
}

function mostrarLista(lista) {
    for (let musica of lista) {
        console.log(musica);
    }
}

function limparLista() {
    musicas.clear();
}

adicionar();
adicionar("musica1");
adicionar("musica2");
adicionar("musica2");
adicionar("musica3");
mostrarLista(musicas);

remover("musica2");
mostrarLista(musicas);
