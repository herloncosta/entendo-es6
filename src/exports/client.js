// exporta o módulo client com os respectivos métodos
exports.message = (msg) => {
    console.log(msg)
}

exports.sayHello = () => {
    console.log('Hello user!')
}

// invocação
// client.message('... some text')
// client.sayHello()