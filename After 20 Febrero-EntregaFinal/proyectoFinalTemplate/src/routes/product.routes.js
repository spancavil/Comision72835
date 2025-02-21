import { Router } from 'express'
import { ProductController } from '../controllers/product.controller.js'
import { validateGetProducts } from '../middlewares/validationMiddleware.js'

export const ProductRouter = Router()

const productController = new ProductController()

ProductRouter.get('/', validateGetProducts, productController.getProducts)

ProductRouter.post('/')

ProductRouter.put('/:id', (req, res) => {})

ProductRouter.delete('/:id', (req, res) => {})
