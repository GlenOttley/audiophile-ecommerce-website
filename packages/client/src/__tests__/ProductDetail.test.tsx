import { renderWithProviders } from '../utils/test-utils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '../mocks/server'
import ProductDetail from '../views/ProductDetail'
import Nav from '../components/Nav'
import { Routes, Route } from 'react-router-dom'

describe('Product Detail Screen', () => {
  beforeAll(() => {
    server.listen()
  })

  beforeEach(() => {
    renderWithProviders(
      <>
        <Nav />
        <Routes>
          <Route
            path='/products/:category/:productSlug'
            element={<ProductDetail />}
          />
        </Routes>
      </>,
      {
        route: '/products/headphones/xx99-mark-two-headphones',
      }
    )
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  describe('add items to cart', () => {
    let addToCartButton
    let cartBadge
    let incrementButton
    let decrementButton

    test('add single item to cart', async () => {
      addToCartButton = screen.getByRole('button', {
        name: /add to cart/i,
      })
      cartBadge = screen.getByRole('status')

      await userEvent.click(addToCartButton)

      expect(cartBadge).toHaveTextContent('1')
    })

    test('add multiple items to cart', async () => {
      addToCartButton = screen.getByRole('button', {
        name: /add to cart/i,
      })
      cartBadge = screen.getByRole('status')
      incrementButton = screen.getByRole('button', {
        name: '+',
      })

      await userEvent.click(incrementButton)
      await userEvent.click(addToCartButton)

      expect(cartBadge).toHaveTextContent('2')
    })

    test('increase then decrease amount of items before adding to cart', async () => {
      addToCartButton = screen.getByRole('button', {
        name: /add to cart/i,
      })
      cartBadge = screen.getByRole('status')
      incrementButton = screen.getByRole('button', {
        name: '+',
      })
      decrementButton = screen.getByRole('button', {
        name: '-',
      })

      await userEvent.click(incrementButton)
      await userEvent.click(decrementButton)
      await userEvent.click(addToCartButton)

      expect(cartBadge).toHaveTextContent('1')
    })
  })
})
