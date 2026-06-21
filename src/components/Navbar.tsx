import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { NAV_LINKS, PERSONAL } from '../data/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <button
            type="button"
            onClick={() => handleNavClick('#hero')}
            className="text-lg font-semibold tracking-tight text-white"
          >
            {PERSONAL.shortName}
            <span className="text-codenest-accent">.</span>
          </button>

          <nav className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-base uppercase text-white transition-colors hover:text-codenest-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-codenest-accent/40 hover:text-codenest-accent"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-codenest-accent/40 hover:text-codenest-accent"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-codenest-bg md:hidden">
          <div className="flex flex-1 flex-col items-center justify-center gap-10 pt-16">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-2xl uppercase text-white transition-colors hover:text-codenest-accent"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex gap-4">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-codenest-accent"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-codenest-accent"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
