
// iteração tradicional
var frutas = ['abacaxi', 'maçã', 'uva']
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// implementação do forEach()
var nomes = ['maria', 'josé', 'joão']
nomes.forEach(function(nome) {
    console.log(nome)
})

// desacoplando função 
function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)