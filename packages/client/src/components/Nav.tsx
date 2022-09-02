import { useState } from 'react'
import { AppBar, Icon, Grid, Drawer } from '@mui/material'
import Container from './Container'
import IconButton from './IconButton'
import theme from '../theme'
import Link from './Link'
import { Link as RouterLink } from 'react-router-dom'
import productCategoryData from '../data/productCategoryData'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import MobileNav from './MobileNav'

const Nav = (): JSX.Element => {
  const [showNav, setShowNav] = useState(false)

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: theme.palette.grey[900],
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
      }}
    >
      <Container>
        <Grid
          container
          justifyContent={{
            xs: 'space-between',
            md: 'start',
            lg: 'space-between',
          }}
          height='91px'
          alignItems='center'
          sx={{
            borderBottom: '1px solid',
            borderColor: theme.palette.grey[800],
          }}
        >
          <Grid item display={{ xs: 'inline-block', lg: 'none' }}>
            <IconButton
              size='large'
              color='inherit'
              edge='start'
              aria-label='menu'
              onClick={() => setShowNav(!showNav)}
            >
              <Icon>
                {showNav ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon />
                  // <img
                  //   src='/assets/shared/tablet/icon-hamburger.svg'
                  //   alt='menu'
                  //   style={{ transform: 'translateY(-4px)' }}
                  // />
                )}
              </Icon>
            </IconButton>
          </Grid>

          <Grid item>
            <IconButton size='large' color='inherit' aria-label='home'>
              <Icon sx={{ width: 'auto' }}>
                <img src='/assets/shared/desktop/logo.svg' alt='audiophile' />
              </Icon>
            </IconButton>
          </Grid>

          <Grid
            container
            item
            lg={8}
            gap={{ xs: 2, md: 4 }}
            display={{ xs: 'none', lg: 'inline-flex' }}
            justifyContent='center'
          >
            <Link component={RouterLink} to='/'>
              Home
            </Link>
            {productCategoryData.map((category, index) => (
              <Link
                component={RouterLink}
                to={`products/${category.slug}`}
                key={index}
              >
                {category.name}
              </Link>
            ))}
          </Grid>

          <Grid item margin={{ md: '0 0 0 auto' }}>
            <IconButton
              size='large'
              color='inherit'
              edge='end'
              aria-label='cart'
            >
              <Icon>
                <img
                  src='/assets/shared/desktop/icon-cart.svg'
                  alt='cart'
                  style={{ transform: 'translateY(-2px)' }}
                />
              </Icon>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
      <Drawer
        open={showNav}
        onClose={() => setShowNav(false)}
        anchor='top'
        PaperProps={{ style: { minHeight: '340px' } }}
      >
        <MobileNav setShowNav={setShowNav} />
      </Drawer>
    </AppBar>
  )
}

export default Nav
