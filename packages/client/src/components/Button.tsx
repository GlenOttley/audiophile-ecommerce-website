import { styled, Button as MuiButton, ButtonProps } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dark: true
  }
}

const Button = styled(MuiButton)<ButtonProps>(({ theme, variant }) => ({
  padding: theme.spacing(2, 4),
  fontSize: '1.3rem',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '0.1rem',
  borderRadius: 0,
  ...(variant === 'contained' && {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  ...(variant === 'outlined' && {
    borderColor: theme.palette.common.black,
    color: theme.palette.common.black,
    '&:hover': {
      backgroundColor: theme.palette.common.black,
      borderColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }),
  ...(variant === 'text' && {
    // color: theme.palette.grey[600],
    color: theme.palette.text.primary,
    fontWeight: 700,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
    },
  }),
  ...(variant === 'dark' && {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.grey[700],
    },
  }),
})) as typeof MuiButton

export default Button
