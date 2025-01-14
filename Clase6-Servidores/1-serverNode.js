//Desarrollar
const http = require('node:http')

//host:port
const hostname = '127.0.0.1' //localhost
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hola mundillo!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
