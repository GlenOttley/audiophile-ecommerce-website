import theme from '../theme'
import { Box, Grid } from '@mui/material'
import CategoryCard from './CategoryCard'
import Container from './Container'
import productCategoryData from '../data/productCategoryData'

interface ComponentProps {
  style?: React.CSSProperties
}

const ProductCategories = ({ style }: ComponentProps) => {
  return (
    <Box style={style} marginTop='90px'>
      <Container paddingBottom>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'stretch' }}
          gap={{ xs: 10.5, md: 1 }}
        >
          {productCategoryData.map((category) => (
            <CategoryCard category={category} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductCategories
