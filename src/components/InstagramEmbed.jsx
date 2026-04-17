import { useEffect, useRef } from 'react'

export default function InstagramEmbed({ shortcode, isReel = false }) {
  const containerRef = useRef(null)

  useEffect(() => {
    // Load IG embed script if not already loaded
    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else {
      window.instgrm.Embeds.process()
    }
  }, [shortcode])

  const url = isReel
    ? `https://www.instagram.com/reel/${shortcode}/`
    : `https://www.instagram.com/p/${shortcode}/`

  return (
    <div ref={containerRef} className="instagram-embed-wrapper">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#111',
          border: 0,
          borderRadius: '3px',
          margin: 0,
          maxWidth: '100%',
          minWidth: '280px',
          padding: 0,
          width: '100%',
        }}
      />
    </div>
  )
}
