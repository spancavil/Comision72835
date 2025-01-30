const socket = io()
console.log(socket)

const HOST = 'https://test-deploy-render-dfw6.onrender.com'

let user

const addItem = (msg) => {
  const item = document.createElement('li')
  item.textContent = msg
  messages.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
}

Swal.fire({
  title: 'Alto! Identifícate',
  input: 'text',
  text: 'Ingresa tu nombre completo como figura en la plataforma',
  inputValidator: async (value) => {
    if (!value) return 'Por favor escribe el usuario!'

    const path = '/api/users/students'

    const response = await fetch(`${HOST}${path}`)

    if (response.status !== 200)
      return 'Ocurrió un error en el servidor, intente de nuevo en unos instantes'

    const { students } = await response.json()

    console.log(students.includes(value))
    if (!students.includes(value)) return 'Usuario no válido!'
  },
  allowOutsideClick: false,
}).then((result) => {
  socket.emit('user connected', result.value)
  console.log(result)
  user = result.value
  console.log(user)
})

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit('chat message', {
      user,
      message: `${user || 'hardcoded user'}: ${input.value}`,
    })
    input.value = ''
  }
})

socket.on('chat message', (msg) => {
  addItem(msg.message)
})

socket.on('history', (history) => {
  console.log(history)
  for (const msg of history) {
    const message = msg.message
    addItem(message)
  }
})
