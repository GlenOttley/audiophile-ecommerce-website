import theme from '../theme'
import { Grid, Typography } from '@mui/material'
import Container from './Container'
import Button from './Button'
import { Link as RouterLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectProducts } from '../features/product/productSlice'

const YX1 = (): JSX.Element => {
  const select = useAppSelector
  const { error, status, productList } = select(selectProducts)
  const product = productList.find((product) => product.name.includes('YX1'))

  return (
    <Container paddingBottom>
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        gap={{ xs: 1.5, lg: 4 }}
        wrap='nowrap'
      >
        <Grid
          item
          md={6}
          minHeight={{ xs: 200, md: 320 }}
          borderRadius={theme.shape.borderRadius}
          sx={{
            backgroundImage: {
              xs: 'url("./assets/home/mobile/image-earphones-yx1.jpg")',
              sm: 'url("./assets/home/tablet/image-earphones-yx1.jpg")',
              md: 'url("./assets/home/desktop/image-earphones-yx1.jpg")',
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>

        <Grid
          container
          item
          md={6}
          height={{ xs: 200, md: 320 }}
          borderRadius={theme.shape.borderRadius}
          bgcolor={theme.palette.grey[200]}
          // paddingLeft={{ md: 8, lg: 12 }}
          // paddingRight={{ md: 8, lg: 12 }}
        >
          <Container>
            <Grid
              container
              height='100%'
              direction='column'
              justifyContent='center'
              alignItems='start'
              gap={4}
            >
              <Typography variant='h4' color={theme.palette.common.black}>
                {product?.name.toUpperCase().split(' ')[0]}{' '}
                {product?.name.toUpperCase().split(' ')[2]}
              </Typography>

              <Button
                variant='outlined'
                component={RouterLink}
                to={`/${product?.category}/${product?.slug}`}
              >
                See Product
              </Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default YX1
