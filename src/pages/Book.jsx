import { useState } from 'react'
import { Reveal, PageHead } from '../components/Layout'

export default function Book() {
  const [form, setForm] = useState({ name: '', email: '', type: '', budget: '', details: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking — ${form.type || 'Project'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\nBudget: ${form.budget}\n\n${form.details}`
    )
    window.location.href = `mailto:jdyvfx@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass = 'w-full bg-transparent border-b border-neutral-800 py-3 text-white text-base md:text-sm placeholder-neutral-700 focus:border-neutral-500 focus:outline-none transition-colors'

  return (
    <>
      <PageHead
        label="Contact"
        title="Book a Session"
        subtitle="Tell me about your project and I'll get back to you within 24 hours."
      />

      <section className="pb-20 md:pb-32 px-5 md:px-10">
        <div className="max-w-xl mx-auto">
          {sent ? (
            <Reveal>
              <div className="text-center py-20">
                <p className="text-white font-serif text-2xl mb-2">Sent.</p>
                <p className="text-neutral-500 text-sm">I'll be in touch.</p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <input type="text" required placeholder="Name" value={form.name} onChange={set('name')} className={inputClass} />
                  <input type="email" required placeholder="Email" value={form.email} onChange={set('email')} className={inputClass} />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <select required value={form.type} onChange={set('type')} className={`${inputClass} appearance-none`}>
                    <option value="" className="bg-black">What do you need?</option>
                    <option value="Color Grade" className="bg-black">Color Grade</option>
                    <option value="Color Grade +" className="bg-black">Color Grade +</option>
                    <option value="Light VFX" className="bg-black">Light VFX</option>
                    <option value="Heavy VFX" className="bg-black">Heavy VFX</option>
                    <option value="Editing" className="bg-black">Editing</option>
                    <option value="Music Video Package" className="bg-black">Music Video Package</option>
                    <option value="Full Package" className="bg-black">Full Package</option>
                    <option value="Direction" className="bg-black">Direction</option>
                  </select>

                  <select value={form.budget} onChange={set('budget')} className={`${inputClass} appearance-none`}>
                    <option value="" className="bg-black">Budget range</option>
                    <option value="Under $300" className="bg-black">Under $300</option>
                    <option value="$300 - $500" className="bg-black">$300 - $500</option>
                    <option value="$500 - $1000" className="bg-black">$500 - $1,000</option>
                    <option value="$1000+" className="bg-black">$1,000+</option>
                  </select>
                </div>

                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the project — vision, timeline, references..."
                  value={form.details}
                  onChange={set('details')}
                  className={`${inputClass} resize-none`}
                />

                <button
                  type="submit"
                  className="w-full border border-white/20 text-white py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                >
                  Send Request
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
