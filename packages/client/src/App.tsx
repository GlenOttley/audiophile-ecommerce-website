import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useAppDispatch } from './app/hooks'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { getProducts } from './features/product/productSlice'
import theme from './theme'
import ScrollToTop from './utils/scrollToTop'
import Category from './views/Category'
import Checkout from './views/Checkout'
import Home from './views/Home'
import ProductDetail from './views/ProductDetail'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  dispatch(getProducts())

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router basename='/'>
          <Nav />
          <Box marginTop='91px'>
            <ScrollToTop>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/products'>
                  <Route path=':category' element={<Category />} />
                  <Route
                    path=':category/:productSlug'
                    element={<ProductDetail />}
                  />
                </Route>
              </Routes>
            </ScrollToTop>
          </Box>
          <Footer />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
