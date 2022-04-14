const { log } = console

// iterável
var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

// obtendo iterador do array acima
var iteradorBruxos = bruxos[Symbol.iterator]()

// executando iteração
log(iteradorBruxos.next()) // { value: Harry Potter, done: false }
log(iteradorBruxos.next()) // { value: Hermione Granger, done: false }
log(iteradorBruxos.next()) // { value: Rony Weasley, done: false }
log(iteradorBruxos.next()) // { value: undefined, done: true }