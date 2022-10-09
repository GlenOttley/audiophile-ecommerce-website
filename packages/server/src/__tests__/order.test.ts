import supertest from 'supertest'
import createServer from '../utils/server'
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import testOrder from '@audiophile/common/data/testData/orderTestData'

const app = createServer()

describe('order', () => {
  // beforeAll(async () => {
  //   const mongoServer = await MongoMemoryServer.create()

  //   await mongoose.connect(mongoServer.getUri())
  // })

  // afterAll(async () => {
  //   await mongoose.disconnect()
  //   await mongoose.connection.close()
  // })

  describe('create order route', () => {
    describe('given the order data does not contain any items', () => {
      it('should return a 400 status', async () => {
        await supertest(app)
          .post('/api/orders')
          .send({
            ...testOrder,
            items: [],
          })
          .expect(400)
      })
    })
    describe('given the order data is complete', () => {
      it('should return a 201 status and the order', async () => {
        await supertest(app)
          .post('/api/orders')
          .send(testOrder)
          .expect(201)
          .then((response) => {
            expect(JSON.stringify(response.body.user)).toBe(
              JSON.stringify(testOrder.user)
            )
          })
      })
    })
  })
})
