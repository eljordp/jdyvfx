import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav, Footer } from './components/Layout'
import SEO from './components/SEO'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Book from './pages/Book'

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
