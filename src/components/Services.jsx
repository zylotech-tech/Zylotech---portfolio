import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Settings2, Briefcase, ArrowUpRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Custom, fully responsive websites built with modern frameworks — fast-loading, mobile-perfect, and designed to convert visitors into customers.',
    points: ['Custom design & build', 'Mobile & tablet optimized', 'SEO-ready foundation'],
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    description:
      'Practical AI tools that save you time — booking assistants, customer-support chatbots, and automation that helps a small team punch above its weight.',
    points: ['AI chat & booking assistants', 'Workflow automation', 'Smart customer support'],
  },
  {
    icon: Settings2,
    title: 'Website Management',
    description:
      'Ongoing care after launch — updates, hosting, security, and content changes handled for you, so your site stays fast and current without the hassle.',
    points: ['Hosting & security', 'Content updates', 'Performance monitoring'],
  },
  {
    icon: Briefcase,
    title: 'Professional & Broker Websites',
    description:
      'Polished, trust-building sites for brokers, consultants, and professional service providers — built to establish credibility and generate qualified leads.',
    points: ['Lead-capture focused', 'Credibility-first design', 'Client portal ready'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 border-t border-white/5 bg-deepblue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">What We Do</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Everything your business needs to look credible online.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, points }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-ink/60 p-7 sm:p-8 hover:border-cyan/30 hover:bg-deepblue/40 transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex w-12 h-12 rounded-xl bg-deepblue border border-cyan/20 items-center justify-center">
                  <Icon size={22} className="text-cyan" />
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-slate-150/25 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="mt-6 font-display font-semibold text-xl text-white">{title}</h3>
              <p className="mt-3 text-slate-150/65 leading-relaxed">{description}</p>
              <ul className="mt-5 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-150/55">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan/70 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}