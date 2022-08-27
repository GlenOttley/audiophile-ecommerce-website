import { styled, Link as MuiLink, LinkProps } from '@mui/material'

const Link = styled(MuiLink)<LinkProps>(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: '1.3rem',
  fontWeight: 700,
  letterSpacing: '0.2rem',
  textTransform: 'uppercase',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.main,
  },
})) as typeof MuiLink

export default Link
