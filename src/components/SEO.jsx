import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE = 'https://jdyvfx.com'

const META = {
  '/': {
    title: 'jdyvfx — Director & VFX | Los Angeles',
    description: 'Jodye — Editor, Director & VFX artist based in Los Angeles. Visual effects and post-production for film, music videos, and commercial content.',
  },
  '/work': {
    title: 'Work — jdyvfx | Before & After VFX Portfolio',
    description: 'Before and after VFX portfolio by Jodye. See the raw footage vs. final visual effects — compositing, color grading, CGI, and more.',
  },
  '/about': {
    title: 'About — jdyvfx | Jodye, LA-Based VFX Artist',
    description: 'Jodye is an editor, director, and VFX artist based in Los Angeles working across music videos, short films, and commercial projects.',
  },
  '/book': {
    title: 'Book — jdyvfx | Hire a VFX Artist in Los Angeles',
    description: 'Book Jodye for your next project. Color grading, VFX, editing, and direction. Based in Los Angeles, available worldwide.',
  },
}

export default function SEO() {
  const { pathname } = useLocation()
  const meta = META[pathname] || META['/']

  useEffect(() => {
    document.title = meta.title

    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (el) {
        el.setAttribute('content', content)
      }
    }

    setMeta('description', meta.description)
    setMeta('og:title', meta.title, true)
    setMeta('og:description', meta.description, true)
    setMeta('og:url', `${BASE}${pathname}`, true)
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', `${BASE}${pathname}`)
  }, [pathname, meta])

  return null
}
