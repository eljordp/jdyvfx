import { useState, useEffect, useRef } from 'react'
import ComparisonSlider from './components/ComparisonSlider'

// Placeholder — replace with Jodye's actual before/after shots
const WORK = [
  {
    id: 1,
    title: 'Urban Chase',
    tag: 'HEAVY VFX',
    before: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Night Drive',
    tag: 'HEAVY VFX',
    before: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Portrait Grade',
    tag: 'LIGHT VFX',
    before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Product Shot',
    tag: 'LIGHT VFX',
    before: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Atmosphere',
    tag: 'HEAVY VFX',
    before: 'https://images.unsplash.com/photo-1518676590747-1e3dcf5a91d4?w=1200&q=80',
    after: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
  },
]

function useReveal() {
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

function Reveal({ children, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
      <div className="flex items-center justify-between px-6 md:px-10 h-16">
        <a href="#" className="font-serif text-white text-lg tracking-wider">jdyvfx</a>

        <div className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-[11px] text-neutral-500 hover:text-white transition-colors tracking-[0.25em] uppercase">Work</a>
          <a href="#about" className="text-[11px] text-neutral-500 hover:text-white transition-colors tracking-[0.25em] uppercase">About</a>
          <a href="#book" className="text-[11px] text-white tracking-[0.25em] uppercase border-b border-white/30 pb-0.5 hover:border-white transition-colors">Book</a>
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
          <a href="#work" onClick={() => setOpen(false)} className="text-neutral-300 tracking-[0.25em] uppercase text-sm py-2">Work</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-neutral-300 tracking-[0.25em] uppercase text-sm py-2">About</a>
          <a href="#book" onClick={() => setOpen(false)} className="text-white tracking-[0.25em] uppercase text-sm py-2 border-b border-white/20 pb-3 w-fit">Book</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-end pb-[12dvh]">
      {/* Background — swap with a showreel video later */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-[clamp(2.5rem,12vw,8rem)] text-white leading-[0.9] mb-3 md:mb-4 tracking-tight">
          jdyvfx
        </h1>
        <p className="text-neutral-400 text-xs md:text-base tracking-[0.35em] uppercase">
          Director &middot; Editor &middot; VFX
        </p>
      </div>
    </section>
  )
}

function Work() {
  const trackRef = useRef(null)

  return (
    <section id="work" className="py-16 md:py-32">
      <Reveal>
        <div className="px-5 md:px-10 mb-8 md:mb-12 flex items-end justify-between">
          <div>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">Selected Work</p>
            <h2 className="font-serif text-white text-2xl md:text-5xl">Before &amp; After</h2>
          </div>
          <p className="hidden md:block text-neutral-600 text-xs tracking-widest uppercase">
            Drag to compare &rarr; Scroll to browse
          </p>
        </div>
      </Reveal>

      <div className="portfolio-track" ref={trackRef}>
        {WORK.map((item) => (
          <div key={item.id} className="portfolio-item">
            <ComparisonSlider
              beforeSrc={item.before}
              afterSrc={item.after}
              beforeLabel="RAW"
              afterLabel="VFX"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-white text-sm">{item.title}</span>
              <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-5 md:px-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-20 items-center">
        {/* Photo */}
        <Reveal>
          <div className="aspect-[3/4] bg-neutral-900 overflow-hidden">
            {/* Replace with Jodye's photo */}
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
              alt="Jodye"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-6">About</p>
            <h2 className="font-serif text-white text-2xl md:text-4xl mb-5 md:mb-6 leading-tight">
              I make the<br />impossible look real.
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4 text-[15px]">
              Based in Los Angeles. I work across music videos, short films, and commercial projects —
              handling everything from heavy compositing and CGI to clean color grades and subtle retouching.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-10 text-[15px]">
              Every frame gets the same attention. Whether it's a full environment build or a simple clean-up,
              the craft doesn't change.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="https://instagram.com/jdyvfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.25em] uppercase"
              >
                @jdyvfx
              </a>
              <a
                href="https://instagram.com/finallyoverxyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors text-xs tracking-[0.25em] uppercase"
              >
                @finallyoverxyz
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Booking() {
  const [form, setForm] = useState({ name: '', email: '', type: '', details: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking — ${form.type || 'Project'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.details}`
    )
    window.location.href = `mailto:jdyvfx@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass = 'w-full bg-transparent border-b border-neutral-800 py-3 text-white text-base md:text-sm placeholder-neutral-700 focus:border-neutral-500 focus:outline-none transition-colors'

  return (
    <section id="book" className="py-16 md:py-32 px-5 md:px-10">
      <div className="max-w-xl mx-auto">
        <Reveal>
          <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-6 text-center">Contact</p>
          <h2 className="font-serif text-white text-2xl md:text-5xl text-center mb-10 md:mb-16">
            Let's work.
          </h2>
        </Reveal>

        {sent ? (
          <Reveal>
            <div className="text-center py-20">
              <p className="text-white font-serif text-2xl mb-2">Sent.</p>
              <p className="text-neutral-500 text-sm">I'll be in touch.</p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <input type="text" required placeholder="Name" value={form.name} onChange={set('name')} className={inputClass} />
                <input type="email" required placeholder="Email" value={form.email} onChange={set('email')} className={inputClass} />
              </div>

              <select required value={form.type} onChange={set('type')} className={`${inputClass} appearance-none`}>
                <option value="" className="bg-black">What do you need?</option>
                <option value="Heavy VFX" className="bg-black">Heavy VFX</option>
                <option value="Light VFX" className="bg-black">Light VFX</option>
                <option value="Editing" className="bg-black">Editing</option>
                <option value="Direction" className="bg-black">Direction</option>
                <option value="Full Package" className="bg-black">Full Package</option>
              </select>

              <textarea
                required
                rows={4}
                placeholder="Tell me about the project..."
                value={form.details}
                onChange={set('details')}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="w-full border border-white/20 text-white py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Request
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-white text-sm tracking-wider">jdyvfx</span>
        <span className="text-neutral-700 text-xs">&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Booking />
      <Footer />
    </>
  )
}
