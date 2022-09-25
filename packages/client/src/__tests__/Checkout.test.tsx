import { renderWithProviders } from '../utils/test-utils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { server } from '../mocks/server'
import productTestData from '@audiophile/common/data/testData/productTestData'
import { initialState as productInitialState } from '../features/product/productSlice'
import { IProduct, ICartItem } from '@audiophile/common/interfaces'
import { IFormInput } from '../views/Checkout'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutSummary from '../components/CheckoutSummary'
import { FormProvider, useForm } from 'react-hook-form'

const cartTestData: ICartItem[] = productTestData
  .slice(0, 1)
  .map(({ _id }) => ({ _id, quantity: 1 }))

describe('Checkout', () => {
  beforeAll(() => {
    server.listen()
  })

  const Wrapper = (props: any) => {
    const formMethods = useForm<IFormInput>({
      mode: 'onSubmit',
      defaultValues: {
        paymentMethod: {
          method: 'e-money',
        },
      },
    })

    return <FormProvider {...formMethods}>{props.children}</FormProvider>
  }

  const mockSubmit = jest.fn((data: IFormInput) => {
    return Promise.resolve(data)
  })

  beforeEach(async () => {
    renderWithProviders(
      <Wrapper>
        <CheckoutForm />
        <CheckoutSummary handleFormSubmit={mockSubmit} />
      </Wrapper>,

      {
        preloadedState: {
          product: {
            ...productInitialState,
            productList: productTestData as IProduct[],
          },
          cart: {
            cartItems: cartTestData,
          },
        },
      }
    )
    let nameField = screen.getByLabelText('Name')
    let emailAddressField = screen.getByLabelText('Email Address')
    let phoneNumberField = screen.getByLabelText('Phone Number')
    let addressField = screen.getByLabelText('Address')
    let zipCodeField = screen.getByLabelText('ZIP Code')
    let cityField = screen.getByLabelText('City')
    let countryField = screen.getByLabelText('Country')
    let eMoneyNumberField = screen.getByLabelText('e-Money Number')
    let eMoneyPinField = screen.getByLabelText('e-Money PIN')

    await userEvent.type(nameField, 'John Doe')
    await userEvent.type(emailAddressField, 'johndoe@mail.com')
    await userEvent.type(phoneNumberField, '07845084361')
    await userEvent.type(addressField, '1 Main Street')
    await userEvent.type(zipCodeField, '90210')
    await userEvent.type(cityField, 'Boston')
    await userEvent.type(countryField, 'USA')
    await userEvent.type(eMoneyNumberField, '123456789')
    await userEvent.type(eMoneyPinField, '1234')
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  let addressField
  let submitButton
  let cashCheckbox
  let eMoneyNumberField
  let eMoneyPinField
  let vatLabel
  let vatValue
  let shippingValue
  let totalLabel
  let totalValue
  let grandTotalLabel
  let grandTotalValue

  test('completed form will submit', async () => {
    submitButton = screen.getByRole('button', {
      name: /continue & pay/i,
    })

    await userEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalled()
  })

  test('form will not submit without address value', async () => {
    addressField = screen.getByLabelText('Address')
    submitButton = screen.getByRole('button', {
      name: /continue & pay/i,
    })

    await userEvent.clear(addressField)
    await userEvent.click(submitButton)

    expect(mockSubmit).not.toHaveBeenCalled()
  })

  test('changing payment method to cash will remove e-money number and pin fields ', async () => {
    cashCheckbox = screen.getByLabelText('Cash')
    eMoneyNumberField = screen.getByLabelText('e-Money Number')
    eMoneyPinField = screen.getByLabelText('e-Money PIN')

    await userEvent.click(cashCheckbox)

    expect(eMoneyNumberField).not.toBeInTheDocument()
    expect(eMoneyPinField).not.toBeInTheDocument()
  })

  test('form will submit without e-money values if cash payment method is selected', async () => {
    cashCheckbox = screen.getByLabelText('Cash')
    submitButton = screen.getByRole('button', {
      name: /continue & pay/i,
    })

    await userEvent.click(cashCheckbox)
    await userEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalled()
  })

  test('VAT amount is 20% of pre shipping total', () => {
    vatLabel = screen.getByText('vat', {
      exact: false,
    })
    vatValue = vatLabel.nextSibling
    let expectedVatValue = (productTestData[0].price * 0.2).toFixed(2)

    expect(vatValue?.textContent).toContain(expectedVatValue)
  })

  test('shipping price is added to grand total', () => {
    totalLabel = screen.getByText('Total')
    totalValue = Number(
      totalLabel.nextElementSibling?.textContent?.substring(1)
    )

    grandTotalLabel = screen.getByText('grand total', {
      exact: false,
    })
    grandTotalValue = Number(
      grandTotalLabel.nextElementSibling?.textContent?.substring(1)
    )

    shippingValue = 50

    expect(totalValue + shippingValue).toEqual(grandTotalValue)
  })

  // test('order confirmation modal shows correctly', () => {})
})
