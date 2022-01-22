const numbers = [1, 2, 3, 4, 5]

for (var number of numbers) {
    console.log(number)
}

const perfilDoFacebook = {
    nome: 'Carlos',
    idade: 22
}

for (var dado of perfilDoFacebook) {
    console.log(dado)
} 
// TypeError: perfilDoFacebook is not iterable