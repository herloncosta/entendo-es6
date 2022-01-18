const client = require('./client')
const message = require('./message')


client.message('method message from client')
client.sayHello()

message('module imported from message')