import { motion } from 'framer-motion'
import { UtensilsCrossed, Coffee, ShoppingBag, Wrench } from 'lucide-react'

const PROJECTS = [
  {
    icon: UtensilsCrossed,
    domain: 'saborlatino.com',
    category: 'Restaurant',
    title: 'Sabor Latino',
    description: 'Online reservations, digital menu, and gallery for a family-owned restaurant.',
    accent: 'coral',
  },
  {
    icon: Coffee,
    domain: 'brew&co.com',
    category: 'Cafe',
    title: 'Brew & Co.',
    description: 'A warm, story-driven site with mobile ordering for a neighborhood coffee shop.',
    accent: 'cyan',
  },
  {
    icon: ShoppingBag,
    domain: 'shopnova.store',
    category: 'E-commerce',
    title: 'Shop Nova',
    description: 'A conversion-optimized storefront with fast checkout for a growing online retailer.',
    accent: 'cyan',
  },
  {
    icon: Wrench,
    domain: 'primeservices.pro',
    category: 'Local Service',
    title: 'Prime Services',
    description: 'A lead-generating site with booking and quote requests for a local service provider.',
    accent: 'coral',
  },
]

const ACCENT_MAP = {
  cyan: { text: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/30', dot: 'bg-cyan' },
  coral: { text: 'text-coral', bg: 'bg-coral/10', border: 'border-coral/30', dot: 'bg-coral' },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Our Work</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Real businesses, real results.
          </h2>
          <p className="mt-4 text-slate-150/65">
            A sample of the kind of sites we build — concepts shown here to illustrate our style
            across restaurants, cafes, and e-commerce.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {PROJECTS.map(({ icon: Icon, domain, category, title, description, accent }, i) => {
            const a = ACCENT_MAP[accent]
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-deepblue/30 overflow-hidden hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-ink/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-coral/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-soft/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 font-mono text-[11px] text-slate-150/45">{domain}</span>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <span className={`inline-flex w-12 h-12 rounded-xl ${a.bg} border ${a.border} items-center justify-center`}>
                      <Icon size={22} className={a.text} />
                    </span>
                    <span className={`font-mono text-[11px] tracking-wide ${a.text} border ${a.border} rounded-full px-3 py-1`}>
                      {category}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display font-semibold text-xl text-white">{title}</h3>
                  <p className="mt-2.5 text-slate-150/65 leading-relaxed">{description}</p>

                  <div className="mt-6 space-y-2">
                    <div className="h-2.5 rounded-full bg-white/10 w-4/5" />
                    <div className="h-2.5 rounded-full bg-white/10 w-3/5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}