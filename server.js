const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    res.write('<h1>Server online</h1>')
    res.end()
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))