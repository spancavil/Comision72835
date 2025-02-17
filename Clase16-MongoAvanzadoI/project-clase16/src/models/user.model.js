import mongoose from 'mongoose'

const userCollection = 'users'

const userSchema = new mongoose.Schema(
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
    ip_address: {
      type: String,
      required: true,
    },
    street_address: {
      type: String,
      required: true,
    },
  },
  { timestamps: false, versionKey: false }
)

export const UserModel = mongoose.model(userCollection, userSchema)
