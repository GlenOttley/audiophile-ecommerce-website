import theme from './theme'
import { CssBaseline, ThemeProvider, Box } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './views/Home'

const App = (): JSX.Element => {
  console.log(theme.typography)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Nav />

          <Box marginTop='91px'>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Box>

          <Footer />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
