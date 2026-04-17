import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `text-[11px] tracking-[0.25em] uppercase transition-colors ${
      isActive(path) ? 'text-white' : 'text-neutral-500 hover:text-white'
    }`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7">
            <rect width="32" height="32" rx="6" fill="#0a0a0a"/>
            <text x="16" y="22" fontFamily="Georgia, serif" fontSize="14" fill="white" textAnchor="middle" fontWeight="500">jdy</text>
          </svg>
          <span className="font-serif text-white text-lg tracking-wider">jdyvfx</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/work" className={linkClass('/work')}>Work</Link>
          <Link to="/about" className={linkClass('/about')}>About</Link>
          <Link to="/book" className="text-[11px] text-white tracking-[0.25em] uppercase border-b border-white/30 pb-0.5 hover:border-white transition-colors">Book</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/95 backdrop-blur-md px-6 pt-10 pb-[env(safe-area-inset-bottom)] flex flex-col gap-8 border-t border-white/5 z-40">
          <Link to="/work" className="text-neutral-300 tracking-[0.25em] uppercase text-sm py-2">Work</Link>
          <Link to="/about" className="text-neutral-300 tracking-[0.25em] uppercase text-sm py-2">About</Link>
          <Link to="/book" className="text-white tracking-[0.25em] uppercase text-sm py-2 border-b border-white/20 pb-3 w-fit">Book</Link>
        </div>
      )}
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-serif text-white text-sm tracking-wider">jdyvfx</Link>
        <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
          <Link to="/work" className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">Work</Link>
          <Link to="/about" className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">About</Link>
          <Link to="/book" className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">Book</Link>
          <a href="https://instagram.com/manza_visuals" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.2em] uppercase">Mgmt</a>
        </div>
        <span className="text-neutral-700 text-xs">&copy; {new Date().getFullYear()} jdyvfx</span>
      </div>
    </footer>
  )
}

export function PageHead({ label, title, subtitle }) {
  return (
    <div className="pt-28 md:pt-36 pb-12 md:pb-20 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">{label}</p>
          <h1 className="font-serif text-white text-3xl md:text-6xl mb-4">{title}</h1>
          {subtitle && <p className="text-neutral-400 text-[15px] md:text-base max-w-lg">{subtitle}</p>}
        </Reveal>
      </div>
    </div>
  )
}
