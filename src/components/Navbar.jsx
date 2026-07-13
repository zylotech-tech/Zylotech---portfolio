import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#credentials' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const handleLinkClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); handleLinkClick('#top') }}>
          <span className="w-9 h-9 rounded-lg bg-deepblue border border-cyan/30 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan shadow-glow" />
          </span>
          <span className="font-display font-semibold text-lg tracking-tight text-white">
            Zylo<span className="text-cyan">Tech</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
              className="text-sm font-medium text-slate-150/80 hover:text-cyan transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('#contact')
          }}
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-cyan text-ink font-semibold text-sm px-5 py-2.5 hover:shadow-glow transition-shadow"
        >
          Start a project
          <ArrowUpRight size={16} />
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-ink/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleLinkClick(link.href)
                  }}
                  className="py-3.5 text-base font-medium text-slate-150/90 border-b border-white/5 hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('#contact')
                }}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-cyan text-ink font-semibold text-sm px-5 py-3.5"
              >
                Start a project
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}