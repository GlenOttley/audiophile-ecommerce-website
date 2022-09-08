import theme from '../theme'
import Container from './Container'
import { Grid, Typography, Skeleton } from '@mui/material'

import { IProduct } from '@audiophile/common/interfaces'

interface ComponentProps {
  product?: IProduct
}

const DetailFeatures = ({ product }: ComponentProps): JSX.Element => {
  return (
    <Container sx={{ marginBottom: { xs: 11, md: 15, lg: 20 } }}>
      <Grid container direction={{ xs: 'column', lg: 'row' }} gap={{ lg: 4 }}>
        <Grid item lg={6.66} marginBottom={{ xs: 11, md: 15, lg: 0 }}>
          <Typography
            variant='h5'
            color='black'
            textTransform='uppercase'
            marginBottom={{ xs: 3, md: 4 }}
          >
            Features
          </Typography>
          <Typography variant='body1' whiteSpace='pre-wrap'>
            {product ? (
              product.features
            ) : (
              <Skeleton
                sx={{
                  height: { xs: 327, md: 250 },
                }}
              />
            )}
          </Typography>
        </Grid>
        <Grid
          container
          item
          lg={3.33}
          wrap='nowrap'
          direction={{ xs: 'column', md: 'row', lg: 'column' }}
          gap={{ md: 1, lg: 0 }}
          alignItems={{ lg: 'end' }}
          justifyContent={{ lg: 'start' }}
        >
          <Grid item md={6} lg='auto'>
            <Typography
              variant='h5'
              color='black'
              textTransform='uppercase'
              marginBottom={{ xs: 3, md: 4 }}
            >
              In the box
            </Typography>
          </Grid>
          {product ? (
            <Grid item md={6} lg='auto'>
              {product.includes.map((item, index) => (
                <Typography variant='body1' paddingBottom={1} key={index}>
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      paddingRight: 24,
                    }}
                  >
                    {item.quantity}x
                  </span>
                  {item.item}
                </Typography>
              ))}
            </Grid>
          ) : (
            <Grid
              item
              md={6}
              lg='auto'
              sx={{
                height: 0,
                overflow: 'hidden',
                paddingTop: '100%',
                position: 'relative',
              }}
            >
              <Skeleton
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default DetailFeatures
