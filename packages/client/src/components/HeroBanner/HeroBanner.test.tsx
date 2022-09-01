import { renderWithProviders } from '../../utils/test-utils'
import { screen } from '@testing-library/react'
import Home from '../../views/Home'
import { server } from '../../mocks/server'

describe('Hero Banner', () => {
  beforeAll(() => {
    server.listen()
  })

  beforeEach(() => {
    renderWithProviders(<Home />)
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  it('should render on page', async () => {
    const heading = await screen.findByRole('heading', {
      name: /xx99 mark ii headphones/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('should link to correct product', async () => {
    expect(
      screen.getByRole('link', { name: /see product/i })
    ).toBeInTheDocument()
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
