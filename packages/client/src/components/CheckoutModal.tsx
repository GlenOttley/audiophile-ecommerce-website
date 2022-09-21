import { ICartProduct } from '@audiophile/common/interfaces'
import {
  Box,
  Grid,
  Typography,
  Icon,
  Divider,
  ButtonBase,
  Collapse,
} from '@mui/material'
import { SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getCartProducts,
  getCartGrandTotal,
  clearCart,
} from '../features/cart/cartSlice'
import { selectProducts } from '../features/product/productSlice'
import theme from '../theme'
import Button from './Button'
import CartItemPreview from './CartItemPreview'
import { selectOrder, clearOrder } from '../features/order/orderSlice'

interface ComponentProps {
  setShowModal: React.Dispatch<SetStateAction<boolean>>
}

const CheckoutModal = ({ setShowModal }: ComponentProps): JSX.Element => {
  const select = useAppSelector
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { productList } = select(selectProducts)
  const { order } = select(selectOrder)

  const cartProducts = getCartProducts(order.items, productList)

  const [showAllItems, setShowAllItems] = useState<boolean>(false)

  const handleHomeButton = () => {
    dispatch(clearOrder())
    dispatch(clearCart())
    setShowModal(false)
    navigate('/')
  }

  return (
    <Box>
      <Icon
        sx={{ width: '64px', height: '64px', marginBottom: { xs: 3, md: 4 } }}
      >
        <img src='/assets/checkout/icon-order-confirmation.svg' alt='tick' />
      </Icon>

      <Typography
        variant='h5'
        textTransform='uppercase'
        color='black'
        marginBottom={{
          xs: 2,
          md: 3,
        }}
      >
        Thank you
        <br /> for your order
      </Typography>

      <Typography
        variant='body1'
        marginBottom={{
          xs: 3,
          md: 4,
        }}
      >
        You will receive an email confirmation shortly.
      </Typography>

      <Box
        borderRadius={theme.shape.borderRadius}
        overflow='hidden'
        marginBottom={{
          xs: 3,
          md: 6,
        }}
      >
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          flexWrap='nowrap'
        >
          <Grid
            container
            item
            bgcolor={theme.palette.grey[200]}
            direction='column'
            gap={2}
            padding={3}
            md={7}
          >
            {showAllItems ? (
              <Collapse in={showAllItems}>
                {cartProducts.map((product: ICartProduct) => (
                  <CartItemPreview
                    product={product}
                    key={product._id}
                    variant='checkout'
                  />
                ))}
              </Collapse>
            ) : (
              <CartItemPreview product={cartProducts[0]} variant='checkout' />
            )}
            {cartProducts.length > 1 && (
              <>
                <Divider />
                <ButtonBase
                  onClick={() => setShowAllItems(!showAllItems)}
                  disableRipple
                >
                  <Typography
                    variant='caption'
                    fontWeight='bold'
                    textAlign='center'
                  >
                    {showAllItems
                      ? 'View less'
                      : `and ${cartProducts.length - 1} other item(s)`}
                  </Typography>
                </ButtonBase>
              </>
            )}
          </Grid>
          <Grid
            container
            item
            bgcolor='black'
            direction='column'
            justifyContent={{ md: 'end' }}
            padding={3}
            md={5}
          >
            <Typography
              variant='body1'
              textTransform='uppercase'
              fontWeight='500'
              marginBottom={1}
            >
              Grand total
            </Typography>
            <Typography variant='h6' textTransform='uppercase' color='white'>
              ${getCartGrandTotal(cartProducts).toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Button variant='contained' fullWidth onClick={handleHomeButton}>
        Back to home
      </Button>
    </Box>
  )
}

export default CheckoutModal
