// validationSchema.js
import Joi from 'joi'

export const getProductsSchema = Joi.object({
  limit: Joi.string().optional(),
  page: Joi.string().optional(),
  query: Joi.string().optional().min(3),
  sort: Joi.string().optional().valid('asc', 'desc'),
})
