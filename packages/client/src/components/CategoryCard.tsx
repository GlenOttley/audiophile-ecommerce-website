import theme from '../theme'
import { Typography, Grid } from '@mui/material'
import { KeyboardArrowRight } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import Button from './Button'
import Image from 'mui-image'
import { IProductCategory } from '../data/productCategoryData'
import { SetStateAction } from 'react'

interface ComponentProps {
  category: IProductCategory
  setShowNav?: React.Dispatch<SetStateAction<boolean>>
}

const CategoryCard = ({
  category,
  setShowNav,
}: ComponentProps): JSX.Element => {
  function handleLink() {
    if (setShowNav) {
      setShowNav(false)
    }
  }
  return (
    <Grid
      container
      item
      bgcolor={theme.palette.grey[200]}
      borderRadius={theme.shape.borderRadius}
      height='165px'
    >
      <Grid
        container
        item
        direction='column'
        alignItems='center'
        position='relative'
        top={{ xs: '-50px', md: '-55px', lg: '-65px' }}
      >
        <Grid item height={{ xs: '130px', md: '150px', lg: '170px' }}>
          <Image src={category.image} alt={category.name} />
        </Grid>
        <Grid
          item
          textAlign='center'
          position='relative'
          top={{ md: '-10px', lg: '-20px' }}
        >
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
            to={`/products/${category.slug}`}
            onClick={handleLink}
          >
            Shop
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CategoryCard
