import theme from '../theme'
import { Box, Grid, Typography } from '@mui/material'
import Container from './Container'
import Button from './Button'
import CartItemPreview from './CartItemPreview'
import {
  selectCart,
  ICartProduct,
  getCartProducts,
  getCartTotal,
  getCartVat,
  getCartGrandTotal,
} from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'

const CheckoutSummary = () => {
  const select = useAppSelector
  const dispatch = useAppDispatch()
  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)

  const cartProducts = getCartProducts(cartItems, productList)
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

        <Button variant='contained' fullWidth>
          Continue & Pay
        </Button>
      </Container>
    </Box>
  )
}

export default CheckoutSummary
