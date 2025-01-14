//Importamos el modulo de express
import express from 'express'

//Creamos app de express
const app = express()
const port = 3000

import path from 'path'

const users = [
  { id: 1, username: 'username1' },
  { id: 2, username: 'username2' },
]

//Accedamos desde el browser a: http://127.0.0.1:3000/saludo
//el server nos va a responder con un saludito
//req = request, res = response
app.get('/saludo', (req, res) => {
  res.send('Hola mundooo!')
})

app.get('/', (request, response) => {
  response.send('Este el home')
})

app.get('/usuarios', (request, response) => {
  console.log('Se accede a /usuarios')
  const { nombre, edad } = request.query

  console.log(edad)
  console.log(nombre)

  response.send({ users })
})

app.get('/usuarios/:id', (request, response) => {
  try {
    console.log('Se accede a /usuarios/:id/')

    console.log(request.query)

    //Es exactamente lo mismo que const id = request.params.id
    const { id: idString } = request.params
    const id = Number(idString)
    if (!id) throw new Error('Por favor coloque un número como id')
    const user = users.find((user) => user.id === id)
    response.send({ user: user || 'no se encontró el user especificado' })
  } catch (error) {
    response.status(400).send({
      errorMesage: error.message,
    })
  }
})

app.get('/home', (req, res) => {
  // res.sendFile(path.join(__dirname, './home/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
