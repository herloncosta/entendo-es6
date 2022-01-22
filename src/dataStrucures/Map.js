var map = new Map()
function funcao(){}
var objeto = {}

// Atribuição de dados à estrutura
map.set('string', 'sou uma string')
map.set(objeto, 'sou um objeto')
map.set(funcao, 'sou uma função')

// Estrutura após a atribuição dos dados
console.log(map)

// Acessando dados pelas respectivas chaves
console.log(map.get('string'))
console.log(map.get(objeto))
console.log(map.get(funcao))

// Verificando o tamanho do Map
console.log('Tamanho: ' + map.size)

// Verificando se determinada chave já foi atribuída à estrutura
console.log(map.has('string'))
console.log(map.has('string2'))

// Deletando uma chave e verificando se foi realmente excluída
map.delete('string')
console.log(map.has('string'))

// Limpando todos os dados da estrutura
map.clear()
console.log('Tamanho: ' + map.size)

// Iterando sobre o Map com o for ... of
const mapNum = new Map()

mapNum.set(1, 'um')
mapNum.set(2, 'dois')
mapNum.set(3, 'três')

// Iterando sobre os valores
console.log('Valores:')
for (var value of mapNum.values()) {
    console.log(value)
}

// Iterando sobre as chaves
console.log('Chaves:')
for (var key of mapNum.keys()) {
    console.log(key)
}

// Iterando sobre as entradas
console.log('Entradas:')
for (var entrie of mapNum.entries()) {
    console.log(entrie)
}