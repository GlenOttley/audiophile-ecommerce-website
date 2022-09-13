import {
  styled,
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps,
} from '@mui/material'

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    '&.MuiFormControlLabel-root': {
      border: `1px solid ${theme.palette.grey[300]}`,
      borderRadius: '9px',
      padding: '18px 24px',
      margin: 0,
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
      '.MuiTypography-root': {
        fontWeight: '700',
        color: 'black',
        fontSize: '1.4rem',
        letterSpacing: '-0.25px',
        lineHeight: 'auto',
      },
      '&:first-of-type': {
        marginTop: '9px',
      },
      '&:not(:last-child)': {
        marginBottom: '16px',
      },
    },
    '.MuiButtonBase-root': {
      padding: 0,
      marginRight: '21px',
    },
  })
)

export default FormControlLabel
