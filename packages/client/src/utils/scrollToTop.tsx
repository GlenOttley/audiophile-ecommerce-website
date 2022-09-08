import { useEffect } from 'react'
import { useLocation } from 'react-router'

interface ComponentProps {
  children: JSX.Element
}

const ScrollToTop = ({ children }: ComponentProps): JSX.Element => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{children}</>
}

export default ScrollToTop
