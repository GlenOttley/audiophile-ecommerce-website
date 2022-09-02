import theme from '../theme'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Container from './Container'
import Button from './Button'
import { Box, Grid, Typography } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material'
import NumberField from './NumberField'
import { IProduct } from '@audiophile/common/interfaces'

interface ComponentProps {
  product?: IProduct
}

const DetailOverview = ({ product }: ComponentProps): JSX.Element => {
  const navigate = useNavigate()

  const [quantity, setQuantity] = useState<number>(1)

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
          <Box
            component='img'
            borderRadius={theme.shape.borderRadius}
            sx={{
              content: {
                xs: `url(${product?.image.mobile})`,
                md: `url(${product?.image.tablet})`,
                lg: `url(${product?.image.desktop})`,
              },
            }}
            alt={product?.name}
          />
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
            color={theme.palette.common.black}
            marginBottom={{ xs: 3, md: 4 }}
          >
            {product?.name.toUpperCase()}
          </Typography>
          <Typography variant='body1' marginBottom={{ xs: 3, lg: 5 }}>
            {product?.description}
          </Typography>
          <Typography
            variant='h6'
            color={theme.palette.common.black}
            marginBottom={{ xs: 4 }}
          >
            $ {product?.price.toLocaleString()}
          </Typography>
          <Grid container item wrap='nowrap' gap={3}>
            <NumberField value={quantity} setValue={setQuantity} />

            <Button variant='contained' onClick={() => console.log(quantity)}>
              Add to cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DetailOverview
