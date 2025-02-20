import mongoose from 'mongoose'

const productCollection = 'products'

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String, required: true, index: true },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    price: { type: Number, required: true, index: true },
    status: { type: Boolean, default: true }, //if not true, do not display
    stock: { type: Number, required: true },
    category: {
      type: String,
      enum: ['electrónica', 'ropa hombre', 'ropa mujer', 'joyas'], //Enum de ejemplo
    },
    thumbnails: { required: false, type: [String], default: [] },
  },
  { timestamps: true, versionKey: false }
)

export const ProductModel = mongoose.model(productCollection, productSchema)
