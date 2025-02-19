import { connect } from 'mongoose'
import { config } from '../config/index.js'
/* import { OrderModel } from '../models/orders.model.js'
import mongoose from 'mongoose'
import { StudentForAggregationModel } from '../models/studentsForAggregation.model.js' */

export const initMongoDBAtlas = async () => {
  try {
    await connect(config.db.connectionString)
    console.info(`MongoDB connected to: ${config.db.connectionString}`)

    //1. Creamos las órdenes
    /* await OrderModel.create([
      {
        name: 'Pepperoni',
        size: 'small',
        price: 19,
        quantity: 10,
        date: '2021-03-13T08:14:30Z',
      },
      {
        name: 'Pepperoni',
        size: 'medium',
        price: 20,
        quantity: 20,
        date: '2021-03-13T09:13:24Z',
      },
      {
        name: 'Pepperoni',
        size: 'large',
        price: 21,
        quantity: 30,
        date: '2021-03-17T09:22:12Z',
      },
      {
        name: 'Cheese',
        size: 'small',
        price: 12,
        quantity: 15,
        date: '2021-03-13T11:21:39.736Z',
      },
      {
        name: 'Cheese',
        size: 'medium',
        price: 13,
        quantity: 50,
        date: '2022-01-12T21:23:13.331Z',
      },
      {
        name: 'Cheese',
        size: 'large',
        price: 14,
        quantity: 10,
        date: '2022-01-12T05:08:13Z',
      },
      {
        name: 'Vegan',
        size: 'small',
        price: 17,
        quantity: 10,
        date: '2021-01-13T05:08:13Z',
      },
      {
        name: 'Vegan',
        size: 'medium',
        price: 18,
        quantity: 10,
        date: '2021-01-13T05:10:13Z',
      },
    ])
    console.log('Ordenes creadas!') */

    //2. No hace falta hacer un groupby, dado que sólo hay una pizza mediana por nombre (no hay repetidas)

    /* let orders = await OrderModel.aggregate([
      {
        $match: { size: 'medium' },
      },
      {
        $project: { name: 1, quantity: 1, _id: 0 },
      },
    ])
    console.log(orders) */

    //3. En caso de haber repetidas, si es necesario un group (Hacer ejemplo, repetiendo el create y ver la diferencia)
    //Nota el "group" (similar al agrupamiento de SQL)
    /* let ordersGroupby = await OrderModel.aggregate([
      {
        $match: { size: 'medium' },
      },
      {
        $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } },
      },
    ])
    console.log(ordersGroupby) */

    //3. Nuevos pipelines
    /* let ordersNewPipeline = await OrderModel.aggregate([
      {
        $match: { size: 'medium' },
      },
      {
        $group: { _id: '$name', totalQuantity: { $sum: '$quantity' } },
      },
      //Ordenamos por cantidad de ventas
      {
        $sort: { totalQuantity: -1 },
      },
      //_id: new mongoose.Types.ObjectId(): En este caso, se está agrupando por un valor hardcodeado de ObjectId. Esto significa que todos los documentos resultantes de la etapa anterior se agruparán en un único grupo. Es como si los estuviéramos metiendo en un mismo saco, y a ese saco le ponemos la etiqueta de ObjectId.
      //NOTA: si le ponemos _id: 1, quedará el mismo para todos los reportes y por lo tanto no se generarán nuevos documentos, dado que el id es el mismo.
      //orders: { $push: '$$ROOT' }:
      // orders: Se está creando un nuevo campo llamado orders dentro del documento resultante. Este campo será un array.
      // { $push: '$$ROOT' }: El operador $push se utiliza para agregar elementos a un array. En este caso, se está agregando $$ROOT a ese array.
      // $$ROOT: Esta variable especial representa el documento completo que está siendo procesado en ese momento.
      {
        $group: {
          _id: new mongoose.Types.ObjectId(),
          orders: { $push: '$$ROOT' },
        },
      },
      //Sólo nos interesa _id y orders
      {
        $project: {
          _id: 1,
          orders: 1,
        },
      },
      //Guardamos en la collection de reports
      {
        $merge: {
          into: 'reports',
        },
      },
    ])

    console.log(ordersNewPipeline) */

    //ACTIVIDAD

    // Obtener a los estudiantes agrupados por calificación del mejor al peor
    /* let response = await StudentForAggregationModel.aggregate([
      {
        $sort: { grade: -1, last_name: 1 },
      },
    ])
    console.log({ response }) */

    // Obtener a los estudiantes de cada division (mostrar la cantidad)
    /* let response = await StudentForAggregationModel.aggregate([
      {
        $group: { _id: '$division', studentsQuantity: { $count: {} } },
      },
    ])
    console.log({ response }) */

    // Obtener el promedio de los estudiantes del grupo 1B
    /* let response = await StudentForAggregationModel.aggregate([
      {
        $group: { _id: '$division', promedio: { $avg: '$grade' } },
      },
    ])
    console.log({ response }) */
    // Obtener el promedio de los estudiantes del grupo 1A
    /* let response = await StudentForAggregationModel.aggregate([
      {
        $match: { division: '1A' },
      },
      {
        $group: { _id: '$division', promedio: { $avg: '$grade' } },
      },
    ])
    console.log({ response }) */

    // Obtener el promedio general de los estudiantes.
    /* let response = await StudentForAggregationModel.aggregate([
      {
        $group: {
          _id: null, // Agrupamos todos los documentos en un solo grupo. Podemos ponerle "pepito"
          promedioGeneral: { $avg: '$grade' }, // Calculamos el promedio de la propiedad "grade"
        },
      },
    ])
    console.log({ response }) */

    // Obtener el promedio de calificación de los hombres
    // Obtener el promedio de calificación de las mujeres

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
