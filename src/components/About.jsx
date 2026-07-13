import { motion } from 'framer-motion'
import { Target, Rocket, Users } from 'lucide-react'

const STATS = [
  { icon: Rocket, value: 'Fast', label: 'Launch turnaround' },
  { icon: Target, value: 'Conversion-first', label: 'Design philosophy' },
  { icon: Users, value: 'Small business', label: 'Our specialty' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">About Us</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Built by a founder who understands what small businesses actually need.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 space-y-5 text-slate-150/75 text-base sm:text-lg leading-relaxed"
        >
          <p>
            Zylo Tech is a digital agency founded by <span className="text-white font-medium">Okpe Joseph Ameh</span>,
            built around a simple belief: a small business's website should work as hard as the
            business owner does. Too many restaurants, cafes, and local service businesses are
            stuck with slow, outdated, or unfinished websites that quietly cost them customers
            every single day.
          </p>
          <p>
            Joseph leads every Zylo Tech engagement personally, combining hands-on web
            development experience with a growing focus on practical AI solutions — from smart
            booking assistants to automated customer support — that help small teams compete
            with much bigger budgets. The goal is never just "a website." It's a fast, credible,
            conversion-ready digital front door for your business.
          </p>
          <p>
            Since founding Zylo Tech, Joseph has worked with restaurant owners, cafe operators,
            e-commerce sellers, and local service providers to design and manage websites that
            are easy to update, quick to load, and built to turn casual visitors into paying
            customers — with ongoing management so the site keeps working long after launch.
          </p>

          <div className="!mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-deepblue/40 p-5 hover:border-cyan/30 transition-colors"
              >
                <Icon size={20} className="text-cyan mb-3" />
                <p className="font-display font-semibold text-white text-lg">{value}</p>
                <p className="text-sm text-slate-150/55 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}