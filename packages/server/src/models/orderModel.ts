import { Schema, model } from 'mongoose'
import { IOrder } from '@audiophile/common/interfaces'

const orderSchema = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    items: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      method: {
        type: String,
        required: true,
      },
      eMoneyNumber: {
        type: String,
      },
      eMoneyPin: {
        type: String,
      },
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
)

export default model<IOrder>('Order', orderSchema)
