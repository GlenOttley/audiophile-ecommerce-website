import dotenv from 'dotenv'
import productData from '../data/productData.json'
import Product from '../models/productModel'
import connectDB from './db'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Product.deleteMany()

    await Product.insertMany(productData)

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
