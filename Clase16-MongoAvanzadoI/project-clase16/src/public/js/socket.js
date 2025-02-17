const socket = io()
console.log(socket)

const HOST = 'https://glitch-test-bthv.onrender.com'

let user

Swal.fire({
  title: 'Alto! Identifícate',
  input: 'text',
  text: 'Ingresa tu nombre completo como figura en la plataforma',
  inputValidator: async (value) => {
    if (!value) return 'Por favor escribe el usuario!'
    const response = await fetch(`${HOST}/api/users/students`)
    if (response.status !== 200) return 'Error de servidor, vuelva a intentarlo'
    const users = await response.json()
    const { students } = users
    if (!students.includes(value)) return 'Por favor ingrese un usuario válido'
  },
  allowOutsideClick: false,
}).then((result) => {
  user = result.value
  console.log(user)
})

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit('chat message', `${user}: ${input.value}`)
    input.value = ''
  }
})

socket.on('chat message', (msg) => {
  const item = document.createElement('li')
  item.textContent = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
