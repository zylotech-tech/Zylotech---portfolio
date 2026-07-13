import { motion } from 'framer-motion'
import { ArrowRight, Circle } from 'lucide-react'

const MOCKUPS = [
  { label: 'brew&co.com', bar: '#FF7A45', tint: 'from-coral/20', rows: [70, 45, 90] },
  { label: 'saborlatino.com', bar: '#00F5FF', tint: 'from-cyan/20', rows: [55, 80, 40] },
  { label: 'shopnova.store', bar: '#5FF6FF', tint: 'from-cyan-soft/20', rows: [85, 60, 75] },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 dot-grid">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-deepblue/60 px-4 py-1.5 font-mono text-xs text-cyan tracking-wide">
            <Circle size={7} className="fill-cyan text-cyan animate-pulse-slow" />
            now booking Q3 2026 projects
          </span>

          <h1 className="mt-6 font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-white">
            Websites that turn <span className="text-gradient">visitors into customers</span>, built for small businesses.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-150/70 max-w-xl leading-relaxed">
            Zylo Tech designs and builds fast, beautiful websites and AI-powered tools for
            restaurants, cafes, e-commerce stores, and local service businesses — so you look
            credible online and win more bookings, orders, and sales.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan text-ink font-semibold px-7 py-3.5 hover:shadow-glow transition-shadow"
            >
              Get a free website audit
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white font-semibold px-7 py-3.5 hover:border-cyan/50 hover:text-cyan transition-colors"
            >
              See our work
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-slate-150/50">
            <span>Web Development</span>
            <span className="w-1 h-1 rounded-full bg-slate-150/30" />
            <span>AI Solutions</span>
            <span className="w-1 h-1 rounded-full bg-slate-150/30" />
            <span>Website Management</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative h-[420px] sm:h-[460px] hidden sm:block"
        >
          {MOCKUPS.map((m, i) => (
            <div
              key={m.label}
              className={`absolute w-[78%] sm:w-[65%] rounded-xl border border-white/10 bg-deepblue/80 backdrop-blur-sm shadow-2xl overflow-hidden animate-float`}
              style={{
                top: `${i * 70}px`,
                left: `${i * 12}%`,
                zIndex: MOCKUPS.length - i,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-white/10 bg-ink/40">
                <span className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-soft/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-2 font-mono text-[11px] text-slate-150/50">{m.label}</span>
              </div>
              <div className={`p-4 space-y-2.5 bg-gradient-to-br ${m.tint} to-transparent`}>
                {m.rows.map((w, ri) => (
                  <div
                    key={ri}
                    className="h-3 rounded-full bg-white/10"
                    style={{ width: `${w}%` }}
                  />
                ))}
                <div className="mt-3 h-16 rounded-lg bg-white/5 border border-white/10" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}