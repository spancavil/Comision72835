import {
  userCreateProfileImageSchema,
  userCreateSchema,
} from '../validations/user.validations.js'

export const validateCreateUserImage = (req, res, next) => {
  if (!req.files['profileImage']) {
    req.profileImage = null
    next()
  } else {
    //Slice no modifica el array original, devuelve uno nuevo. OJO con usar pop de una porque lo quita del array
    const profileImage = req.files['profileImage'].slice(0, 1).pop()
    console.log(profileImage)
    const size = profileImage?.size

    //Hacemos una validación de ejemplo con size
    const { error: errorProfileImage } = userCreateProfileImageSchema.validate({
      size,
    })
    if (errorProfileImage) {
      const errorMessage = errorProfileImage.details
        .map((detail) => detail.message)
        .join(', ')
      return res.status(400).json({ error: errorMessage })
    }
    //Guardamos a la profileImage dentro de req para que sea más fácil después accederla
    req.profileImage = profileImage
    next()
  }
}

export const validateCreateUser = (req, res, next) => {
  //Nos devuelve un array de errores
  const { error } = userCreateSchema.validate(req.body)
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(', ')
    return res.status(400).json({ error: errorMessage })
  }

  next()
}
