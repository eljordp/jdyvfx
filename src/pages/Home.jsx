import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Layout'
import { VIDEOS, INSTAGRAM, WORK } from '../data'
import ComparisonSlider from '../components/ComparisonSlider'
import InstagramGrid from '../components/InstagramGrid'

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-end pb-[12dvh]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80"
          alt="VFX showreel by jdyvfx"
          className="w-full h-full object-cover"
          loading="eager"
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

function WorkSection() {
  const trackRef = useRef(null)

  return (
    <section className="py-16 md:py-32">
      {/* Videos */}
      <Reveal>
        <div className="px-5 md:px-10 mb-8 md:mb-12 flex items-end justify-between">
          <div>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">Selected Work</p>
            <h2 className="font-serif text-white text-2xl md:text-5xl">Recent Projects</h2>
          </div>
          <Link to="/work" className="text-neutral-500 hover:text-white text-xs tracking-[0.25em] uppercase transition-colors">
            View All &rarr;
          </Link>
        </div>
      </Reveal>

      <div className="px-5 md:px-10 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {VIDEOS.map((vid) => (
            <Reveal key={vid.id}>
              <div>
                <div className="aspect-video bg-neutral-900 rounded-sm overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.id}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white text-sm">{vid.title}</span>
                  <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">{vid.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Before & After slider */}
      {WORK.length > 0 && (
        <>
          <Reveal>
            <div className="px-5 md:px-10 mb-8 md:mb-12">
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">VFX Breakdown</p>
              <h2 className="font-serif text-white text-2xl md:text-4xl">Before &amp; After</h2>
            </div>
          </Reveal>

          <div className="portfolio-track mb-16 md:mb-24" ref={trackRef}>
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
        </>
      )}

      {/* IG grid */}
      <div className="px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-8 flex items-end justify-between">
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase">@jdyvfx</p>
              <a
                href="https://instagram.com/jdyvfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white text-xs tracking-[0.25em] uppercase transition-colors"
              >
                Follow &rarr;
              </a>
            </div>
          </Reveal>
          <InstagramGrid items={INSTAGRAM.slice(0, 6)} columns={3} />
        </div>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section className="py-12 md:py-16 px-5 md:px-10 border-y border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <span className="text-neutral-700 text-[10px] tracking-[0.4em] uppercase shrink-0">Worked with</span>
            {['EBK Jaaybo', 'EBK Leebo'].map((name) => (
              <span key={name} className="text-neutral-500 text-sm tracking-wide">{name}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-24 md:py-36 px-5 md:px-10">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-white text-3xl md:text-5xl mb-6">Let's work.</h2>
          <p className="text-neutral-400 text-[15px] mb-10">Have a project in mind? Let's make it happen.</p>
          <Link
            to="/book"
            className="inline-block border border-white/20 text-white py-4 px-10 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            Book a Session
          </Link>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <Clients />
      <CTA />
    </>
  )
}
