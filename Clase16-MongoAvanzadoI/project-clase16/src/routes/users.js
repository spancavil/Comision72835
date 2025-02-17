import { Router } from 'express'
import {
  validateCreateUser,
  validateCreateUserImage,
} from '../middlewares/validationMiddleware.js'
import { UserController } from '../controllers/user.controller.js'
import { multerUploaderMiddleware } from '../middlewares/multer.js'

export const UsersRouter = Router()

const userController = new UserController()

UsersRouter.get('/')

UsersRouter.post(
  '/',
  multerUploaderMiddleware.fields([{ name: 'profileImage', maxCount: 1 }]),
  validateCreateUserImage,
  validateCreateUser,
  userController.createUser
)

UsersRouter.put('/:id', (req, res) => {})

UsersRouter.delete('/:id', (req, res) => {})
