import { connect } from 'mongoose'
import { config } from '../config/index.js'
/* import { OrderModel } from '../models/orders.model.js'
import mongoose from 'mongoose'
import { StudentForAggregationModel } from '../models/studentsForAggregation.model.js' */

import { CartModel } from '../models/carts.model.js'
import { ProductModel } from '../models/products.model.js'

export const initMongoDBAtlas = async () => {
  try {
    await connect(config.db.connectionString)
    console.info(`MongoDB connected to: ${config.db.connectionString}`)

    //Entrega final - tests de modelos
    /* const productCreated = await ProductModel.create({
      category: 'ropa hombre',
      code: 12345,
      description: 'Una bella remera',
      price: 15000,
      stock: 20,
      title: 'Remera pro',
    }) */

    /* const cartCreated = await CartModel.create({
      products: [{ product: { _id: '' } }],
    }) */

    /* const cartFound = await CartModel.findOne({
      _id: '',
    }) */

    //mongoose-paginate-v2
    /* const response = await StudentForAggregationModel.paginate(
      {},
      { limit: 10, page: 1 }
    )

    console.log(response) */
  } catch (error) {
    console.error(
      `Error en la conexión a la base de datos, motivo: "${error.message}"`
    )
  }
}
