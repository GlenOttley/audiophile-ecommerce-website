import Container from '../components/Container'
import Button from '../components/Button'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutSummary from '../components/CheckoutSummary'
import { Grid, Box } from '@mui/material'

const Checkout = () => {
  const navigate = useNavigate()
  return (
    <Box bgcolor='grey.50'>
      <Container
        sx={{
          paddingTop: { xs: 2, lg: 10 },
          marginBottom: { xs: 11, md: 15, lg: 20 },
        }}
      >
        <Button
          variant='text'
          startIcon={<KeyboardArrowLeft color='primary' />}
          onClick={() => navigate(-1)}
          sx={{ paddingLeft: 0, marginBottom: { xs: 3, lg: 7.5 } }}
        >
          Go Back
        </Button>

        <Grid container direction={{ xs: 'column', lg: 'row' }} gap={4}>
          <CheckoutForm />
          <CheckoutSummary />
        </Grid>
      </Container>
    </Box>
  )
}

export default Checkout
