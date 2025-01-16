import express from 'express'

const app = express()

//Para poder trabajar con JSON y que se parseen correctamente a formatos de objeto
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Definimos el Objeto de tipo Gatito con las props correspondientes, sin utilizar ts. Solamente utilizando JSDocs
/**
 * @typedef {Object} Gatito
 * @property {string} nombre
 * @property {string} raza
 * @property {(number|string)} id
 */

/**
 * @type {Array<Gatito>}
 */
let gatitos = []

//Generar un gatito
app.post('/v1/gatito', (req, res) => {
  /**
   * @type {Gatito}
   */
  const gatito = req.body

  //Validacion de campos
  if (!gatito.nombre || !gatito.raza) {
    return res.status(400).send({
      mensaje: 'Error al crear un gatito',
      error: 'Valores incompletos',
    })
  }

  gatito.id = gatitos.length + 1

  gatitos.push(gatito)

  return res.status(204).send({
    mensaje: 'Gatito creado',
    data: { gatito },
  })
})

//Obtener gatitos
app.get('/v1/gatito', (req, res) => {
  res.send({ data: gatitos })
})

//Obtener gatito por id
app.get('/v1/gatito/:id', (req, res) => {
  const { id } = req.params
  const gatito = gatitos.find((gatito) => gatito.id === Number(id))
  if (!gatito) res.send({ mensaje: `No se encontró con el id: ${id}` })
  else res.send({ data: gatito })
})

//Actualizar gatito
app.put('/v1/gatito/:id', (req, res) => {
  /**
   * @type {Gatito}
   */
  const { id } = req.params
  const gatitoDato = req.body

  //TODO: agregar campos

  const gatitoParaActualizar = gatitos.find(
    (gatito) => gatito.id === Number(id)
  )

  if (!gatitoParaActualizar)
    res.status(400).send({ mensaje: `No se encontró con el id: ${id}` })

  gatitos = gatitos.map((gatito) => {
    if (gatito.id === Number(id)) {
      return { ...gatitoDato, id: gatito.id }
    } else return gatito
  })

  res.send({ mensaje: `Se actualizó el gatito con id: ${id}` })
})

app.get('/v1/home', (req, res) => {
  res.status(200).send({ message: 'Bienvenido al home!' })
})

//TODO
// app.delete()

const server = app.listen(3006, () => {
  console.info('Server listen on port 3006')
})
