import { motion } from 'framer-motion'
import { Gauge, ShieldCheck, MessageCircleHeart, Wallet } from 'lucide-react'

const REASONS = [
  {
    icon: Gauge,
    title: 'Built for speed',
    description: 'Every site is optimized to load fast, because slow websites lose customers before they even see your menu or products.',
  },
  {
    icon: Wallet,
    title: 'Priced for small business',
    description: 'Straightforward pricing with no bloated agency overhead — you get senior-level work without the enterprise price tag.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Direct access to your builder',
    description: 'You work directly with Joseph, not a rotating cast of account managers. Clear communication, every step of the way.',
  },
  {
    icon: ShieldCheck,
    title: 'Support after launch',
    description: 'Websites need care after they go live. Our management plans keep your site secure, updated, and running smoothly.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 border-t border-white/5 bg-deepblue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">Why Zylo Tech</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            The difference is in the details.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-ink/50 p-6"
            >
              <Icon size={22} className="text-cyan mb-4" />
              <h3 className="font-display font-semibold text-white text-lg">{title}</h3>
              <p className="mt-2.5 text-sm text-slate-150/60 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}