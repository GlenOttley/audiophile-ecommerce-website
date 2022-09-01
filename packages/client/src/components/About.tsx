import theme from '../theme'
import Container from './Container'
import { Grid, Typography, Box } from '@mui/material'
import Image from 'mui-image'

const About = () => {
  return (
    <Container sx={{ marginBottom: { xs: 15, md: 12 } }}>
      <Grid
        container
        direction={{ xs: 'column', lg: 'row-reverse' }}
        alignItems={{ lg: 'center' }}
        gap={{ lg: 4 }}
        wrap='nowrap'
      >
        <Grid
          item
          lg={6}
          minHeight={{ xs: 300, lg: 588 }}
          borderRadius={theme.shape.borderRadius}
          marginBottom={5}
          sx={{
            backgroundImage: {
              xs: 'url("./assets/shared/mobile/image-best-gear.jpg")',
              md: 'url("./assets/shared/tablet/image-best-gear.jpg")',
              lg: 'url("./assets/shared/desktop/image-best-gear.jpg")',
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <Image src='./assets/shared/mobile/image-best-gear.jpg' /> */}
        </Grid>
        <Grid
          item
          lg={6}
          textAlign={{ xs: 'center', lg: 'start' }}
          padding={{ md: theme.spacing(0, 7), lg: theme.spacing(0, 13, 0, 0) }}
        >
          <Typography
            variant='h2'
            textTransform='uppercase'
            color={theme.palette.common.black}
            marginBottom={4}
          >
            Bringing you the{' '}
            <span style={{ color: theme.palette.primary.main }}>best</span>{' '}
            audio gear
          </Typography>
          <Typography variant='body1'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
