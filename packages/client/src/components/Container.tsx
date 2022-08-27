import {
  styled,
  Container as MuiContainer,
  ContainerProps,
} from '@mui/material'

interface ComponentProps extends ContainerProps {
  paddingBottom?: boolean
}

const Container = styled(MuiContainer)<ComponentProps>(
  ({ theme, paddingBottom }) => ({
    // border: '1px solid red',
    // padding: theme.spacing(0, 3, 3),
    padding: paddingBottom ? theme.spacing(0, 3, 3) : theme.spacing(0, 3),
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(0, 5, 4),
      padding: paddingBottom ? theme.spacing(0, 5, 4) : theme.spacing(0, 5),
    },
    [theme.breakpoints.up('lg')]: {
      // padding: theme.spacing(0, 5, 6),
      padding: paddingBottom ? theme.spacing(0, 5, 6) : theme.spacing(0, 5),
      maxWidth: '1190px !important',
    },
  })
)

export default Container
