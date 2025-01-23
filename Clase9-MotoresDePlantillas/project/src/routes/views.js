import { Router } from 'express'
import fs from 'fs'
import { config } from '../config/index.js'

export const ViewsRouter = Router()

ViewsRouter.get('/otra-ruta', async (req, res) => {
  res.render('otra-ruta')
})

ViewsRouter.get('/random-user', async (req, res) => {
  try {
    let usersString = await fs.promises.readFile(
      config.dirname + '/src/data/users.json',
      'utf-8'
    )
    const users = JSON.parse(usersString)
    const randomIndex = Math.floor(Math.random() * (users.length - 1 - 0 + 1))
    const randomUser = users[randomIndex]
    /* 
      "nombre": "Albertine",
      "apellido": "Pechet",
      "correo": "apechet3@unicef.org",
      "telefono": "402-361-3310",
      "edad": 54
       */
    res.render('random-user', randomUser)
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Ocurrio un error en el servidor' })
  }
})

ViewsRouter.get('/users', async (req, res) => {
  try {
    let usersString = await fs.promises.readFile(
      config.dirname + '/src/data/users.json',
      'utf-8'
    )
    const users = JSON.parse(usersString)

    /* 
    "nombre": "Albertine",
    "apellido": "Pechet",
    "correo": "apechet3@unicef.org",
    "telefono": "402-361-3310",
    "edad": 54
     */

    const options = {
      user: {
        name: 'Nahuel',
        isAdmin: true,
      },
      userList: users,
    }

    res.render('users', options)
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Ocurrio un error en el servidor' })
  }
})

ViewsRouter.get('/home', (req, res) => {
  try {
    const options = {
      title: 'hola bb',
      name: 'Darius',
    }
    res.render('home', options)
  } catch (error) {
    console.error(error)
    res.status(500).send({ message: 'Ocurrio un error en el servidor' })
  }
})

export default ViewsRouter
