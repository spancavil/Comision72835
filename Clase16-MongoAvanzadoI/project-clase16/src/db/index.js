import { connect } from 'mongoose'
import { config } from '../config/index.js'
import { UserModel } from '../models/user.model.js'
import { CourseModel } from '../models/courses.model.js'
import { StudentModel } from '../models/student.model.js'

export const initMongoDBAtlas = async () => {
  try {
    await connect(config.db.connectionString)
    console.info(`MongoDB connected to: ${config.db.connectionString}`)
    /* const init = new Date()
    let response = await UserModel.find({ first_name: 'Sukey' }).explain(
      'executionStats'
    )
    const end = new Date()
    console.log(end - init)
    console.log(response) */

    //POPULATE

    //Paso 1. Creación de los documentos
    /* await CourseModel.create({
      title: 'Backend I',
      description: 'El curso más fabuloso de todo Coderhouse',
      difficulty: 11,
      topics: [
        'JS',
        'Servidores',
        'Asincronía',
        'Middlewares',
        'Multer',
        'MongoDB',
      ],
      professor: 'Sebastián',
    })

    await StudentModel.create({
      first_name: 'Hilda',
      last_name: 'Lizarazu',
      email: 'hlizarazu@gmail.com',
      gender: 'Female',
    })

    console.log('Documentos creados!') */

    //Paso 2. Inserción del id del curso en el array de cursos del estudiante
    /* const student = await StudentModel.findOne({
      first_name: 'Hilda',
      last_name: 'Lizarazu',
    })
    const course = await CourseModel.findOne({ title: 'Backend I' })
    student.courses.push({ course: course._id })
    await student.save()
    console.log('Se actualizo el curso del estudiante!') */

    //Paso 3. traer el student nuevamente
    /* const student = await StudentModel.findOne({
      first_name: 'Hilda',
      last_name: 'Lizarazu',
    })

    console.log(JSON.stringify(student, null, '\t')) */

    //Paso 4. traer al student con populate
    const student = await StudentModel.findOne({
      first_name: 'Hilda',
      last_name: 'Lizarazu',
    })

    // console.log(student)

    console.log(JSON.stringify(student, null, '\t'))
  } catch (error) {
    console.error(
      `Error en la conexión a la base de datos, motivo: "${error.message}"`
    )
  }
}
