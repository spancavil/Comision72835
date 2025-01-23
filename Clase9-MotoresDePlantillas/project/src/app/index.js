import express from 'express'
import { engine } from 'express-handlebars'
import { UsersRouter, ViewsRouter } from '../routes/index.js'
import { config } from '../config/index.js'

const initApp = () => {
  const app = express()

  //Para poder trabajar con JSON y que se parseen correctamente a formatos de objeto
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(express.static(config.dirname + 'src/public'))

  //Definimos el motor de plantillas: handlebars
  app.engine('handlebars', engine())
  app.set('view engine', 'handlebars')
  app.set('views', config.dirname + 'src/views')

  //Definimos el enrutador para las vistas
  app.use('/', ViewsRouter)

  //Router para API (arranca con /api)
  app.use('/api/users', UsersRouter)

  return app
}

export default initApp
