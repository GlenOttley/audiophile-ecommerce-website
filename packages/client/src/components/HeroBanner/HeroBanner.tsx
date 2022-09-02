import Container from '../Container'
import { Box, Grid, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import Button from '../Button'
import theme from '../../theme'
import { useAppSelector } from '../../app/hooks'
import { selectProducts } from '../../features/product/productSlice'

const HeroBanner = (): JSX.Element => {
  const select = useAppSelector
  const { error, status, productList } = select(selectProducts)
  const product = productList.find((product) =>
    product.name.includes('XX99 Mark II')
  )

  return (
    <Box
      bgcolor={theme.palette.grey[900]}
      sx={{
        [theme.breakpoints.between('xs', 'lg')]: {
          backgroundImage: 'url("/assets/home/desktop/image-header.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          boxShadow: `0 0 50px 50px ${theme.palette.grey[900]} inset`,
        },
      }}
    >
      <Container>
        <Grid
          container
          height={{ xs: '510px', md: '639px' }}
          justifyContent={{ xs: 'center', lg: 'space-between' }}
        >
          <Grid
            container
            item
            xs={12}
            lg={5}
            maxWidth={{ xs: '380px', lg: 'auto' }}
            direction='column'
            justifyContent='center'
            alignItems={{ xs: 'center', lg: 'start' }}
            zIndex='1'
          >
            {product?.new && (
              <Typography
                variant='overline'
                display='inline-block'
                marginBottom={3}
              >
                New Product
              </Typography>
            )}
            <Typography
              variant='h1'
              color={theme.palette.common.white}
              marginBottom={3}
              textAlign={{ xs: 'center', lg: 'start' }}
            >
              {product?.name.toUpperCase()}
            </Typography>
            <Typography
              variant='body1'
              marginBottom={5}
              textAlign={{ xs: 'center', lg: 'start' }}
              maxWidth={{
                lg: '350px',
              }}
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <Button
              variant='contained'
              component={RouterLink}
              to={`/products/${product?.category}/${product?.slug}`}
            >
              SEE PRODUCT
            </Button>
          </Grid>
          <Grid
            item
            xs={7}
            md={0}
            display={{ xs: 'none', lg: 'block' }}
            sx={{
              backgroundImage: 'url("./assets/home/desktop/image-header.png")',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              boxShadow: `0 0 50px 50px ${theme.palette.grey[900]} inset`,
            }}
          ></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroBanner
