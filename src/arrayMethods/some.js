var { log } = console

// implementação convencional
var pesosDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = false

for (var i = 0; i < pesosDasMalas.length; i++) {
    if (pesosDasMalas[i] > 30) {
        temMalaAcimaDoPeso = true
    }
}

log(temMalaAcimaDoPeso)

// implementação do método some()
var acimaDoPeso = pesosDasMalas.some(function(pesoDaMala) {
    return pesoDaMala > 30
})

log(acimaDoPeso)

// desacoplando função
function verifica(pesoMala) {
    return pesoMala > 30
}

var algumaAcimaDoPeso = pesosDasMalas.some(verifica)
log(algumaAcimaDoPeso)