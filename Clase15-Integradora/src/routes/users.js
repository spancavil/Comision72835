import { Router } from 'express'
import { UserModel } from '../models/user.model.js'
import { isValidObjectId } from 'mongoose'
import {
  validateCreateUser,
  validateCreateUserImage,
} from '../middlewareS/validationMiddleware.js'
import { multerUploaderMiddleware } from '../middlewareS/multer.js'
import { UserController } from '../controllers/user.controller.js'

export const UsersRouter = Router()

const userController = new UserController()

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

//Ruta modelo
UsersRouter.post(
  '/',
  multerUploaderMiddleware.fields([
    {
      name: 'profileImage',
      maxCount: 1,
    },
  ]),
  validateCreateUserImage,
  validateCreateUser,
  userController.createUser
)

//UserModel.updateOne()
UsersRouter.put('/:id', (req, res) => {})

//UserModel.deleteOne()
UsersRouter.delete('/:id', (req, res) => {
  //Eliminar el usuario de mongo
  //Eliminar la foto de perfil de la carpeta uploads
})
