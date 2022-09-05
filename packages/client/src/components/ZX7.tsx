import theme from '../theme'
import { Box, Grid, Typography } from '@mui/material'
import Container from './Container'
import Button from './Button'
import { Link as RouterLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectProducts } from '../features/product/productSlice'

const ZX7 = (): JSX.Element => {
  const select = useAppSelector
  const { error, status, productList } = select(selectProducts)
  const product = productList.find((product) => product.name.includes('ZX7'))

  return (
    <Container paddingBottom>
      <Box
        borderRadius={theme.shape.borderRadius}
        height='320px'
        sx={{
          backgroundImage: {
            xs: 'url("./assets/home/mobile/image-speaker-zx7.jpg")',
            sm: 'url("./assets/home/tablet/image-speaker-zx7.jpg")',
            md: 'url("./assets/home/desktop/image-speaker-zx7.jpg")',
          },
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionX: { xs: '100%', sm: '50%' },
        }}
      >
        <Container
          sx={{
            height: 320,
            paddingLeft: { md: 8, lg: 12 },
            paddingRight: { md: 8, lg: 12 },
          }}
        >
          <Grid
            container
            height='100%'
            direction='column'
            justifyContent='center'
            alignItems='start'
            gap={4}
          >
            <Typography variant='h4' color='black'>
              {product?.name.toUpperCase()}
            </Typography>

            <Button
              variant='outlined'
              component={RouterLink}
              to={`/products/${product?.category}/${product?.slug}`}
            >
              See Product
            </Button>
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default ZX7
