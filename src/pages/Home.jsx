import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Layout'
import { FEATURED, VIDEOS, INSTAGRAM } from '../data'
import FeaturedWork from '../components/FeaturedWork'
import VideoCard from '../components/VideoCard'
import InstagramGrid from '../components/InstagramGrid'

function Hero() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Try autoplay with audio on mount
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))
  }, [])

  const toggleAudio = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-end pb-[12dvh]">
      <audio ref={audioRef} src="/5k-audio.mp3" preload="auto" />

      <div className="absolute inset-0 hero-bg">
        <video
          ref={desktopVidRef}
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block w-full h-full object-cover"
          poster="https://img.youtube.com/vi/Gld77nmF7Xs/maxresdefault.jpg"
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
        </video>

        <video
          ref={mobileVidRef}
          autoPlay
          muted
          loop
          playsInline
          className="md:hidden w-full h-full object-cover"
          poster="https://img.youtube.com/vi/Gld77nmF7Xs/maxresdefault.jpg"
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Play/pause — fixed bottom right, persists while scrolling */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label={playing ? 'Pause music' : 'Play music'}
      >
        {playing ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        )}
      </button>

      <div className="relative z-10 text-center px-6">
        <h1 className="hero-title font-serif text-[clamp(2.5rem,12vw,8rem)] text-white leading-[0.9] mb-3 md:mb-4 tracking-tight">
          jdyvfx
        </h1>
        <p className="hero-sub text-neutral-400 text-xs md:text-base tracking-[0.35em] uppercase">
          Director &middot; Editor &middot; VFX
        </p>
      </div>
    </section>
  )
}

function Work() {
  const rest = VIDEOS.filter(v => v.id !== 'Gld77nmF7Xs').slice(0, 2)

  return (
    <section className="py-16 md:py-32 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-8 md:mb-12 flex items-end justify-between">
            <div>
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">Selected Work</p>
              <h2 className="font-serif text-white text-2xl md:text-5xl">Recent Projects</h2>
            </div>
            <Link to="/work" className="text-neutral-500 hover:text-white text-xs tracking-[0.25em] uppercase transition-colors">
              View All &rarr;
            </Link>
          </div>
        </Reveal>

        {/* Featured — Belize Kazi + EBK Jaaybo */}
        <Reveal>
          <FeaturedWork items={FEATURED} />
        </Reveal>

        {/* More videos */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 mt-6 mb-12">
          {rest.map((vid) => (
            <Reveal key={vid.id}>
              <VideoCard {...vid} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mb-6 flex items-end justify-between">
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
      <Work />
      <CTA />
    </>
  )
}
