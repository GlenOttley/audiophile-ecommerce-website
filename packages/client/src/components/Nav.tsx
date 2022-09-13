import React, { useState } from 'react'
import { useAppSelector } from '../app/hooks'
import {
  AppBar,
  Icon,
  Grid,
  Drawer,
  Badge,
  Dialog,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Container from './Container'
import IconButton from './IconButton'
import theme from '../theme'
import Link from './Link'
import { Link as RouterLink } from 'react-router-dom'
import productCategoryData from '../data/productCategoryData'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import MobileNav from './MobileNav'
import { selectCart } from '../features/cart/cartSlice'
import Cart from './Cart'

const Nav = (): JSX.Element => {
  const select = useAppSelector
  const [showNav, setShowNav] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const { cartItems } = select(selectCart)

  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: theme.palette.grey[900],
        zIndex: theme.zIndex.modal + 1,
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
              aria-label='show cart'
              onClick={() => setShowCart(!showCart)}
            >
              <Badge
                data-testid='cartBadge'
                componentsProps={{
                  badge: {
                    role: 'status',
                  },
                }}
                badgeContent={cartItems.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}
                color='primary'
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Icon>
                  <img
                    src='/assets/shared/desktop/icon-cart.svg'
                    alt='cart'
                    style={{ transform: 'translateY(-2px)' }}
                  />
                </Icon>
              </Badge>
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

      <Dialog
        maxWidth='sm'
        fullWidth={useMediaQuery(theme.breakpoints.down('md'))}
        open={showCart}
        onClose={() => setShowCart(false)}
        sx={{
          maxWidth: '1110px',
          margin: '0 auto',
        }}
        PaperProps={{
          sx: {
            width: { xs: 'calc(100% - 48px)' },
            position: { xs: 'fixed', xl: 'relative' },
            top: { xs: '82px', xl: 'auto' },
            right: { md: 0, xl: 'auto' },
            margin: { xl: '114px 0 auto auto' },
            boxShadow: 'none',
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(4, 3.5),
          },
        }}
      >
        {cartItems.length ? (
          <Cart setShowCart={setShowCart} />
        ) : (
          <Typography variant='h6'>Your cart is empty</Typography>
        )}
      </Dialog>
    </AppBar>
  )
}

export default Nav
