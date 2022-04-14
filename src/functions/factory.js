function Livro(titulo) {
    this.titulo = titulo;
}

let livro = new Livro("Entendendo ES6");
console.log(livro.titulo); // Entendendo ES6

// implicitamente o construtor de livro é definido como Livro
console.log(livro instanceof Livro); // true

let outroLivro = livro; // livro e outroLivro apontam para a mesma referência em memória
livro.titulo = "O Código Da Vinci";

console.log(livro.titulo); //O Código Da Vinci
console.log(outroLivro.titulo); //O Código Da Vinci
