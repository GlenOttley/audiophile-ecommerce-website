import Container from '../components/Container'
import Button from '../components/Button'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutSummary from '../components/CheckoutSummary'
import { Grid, Box } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import { IOrder } from '@audiophile/common/interfaces'

export interface IFormInput extends Omit<IOrder, 'totalPrice' | 'items'> {
  // user: IUser
  // shippingAddress: IAddress
  // paymentMethod: IPaymentMethod
}

const Checkout = () => {
  const navigate = useNavigate()
  const methods = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: {
      paymentMethod: {
        method: 'cash',
      },
    },
  })

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

        <Grid
          container
          direction={{ xs: 'column', lg: 'row' }}
          gap={4}
          whiteSpace='nowrap'
        >
          <FormProvider {...methods}>
            <Grid item xs>
              <CheckoutForm />
            </Grid>

            <Grid item lg={3.75}>
              <CheckoutSummary />
            </Grid>
          </FormProvider>
        </Grid>
      </Container>
    </Box>
  )
}

export default Checkout
