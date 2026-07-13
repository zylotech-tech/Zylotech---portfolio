import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Wrench, Globe2, Rocket, Award, X, ZoomIn } from 'lucide-react'

const TIMELINE = [
  {
    year: '2022',
    icon: Wrench,
    title: 'Where it started',
    description:
      'Working at a computer store handling laptop and desktop software and hardware, and enrolling in a Diploma in Website Design & Development.',
  },
  {
    year: '2023',
    icon: GraduationCap,
    title: 'Diploma earned',
    description:
      'Graduated with a Diploma in Website Design & Development from Chris Gate Computer College, Lagos, Nigeria — Pass.',
  },
  {
    year: '2024',
    icon: Globe2,
    title: 'International experience',
    description:
      'Completed an internship with a Swiss company, building hands-on expertise in networks and IT infrastructure.',
  },
  {
    year: '2026',
    icon: Rocket,
    title: 'Zylo Tech founded',
    description:
      'Turned years of hands-on experience into Zylo Tech — an agency built on one goal: client success.',
  },
]

export default function Credentials() {
  const [open, setOpen] = useState(false)

  return (
    <section id="credentials" className="relative py-24 md:py-32 border-t border-white/5 bg-deepblue/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase">The Journey</span>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl text-white leading-tight">
            Years of hands-on experience behind every project.
          </h2>
          <p className="mt-4 text-slate-150/65">
            From a computer store in Lagos to founding Zylo Tech — a path built on real,
            hands-on experience, not shortcuts.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-12 gap-14">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <ol className="relative border-l border-white/10 ml-3">
              {TIMELINE.map(({ year, icon: Icon, title, description }, i) => (
                <motion.li
                  key={year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="mb-10 ml-8 last:mb-0"
                >
                  <span className="absolute -left-[19px] flex items-center justify-center w-9 h-9 rounded-full bg-ink border border-cyan/40">
                    <Icon size={16} className="text-cyan" />
                  </span>
                  <span className="font-mono text-xs text-cyan tracking-widest">{year}</span>
                  <h3 className="mt-1 font-display font-semibold text-white text-lg">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-150/60 leading-relaxed max-w-md">
                    {description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Certificate badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-cyan/20 bg-ink/60 p-7 sm:p-8">
              <span className="inline-flex w-12 h-12 rounded-xl bg-deepblue border border-cyan/30 items-center justify-center">
                <Award size={22} className="text-cyan" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-xl text-white">
                Diploma in Website Design &amp; Development
              </h3>
              <p className="mt-1 text-sm text-slate-150/55">
                Chris Gate Computer College · Lagos, Nigeria · 2023
              </p>
              <p className="mt-4 text-sm text-slate-150/65 leading-relaxed">
                Awarded to Okpe Joseph for active participation and completion of the program,
                with a Pass result.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="group mt-6 w-full rounded-xl border border-white/10 overflow-hidden relative"
              >
                <img
                  src="/web-dev-diploma.jpg"
                  alt="Diploma in Website Design and Development, awarded to Okpe Joseph by Chris Gate Computer College, 2023"
                  className="w-full h-44 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute inset-0 bg-ink/40 group-hover:bg-ink/20 transition-colors flex items-center justify-center gap-2 text-white text-sm font-medium">
                  <ZoomIn size={16} />
                  View certificate
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute -top-11 right-0 text-white/70 hover:text-white p-2"
              >
                <X size={26} />
              </button>
              <img
                src="/web-dev-diploma.jpg"
                alt="Diploma in Website Design and Development, awarded to Okpe Joseph by Chris Gate Computer College, 2023"
                className="w-full rounded-xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}