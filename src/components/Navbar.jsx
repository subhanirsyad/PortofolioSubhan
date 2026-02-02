import { useEffect, useMemo, useState } from 'react'
import Container from './Container.jsx'
import { profile } from '../data/profile.js'
import { FaBars, FaXmark } from 'react-icons/fa6'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#expertise', label: 'Keahlian' },
  { href: '#projects', label: 'Projek' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const brandParts = useMemo(() => {
    const [a, b] = profile.brand.split('.')
    return { a, b }
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      id="navbar"
      className={[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass-nav shadow-lg py-2' : 'py-4',
      ].join(' ')}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          {brandParts.a}
          <span className="text-primary">.{brandParts.b}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-primary hover:bg-blue-600 rounded-full text-sm font-semibold transition shadow-lg shadow-blue-500/30"
          >
            Kontak
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-2xl focus:outline-none p-2 rounded-lg hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </Container>

      {/* Mobile dropdown */}
      <div
        className={[
          'md:hidden absolute top-full left-0 w-full border-b border-white/10 shadow-2xl',
          open ? 'block' : 'hidden',
        ].join(' ')}
      >
        <div className="bg-darker/95 backdrop-blur-xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-white/80 hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="text-primary font-semibold">
            Kontak Saya
          </a>
        </div>
      </div>
    </nav>
  )
}
