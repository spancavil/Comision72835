//Comandos misceláneos útiles

// use coderhouse
// show dbs
// db
// show collections
// db.createCollection(name)
// db.dropDatabase()
// db.miColleccion.drop()

// use baseCRUD

db.createCollection('pets')

db.pets.insertMany([
  {
    nombre: 'Sebas',
    especie: 'persa',
    animal: 'gato',
    edad: 6,
    propAdicional: true,
  },
  {
    nombre: 'Mortadela',
    especie: 'boxer',
    animal: 'perro',
    edad: 8,
  },
  {
    nombre: 'Paladar',
    especie: 'pepe',
    animal: 'perro',
    edad: 1,
  },
  {
    nombre: 'Marisa',
    especie: 'anaconda',
    animal: 'serpiente',
    edad: 7,
  },
  {
    nombre: 'Claudio',
    especie: 'gallo',
    animal: 'gallo',
    edad: 3,
    propAdicional: true,
  },
])

db.pets.find({ animal: 'perro' }).pretty()

db.pets.countDocuments()

db.pets.estimatedDocumentCount()

// Insertar 1000000 documentos usando insertMany()
const documents = []
for (let i = 0; i < 1000000; i++) {
  documents.push({
    nombre: `Producto ${i + 1}`,
    precio: Math.floor(Math.random() * 1000),
    categoria: 'electronica',
  })
}
db.products.insertMany(documents)

//Probar count exacto y count estimado

//FILTROS
db.pets.find({ nombre: { $not: { $eq: 'Claudio' } } })
db.pets.find({ $or: [{ edad: { $lte: 1 } }, { edad: { $gt: 7 } }] })
db.pets.find({ propAdicional: { $exists: true } })

db.pets.find({ animal: { $in: ['perro', 'gato'] } })
db.pets.find({ especie: { $nin: ['persa', 'boxer'] } })

db.pets.distinct('animal')

//Proyecciones
db.pets.find({ nombre: { $not: { $eq: 'Claudio' } } }, { nombre: 1 })
db.pets.find({ nombre: { $not: { $eq: 'Claudio' } } }, { nombre: 0 })
db.pets
  .find({ nombre: { $not: { $eq: 'Claudio' } } }, { nombre: 1 })
  .sort({ nombre: 1 })
db.products.find().limit(10)
db.products.find().skip(10).limit(10)

db.pets.find({}, { propAdicional: 1 })

//Update
db.pets.updateOne(
  { _id: ObjectId('679fae842ee0279ac16392d4') },
  { $set: { nombre: 'Sebastian' } }
)

//Actividad
db.clientes.insertMany([
  { nombre: 'Pablo', edad: 25 },
  { nombre: 'Juan', edad: 22 },
  { nombre: 'Lucia', edad: 25 },
  { nombre: 'Juan', edad: 29 },
  { nombre: 'Fede', edad: 35 },
])
