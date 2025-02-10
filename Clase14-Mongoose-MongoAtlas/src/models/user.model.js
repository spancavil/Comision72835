import mongoose from 'mongoose'

const userCollection = 'users'

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
)

export const UserModel = mongoose.model(userCollection, userSchema)
