// iteração tradicional
var numeros = [3, 4, 5]
var newArr = []

for (var i = 0; i < numeros.length; i++) {
    newArr.push(numeros[i] * 2)
}

console.log(newArr)

// implementação do map()
var numeros = [1, 2, 3]
var dobro = numeros.map(function(numero) {
    return numero * 2
})

console.log(numeros)
console.log(dobro)