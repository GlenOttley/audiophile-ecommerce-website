import { useEffect } from 'react'
import { useAppDispatch } from '../app/hooks'
import { getProducts } from '../features/product/productSlice'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import ProductCategories from '../components/ProductCategories'
import ZX9 from '../components/ZX9'
import ZX7 from '../components/ZX7'
import YX1 from '../components/YX1'

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <HeroBanner />
      <ProductCategories />
      <ZX9 />
      <ZX7 />
      <YX1 />
    </div>
  )
}

export default Home
