import {
  styled,
  TextField as MuiTextField,
  TextFieldProps,
} from '@mui/material'

const TextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
  'label + &': {
    marginTop: '45px',
  },
  '.MuiInputBase-input': {
    padding: '18px 24px',
  },
  '.MuiOutlinedInput-root': {
    fontWeight: '700',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '1.4rem',
    letterSpacing: '-0.25px',
    lineHeight: 'auto',
    '& fieldset': {
      border: '1px solid grey.300',
      borderRadius: '9px',
      // color: 'white !important',
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:hover fieldset': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&.Mui-disabled': {
      '& fieldset': {
        border: '1px solid grey',
      },
      '&:hover fieldset': {
        border: '1px solid grey',
      },
    },

    '.MuiSelect-select': {
      // outline: '1px solid red',
    },
  },

  // error outline
  '.MuiOutlinedInput-input[aria-invalid="true"] + fieldset': {
    border: `2px solid ${theme.palette.warning.main}`,
  },
}))

export default TextField
