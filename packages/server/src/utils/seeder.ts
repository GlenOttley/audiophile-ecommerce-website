import dotenv from 'dotenv'
import productData from '@audiophile/common/data/productData'
import Product from '../models/productModel'
import Order from '../models/orderModel'
import connectDB from './db'
import path from 'path'

const serverRoot = path.resolve()

// dev
dotenv.config({ path: path.join(serverRoot, '../../.env') })

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()
    await Order.deleteMany()

    await Product.insertMany(productData)

    // add three random product id's to each products 'others' array
    const products = await Product.find({})

    for (let i = 0; i < products.length; i++) {
      let currentProduct = products[i]
      while (currentProduct.others.length < 3) {
        let j = Math.floor(Math.random() * products.length)
        let otherProduct = products[j]
        if (currentProduct._id !== otherProduct._id) {
          if (!currentProduct.others.includes(otherProduct._id)) {
            currentProduct.others.push(otherProduct._id)
          }
        }
      }
      await currentProduct.save()
    }

    console.log('Data imported!')

    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()

    console.log('Data destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
