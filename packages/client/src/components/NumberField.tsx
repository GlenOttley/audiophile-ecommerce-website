import theme from '../theme'
import {
  styled,
  TextField as MuiTextField,
  TextFieldProps,
  Button as MuiButton,
  ButtonProps,
  Grid,
} from '@mui/material'
import { SetStateAction } from 'react'

const TextField = styled(MuiTextField)<TextFieldProps>(({ theme, type }) => ({
  ...(type === 'number' && {
    backgroundColor: theme.palette.grey[200],
    borderRadius: 0,
    '& fieldset': {
      border: 'none',
    },
  }),
})) as typeof MuiTextField

const Button = styled(MuiButton)<ButtonProps>(({ theme, type }) => ({
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.text.primary,
  borderRadius: 0,
  minWidth: '40px',
  maxWidth: '40px',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.primary.main,
  },
})) as typeof MuiButton

interface ComponentProps {
  value: number
  setValue: React.Dispatch<SetStateAction<number>>
  variant: 'large' | 'small'
}

const NumberField = ({
  value,
  setValue,
  variant,
}: ComponentProps): JSX.Element => {
  function increment() {
    setValue(value + 1)
  }

  function decrement() {
    value > 1 && setValue(value - 1)
  }

  return (
    <Grid
      container
      item
      wrap='nowrap'
      sx={{
        maxHeight: variant === 'large' ? '48px' : '32px',
        width: variant === 'large' ? '120px' : '96px',
      }}
    >
      <Button onClick={decrement} disableRipple size='small'>
        -
      </Button>
      <TextField
        type='number'
        value={value.toString()}
        onChange={({ target }) => setValue(parseInt(target.value))}
        inputProps={{
          style: {
            padding: variant === 'large' ? '14px 0' : '7px 0',
            textAlign: 'center',
            color: theme.palette.common.black,
            fontSize: '1.3rem',
            fontWeight: 700,
          },
        }}
      />
      <Button onClick={increment} disableRipple>
        +
      </Button>
    </Grid>
  )
}

export default NumberField
