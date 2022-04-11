let musica = {
    nome: "Nothing Else Matters",
    autor: "Metálica",
};

// ao contrário do Set(), só podem ser adicionados objetos
let musicas = new WeakSet([musica]);
console.log(musicas);

// removendo a referência do objeto na memória
musica = null;

console.log(musicas); // {}

// O WeakSet atualiza a lista e elimina qualquer registro
// de objeto que não tenha referência em memória
