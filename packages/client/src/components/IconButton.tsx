import {
  styled,
  IconButton as MuiIconButton,
  IconButtonProps,
} from '@mui/material'

const IconButton = styled(MuiIconButton)<IconButtonProps>(({ theme }) => ({
  '&:hover': {
    img: {
      filter:
        'brightness(0) saturate(100%) invert(68%) sepia(12%) saturate(5295%) hue-rotate(329deg) brightness(92%) contrast(83%)',
    },
  },
})) as typeof MuiIconButton

export default IconButton
