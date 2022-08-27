import theme from '../theme'
import { Box, Typography, Grid } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import Button from './Button'
import Image from 'mui-image'
import { IProductCategory } from '../data/productCategoryData'

interface ComponentProps {
  category: IProductCategory
}

const CategoryCard = ({ category }: ComponentProps): JSX.Element => {
  return (
    <Box
      bgcolor={theme.palette.grey[200]}
      borderRadius={theme.shape.borderRadius}
      height='165px'
      width={{ xs: '100%', md: '32%' }}
    >
      <Grid
        container
        direction='column'
        alignItems='center'
        position='relative'
        sx={{ top: '-50px' }}
      >
        <Grid item height='130px'>
          <Image src={category.image} alt={category.name} />
        </Grid>
        <Typography
          variant='body2'
          textTransform='uppercase'
          color={theme.palette.common.black}
        >
          {category.name}
        </Typography>
        <Button
          variant='text'
          endIcon={<KeyboardArrowRight color='primary' />}
          component={RouterLink}
          to={category.slug}
        >
          Shop
        </Button>
      </Grid>
    </Box>
  )
}

export default CategoryCard
