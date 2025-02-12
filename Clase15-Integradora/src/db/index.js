import { connect } from 'mongoose'
import { config } from '../config/index.js'

export const initMongoDBAtlas = async () => {
  try {
    await connect(config.db.connectionString)
    console.info(
      'Conectado con la base de datos de MongoDB: ',
      config.db.connectionString
    )
  } catch (error) {
    console.error(
      `Error en la conexión a la base de datos, motivo: "${error.message}"`
    )
  }
}
