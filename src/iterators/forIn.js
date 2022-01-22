const { log } = console

const perfilDoFacebook = {
    nome: 'João das Neves',
    id: 12345678
}

for (var propriedade in perfilDoFacebook) {
    log(perfilDoFacebook[propriedade])
}