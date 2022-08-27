import { renderWithProviders } from '../utils/test-utils'
import Home from './Home'

describe('Home', () => {
  test('products render on page', async () => {
    const { getByText, findByText, debug } = renderWithProviders(<Home />)
    // expect(getByText('YX1 Wireless Earphones')).toBeInTheDocument()
    expect(await findByText('YX1 Wireless Earphones')).toBeInTheDocument()
  })

  // test('type and submit a post, then show post', async () => {
  //   const { findAllByRole, findByText, getByText } = render(<Home />)
  //   expect(await findByText('Test post')).toBeInTheDocument()
  //   const textarea = await findAllByRole('textbox')
  //   userEvent.type(textarea[0], 'Another test post.')
  //   userEvent.click(getByText('Post'))
  //   expect(await findByText('Another test post.')).toBeInTheDocument()
  // })
})
