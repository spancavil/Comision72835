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
      code: 12349,
      description: 'Una bella remera',
      price: 15000,
      stock: 20,
      title: 'Remera pro',
    }) */

    /* const cartCreated = await CartModel.create({
      products: [
        { product: { _id: '67b7c185f84ca887a0a9d235' } },
        { product: { _id: '67b7c1de717f44a8e64aa80b' } },
      ],
    }) */

    /* const cartFound = await CartModel.findOne({
      _id: '67b7c26bc4575608bac749d6',
    })

    console.log(JSON.stringify(cartFound, null, '\t')) */

    /* const products = await ProductModel.find({})

    console.log(JSON.stringify(products, null, '\t')) */

    /*    const response = await ProductModel.paginate({}, { limit: 2, page: 4 })

    console.log(JSON.stringify(response, null, '\t')) */

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
