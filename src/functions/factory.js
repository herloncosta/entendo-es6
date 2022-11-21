const { log } = console

// factory function
function criarPessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    return {
        nome,
        sobrenome,
        nomeCompleto: `${this.nome} ${this.sobrenome}`
    }
}

const p1 = criarPessoa("Herlon", "Costa").nomeCompleto
log(p1)

// log(p1.nome)
// log(p1.sobrenome)
// log(p1.nomeCompleto)

// função construtora

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = `${this.nome} ${this.sobrenome}`
}

const p2 = new Pessoa("Herlon", "Costa")
