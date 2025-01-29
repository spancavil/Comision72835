import { Router } from 'express'
import { students } from '../data/students.js'

export const UsersRouter = Router()

UsersRouter.get('/', (req, res) => {
  //get users
  res.send({ message: 'ok' })
})

UsersRouter.get('/students', (req, res) => {
  res.send({ students })
})
