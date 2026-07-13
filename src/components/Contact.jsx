import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Connect this to your email service (e.g. Formspree, EmailJS, or your own backend).
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Get In Touch</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Let's build something your customers will trust.
          </h2>
          <p className="mt-4 text-slate-150/65 leading-relaxed max-w-md">
            Tell us about your business and what you need. We typically reply within one
            business day with next steps.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:zylo.tech.ai@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-deepblue/40 p-4 hover:border-cyan/30 transition-colors"
            >
              <span className="w-11 h-11 rounded-lg bg-ink flex items-center justify-center shrink-0">
                <Mail size={19} className="text-cyan" />
              </span>
              <div>
                <p className="text-xs text-slate-150/50 font-mono">Email</p>
                <p className="text-white font-medium break-all">zylo.tech.ai@gmail.com</p>
              </div>
            </a>
            <a
              href="tel:09130193202"
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-deepblue/40 p-4 hover:border-cyan/30 transition-colors"
            >
              <span className="w-11 h-11 rounded-lg bg-ink flex items-center justify-center shrink-0">
                <Phone size={19} className="text-cyan" />
              </span>
              <div>
                <p className="text-xs text-slate-150/50 font-mono">Phone</p>
                <p className="text-white font-medium">0913 019 3202</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          {submitted ? (
            <div className="h-full min-h-[400px] rounded-2xl border border-cyan/30 bg-deepblue/30 flex flex-col items-center justify-center text-center p-10">
              <CheckCircle2 size={44} className="text-cyan mb-4" />
              <h3 className="font-display font-semibold text-xl text-white">Message sent</h3>
              <p className="mt-2 text-slate-150/65 max-w-sm">
                Thanks for reaching out — we'll get back to you at {form.email || 'your email'}{' '}
                shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ name: '', email: '', business: '', message: '' })
                }}
                className="mt-6 text-sm font-medium text-cyan hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-deepblue/30 p-7 sm:p-9 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-150/70 mb-2">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-lg bg-ink border border-white/10 px-4 py-3 text-white placeholder:text-slate-150/30 focus:border-cyan/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-150/70 mb-2">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@business.com"
                    className="w-full rounded-lg bg-ink border border-white/10 px-4 py-3 text-white placeholder:text-slate-150/30 focus:border-cyan/50 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-slate-150/70 mb-2">
                  Business name
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  value={form.business}
                  onChange={handleChange}
                  placeholder="e.g. Sabor Latino Restaurant"
                  className="w-full rounded-lg bg-ink border border-white/10 px-4 py-3 text-white placeholder:text-slate-150/30 focus:border-cyan/50 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-150/70 mb-2">
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business and your goals..."
                  className="w-full rounded-lg bg-ink border border-white/10 px-4 py-3 text-white placeholder:text-slate-150/30 focus:border-cyan/50 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cyan text-ink font-semibold px-7 py-3.5 hover:shadow-glow transition-shadow"
              >
                Send message
                <Send size={17} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}