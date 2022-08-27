import productReducer from './productSlice'

describe('product reducer', () => {
  it('should handle initial state', () => {
    expect(productReducer(undefined, { type: 'unknown' })).toEqual({
      productList: [],
      status: 'idle',
      error: null,
    })
  })
})
