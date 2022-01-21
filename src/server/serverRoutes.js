const http = require('http')


const serverRunning = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    if (req.url === '/') {
        res.write('<h1>Welcome to my Home Page!</h1>')
    } else if (req.url === '/contacts') {
        res.write('<h1>Welcome to contacts!</h1>')
    } else {
        res.write('<h1>Error 404 - Page not founded!!!</h1>')
    }
    res.end()
}

const logMessage = () => console.log(`Server running in http://localhost:${PORT}`)

const PORT = 3000
const server = http.createServer(serverRunning)
server.listen(PORT, logMessage)