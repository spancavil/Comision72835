import mongoose from 'mongoose'

const studentCollection = 'students'

const studentSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, index: true },
    last_name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    courses: {
      type: [
        {
          course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'courses',
          },
        },
      ],
      default: [],
    },
    country: {
      type: {
        country: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'countries',
        },
      },
    },
  },
  { timestamps: false, versionKey: false }
)

studentSchema.pre(['find', 'findOne'], function () {
  this.populate('courses.course')
  //Acá puede ir la lógica que uno quiera
})

export const StudentModel = mongoose.model(studentCollection, studentSchema)
