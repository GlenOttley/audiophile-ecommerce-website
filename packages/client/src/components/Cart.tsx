import { ICartProduct } from '@audiophile/common/interfaces'
import { Box, Button as MuiButton, Grid, Link, Typography } from '@mui/material'
import { SetStateAction } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  clearCart,
  getCartProducts,
  getCartTotal,
  selectCart,
} from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import theme from '../theme'
import Button from './Button'
import CartItemPreview from './CartItemPreview'

interface ComponentProps {
  setShowCart: React.Dispatch<SetStateAction<boolean>>
}

const Cart = ({ setShowCart }: ComponentProps): JSX.Element => {
  const select = useAppSelector
  const dispatch = useAppDispatch()
  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)

  const cartProducts = getCartProducts(cartItems, productList)

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
        {cartProducts.map(
          (product: ICartProduct) =>
            product.quantity !== 0 && (
              <CartItemPreview
                product={product}
                key={product._id}
                variant='cart'
              />
            )
        )}
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
          ${getCartTotal(cartProducts).toLocaleString()}
        </Typography>
      </Grid>
      <Button
        variant='contained'
        component={RouterLink}
        fullWidth
        onClick={() => setShowCart(false)}
        to={`/checkout`}
      >
        Checkout
      </Button>
    </Box>
  )
}

export default Cart
