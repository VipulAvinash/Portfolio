import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { NAV_LINKS, PERSONAL } from '../data/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-0.5 text-xl font-bold tracking-tight text-primary"
        >
          {PERSONAL.shortName}
          <span className="text-accent">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-all hover:border-violet-500/30 hover:text-primary"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-all hover:border-violet-500/30 hover:text-primary"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="glass flex h-10 w-10 items-center justify-center rounded-lg text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 flex gap-3 px-4">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-primary"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-primary"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
