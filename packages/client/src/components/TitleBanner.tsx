import theme from '../theme'
import { Box, Typography } from '@mui/material'
import Container from './Container'

interface ComponentProps {
  children: string
}

const TitleBanner = ({ children }: ComponentProps): JSX.Element => {
  return (
    <Box
      bgcolor={theme.palette.grey[900]}
      padding={{ xs: theme.spacing(4, 0), md: theme.spacing(12, 0) }}
      marginBottom={{ xs: 8, md: 15, lg: 20 }}
    >
      <Container>
        <Typography
          variant='h2'
          textTransform='uppercase'
          textAlign='center'
          color={theme.palette.common.white}
        >
          {children}
        </Typography>
      </Container>
    </Box>
  )
}

export default TitleBanner
