import theme from '../theme'
import {
  Box,
  Grid,
  Typography,
  FormLabel,
  Radio,
  RadioGroup,
  Icon,
} from '@mui/material'
import Container from './Container'
import ControlledInput from './ControlledInput'
import { Controller, useFormContext } from 'react-hook-form'
import FormControlLabel from './FormControlLabel'
import { useEffect } from 'react'

const CheckoutForm = () => {
  const {
    control,
    watch,
    formState: { errors },
    resetField,
  } = useFormContext()

  const paymentMethods = [
    {
      label: 'e-Money',
      value: 'e-money',
      id: '3726a7b8-e322-410b-a591-7ada6107b504',
    },
    {
      label: 'Cash',
      value: 'cash',
      id: '5c7efbf8-7793-4834-b09e-e4f2b5688775',
    },
  ]

  const generateRadioOptions = () => {
    return paymentMethods.map((method) => (
      <FormControlLabel
        key={method.id}
        value={method.value}
        label={method.label}
        control={<Radio />}
        sx={{
          border: '1px solid',
          borderColor:
            watch('paymentMethod') === method.value
              ? `${theme.palette.primary.main} !important`
              : 'auto',
        }}
      />
    ))
  }

  // reset previously entered eMoney details if payment method is changed to cash
  useEffect(() => {
    if (watch('paymentMethod') === 'cash') {
      resetField('eMoneyNumber')
      resetField('eMoneyPin')
    }
  }, [watch('paymentMethod')])

  return (
    <Box bgcolor='white' borderRadius={theme.shape.borderRadius}>
      <Container
        sx={{
          paddingTop: { xs: 3, md: 4, lg: 6.5 },
          paddingBottom: { xs: 3, md: 4, lg: 6 },
        }}
      >
        <Typography
          variant='h5'
          textTransform='uppercase'
          color='black'
          marginBottom={{
            xs: 4,
            md: 5,
            lg: 6,
          }}
        >
          Checkout
        </Typography>

        <Box component='form'>
          <Grid container direction='column' spacing={{ xs: 4, md: 7 }}>
            <Grid item>
              <Typography
                variant='subtitle2'
                textTransform='uppercase'
                color='primary'
                marginBottom={2}
              >
                Billing Details
              </Typography>
              <Grid container spacing={{ md: 2 }}>
                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='name'
                    label='Name'
                    type='text'
                    placeholder='Alexei Ward'
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='email'
                    label='Email Address'
                    type='email'
                    placeholder='alexei@mail.com'
                    rules={{
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Wrong format',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='phone'
                    label='Phone Number'
                    type='tel'
                    placeholder='+1 (202) 555-0136'
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography
                variant='subtitle2'
                textTransform='uppercase'
                color='primary'
                marginBottom={2}
              >
                Shipping Info
              </Typography>
              <Grid container spacing={{ md: 2 }}>
                <Grid item xs={12}>
                  <ControlledInput
                    name='address'
                    label='Address'
                    type='text'
                    placeholder='1137 Williams Avenue'
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='zip'
                    label='ZIP Code'
                    type='text'
                    placeholder='10001'
                    rules={{
                      pattern: {
                        value: /^[0-9]*$/i,
                        message: 'Must be a number',
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='city'
                    label='City'
                    type='text'
                    placeholder='New York'
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <ControlledInput
                    name='country'
                    label='Country'
                    type='text'
                    placeholder='United States'
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Typography
                variant='subtitle2'
                textTransform='uppercase'
                color='primary'
                marginBottom={2}
              >
                Payment Details
              </Typography>
              <Grid container spacing={{ md: 2 }}>
                <Grid item xs={12} md={6}>
                  <FormLabel
                    sx={{
                      color: 'black',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.21px',
                      '&.Mui-focused': {
                        color: 'black',
                      },
                    }}
                  >
                    Payment Method
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name='paymentMethod'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup value={value} onChange={onChange}>
                        {generateRadioOptions()}
                      </RadioGroup>
                    )}
                  />
                </Grid>
              </Grid>
              {watch('paymentMethod') === 'e-money' && (
                <Grid container spacing={{ md: 2 }}>
                  <Grid item xs={12} md={6}>
                    <ControlledInput
                      name='eMoneyNumber'
                      label='e-Money Number'
                      type='text'
                      placeholder='238521993'
                      rules={{
                        pattern: {
                          value: /^\d{9}$/i,
                          message: 'Must be a 9 digit number',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ControlledInput
                      name='eMoneyPin'
                      label='e-Money PIN'
                      type='text'
                      placeholder='6891'
                      rules={{
                        pattern: {
                          value: /^\d{4}$/i,
                          message: 'Must be a 4 digit number',
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              )}
            </Grid>
            {watch('paymentMethod') === 'cash' && (
              <Grid
                container
                item
                xs={12}
                spacing={4}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'center' }}
              >
                <Grid item>
                  <Icon sx={{ width: '48px', height: '48px' }}>
                    <img
                      src='/assets/checkout/icon-cash-on-delivery.svg'
                      alt='cash on delivery'
                    />
                  </Icon>
                </Grid>
                <Grid item xs whiteSpace='normal'>
                  <Typography variant='body1'>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CheckoutForm
