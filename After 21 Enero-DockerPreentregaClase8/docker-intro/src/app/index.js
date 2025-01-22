import express from 'express'
import { CartsRouter, ProductsRouter } from '../routes/index.js'
import { config } from '../config/index.js'

const initApp = () => {
  const app = express()

  //Para poder trabajar con JSON y que se parseen correctamente a formatos de objeto
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  /**
   * @typedef {Object} Gatito
   * @property {string} name
   * @property {string} raza
   * @property {string} id
   */

  /*   const middlewareHome = (req, res, next) => {
    req.mensajeBienvenida = 'Bienvenido al home gato!'
    // res.send('ok')
    next()
  } */

  /*   app.get('/api/home', middlewareHome, (req, res) => {
    // throw new Error('Oops ocurrio un error')
    res.status(200).send({ message: req.mensajeBienvenida })
  }) */

  // app.use('/api/users', UsersRouter)

  // app.use('/pets', PetsRouter)

  // app.use(express.static('public'))

  // app.use('/virtual', express.static('public'))

  app.use('/api/products', ProductsRouter)
  app.use('/api/carts', CartsRouter)

  console.log(config.dirname)

  return app
}

export default initApp
