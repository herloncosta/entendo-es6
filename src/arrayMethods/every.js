var { log } = console // destructuring, será abordado mais pra frente

// implementação convencional
var alunos = [
    {nome: 'João', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'Pedro', idade: 24}
]

var todosAlunosSaoMaiores = true

for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].idade < 18) {
        todosAlunosSaoMaiores = false
        break
    }
}

log(todosAlunosSaoMaiores)

// implementado o método every()
var saoTodosMaiores = alunos.every(function(aluno) {
    return aluno.idade >= 18
})

log(saoTodosMaiores)

// desacomplando função
function verificaMaiorIdade(aluno) {
    return aluno.idade >= 18
}

var saoMaiores = alunos.every(verificaMaiorIdade)
log(saoMaiores)