const numbers = [1, 2, 3, 4, 5]

// Para a iteração no número três
for (var number of numbers) {
    if (number > 3) {
        break
    }
    console.log(number)
}

// Pula o número dois na iteração
for (var number of numbers) {
    if (number === 2) {
        continue
    }
    console.log(number)
}