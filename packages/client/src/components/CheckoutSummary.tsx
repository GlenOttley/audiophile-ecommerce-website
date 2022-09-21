import { ICartProduct, IOrder } from '@audiophile/common/interfaces'
import { Box, Grid, Typography, Dialog, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getCartGrandTotal,
  getCartProducts,
  getCartTotal,
  getCartVat,
  selectCart,
  clearCart,
} from '../features/cart/cartSlice'
import {
  createOrder,
  selectOrder,
  clearOrder,
} from '../features/order/orderSlice'
import { selectProducts } from '../features/product/productSlice'
import theme from '../theme'
import { IFormInput } from '../views/Checkout'
import Button from './Button'
import CartItemPreview from './CartItemPreview'
import Container from './Container'
import CheckoutModal from './CheckoutModal'
import { useNavigate } from 'react-router-dom'

const CheckoutSummary = () => {
  const select = useAppSelector
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)
  const { order } = select(selectOrder)

  const cartProducts = getCartProducts(cartItems, productList)

  const [showModal, setShowModal] = useState<boolean>(false)

  const { handleSubmit } = useFormContext<IFormInput>()

  const handleFormSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    const order: IOrder = {
      ...data,
      items: cartItems,
      totalPrice: Number(getCartGrandTotal(cartProducts)),
    }
    dispatch(createOrder(order))
  }

  const handleModalClose = () => {
    dispatch(clearOrder())
    dispatch(clearCart())
    setShowModal(false)
    navigate('/')
  }

  useEffect(() => {
    if (Object.keys(order).length) {
      setShowModal(true)
    }
  }, [order])

  return (
    <Box bgcolor='white' borderRadius={theme.shape.borderRadius}>
      <Container
        sx={{
          paddingTop: { xs: 3, md: 4, lg: 6.5 },
          paddingBottom: { xs: 3, md: 4, lg: 6 },
        }}
      >
        <Typography
          variant='h5'
          textTransform='uppercase'
          color='black'
          marginBottom={4}
        >
          Summary
        </Typography>
        <Grid container direction='column' gap={3} marginBottom={4}>
          {cartProducts.map((product: ICartProduct) => (
            <CartItemPreview
              product={product}
              key={product._id}
              variant='checkout'
            />
          ))}
        </Grid>

        <Grid container direction='column' gap={1} marginBottom={3}>
          <Grid container justifyContent='space-between'>
            <Typography variant='body1' textTransform='uppercase'>
              Total
            </Typography>
            <Typography variant='h6' textTransform='uppercase' color='black'>
              ${getCartTotal(cartProducts).toLocaleString()}
            </Typography>
          </Grid>
          <Grid container justifyContent='space-between'>
            <Typography variant='body1' textTransform='uppercase'>
              Shipping
            </Typography>
            <Typography variant='h6' textTransform='uppercase' color='black'>
              $50
            </Typography>
          </Grid>
          <Grid container justifyContent='space-between'>
            <Typography variant='body1' textTransform='uppercase'>
              VAT (included)
            </Typography>
            <Typography variant='h6' textTransform='uppercase' color='black'>
              ${getCartVat(cartProducts).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent='space-between' marginBottom={4}>
          <Typography variant='body1' textTransform='uppercase'>
            Grand total
          </Typography>
          <Typography variant='h6' textTransform='uppercase' color='black'>
            ${getCartGrandTotal(cartProducts).toLocaleString()}
          </Typography>
        </Grid>

        <Button
          variant='contained'
          fullWidth
          onClick={handleSubmit((data) => handleFormSubmit(data))}
        >
          Continue & Pay
        </Button>
      </Container>
      <Dialog
        maxWidth='sm'
        fullWidth={useMediaQuery(theme.breakpoints.down('md'))}
        open={showModal}
        onClose={handleModalClose}
        sx={{
          maxWidth: '1110px',
          margin: '0 auto',
        }}
        PaperProps={{
          sx: {
            maxWidth: '540px',
            width: { xs: 'calc(100% - 48px)' },
            position: { xs: 'fixed', xl: 'relative' },
            transform: 'translateY(50px)',
            // right: { md: 0, xl: 'auto' },
            // margin: { xl: '114px 0 auto auto' },
            boxShadow: 'none',
            borderRadius: theme.shape.borderRadius,
            padding: { xs: theme.spacing(4, 3.5), md: 6 },
          },
        }}
      >
        <CheckoutModal setShowModal={setShowModal} />
      </Dialog>
    </Box>
  )
}

export default CheckoutSummary
