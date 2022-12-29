import supertest from 'supertest'
import createServer from '../utils/server'
import { createProduct } from '../services/productService'
import { IProduct } from '@audiophile/common/interfaces'
import productTestData from '@audiophile/common/data/testData/productTestData'

const app = createServer()

// describe('get products route', () => {})

describe('get product route', () => {
  test('product does not exist', async () => {
    const productId = 'product-123'
    await supertest(app).get(`/api/products/${productId}`).expect(404)
  })

  test('product does exist', async () => {
    const product = await createProduct(productTestData[0] as IProduct)
    const productId = product._id

    const { body, statusCode } = await supertest(app).get(
      `/api/products/${productId}`
    )

    expect(statusCode).toBe(200)
    expect(body._id).toBe(productId.toString())
  })
})
