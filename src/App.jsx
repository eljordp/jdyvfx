import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Nav, Footer } from './components/Layout'
import SEO from './components/SEO'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Book from './pages/Book'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitioning(true)
      const timeout = setTimeout(() => {
        setDisplayLocation(location)
        setTransitioning(false)
      }, 250)
      return () => clearTimeout(timeout)
    }
  }, [location, displayLocation])

  return (
    <main
      className="transition-opacity duration-250 ease-in-out"
      style={{ opacity: transitioning ? 0 : 1 }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
