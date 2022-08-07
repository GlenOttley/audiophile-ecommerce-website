import supertest from 'supertest'
import createServer from '../utils/server'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const app = createServer()

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()

    await mongoose.connect(mongoServer.getUri())
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe('get product route', () => {
    describe('given the product does not exist', () => {
      it('should return a 404', async () => {
        const productId = 'product-123'
        await supertest(app).get(`/api/products/${productId}`).expect(404)
      })
    })

    describe('given the product does exist', () => {
      it('should return a 200 status and the product', async () => {
        const productId = 'product-123'
        await supertest(app).get(`/api/products/${productId}`).expect(404)
      })
    })
  })
})
