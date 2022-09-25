import { IOrder } from '../../interfaces'
import testUser from './userTestData'
import testAddress from './addressTestData'
import productTestData from './productTestData'

const testOrder: IOrder = {
  user: testUser,
  shippingAddress: testAddress,
  paymentMethod: {
    method: 'cash',
  },
  items: [
    {
      _id: productTestData[0]._id,
      quantity: 1,
    },
  ],
  totalPrice: productTestData[0].price + 50,
}

export default testOrder
