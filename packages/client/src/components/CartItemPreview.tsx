import { Grid, Typography } from '@mui/material'
import Image from 'mui-image'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import {
  ICartProduct,
  updateCartItemQuantity,
} from '../features/cart/cartSlice'
import NumberField from './NumberField'

interface ComponentProps {
  product: ICartProduct
  variant: 'cart' | 'checkout'
}

const CartItemPreview = ({ product, variant }: ComponentProps): JSX.Element => {
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = useState<number>(product.quantity)

  useEffect(() => {
    dispatch(
      updateCartItemQuantity({
        _id: product._id,
        quantity: quantity,
      })
    )
  }, [quantity])

  return (
    <Grid
      key={product._id}
      container
      item
      justifyContent='space-between'
      alignItems='center'
      whiteSpace='nowrap'
    >
      <Grid item marginRight={2}>
        <Image
          src={product.image.mobile}
          alt={product.image.alt}
          width={64}
          height={64}
          style={{ borderRadius: '9px' }}
        />
      </Grid>

      <Grid container item xs direction='column'>
        <Typography variant='body2' textTransform='uppercase' color='black'>
          {product.shortName}
        </Typography>

        <Typography variant='body2'>
          ${product.price.toLocaleString()}
        </Typography>
      </Grid>

      <Grid item>
        {variant === 'cart' ? (
          <NumberField
            variant='small'
            value={quantity}
            setValue={setQuantity}
          />
        ) : (
          <Typography variant='body2'>x{product.quantity}</Typography>
        )}
      </Grid>
    </Grid>
  )
}

export default CartItemPreview
