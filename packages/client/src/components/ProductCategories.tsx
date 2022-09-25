import { Box, Grid } from '@mui/material'
import CategoryCard from './CategoryCard'
import Container from './Container'
import productCategoryData from '../data/productCategoryData'

const ProductCategories = () => {
  return (
    <Box
      paddingTop='50px'
      marginBottom={{ xs: 15, md: 12, lg: 21 }}
      marginTop={{ xs: 5, md: 12, lg: 15 }}
    >
      <Container>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          wrap='nowrap'
          gap={{ xs: 10.5, md: 1, lg: 4 }}
        >
          {productCategoryData.map((category, index) => (
            <CategoryCard category={category} key={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductCategories
