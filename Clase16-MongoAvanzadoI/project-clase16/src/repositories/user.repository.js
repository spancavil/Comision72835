import { UserModel } from '../models/user.model.js'

export class UserRepository {
  constructor() {
    this.userModel = UserModel
  }

  createUser = async ({ firstName, lastName, email, profileImage }) => {
    try {
      return await this.userModel.create({
        lastName,
        email,
        profileImage,
        firstName,
      })
    } catch (error) {
      error.message = `Error en el repository: "${error.message}".\n`
      throw error
    }
  }
  getUserById = async () => {}
}
