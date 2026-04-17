import { useEffect } from 'react'
import { Reveal, PageHead } from '../components/Layout'
import { VIDEOS, REELS, POSTS } from '../data'
import InstagramEmbed from '../components/InstagramEmbed'

export default function WorkPage() {
  // Re-process embeds when page mounts
  useEffect(() => {
    const t = setTimeout(() => {
      if (window.instgrm) window.instgrm.Embeds.process()
    }, 500)
    return () => clearTimeout(t)
  }, [])

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
          <div className="grid md:grid-cols-2 gap-6">
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

      {/* Instagram Reels */}
      <section className="pb-16 md:pb-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">Reels</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REELS.map((reel) => (
              <Reveal key={reel.shortcode}>
                <InstagramEmbed shortcode={reel.shortcode} isReel />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Posts */}
      {POSTS.length > 0 && (
        <section className="pb-20 md:pb-32 px-5 md:px-10">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">Posts</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {POSTS.map((post) => (
                <Reveal key={post.shortcode}>
                  <InstagramEmbed shortcode={post.shortcode} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
