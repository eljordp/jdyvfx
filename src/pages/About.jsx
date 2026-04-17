import { Reveal, PageHead } from '../components/Layout'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <PageHead
        label="About"
        title="Jodye"
        subtitle="Editor, director, and visual effects artist based in Los Angeles."
      />

      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-20 items-start">
          <Reveal>
            <div className="aspect-[3/4] bg-neutral-900 overflow-hidden sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                alt="Jodye"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-serif text-white text-2xl md:text-4xl mb-6 leading-tight">
                I make the<br />impossible look real.
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-neutral-400 leading-relaxed mb-4 text-[15px]">
                Based in Los Angeles. I work across music videos, short films, and commercial projects —
                handling everything from heavy compositing and CGI to clean color grades and subtle retouching.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-neutral-400 leading-relaxed mb-4 text-[15px]">
                Every frame gets the same attention. Whether it's a full environment build or a simple clean-up,
                the craft doesn't change.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-neutral-400 leading-relaxed mb-10 text-[15px]">
                I've worked with independent artists, labels, brands, and production houses — always focused on
                making the final product look exactly how it was supposed to look in your head.
              </p>
            </Reveal>

            <Reveal>
              <div className="border-t border-neutral-900 pt-8 mb-10">
                <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-4">Software</p>
                <div className="flex flex-wrap gap-3">
                  {['After Effects', 'DaVinci Resolve', 'Premiere Pro', 'Nuke', 'Cinema 4D', 'Photoshop'].map((s) => (
                    <span key={s} className="text-neutral-500 text-xs border border-neutral-800 px-3 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-8 mb-10">
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
            </Reveal>

            <Reveal>
              <Link
                to="/book"
                className="inline-block border border-white/20 text-white py-3 px-8 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              >
                Work With Me
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
