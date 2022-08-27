import { styled, Button as MuiButton, ButtonProps } from '@mui/material'

const Button = styled(MuiButton)<ButtonProps>(({ variant, theme }) => ({
  padding: theme.spacing(2, 4),
  fontSize: '1.3rem',
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
})) as typeof MuiButton

export default Button
