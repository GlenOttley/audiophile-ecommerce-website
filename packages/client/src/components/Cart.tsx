import theme from '../theme'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { Grid, Typography, Link, Box, Button as MuiButton } from '@mui/material'
import { selectCart, clearCart } from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import { IProduct } from '@audiophile/common/interfaces'
import CartItemPreview from './CartItemPreview'
import Button from './Button'

const Cart = (): JSX.Element => {
  const select = useAppSelector
  const dispatch = useAppDispatch()
  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)

  interface ICartProduct extends IProduct {
    quantity: number
  }

  const cartProducts: ICartProduct[] = cartItems.map((item) => ({
    ...productList.find((product) => product._id === item._id),
    ...(item as ICartProduct),
  }))

  const handleRemoveAll = () => {
    dispatch(clearCart())
  }

  return (
    <Box>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        marginBottom={4}
      >
        <Typography variant='h6' color='black' textTransform='uppercase'>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </Typography>
        <Link
          component={MuiButton}
          onClick={handleRemoveAll}
          sx={{
            textTransform: 'none',
            color: theme.palette.text.primary,
            textDecorationColor: theme.palette.text.primary,
            fontSize: '1.5rem',

            '&:hover': {
              color: theme.palette.primary.main,
              textDecoration: 'underline',
            },
          }}
        >
          Remove all
        </Link>
      </Grid>
      <Grid container direction='column' gap={3} marginBottom={4}>
        {cartProducts.map((product: ICartProduct) => (
          <CartItemPreview product={product} key={product._id} />
        ))}
      </Grid>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        marginBottom={4}
      >
        <Typography variant='body1' textTransform='uppercase'>
          Total
        </Typography>
        <Typography variant='h6' color='black'>
          $
          {cartProducts
            .reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toLocaleString()}
        </Typography>
      </Grid>
      <Button variant='contained' fullWidth>
        Checkout
      </Button>
    </Box>
  )
}

export default Cart
