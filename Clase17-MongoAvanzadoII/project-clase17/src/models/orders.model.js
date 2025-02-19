import mongoose from 'mongoose'

const orderCollection = 'orders'

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, index: true },
    size: {
      type: String,
      enum: ['small', 'medium', 'large'],
      default: 'medium',
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    date: Date,
  },
  { timestamps: false, versionKey: false }
)

export const OrderModel = mongoose.model(orderCollection, orderSchema)
