import { UserRepository } from '../repositories/index.js'

export class UserService {
  constructor() {
    this.userRepository = new UserRepository()
  }

  createUser = async ({ firstName, lastName, email, profileImage }) => {
    try {
      return await this.userRepository.createUser({
        firstName,
        lastName,
        email,
        profileImage,
      })
    } catch (error) {
      error.message = `Error en el repository: "${error.message}".\n`
      throw error
    }
  }
}
