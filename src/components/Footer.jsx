import { Mail, Phone } from 'lucide-react'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-lg bg-deepblue border border-cyan/30 flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan" />
              </span>
              <span className="font-display font-semibold text-lg text-white">
                Zylo<span className="text-cyan">Tech</span>
              </span>
            </div>
            <p className="mt-4 text-slate-150/55 max-w-sm leading-relaxed">
              Websites and AI solutions built for small businesses that want to look credible
              online and convert more customers.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-slate-150/40 uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ['About', '#about'],
                ['Services', '#services'],
                ['Projects', '#projects'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-slate-150/60 hover:text-cyan transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-slate-150/40 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:zylo.tech.ai@gmail.com"
                  className="flex items-center gap-2 text-slate-150/60 hover:text-cyan transition-colors break-all"
                >
                  <Mail size={15} className="shrink-0" />
                  zylo.tech.ai@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:09130193202"
                  className="flex items-center gap-2 text-slate-150/60 hover:text-cyan transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  0913 019 3202
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-150/35">
          <p>© {YEAR} Zylo Tech. Founded by Okpe Joseph Ameh. All rights reserved.</p>
          <p className="font-mono">Designed & built by Zylo Tech</p>
        </div>
      </div>
    </footer>
  )
}