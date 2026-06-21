import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { PERSONAL, TYPEWRITER_ROLES } from '../data/constants'

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = TYPEWRITER_ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1),
          )
        },
        isDeleting ? 40 : 80,
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
    >
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 animate-float rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-float-delayed rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl"
        >
          {PERSONAL.name.split(' ').slice(1).join(' ')}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex min-h-[2.5rem] items-center justify-center text-xl font-semibold sm:text-2xl md:text-3xl"
        >
          <span className="text-gradient">{displayText}</span>
          <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-violet-500 sm:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-10 max-w-xl text-base text-muted sm:text-lg"
        >
          {PERSONAL.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={scrollToProjects}
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-violet-600/40 sm:w-auto"
          >
            View Projects
          </button>
          <a
            href={PERSONAL.resume}
            download={PERSONAL.resumeFileName}
            className="glass w-full rounded-full px-8 py-3 text-sm font-semibold text-primary transition-all hover:border-violet-500/30 sm:w-auto"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} className="animate-bounce" />
      </motion.button>
    </section>
  )
}

export default Hero
