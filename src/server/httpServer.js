// importação do módulo http
const http = require('http')

// porta utilizada pelo servidor
const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    res.write('<h1>Server online</h1>')
    res.end()
})

server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
// acesse utilizando o endereço http://localhost:3000

// refatoração
const PORT2 = 3001

const service = (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('<h1>Refactoring</h1>')
    res.end()
}

const runningMessage = () => console.log(`Server running on port http://localhost:${PORT2}`)

const server2 = http.createServer(service)
    .listen(PORT2, runningMessage)