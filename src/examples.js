// Métodos auxiliares de array

// iteração tradicional
var frutas = ['abacaxi', 'maçã', 'uva']
for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

// forEach()
var nomes = ['maria', 'josé', 'joão']
nomes.forEach(function(nome) {
    console.log(nome)
})

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome)

// map()
var numeros = [1, 2, 3]
var dobro = numeros.map(function(numero) {
    return numero * 2
})

console.log(numeros)
console.log(dobro)

// filter()
var alunos = [
    {nome: 'joão', idade: 15},
    {nome: 'josé', idade: 18},
    {nome: 'maria', idade: 20}
]

var alunosDeMaior = alunos.filter(function(aluno) {
    return aluno.idade >= 18
})

console.log(alunosDeMaior)

// find()
var alunos = [
    {nome: 'joão', idade: 15},
    {nome: 'josé', idade: 18},
    {nome: 'maria', idade: 20}
]

var alunoJose = alunos.find(function(aluno) {
    return aluno.nome === 'josé'
})

console.log(alunoJose)