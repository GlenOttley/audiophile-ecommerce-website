const MongoMemoryServer = require('mongodb-memory-server')
import mongoose from 'mongoose'
import Product from '../models/productModel'
import Order from '../models/orderModel'

beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

beforeEach(async () => {
  await Product.deleteMany()
  await Order.deleteMany()
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoose.connection.close()
})
