import TitleBanner from '../components/TitleBanner'
import About from '../components/About'
import ProductPreview from '../components/ProductPreview'
import ProductCategories from '../components/ProductCategories'
import { useAppSelector } from '../app/hooks'
import { selectProducts } from '../features/product/productSlice'
import { useParams } from 'react-router-dom'

const Category = (): JSX.Element => {
  const select = useAppSelector
  const { category } = useParams()

  const { error, status, productList } = select(selectProducts)
  const products = productList
    .filter((product) => product.category === category)
    .sort((a, b) => b.price - a.price)

  return (
    <>
      <TitleBanner>{category}</TitleBanner>
      {products.map((product, index) => (
        <ProductPreview product={product} index={index} key={product.slug} />
      ))}
      <ProductCategories />
      <About />
    </>
  )
}

export default Category
