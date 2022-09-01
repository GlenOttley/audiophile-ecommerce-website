import { Box, Grid, Icon, Typography } from '@mui/material'
import Container from './Container'
import IconButton from './IconButton'
import Link from './Link'
import { Link as RouterLink } from 'react-router-dom'
import theme from '../theme'
import productCategoryData from '../data/productCategoryData'

const Footer = (): JSX.Element => {
  return (
    <Box
      component='footer'
      paddingTop={{ xs: 6.5, md: 7.5 }}
      paddingBottom={{ xs: 5, md: 6 }}
      bgcolor={theme.palette.grey[900]}
      sx={
        {
          // position: 'absolute',
          // bottom: 0,
          // width: '100%',
        }
      }
    >
      <Container
        sx={{
          '&::before': {
            content: '""',
            display: 'block',
            position: 'relative',
            top: { xs: '-52px', md: '-60px' },
            margin: { xs: '0 auto', md: 0 },
            height: '4px',
            width: '101px',
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          justifyContent={{ lg: 'space-between' }}
        >
          <Grid
            container
            item
            xs={6}
            justifyContent={{ xs: 'center', md: 'start' }}
            marginBottom={{ xs: 6, md: 4, lg: 4.5 }}
          >
            <Icon sx={{ width: 'auto' }}>
              <img src='/assets/shared/desktop/logo.svg' alt='audiophile' />
            </Icon>
          </Grid>

          <Grid
            container
            item
            xs={6}
            alignItems={{ xs: 'center' }}
            justifyContent={{ lg: 'end' }}
            direction={{ xs: 'column', md: 'row' }}
            gap={{ xs: 2, md: 4 }}
            marginBottom={{ xs: 6, md: 4, lg: 4.5 }}
          >
            <Link component={RouterLink} to='/'>
              Home
            </Link>
            {productCategoryData.map((category, index) => (
              <Link component={RouterLink} to={category.slug} key={index}>
                {category.name}
              </Link>
            ))}
          </Grid>
        </Grid>

        <Grid item marginBottom={{ xs: 6, md: 10 }}>
          <Typography variant='body1' textAlign={{ xs: 'center', md: 'start' }}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
        </Grid>

        <Grid
          container
          item
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid item marginBottom={{ xs: 6, md: 0 }}>
            <Typography variant='body1' fontWeight='700'>
              Copyright 2021. All Rights Reserved
            </Typography>
          </Grid>

          <Grid item gap={{ xs: 2 }}>
            <IconButton size='small' aria-label='go to our facebook page'>
              <Icon>
                <img
                  src='/assets/shared/desktop/icon-facebook.svg'
                  alt='facebook'
                />
              </Icon>
            </IconButton>

            <IconButton size='small' aria-label='go to our twitter page'>
              <Icon>
                <img
                  src='/assets/shared/desktop/icon-twitter.svg'
                  alt='twitter'
                />
              </Icon>
            </IconButton>

            <IconButton size='small' aria-label='go to our instagram page'>
              <Icon>
                <img
                  src='/assets/shared/desktop/icon-instagram.svg'
                  alt='instagram'
                />
              </Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
