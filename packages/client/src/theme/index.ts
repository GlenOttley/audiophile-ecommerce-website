import { createTheme } from '@mui/material'
import { typography } from './typography'
import { breakpoints } from './breakpoints'
import { palette } from './palette'
import { shape } from './shape'

let theme = createTheme({
  breakpoints,
  palette,
  shape,
  typography,
})

theme = createTheme(theme, {
  typography: {
    h1: {
      [theme.breakpoints.up('md')]: {
        fontSize: '5.6rem',
        fontWeight: 700,
        lineHeight: '5.8rem',
        letterSpacing: '0.2rem',
      },
    },
    h2: {
      [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
        fontWeight: 700,
        lineHeight: '4.4rem',
        letterSpacing: '1.5px',
      },
    },
  },
})

export default theme
