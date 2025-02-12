import initApp from './app/index.js'
import { config } from './config/index.js'
import { initMongoDBAtlas } from './db/index.js'

const app = initApp()

//Connection MongoDB Atlas
initMongoDBAtlas()

console.log(process.env.userMongoDB)

const server = app.listen(config.PORT, () => {
  console.info(`Server listen on: http://localhost:${config.PORT}`)
})
