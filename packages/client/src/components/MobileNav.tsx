import { Box, Grid } from '@mui/material'
import CategoryCard from './CategoryCard'
import Container from './Container'
import productCategoryData from '../data/productCategoryData'
import { SetStateAction } from 'react'

interface ComponentProps {
  setShowNav: React.Dispatch<SetStateAction<boolean>>
}

const MobileNav = ({ setShowNav }: ComponentProps) => {
  return (
    <Box
      marginTop={{ xs: '180px', md: '220px' }}
      marginBottom={{ xs: 4, md: 8 }}
    >
      <Container>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          wrap='nowrap'
          gap={{ xs: 10.5, md: 1, lg: 4 }}
        >
          {productCategoryData.map((category, index) => (
            <CategoryCard
              setShowNav={setShowNav}
              category={category}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default MobileNav
