import { Link } from 'react-router-dom'
import { Reveal, PageHead } from '../components/Layout'

const TIERS = [
  {
    name: 'Color Grade',
    price: '$150',
    unit: 'per video',
    description: 'Professional color grading that sets the mood and elevates your footage.',
    features: [
      'Basic color correction',
      'Creative look / LUT application',
      'Skin tone matching',
      'Scene-to-scene consistency',
      'Up to 5 min runtime',
      '2 revision rounds',
    ],
    note: 'Longer runtimes quoted separately.',
  },
  {
    name: 'Color Grade +',
    price: '$300',
    unit: 'per video',
    description: 'Advanced grading for projects that need more precision and creative range.',
    features: [
      'Everything in Color Grade',
      'Shot-by-shot grading',
      'Advanced masking & isolation',
      'Custom look development',
      'HDR / LOG workflow',
      'Up to 15 min runtime',
      '3 revision rounds',
    ],
    popular: true,
  },
  {
    name: 'Light VFX',
    price: '$250',
    unit: 'per video',
    description: 'Subtle enhancements that clean up and polish your footage.',
    features: [
      'Object / blemish removal',
      'Sky replacement',
      'Stabilization',
      'Speed ramping',
      'Light retouching',
      'Screen replacements',
      '2 revision rounds',
    ],
  },
  {
    name: 'Heavy VFX',
    price: '$500+',
    unit: 'per project',
    description: 'Full visual effects work — compositing, CGI, environment builds.',
    features: [
      '3D tracking & matchmoving',
      'CGI integration',
      'Environment extension',
      'Particle & simulation FX',
      'Rotoscoping',
      'Multi-layer compositing',
      'Unlimited revisions',
    ],
    note: 'Priced per shot complexity. Get a custom quote.',
  },
]

const PACKAGES = [
  {
    name: 'Music Video Package',
    price: '$800',
    description: 'Edit + color grade + light VFX for a single music video.',
    includes: ['Full edit from raw footage', 'Color grade (creative look)', 'Light VFX & clean-up', 'Up to 5 min', '3 revision rounds'],
  },
  {
    name: 'Full Package',
    price: 'Custom',
    description: 'End-to-end post-production — editing, grading, VFX, delivery.',
    includes: ['Full post-production edit', 'Advanced color grade', 'Heavy or light VFX', 'Sound design pass', 'Multiple export formats', 'Unlimited revisions'],
  },
]

export default function Pricing() {
  return (
    <>
      <PageHead
        label="Pricing"
        title="Rates & Packages"
        subtitle="Transparent pricing for every level of work. All prices in USD."
      />

      {/* Individual services */}
      <section className="pb-16 md:pb-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {TIERS.map((tier) => (
              <Reveal key={tier.name}>
                <div className={`relative border rounded-lg p-7 md:p-8 h-full flex flex-col ${
                  tier.popular
                    ? 'border-white/20 bg-white/[0.02]'
                    : 'border-neutral-800 bg-neutral-950'
                }`}>
                  {tier.popular && (
                    <span className="absolute -top-3 left-7 bg-white text-black text-[10px] tracking-[0.3em] uppercase px-3 py-1">
                      Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className="text-white font-serif text-xl mb-1">{tier.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-white text-2xl md:text-3xl font-light">{tier.price}</span>
                      <span className="text-neutral-600 text-xs tracking-wide">{tier.unit}</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-neutral-400">
                        <span className="text-neutral-600 mt-0.5 shrink-0">&mdash;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {tier.note && (
                    <p className="text-neutral-600 text-xs mb-6 italic">{tier.note}</p>
                  )}

                  <Link
                    to="/book"
                    className={`block text-center py-3 text-[11px] tracking-[0.3em] uppercase transition-all duration-300 ${
                      tier.popular
                        ? 'bg-white text-black hover:bg-neutral-200'
                        : 'border border-white/15 text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-16 md:pb-24 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-6">Packages</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {PACKAGES.map((pkg) => (
              <Reveal key={pkg.name}>
                <div className="border border-neutral-800 rounded-lg p-7 md:p-8 bg-neutral-950 h-full flex flex-col">
                  <h3 className="text-white font-serif text-xl mb-1">{pkg.name}</h3>
                  <span className="text-white text-2xl font-light mb-3">{pkg.price}</span>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.includes.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-neutral-400">
                        <span className="text-neutral-600 mt-0.5 shrink-0">&mdash;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/book"
                    className="block text-center py-3 text-[11px] tracking-[0.3em] uppercase border border-white/15 text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-8">FAQ</p>
          </Reveal>

          {[
            {
              q: 'What do I need to provide?',
              a: 'Your raw footage, any reference material or mood boards, and a brief on the look you\'re going for. The more context, the faster we move.',
            },
            {
              q: 'What\'s the turnaround?',
              a: 'Color grading: 2–4 days. Light VFX: 3–5 days. Heavy VFX: 1–3 weeks depending on complexity. Rush delivery available for an additional fee.',
            },
            {
              q: 'What formats do you deliver?',
              a: 'ProRes, H.264, H.265, or whatever your project requires. Multiple exports included at no extra charge.',
            },
            {
              q: 'Do you do on-set work?',
              a: 'Yes. VFX supervision and direction available for shoots in the LA area. Travel available for larger productions.',
            },
            {
              q: 'What about revisions?',
              a: 'Each tier includes revision rounds as listed. Heavy VFX includes unlimited revisions. Additional rounds on other tiers are $50 each.',
            },
          ].map((faq) => (
            <Reveal key={faq.q}>
              <div className="border-b border-neutral-900 py-6">
                <h3 className="text-white text-sm mb-2">{faq.q}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
