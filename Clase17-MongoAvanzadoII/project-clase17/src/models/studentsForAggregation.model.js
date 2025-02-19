import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const studentForAggregationCollection = 'students2'

const studentForAggregationSchema = new mongoose.Schema(
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
    grade: {
      type: Number,
      required: true,
    },
    division: {
      type: String,
      enum: ['1A', '1B', '2A', '2B'],
      default: '1A',
    },
  },
  { timestamps: false, versionKey: false }
)

/* studentSchema.pre('findOne', function () {
  this.populate('courses.course')
}) */

studentForAggregationSchema.plugin(mongoosePaginate)

export const StudentForAggregationModel = mongoose.model(
  studentForAggregationCollection,
  studentForAggregationSchema
)
