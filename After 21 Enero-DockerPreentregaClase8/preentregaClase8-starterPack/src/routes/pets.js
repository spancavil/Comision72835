import { Router } from 'express'
import { multerUploaderMiddleware } from '../middlewares/index.js'

export const PetsRouter = Router()

// export const PI = 3.14

// /api/pets/

const pets = []

PetsRouter.get('/', (req, res) => {
  //get pets
  res.send({ message: 'Mascotas', data: pets })
})

/* PetsRouter.post('/', multerUploaderMiddleware.single('gatito'), (req, res) => {
  console.log(req.file)
  res.send({ message: 'Gatito uploaded' })
}) */

PetsRouter.post(
  '/',
  multerUploaderMiddleware.fields([
    { name: 'gatito1', maxCount: 1 },
    { name: 'gatito2', maxCount: 1 },
  ]),
  (req, res) => {
    // console.log(req.file)

    console.log(req.files)

    const pet = req.body

    if (!pet.name || !pet.raza) {
      return res.status(400).send({
        message: 'Error al crear la mascota',
        error: 'Valores incompletos',
      })
    }
    pet.id = pets.length + 1

    pets.push(pet)

    return res.status(200).send({
      message: 'Mascota creada',
      data: { ...pet },
    })
  }
)
