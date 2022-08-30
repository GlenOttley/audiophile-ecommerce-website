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
      <Container paddingBottom={true}>
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
