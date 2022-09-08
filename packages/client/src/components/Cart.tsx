import theme from '../theme'
import { useAppSelector } from '../app/hooks'
import { Grid, Typography, Button, Link } from '@mui/material'
import Container from './Container'
import { selectCart } from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import Image from 'mui-image'
import { IProduct } from '@audiophile/common/interfaces'

const Cart = (): JSX.Element => {
  const select = useAppSelector
  const { cartItems } = select(selectCart)
  const { productList } = select(selectProducts)

  let cartProducts: IProduct[] = Object.values(productList).filter((product) =>
    cartItems.every((item) => product._id === item.productId)
  )

  console.log('cart items: ', cartItems)
  console.log('cart products: ', cartProducts)

  const handleRemoveAll = () => {}

  return (
    <Container>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Typography variant='h6' color='black' textTransform='uppercase'>
          Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
        </Typography>
        <Link
          component={Button}
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
      <Grid container direction='column' gap={3}>
        {cartProducts.map((product) => (
          <Grid key={product._id} container item justifyContent='space-between'>
            {product.name}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cart
