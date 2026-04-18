import { useRef, useState } from 'react'

export default function VideoCard({ id, title, type, tag }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)

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

  const handleClick = (e) => {
    // Open in YouTube when clicking the card
    if (!loaded) {
      e.preventDefault()
      setLoaded(true)
    }
  }

  return (
    <div>
      <div
        className="aspect-video bg-neutral-900 rounded-sm overflow-hidden relative group cursor-pointer"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {loaded ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <div onClick={handleClick}>
            {/* YouTube thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Hover preview video */}
            <video
              ref={videoRef}
              src={`/yt/preview/${id}.mp4`}
              muted
              playsInline
              loop
              preload="none"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-0.5">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <span className="text-white text-sm block">{title}</span>
          {type && <span className="text-neutral-600 text-xs">{type}</span>}
        </div>
        <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">{tag}</span>
      </div>
    </div>
  )
}
