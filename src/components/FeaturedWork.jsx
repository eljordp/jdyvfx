import { useRef, useState } from 'react'

function FeaturedReel({ shortcode, title, subtitle, link }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setPlaying(false)
    }
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="aspect-[4/5] md:aspect-video bg-neutral-900 rounded-sm overflow-hidden relative">
        <img
          src={`/ig/${shortcode}.jpg`}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-0' : 'opacity-100'}`}
        />
        <video
          ref={videoRef}
          src={`/ig/preview/${shortcode}.mp4`}
          muted
          playsInline
          loop
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-white text-lg md:text-xl font-serif mb-1">{title}</p>
          <p className="text-neutral-400 text-xs tracking-wide">{subtitle}</p>
        </div>
        <div className="absolute top-3 right-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-white/50 group-hover:text-white transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </div>
      </div>
    </a>
  )
}

function FeaturedYouTube({ id, title, subtitle }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleEnter = () => {
    if (videoRef.current && !loaded) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  const handleLeave = () => {
    if (videoRef.current && !loaded) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setPlaying(false)
    }
  }

  return (
    <div
      className="group"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="aspect-[4/5] md:aspect-video bg-neutral-900 rounded-sm overflow-hidden relative cursor-pointer" onClick={() => !loaded && setLoaded(true)}>
        {loaded ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-0' : 'opacity-100'}`}
            />
            <video
              ref={videoRef}
              src={`/yt/preview/${id}.mp4`}
              muted
              playsInline
              loop
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <p className="text-white text-lg md:text-xl font-serif mb-1">{title}</p>
              <p className="text-neutral-400 text-xs tracking-wide">{subtitle}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-0.5">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function FeaturedWork({ items }) {
  return (
    <div className="grid md:grid-cols-2 gap-3">
      {items.map((item, i) => (
        item.type === 'reel'
          ? <FeaturedReel key={i} {...item} />
          : <FeaturedYouTube key={i} {...item} />
      ))}
    </div>
  )
}
