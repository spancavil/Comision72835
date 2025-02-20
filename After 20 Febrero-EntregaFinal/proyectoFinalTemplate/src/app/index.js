import express from 'express'
import { CartRouter, ProductRouter } from '../routes/index.js'
import { config } from '../config/index.js'
import { logger } from '../middlewares/logger.js'
import errorHandler from '../middlewares/errorHandling.js'

const initApp = () => {
  const app = express()

  //Para poder trabajar con JSON y que se parseen correctamente a formatos de objeto
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(express.static(config.dirname + 'src/public'))

  //Middleware logging
  app.use(logger)
  //Router para API (arranca con /api)
  app.use('/api/product', ProductRouter)
  app.use('/api/cart', CartRouter)
  app.use(errorHandler)
  return app
}

export default initApp
