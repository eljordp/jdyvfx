import ComparisonSlider from '../components/ComparisonSlider'
import { Reveal, PageHead } from '../components/Layout'
import { WORK } from '../data'

export default function WorkPage() {
  return (
    <>
      <PageHead
        label="Portfolio"
        title="Selected Work"
        subtitle="Drag the slider on any piece to see the raw footage versus the final VFX."
      />

      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
      </section>
    </>
  )
}
