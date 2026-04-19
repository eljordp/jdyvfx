import { Reveal, PageHead } from '../components/Layout'
import { FEATURED, VIDEOS, INSTAGRAM } from '../data'
import FeaturedWork from '../components/FeaturedWork'
import VideoCard from '../components/VideoCard'
import InstagramGrid from '../components/InstagramGrid'

export default function WorkPage() {
  return (
    <>
      <PageHead
        label="Portfolio"
        title="Selected Work"
        subtitle="Music videos, visual effects, and post-production."
      />

      {/* YouTube videos */}
      <section className="pb-16 md:pb-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">Featured</p>
          </Reveal>
          <Reveal>
            <FeaturedWork items={FEATURED} />
          </Reveal>

          <Reveal>
            <div className="mt-12 mb-8 flex items-end justify-between">
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase">More Videos</p>
              <a
                href="https://www.youtube.com/@jdyvfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white text-xs tracking-[0.25em] uppercase transition-colors"
              >
                YouTube &rarr;
              </a>
            </div>
          </Reveal>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {VIDEOS.filter(v => v.id !== 'Gld77nmF7Xs').map((vid) => (
              <Reveal key={vid.id}>
                <VideoCard {...vid} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="mb-6 flex items-end justify-between">
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase">Instagram</p>
              <a
                href="https://instagram.com/jdyvfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white text-xs tracking-[0.25em] uppercase transition-colors"
              >
                @jdyvfx &rarr;
              </a>
            </div>
          </Reveal>
          <InstagramGrid items={INSTAGRAM} columns={4} />
        </div>
      </section>
    </>
  )
}
