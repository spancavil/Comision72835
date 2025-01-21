import express from 'express'

const app = express()

//Para poder trabajar con JSON y que se parseen correctamente a formatos de objeto
app.use(express.json())
app.use(express.urlencoded())

/**
 * @typedef {Object} Gatito
 * @property {string} name
 * @property {string} raza
 * @property {string} id
 */

const gatitos = []

app.post('/api/gatito', (req, res) => {
  /**
   * @type {Gatito}
   */
  const gatito = req.body

  if (!gatito.name || !gatito.raza) {
    return res.status(400).send({
      message: 'Error al crear un gatito',
      error: 'Valores incompletos',
    })
  }
  gatito.id = gatitos.length + 1

  gatitos.push(req.body)

  return res.status(200).send({
    message: 'Gatito creada',
    data: { ...gatito },
  })
})

app.get('/api/home', (req, res) => {
  res.status(200).send({ message: 'Bienvenido al home!' })
})

const server = app.listen(3008, () => {
  console.info('Server listen on port 3008')
})
