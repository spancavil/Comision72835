import { Router } from 'express'
import { UserModel } from '../models/user.model.js'
import { isValidObjectId } from 'mongoose'

export const UsersRouter = Router()

UsersRouter.get('/', (req, res) => {
  //get users
  res.send({ message: 'ok' })
})

UsersRouter.get('/:id', async (req, res, next) => {
  /* try {
    const { id } = req.params
    const isValid = isValidObjectId(id)
    if (!isValid) res.status(400).send({ message: 'Wrong object id.' })
    else {
      const userFound = await UserModel.findById(id)
      res.send({
        message: 'User found succesfully',
        data: userFound,
      })
    }
  } catch (error) {
    error.message = `Error en la ruta GET /api/users/:id.\n${error.message}`
    next(error)
  } */
})

UsersRouter.post('/', async (req, res) => {
  /* try {
    const { firstName, lastName, email } = req.body
    if (!firstName || !lastName || !email)
      res
        .status(400)
        .send({ message: 'Fields firstName, lastName and email are required' })
    else {
      const userCreated = await UserModel.insertOne({
        email,
        lastName,
        firstName,
      })
      res.send({
        message: 'User created succesfully',
        data: userCreated,
      })
    }
  } catch (error) {
    error.message = `Error en la ruta POST /api/users/:id.\n${error.message}`
    next(error)
  } */
})

UsersRouter.put('/:id', (req, res) => {})

UsersRouter.delete('/:id', (req, res) => {})
