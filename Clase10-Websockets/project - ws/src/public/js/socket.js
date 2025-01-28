const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit(
      'chat message',
      `${socket.id}: ${input.value} | ${new Date().toLocaleString()}`
    )
    input.value = ''
  }
})

socket.on('chat message', (msg) => {
  const item = document.createElement('li')
  item.textContent = msg
  messages.appendChild(item)
  // window.scrollTo(0, document.body.scrollHeight)
})

socket.on('history', (mensajes) => {
  console.log(mensajes)

  //Se recibe el array
})
