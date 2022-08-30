import { renderWithProviders } from '../../utils/test-utils'
import { cleanup } from '@testing-library/react'
import HeroBanner from './HeroBanner'
import Home from '../../views/Home'

describe('Hero Banner', () => {
  afterAll(() => {
    cleanup()
  })

  const { getByRole, findByRole } = renderWithProviders(<Home />)

  it('should render on page', async () => {
    expect(
      await findByRole('heading', { name: /xx99 mark ii headphones/i })
    ).toBeInTheDocument()
  })

  it('should link to correct product', async () => {
    expect(getByRole('link', { name: /see product/i })).toBeInTheDocument()
  })
})

// see product button links to correct product

// product categories render on page

// product category 'shop' button links to correct page

// test('type and submit a post, then show post', async () => {
//   const { findAllByRole, findByText, getByText } = render(<Home />)
//   expect(await findByText('Test post')).toBeInTheDocument()
//   const textarea = await findAllByRole('textbox')
//   userEvent.type(textarea[0], 'Another test post.')
//   userEvent.click(getByText('Post'))
//   expect(await findByText('Another test post.')).toBeInTheDocument()
// })
