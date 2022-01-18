// iteração com for loop
var alunos = [
    { nome: 'Maria',idade: 21 },
    { nome: 'Pedro',idade: 17 },
    { nome: 'João',idade: 20 },
]

var alunosDeMaior = []
for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].idade >= 18) {
        alunosDeMaior.push(alunos[i])
    }
}

console.log(alunosDeMaior)

// filter()
var alunos2 = [
    { nome: 'joão', idade: 15 },
    { nome: 'josé', idade: 18 },
    { nome: 'maria', idade: 20 }
]

var alunosDeMaior2 = alunos2.filter(function(aluno) {
    return aluno.idade >= 18
})

console.log(alunosDeMaior2)

// desacoplando função

function retornaAlunosDeMaior(aluno) {
    return aluno.idade >= 18
}

var alunosDeMaior3 = alunos2.filter(retornaAlunosDeMaior)
console.log(alunosDeMaior3)
