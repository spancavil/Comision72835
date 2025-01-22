import initApp from './app/index.js'
import { config } from './config/index.js'

const app = initApp()

const server = app.listen(config.PORT, () => {
  console.info(`Server listen on http://localhost:${config.PORT}`)
})
