import { Reveal, PageHead } from '../components/Layout'
import { VIDEOS, WORK } from '../data'
import ComparisonSlider from '../components/ComparisonSlider'

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
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">Videos</p>
          </Reveal>
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
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
                    <div>
                      <span className="text-white text-sm block">{vid.title}</span>
                      <span className="text-neutral-600 text-xs">{vid.type}</span>
                    </div>
                    <span className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase">{vid.tag}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      {WORK.length > 0 && (
        <section className="pb-16 md:pb-24 px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">Before & After</p>
            </Reveal>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {WORK.map((item) => (
                <Reveal key={item.id}>
                  <div>
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* IG link */}
      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <a
              href="https://instagram.com/jdyvfx"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-800 rounded-lg p-6 flex items-center justify-between group hover:border-neutral-700 transition-colors block"
            >
              <div>
                <p className="text-white text-sm mb-1">More work on Instagram</p>
                <p className="text-neutral-500 text-xs">@jdyvfx &middot; Reels, edits, behind the scenes</p>
              </div>
              <span className="text-neutral-600 group-hover:text-white transition-colors text-xs tracking-[0.25em] uppercase">
                View &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
