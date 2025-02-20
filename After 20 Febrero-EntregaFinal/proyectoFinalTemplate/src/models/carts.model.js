import mongoose from 'mongoose'

const cartsCollections = 'carts'

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products',
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
)

//pre-populate (opcional)
/* cartSchema.pre('findOne', function () {
  this.populate('products.product')
}) */

export const CartModel = mongoose.model(cartsCollections, cartSchema)
