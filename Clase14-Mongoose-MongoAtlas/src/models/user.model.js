import mongoose from 'mongoose'

const userCollection = 'users'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
)

export const UserModel = mongoose.model(userCollection, userSchema)
