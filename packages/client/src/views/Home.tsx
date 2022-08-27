import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getProducts, selectProducts } from '../features/product/productSlice'
import HeroBanner from '../components/HeroBanner'
import ProductCategories from '../components/ProductCategories'

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const select = useAppSelector

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const { error, status, productList } = select(selectProducts)

  return (
    <div>
      <HeroBanner />
      <ProductCategories />
    </div>
  )
}

export default Home
