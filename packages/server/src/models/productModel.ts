import { Schema, model } from 'mongoose'

const imageSchema = new Schema({
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

const itemSchema = new Schema({
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
  slug: {
    type: String,
    required: true,
  },
  name: {
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
  others: [this],
})

// if above code for 'others' does not work
// productSchema.add({
//   others: [productSchema]
// })

export default model('Product', productSchema)
