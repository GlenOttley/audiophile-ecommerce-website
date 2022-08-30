import {
  styled,
  Container as MuiContainer,
  ContainerProps,
} from '@mui/material'

interface ComponentProps extends ContainerProps {
  paddingBottom?: boolean
}

const Container = styled(MuiContainer, {
  shouldForwardProp: (prop) => prop !== 'paddingBottom',
})<ComponentProps>(({ theme, paddingBottom }) => ({
  // border: '1px solid red',
  height: '100%',
  padding: paddingBottom ? theme.spacing(0, 3, 3) : theme.spacing(0, 3),
  [theme.breakpoints.up('md')]: {
    padding: paddingBottom ? theme.spacing(0, 5, 4) : theme.spacing(0, 5),
  },
  [theme.breakpoints.up('lg')]: {
    padding: paddingBottom ? theme.spacing(0, 5, 6) : theme.spacing(0, 5),
    maxWidth: '1190px !important',
  },
}))

export default Container
