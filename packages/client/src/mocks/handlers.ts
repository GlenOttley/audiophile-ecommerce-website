import { rest, MockedRequest, ResponseFunction, RestContext } from 'msw'
import productData from '@audiophile/common/data/productData'

export const handlers = [
  rest.get(
    '/api/products',
    (req: MockedRequest, res: ResponseFunction, ctx: RestContext) => {
      return res(ctx.json(productData), ctx.delay(150))
    }
  ),
]
