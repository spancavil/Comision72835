import initApp from './app/index.js'

const app = initApp()

const server = app.listen(3006, () => {
  console.info('Server listen on http://localhost:3006')
})
