// Métodos auxiliares de array


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