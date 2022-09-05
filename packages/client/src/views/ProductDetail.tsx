import { useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectProducts } from '../features/product/productSlice'
import DetailOverview from '../components/DetailOverview/DetailOverview'
import DetailFeatures from '../components/DetailFeatures'
import DetailGallery from '../components/DetailGallery'
import DetailOthers from '../components/DetailOthers'
import ProductCategories from '../components/ProductCategories'
import About from '../components/About'

const ProductDetail = () => {
  const select = useAppSelector
  const { productSlug } = useParams()

  const { error, status, productList } = select(selectProducts)

  const product = productList.find((product) => product.slug === productSlug)

  return (
    <>
      <DetailOverview product={product} />
      <DetailFeatures product={product} />
      <DetailGallery product={product} />
      <DetailOthers product={product} />
      <ProductCategories />
      <About />
    </>
  )
}

export default ProductDetail
