import initApp from './app/index.js'
import { config } from './config/index.js'
import { Server } from 'socket.io'

const app = initApp()

const server = app.listen(config.PORT, () => {
  console.info(`Server listen on: http://localhost:${config.PORT}`)
})

const io = new Server(server)

const messages = []

io.on('connection', (socket) => {
  //Enviando el historial de mensajes
  socket.emit('history', messages)

  console.log('a user connected')
  console.log({ socketId: socket.id })
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    messages.push(msg)
    //Emite a todos los clientes conectados. (el broadcast emitiría a todos MENOS al emisor original)
    io.emit('chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
