import theme from '../theme'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'mui-image'
import Container from './Container'
import Button from './Button'
import { Link as RouterLink } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectProducts } from '../features/product/productSlice'

const ZX9 = (): JSX.Element => {
  const select = useAppSelector
  const { error, status, productList } = select(selectProducts)
  const product = productList.find((product) => product.name.includes('ZX9'))

  return (
    <Container paddingBottom>
      <Box
        bgcolor={theme.palette.primary.main}
        borderRadius={theme.shape.borderRadius}
        overflow='hidden'
        sx={{
          backgroundImage: 'url("./assets/home/desktop/pattern-circles.svg")',
          backgroundSize: { xs: '570px', md: '950px', lg: '1025px' },
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: { xs: 'center', lg: '-205px' },
          backgroundPositionY: { xs: '-120px', md: '-290px', lg: '-90px' },
        }}
      >
        <Container
          sx={{
            paddingTop: { xs: 7, md: 6.5, lg: 0 },
            paddingBottom: { xs: 7, md: 8, lg: 0 },
            height: { lg: '560px' },
          }}
        >
          <Grid
            container
            direction={{ xs: 'column', lg: 'row' }}
            alignItems={{ xs: 'center' }}
            height='100%'
            width={{ lg: '900px' }}
            margin={{ lg: '0 auto' }}
          >
            <Grid
              item
              lg={6}
              marginBottom={{ xs: 4, md: 8, lg: 0 }}
              alignSelf={{ lg: 'end' }}
            >
              <Box
                width={{ xs: 172, md: 197, lg: 410 }}
                sx={{
                  transform: { lg: 'translateY(12px)' },
                }}
              >
                <Image src='./assets/home/desktop/image-speaker-zx9.png' />
              </Box>
            </Grid>
            <Grid
              container
              item
              direction='column'
              alignItems={{ xs: 'center' }}
              lg={6}
            >
              <Typography
                variant='h1'
                color={theme.palette.common.white}
                marginBottom={{ xs: 3 }}
                textAlign={{ xs: 'center', lg: 'start' }}
                width={{ xs: '240px', lg: '280px' }}
              >
                {product?.name.toUpperCase()}
              </Typography>
              <Typography
                variant='body1'
                color={theme.palette.common.white}
                marginBottom={{ xs: 3, md: 5 }}
                textAlign={{ xs: 'center', lg: 'start' }}
                maxWidth='280px'
              >
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </Typography>
              <Grid
                container
                item
                justifyContent={{ xs: 'center', lg: 'start' }}
                width={{ xs: '240px', lg: '280px' }}
              >
                <Button
                  variant='dark'
                  component={RouterLink}
                  to={`/${product?.category}/${product?.slug}`}
                >
                  See Product
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default ZX9
