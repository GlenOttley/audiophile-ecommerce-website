import { Schema, model } from 'mongoose'
import { IImage, IItem, IProduct } from '@audiophile/common/interfaces'

const imageSchema: Schema<IImage> = new Schema({
  mobile: {
    type: String,
    required: true,
  },
  tablet: {
    type: String,
    required: true,
  },
  desktop: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})

const itemSchema: Schema<IItem> = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
})

const productSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  // },
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  image: {
    type: imageSchema,
    _id: false,
  },
  category: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: imageSchema,
    _id: false,
  },
  new: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  includes: {
    type: [itemSchema],
    _id: false,
  },
  gallery: {
    first: {
      type: imageSchema,
      _id: false,
    },
    second: {
      type: imageSchema,
      _id: false,
    },
    third: {
      type: imageSchema,
      _id: false,
    },
  },
  others: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
})

// if above code for 'others' does not work
// productSchema.add({
//   others: [productSchema]
// })

export interface ISavedProductDocument
  extends Omit<IProduct, 'others'>,
    Omit<Document, '_id'> {
  others: string[]
}

export default model<ISavedProductDocument>('Product', productSchema)
