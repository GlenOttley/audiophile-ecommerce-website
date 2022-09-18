import {
  Controller,
  useFormContext,
  Control,
  UseControllerProps,
} from 'react-hook-form'
import { Typography, InputLabel, FormControl } from '@mui/material'
import TextField from './TextField'
import _ from 'lodash'

interface ComponentProps extends UseControllerProps {
  label: string
  type?: string
  placeholder: string
}

const ControlledInput = ({
  name,
  rules,
  label,
  type,
  placeholder,
}: ComponentProps): JSX.Element => {
  const {
    control,
    formState: { errors },
  }: { control: Control; formState: { errors: any } } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      rules={{
        required: "Can't be empty",
        ...rules,
      }}
      render={({ field }) => (
        <FormControl fullWidth error={!!_.get(errors, name)}>
          <InputLabel
            htmlFor={name}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              left: '-13px',
              color: 'black',
              fontSize: '1.2rem',
              fontWeight: 700,
              letterSpacing: '-0.21px',
            }}
          >
            {label}
            <Typography variant='caption'>
              {_.get(errors, name)?.message}
            </Typography>
          </InputLabel>

          <TextField
            {...field}
            placeholder={placeholder}
            type={type || 'text'}
            autoComplete='off'
            error={!!_.get(errors, name)}
          />
        </FormControl>
      )}
    />
  )
}

export default ControlledInput
