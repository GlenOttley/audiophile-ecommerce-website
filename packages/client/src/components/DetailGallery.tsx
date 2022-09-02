import theme from '../theme'
import Container from './Container'
import { Box, Grid, Typography } from '@mui/material'
import type { IProduct } from '@audiophile/common/interfaces'

interface ComponentProps {
  product?: IProduct
}

const DetailGallery = ({ product }: ComponentProps): JSX.Element => {
  return (
    <Container sx={{ marginBottom: { xs: 15, lg: 20 } }}>
      <Grid
        container
        wrap='nowrap'
        direction={{ xs: 'column', md: 'row' }}
        gap={{ xs: 2.5, lg: 4 }}
      >
        <Grid container item md={5} direction='column' gap={{ xs: 2.5, lg: 4 }}>
          <Box
            component='img'
            borderRadius={theme.shape.borderRadius}
            sx={{
              content: {
                xs: `url(${product?.gallery.first.mobile})`,
                md: `url(${product?.gallery.first.tablet})`,
                lg: `url(${product?.gallery.first.desktop})`,
              },
            }}
            alt={product?.gallery.first.alt}
          />

          <Box
            component='img'
            borderRadius={theme.shape.borderRadius}
            sx={{
              content: {
                xs: `url(${product?.gallery.second.mobile})`,
                md: `url(${product?.gallery.second.tablet})`,
                lg: `url(${product?.gallery.second.desktop})`,
              },
            }}
            alt={product?.gallery.second.alt}
          />
        </Grid>
        <Grid item md={7}>
          <Box
            component='img'
            borderRadius={theme.shape.borderRadius}
            sx={{
              content: {
                xs: `url(${product?.gallery.third.mobile})`,
                md: `url(${product?.gallery.third.tablet})`,
                lg: `url(${product?.gallery.third.desktop})`,
              },
            }}
            alt={product?.gallery.third.alt}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DetailGallery
