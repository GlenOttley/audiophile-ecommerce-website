import HeroBanner from '../components/HeroBanner'
import ProductCategories from '../components/ProductCategories'
import ZX9 from '../components/ZX9'
import ZX7 from '../components/ZX7'
import YX1 from '../components/YX1'
import About from '../components/About'

const Home = (): JSX.Element => {
  return (
    <>
      <HeroBanner />
      <ProductCategories />
      <ZX9 />
      <ZX7 />
      <YX1 />
      <About />
    </>
  )
}

export default Home
