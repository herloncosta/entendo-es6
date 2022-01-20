var { log } = console

// implementação convencional
var numeros = [1, 2, 3, 4, 5]
var soma = 0

for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

log(soma)

// implementação do método reduce()
var somaReduce = numeros.reduce(function(acumulador, item) {
    return acumulador + item
}, 0) // 0: valor inicial

// Acumulador recebe o primeiro valor do array ou o valor 
// inserido após a função
// Item recebe o segundo valor
// 0 é o acumulador da soma de 'soma' e 'numero'
log(somaReduce)

// outro exemplo
var alunos = [
    { nome: 'João', idade: 10 },
    { nome: 'José', idade: 20 },
    { nome: 'Marcos', idade: 30 }
]

var nomes = alunos.reduce(function(arrayNomes, aluno) {
    arrayNomes.push(aluno.nome)
    return arrayNomes
}, [])

log(nomes)