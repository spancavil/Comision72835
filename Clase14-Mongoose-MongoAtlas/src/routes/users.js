import { Router } from 'express'
import { UserModel } from '../models/user.model.js'
import { isValidObjectId } from 'mongoose'

export const UsersRouter = Router()

UsersRouter.get('/', async (req, res, next) => {
  //get users
  try {
    //Sugerencia: añadir paginación. 2 parametros: 1. nro de pagina, 2. cantidad de elementos por pagina
    const users = await UserModel.find({})
    res.send({
      message: 'User found succesfully',
      data: users,
    })
  } catch (error) {
    error.message = `Error en la ruta GET /api/users .\n${error.message}`
    next(error)
  }
})

UsersRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const isValid = isValidObjectId(id)
    if (!isValid) res.status(400).send({ message: 'Wrong object id.' })
    else {
      const userFound = await UserModel.findById(id)
      if (!userFound) res.status(404).send({ message: 'User not found' })
      else {
        res.send({
          message: 'User found succesfully',
          data: userFound,
        })
      }
    }
  } catch (error) {
    error.message = `Error en la ruta GET /api/users/:id.\n${error.message}`
    next(error)
  }
})

UsersRouter.post('/', async (req, res, next) => {
  try {
    //Destructuramos el body
    const { firstName, lastName, email } = req.body
    if (!firstName || !lastName || !email)
      res
        .status(400)
        .send({ message: 'Fields firstName, lastName and email are required' })
    else {
      const userCreated = await UserModel.insertOne({
        firstName,
        lastName,
        email,
      })
      res.send({
        message: 'User created succesfully',
        data: userCreated,
      })
    }
  } catch (error) {
    error.message = `Error en la ruta POST /api/users/:id.\n${error.message}`
    next(error)
  }
})

//UserModel.updateOne()
UsersRouter.put('/:id', (req, res) => {})

//UserModel.deleteOne()
UsersRouter.delete('/:id', (req, res) => {})
