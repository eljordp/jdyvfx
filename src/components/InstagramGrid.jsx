import { useRef } from 'react'

function GridItem({ shortcode, type }) {
  const videoRef = useRef(null)

  const url = type === 'reel'
    ? `https://www.instagram.com/reel/${shortcode}/`
    : `https://www.instagram.com/p/${shortcode}/`

  const hasVideo = type === 'reel'

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square bg-neutral-900 overflow-hidden group block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Thumbnail */}
      <img
        src={`/ig/${shortcode}.jpg`}
        alt=""
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-500 ${hasVideo ? 'group-hover:opacity-0' : 'group-hover:scale-105'}`}
      />

      {/* Video preview — reels only */}
      {hasVideo && (
        <video
          ref={videoRef}
          src={`/ig/preview/${shortcode}.mp4`}
          muted
          playsInline
          loop
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </div>

      {/* Reel indicator */}
      {type === 'reel' && (
        <div className="absolute top-2 right-2 group-hover:opacity-0 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 opacity-60">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </a>
  )
}

export default function InstagramGrid({ items, columns = 3 }) {
  const colClass = columns === 4
    ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
    : 'grid-cols-2 sm:grid-cols-3'

  return (
    <div className={`grid ${colClass} gap-1`}>
      {items.map((item) => (
        <GridItem key={item.shortcode} shortcode={item.shortcode} type={item.type} />
      ))}
    </div>
  )
}
