import { renderWithProviders } from '../utils/test-utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '../mocks/server'
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import productTestData from '@audiophile/common/data/productTestData'
import { initialState as productInitialState } from '../features/product/productSlice'
import { IProduct, ICartItem } from '@audiophile/common/interfaces'

const cartTestData: ICartItem[] = productTestData
  .slice(0, 1)
  .map(({ _id }) => ({ _id, quantity: 1 }))

describe('Cart', () => {
  beforeAll(() => {
    server.listen()
  })

  beforeEach(async () => {
    renderWithProviders(<Nav />, {
      preloadedState: {
        product: {
          ...productInitialState,
          productList: productTestData as IProduct[],
        },
        cart: {
          cartItems: cartTestData,
        },
      },
    })
    let cartBadge
    cartBadge = screen.getByRole('status')
    await userEvent.click(cartBadge)
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  let cartCount
  let cartTotal
  let removeAllButton
  let productImage
  let productName
  let productPrice
  let productQuantity
  let incrementButton
  let decrementButton
  let emptyCartMessage

  test('cart counter has correct value', () => {
    cartCount = screen.getByRole('heading', {
      name: /cart/i,
    })
    expect(cartCount).toHaveTextContent('1')
  })

  test('cart total has correct value', () => {
    cartTotal = screen.getByRole('heading', {
      name: `$${productTestData[0].price}`,
    })
  })

  test('single product renders in cart', () => {
    productImage = screen.getByRole('img')
    expect(productImage).toBeInTheDocument()

    productName = screen.getByText(productTestData[0].shortName)
    expect(productName).toBeInTheDocument()

    productPrice = screen.getByRole('heading', {
      name: `$${productTestData[0].price}`,
    })
    expect(productPrice).toBeInTheDocument()

    productQuantity = screen.getByRole('spinbutton')
    expect(productQuantity).toHaveDisplayValue('1')
  })

  test('product quantity updates correctly', async () => {
    productQuantity = screen.getByRole('spinbutton')
    incrementButton = screen.getByRole('button', {
      name: '+',
    })
    decrementButton = screen.getByRole('button', {
      name: '-',
    })
    cartTotal = screen.getByRole('heading', {
      name: `$${productTestData[0].price}`,
    })
    await userEvent.click(incrementButton)
    expect(productQuantity).toHaveDisplayValue('2')

    await userEvent.click(decrementButton)
    expect(productQuantity).toHaveDisplayValue('1')
  })

  test('total updates correctly', async () => {
    productQuantity = screen.getByRole('spinbutton')
    incrementButton = screen.getByRole('button', {
      name: '+',
    })
    decrementButton = screen.getByRole('button', {
      name: '-',
    })
    cartTotal = screen.getByRole('heading', {
      name: `$${productTestData[0].price}`,
    })
    await userEvent.click(incrementButton)
    expect(cartTotal).toHaveTextContent(/1,198/i)

    await userEvent.click(decrementButton)
    expect(cartTotal).toHaveTextContent(/599/i)
  })

  test('remove all button works correctly', async () => {
    removeAllButton = screen.getByRole('button', {
      name: /remove all/i,
    })

    expect(removeAllButton).toBeInTheDocument()

    await userEvent.click(removeAllButton)

    emptyCartMessage = screen.getByRole('heading', {
      name: /your cart is empty/i,
    })
  })
})
