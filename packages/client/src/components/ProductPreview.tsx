import { IProduct } from '@audiophile/common/interfaces'
import theme from '../theme'
import { Box, Grid, Typography } from '@mui/material'
import Container from '../components/Container'
import Button from '../components/Button'
import { Link as RouterLink } from 'react-router-dom'

interface ComponentProps {
  product: IProduct
  index: number
}

const ProductPreview = ({ product, index }: ComponentProps): JSX.Element => {
  return (
    <Container sx={{ marginBottom: { xs: 15, lg: 20 } }}>
      <Grid
        container
        wrap='nowrap'
        direction={{
          xs: 'column',
          lg: index % 2 === 0 ? 'row' : 'row-reverse',
        }}
        gap={{
          xs: 4,
          md: 6.5,
          lg: 4,
        }}
      >
        <Grid
          item
          lg={6}
          minHeight={{ xs: 352, lg: 560 }}
          borderRadius={theme.shape.borderRadius}
          sx={{
            backgroundImage: {
              xs: `url(${product.categoryImage.mobile})`,
              sm: `url(${product.categoryImage.tablet})`,
              lg: `url(${product.categoryImage.desktop})`,
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid
          item
          alignSelf='center'
          lg={6}
          textAlign={{ xs: 'center', lg: 'start' }}
          maxWidth='550px !important'
          paddingRight={{ lg: index % 2 !== 0 ? 12 : 0 }}
          paddingLeft={{ lg: index % 2 == 0 ? 12 : 0 }}
        >
          {product.new && (
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
            {product.name.toUpperCase()}
          </Typography>
          <Typography variant='body1' marginBottom={{ xs: 3, lg: 5 }}>
            {product.description}
          </Typography>
          <Button
            variant='contained'
            component={RouterLink}
            to={`/${product?.category}/${product?.slug}`}
          >
            See Product
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductPreview
