import { UserService } from '../services/index.js'

export class UserController {
  constructor() {
    this.userService = new UserService()
  }

  createUser = async (req, res, next) => {
    try {
      const { firstName, lastName, email } = req.body
      const profileImage = req.profileImage
      const userCreated = await this.userService.createUser({
        email,
        firstName,
        lastName,
        profileImage: profileImage?.path,
      })
      res.send({
        message: 'User created',
        data: userCreated,
      })
    } catch (error) {
      next(error)
    }
  }
}
