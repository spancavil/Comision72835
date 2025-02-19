// validationSchema.js
import Joi from 'joi'

export const userCreateSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
})

export const userCreateProfileImageSchema = Joi.object({
  profileImage: Joi.string().optional(),
  size: Joi.number().optional().max(5000000),
})
