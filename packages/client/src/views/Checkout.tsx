import Container from '../components/Container'
import Button from '../components/Button'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutSummary from '../components/CheckoutSummary'
import { Grid, Box } from '@mui/material'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { IOrder } from '@audiophile/common/interfaces'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getCartGrandTotal,
  getCartProducts,
  selectCart,
} from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import { createOrder } from '../features/order/orderSlice'
import { useEffect } from 'react'

export interface IFormInput extends Omit<IOrder, 'totalPrice' | 'items'> {}

const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const select = useAppSelector

  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)
  const cartProducts = getCartProducts(cartItems, productList)

  const methods = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: {
      paymentMethod: {
        method: 'e-money',
      },
    },
  })

  const handleFormSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const order: IOrder = {
      ...data,
      items: cartItems,
      totalPrice: Number(getCartGrandTotal(cartProducts)),
    }
    dispatch(createOrder(order))
  }

  useEffect(() => {
    !cartItems.length && navigate('/')
  }, [cartItems])

  return (
    <Box bgcolor='grey.50'>
      <Container
        sx={{
          paddingTop: { xs: 2, lg: 10 },
          paddingBottom: { xs: 11, md: 15, lg: 20 },
        }}
      >
        <Button
          variant='text'
          startIcon={<KeyboardArrowLeft color='primary' />}
          onClick={() => navigate(-1)}
          sx={{ paddingLeft: 0, marginBottom: { xs: 3, lg: 7.5 } }}
        >
          Go Back
        </Button>

        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          gap={4}
          whiteSpace='nowrap'
        >
          <FormProvider {...methods}>
            <Grid item xs>
              <CheckoutForm />
            </Grid>

            <Grid item lg={3.75}>
              <CheckoutSummary handleFormSubmit={handleFormSubmit} />
            </Grid>
          </FormProvider>
        </Grid>
      </Container>
    </Box>
  )
}

export default Checkout
