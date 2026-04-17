import { useState } from 'react'
import { Reveal } from '../components/Layout'

const EMAIL = 'jdyvfx@gmail.com'

const SERVICE_OPTIONS = [
  { value: 'Color Grading', label: 'Color Grading', desc: 'Corrections, cinematic looks, shot matching' },
  { value: 'VFX', label: 'VFX', desc: 'Compositing, CGI, clean-up, tracking' },
  { value: 'Editing', label: 'Editing', desc: 'Full post-production edit, pacing, cuts' },
  { value: 'Full Post-Production', label: 'Full Post', desc: 'Edit + grade + VFX, start to finish' },
  { value: 'Direction', label: 'Direction', desc: 'Creative direction, on-set supervision' },
  { value: 'Other', label: 'Other', desc: 'Something else entirely' },
]

export default function Book() {
  const [form, setForm] = useState({ name: '', email: '', type: '', details: '' })
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))
  const selectType = (value) => setForm((p) => ({ ...p, type: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking — ${form.type || 'Project'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.details}`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClass = 'w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3.5 text-white text-base md:text-sm placeholder-neutral-600 focus:border-neutral-600 focus:outline-none focus:ring-1 focus:ring-neutral-700 transition-all'

  return (
    <>
      {/* Custom header instead of PageHead — split layout */}
      <div className="pt-28 md:pt-36 pb-6 md:pb-10 px-5 md:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-3">Contact</p>
            <h1 className="font-serif text-white text-3xl md:text-6xl mb-4">Let's work together.</h1>
          </Reveal>
        </div>
      </div>

      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">

          {/* Left — info */}
          <Reveal>
            <div className="md:sticky md:top-28">
              <p className="text-neutral-400 text-[15px] leading-relaxed mb-10">
                Tell me about your project and I'll get back to you within 24 hours.
                The more detail you share, the faster we can get moving.
              </p>

              <div className="space-y-6">
                <div className="border-t border-neutral-900 pt-6">
                  <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-2">Based in</p>
                  <p className="text-white text-sm">Los Angeles, CA</p>
                </div>
                <div className="border-t border-neutral-900 pt-6">
                  <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-2">Email</p>
                  <button onClick={copyEmail} className="text-white text-sm hover:text-neutral-300 transition-colors">
                    {copied ? 'Copied!' : EMAIL}
                  </button>
                </div>
                <div className="border-t border-neutral-900 pt-6">
                  <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-2">Socials</p>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/jdyvfx" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-neutral-300 transition-colors">@jdyvfx</a>
                    <a href="https://instagram.com/finallyoverxyz" target="_blank" rel="noopener noreferrer" className="text-neutral-500 text-sm hover:text-white transition-colors">@finallyoverxyz</a>
                  </div>
                </div>
                <div className="border-t border-neutral-900 pt-6">
                  <p className="text-neutral-600 text-[10px] tracking-[0.4em] uppercase mb-2">Response time</p>
                  <p className="text-white text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — form */}
          {sent ? (
            <Reveal>
              <div className="border border-neutral-800 rounded-xl p-10 md:p-14 text-center bg-neutral-950/50">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p className="text-white font-serif text-2xl mb-2">Request sent.</p>
                <p className="text-neutral-500 text-sm mb-6">I'll be in touch soon.</p>
                <p className="text-neutral-600 text-xs">
                  Didn't open your email app?{' '}
                  <button onClick={copyEmail} className="text-white underline underline-offset-4 hover:text-neutral-300 transition-colors">
                    {copied ? 'Copied!' : 'Copy my email'}
                  </button>
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="border border-neutral-800 rounded-xl p-6 md:p-10 bg-neutral-950/50">

                {/* Service type — card select */}
                <div className="mb-8">
                  <label className="block text-neutral-500 text-xs tracking-[0.2em] uppercase mb-4">What do you need?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => selectType(opt.value)}
                        className={`text-left p-3.5 rounded-lg border transition-all duration-200 ${
                          form.type === opt.value
                            ? 'border-white/30 bg-white/5'
                            : 'border-neutral-800 bg-transparent hover:border-neutral-700'
                        }`}
                      >
                        <span className={`block text-sm mb-0.5 ${form.type === opt.value ? 'text-white' : 'text-neutral-400'}`}>
                          {opt.label}
                        </span>
                        <span className="block text-[11px] text-neutral-600 leading-snug">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Name</label>
                    <input type="text" required value={form.name} onChange={set('name')} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Email</label>
                    <input type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" className={inputClass} />
                  </div>
                </div>

                {/* Project details */}
                <div className="mb-8">
                  <label className="block text-neutral-500 text-xs tracking-[0.2em] uppercase mb-2">Project details</label>
                  <textarea
                    required
                    rows={5}
                    value={form.details}
                    onChange={set('details')}
                    placeholder="What's the project? What's the vision? Any references, timeline, or specific needs..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-4 rounded-lg text-[11px] tracking-[0.3em] uppercase font-medium hover:bg-neutral-200 transition-all duration-300"
                >
                  Send Request
                </button>

                <p className="text-neutral-700 text-xs text-center mt-4">
                  Or email directly at {EMAIL}
                </p>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
