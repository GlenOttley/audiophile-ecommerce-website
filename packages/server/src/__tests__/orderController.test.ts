import supertest from 'supertest'
import createServer from '../utils/server'
import testOrder from '@audiophile/common/data/testData/orderTestData'

const app = createServer()

// these tests are not just testing the cart controller
// they are also testing the route
// think about how to test the controller in isolation

describe('create order route', () => {
  test('the order data does not contain any items', async () => {
    const response = await supertest(app)
      .post('/api/orders')
      .send({
        ...testOrder,
        items: [],
      })
      .expect(400)
      .expect('Content-Type', /json/)
    expect(response.body).toEqual({
      message: 'No order items',
    })
  })
  test('the order data is complete', async () => {
    const response = await supertest(app)
      .post('/api/orders')
      .send(testOrder)
      .expect(201)
      .expect('Content-Type', /json/)
    expect(JSON.stringify(response.body.user)).toBe(
      JSON.stringify(testOrder.user)
    )
    expect(JSON.stringify(response.body.items[0]._id)).toBe(
      JSON.stringify(testOrder.items[0]._id)
    )
  })
})
