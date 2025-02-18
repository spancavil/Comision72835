import mongoose from 'mongoose'

const countryCollection = 'countries'

const countrySchema = new mongoose.Schema(
  {
    name: String,
    students: {
      type: Array,
      default: [],
    },
  },
  { timestamps: false, versionKey: false }
)

export const CountryModel = mongoose.model(countryCollection, countrySchema)
