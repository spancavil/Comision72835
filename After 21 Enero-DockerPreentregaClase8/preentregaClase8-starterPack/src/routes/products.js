import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { config } from '../config/index.js'
import { v4 as uuidv4 } from 'uuid'
import { validateInputProducts } from '../middlewares/validationMiddleware.js'

export const ProductsRouter = Router()

const pathToProducts = path.join(config.dirname, '/src/data/products.json')

console.log(pathToProducts)
// console.log(config.dirname)
ProductsRouter.get('/', async (req, res) => {
  let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
  const products = JSON.parse(productsString)
  res.send({ products })
})

ProductsRouter.post('/', validateInputProducts, async (req, res) => {
  //Logica para generar el producto
  let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
  const products = JSON.parse(productsString)

  const id = uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const {
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  } = req.body

  const product = {
    //id autogenerado
    id,
    title,
    description,
    code,
    price,
    status,
    stock,
    category,
    thumbnails,
  }

  products.push(product)

  const productsStringified = JSON.stringify(products, null, '\t')
  await fs.promises.writeFile(pathToProducts, productsStringified)
  res.send({ message: 'Producto creado', data: product })
})

/* UsersRouter.get('/', (req, res) => {
    //get users
    res.send({message: 'ok'})
})

UsersRouter.get('/:id', (req, res) => {
    //get users
    res.send({message: {...req.params}})
}) */
