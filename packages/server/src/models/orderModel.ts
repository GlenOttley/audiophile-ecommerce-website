import { Schema, model, Document } from 'mongoose'
import { IOrder } from '@audiophile/common/interfaces'

const orderSchema = new Schema(
  {
    // user: {
    //   type: Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    user: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    items: [
      {
        quantity: {
          type: Number,
          required: true,
        },
        _id: {
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

export interface ISavedOrderDocument extends IOrder, Omit<Document, '_id'> {}

export default model<ISavedOrderDocument>('Order', orderSchema)
