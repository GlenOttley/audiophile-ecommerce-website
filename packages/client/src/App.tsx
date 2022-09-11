import theme from './theme'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './views/Home'
import Category from './views/Category'
import ProductDetail from './views/ProductDetail'
import { useAppDispatch } from './app/hooks'
import { getProducts } from './features/product/productSlice'
import ScrollToTop from './utils/scrollToTop'

const App = (): JSX.Element => {
  const dispatch = useAppDispatch()
  dispatch(getProducts())

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Nav />

          <Box marginTop='91px'>
            <ScrollToTop>
              <Routes>
                <Route path='/' element={<Home />} />
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
