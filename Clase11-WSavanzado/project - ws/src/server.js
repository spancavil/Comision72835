import initApp from './app/index.js'
import { config } from './config/index.js'
import { Server } from 'socket.io'

const app = initApp()

const messages = []
const users = []

const server = app.listen(config.PORT, () => {
  console.info(`Server listen on: http://localhost:${config.PORT}`)
})

export const io = new Server(server)

io.on('connection', (socket) => {
  socket.emit('history', messages)
  console.log('a user connected')
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
    messages.push(msg)
    io.emit('chat message', msg)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('user connected', (user) => {
    console.log(user)
    users.push(user)
  })
})
