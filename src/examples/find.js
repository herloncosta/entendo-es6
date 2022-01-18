var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20}
]

// iteração com for loop
var alunoEncontrado;
for (var i = 0; i < alunos.length; i++) {
    var alunoAtual = alunos[i]

    if (alunoAtual.nome === 'João') {
        alunoEncontrado = alunoAtual
    }
}

console.log(alunoEncontrado)

// inplementando o método find()
var alunoJose = alunos.find(function(aluno) {
    return aluno.nome === 'José'
})

console.log(alunoJose)

// desacoplando função
function procuraMaria(aluno) {
    return aluno.nome === 'Maria'
}

const maria = alunos.find(procuraMaria)
console.log(maria)