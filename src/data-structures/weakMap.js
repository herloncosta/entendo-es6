var weakMap = new WeakMap()
var elemento1 = window
var elemento2 = document.querySelector('body')

weakMap.set(elemento1, 'sou o elemento1')
weakMap.set(elemento2, 'sou o elemento2')

console.log(weakMap.get(elemento1)) // sou o elemento1
console.log(weakMap.get(elemento2)) // sou o elemento2

elemento2.parentNode.removeChild(elemento2)
elemento2 = null // removendo referência local

console.log(weakMap.get(elemento2)) // undefined

// toda chave em um WeakMap precisa ser um objeto
var weakMap2 = new WeakMap()
function funcao(){}
var objeto = {}

weakMap2.set('string', 'isso é uma string') // TypeError: Invalid value used as weak map key

weakMap2.set(funcao, 'isso é uma função')
weakMap2.set(objeto, 'isso é um objeto')

// Apenas os métodos delete, has, get e set podem ser utilizados nessa coleção

// Exemplo de uso sem o WeakMap()

function Pessoa(nome) {
    this._nome = nome
}

Pessoa.prototype.getNome = function() {
    return this._nome
}

var herlon = new Pessoa('Herlon')

console.log(herlon.getNome()) // Herlon

// A propriedade nome está desprotegida e pode ser acessada externamente sem a necessidade do método getNome()
console.log(herlon._nome) // Herlon


// Agora com o WeakMap

var Pessoa2 = (function() {
    var dadosPrivados = new WeakMap()

    function Pessoa(nome) {
        dadosPrivados.set(this, { nome: nome })
    }

    Pessoa.prototype.getNome = function() {
        return dadosPrivados.get(this).nome
    }

    return Pessoa
}())

var herlonCosta = new Pessoa2('Herlon Costa')

console.log(herlonCosta.getNome()) // Herlon Costa
console.log(herlonCosta,nome) // undefined