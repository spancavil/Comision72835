// use coderhouse

db.createCollection('students')

db.students.insertOne({
  nombre: 'Sebas',
  apellido: 'Anca',
  curso: 'backend I',
  correo: 'sancavil@gmail.com',
})

db.students.insertMany([
  {
    nombre: 'Romi',
    apellido: 'Lalala',
    curso: 'backend I',
    correo: 'rlalala@gmail.com',
  },
])
