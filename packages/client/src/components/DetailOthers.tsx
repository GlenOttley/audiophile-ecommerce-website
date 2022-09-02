import theme from '../theme'
import Container from './Container'
import { Box, Grid, Typography } from '@mui/material'
import type { IProduct } from '@audiophile/common/interfaces'
import Button from './Button'
import { Link as RouterLink } from 'react-router-dom'

interface ComponentProps {
  product?: IProduct
}

const DetailOthers = ({ product }: ComponentProps): JSX.Element => {
  return (
    <Container sx={{ marginBottom: { xs: 15, lg: 20 } }}>
      <Grid
        container
        wrap='nowrap'
        direction={{ xs: 'column', md: 'row' }}
        textAlign='center'
        gap={{ xs: 7, md: 1.5, lg: 4 }}
      >
        {product?.others.map((product) => (
          <Grid
            key={product.slug}
            container
            item
            direction='column'
            alignItems='center'
          >
            <Box
              component='img'
              borderRadius={theme.shape.borderRadius}
              marginBottom={{ xs: 4, md: 5 }}
              sx={{
                content: {
                  xs: `url(${product?.image.mobile})`,
                  md: `url(${product?.image.tablet})`,
                  lg: `url(${product?.image.desktop})`,
                },
              }}
              alt={product?.image.alt}
            />
            <Typography
              variant='subtitle1'
              color={theme.palette.common.black}
              marginBottom={4}
            >
              {product.name.toUpperCase()}
            </Typography>
            <Button
              variant='contained'
              component={RouterLink}
              to={`/${product.slug}`}
            >
              See Product
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default DetailOthers
