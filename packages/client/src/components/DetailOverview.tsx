import { IProduct } from '@audiophile/common/interfaces'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { addCartItem } from '../features/cart/cartSlice'
import theme from '../theme'
import Button from './Button'
import Container from './Container'
import NumberField from './NumberField'

interface ComponentProps {
  product?: IProduct
}

const DetailOverview = ({ product }: ComponentProps): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = useState<number>(1)

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addCartItem({
          _id: product._id,
          quantity,
        })
      )
    }
  }

  return (
    <Container
      sx={{
        paddingTop: { xs: 2, lg: 10 },
        marginBottom: { xs: 11, md: 15, lg: 20 },
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
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ md: 'center' }}
        wrap='nowrap'
        gap={{
          xs: 4,
          md: 1,
          lg: 4,
        }}
      >
        <Grid item md={6} paddingRight={{ md: 7, lg: 0 }}>
          {product ? (
            <Box
              component='img'
              borderRadius={theme.shape.borderRadius}
              sx={{
                content: {
                  xs: `url(${product.image.mobile})`,
                  md: `url(${product.image.tablet})`,
                  lg: `url(${product.image.desktop})`,
                },
              }}
              alt={product.name}
            />
          ) : (
            <Skeleton
              sx={{ height: { xs: 327, md: 485, lg: 557 } }}
              variant='rounded'
            />
          )}
        </Grid>
        <Grid item md={6} paddingLeft={{ lg: 11.75 }}>
          {product?.new && (
            <Typography
              variant='overline'
              color={theme.palette.primary.main}
              marginBottom={{ xs: 3, md: 2 }}
            >
              New Product
            </Typography>
          )}
          <Typography
            variant='h2'
            color='black'
            marginBottom={{ xs: 3, md: 4 }}
          >
            {product ? product.name.toUpperCase() : <Skeleton />}
          </Typography>
          <Typography variant='body1' marginBottom={{ xs: 3, lg: 5 }}>
            {product ? product.description : <Skeleton height={125} />}
          </Typography>
          <Typography variant='h6' color='black' marginBottom={{ xs: 4 }}>
            {product ? `$${product.price.toLocaleString()}` : <Skeleton />}
          </Typography>
          <Grid container item wrap='nowrap' gap={3}>
            {product ? (
              <>
                <NumberField
                  value={quantity}
                  setValue={setQuantity}
                  variant='large'
                />

                <Button
                  role='button'
                  variant='contained'
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              </>
            ) : (
              <>
                <Skeleton>
                  <NumberField
                    value={quantity}
                    setValue={setQuantity}
                    variant='large'
                  />
                </Skeleton>

                <Skeleton>
                  <Button>Add to cart</Button>
                </Skeleton>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DetailOverview
