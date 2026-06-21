import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiLocationMarker, HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import { PERSONAL, STATS } from '../data/constants'
import profileImg from '../assets/profile.jpg'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4 text-lg leading-relaxed text-muted">
              I&apos;m a passionate{' '}
              <span className="font-medium text-primary">Full-Stack Developer</span> specializing
              in the MERN stack, with a strong foundation in building scalable, user-centric web
              applications.
            </p>
            <p className="mb-4 text-lg leading-relaxed text-muted">
              Currently interning at{' '}
              <span className="font-medium text-violet-400">Arah Infotech</span>, I work on
              production-grade MERN applications while exploring AI integrations using Gemini,
              Grok, and OpenRouter APIs.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted">
              I graduated with a B.Tech in Computer Science from Anurag University and love turning
              complex problems into elegant, performant solutions.
            </p>

            <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted">
              <span className="flex items-center gap-2">
                <HiLocationMarker className="text-violet-400" />
                {PERSONAL.location}
              </span>
              <span className="flex items-center gap-2">
                <HiAcademicCap className="text-violet-400" />
                Anurag University
              </span>
            </div>

            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
              <HiBriefcase className="text-violet-400" />
              <span className="text-primary">{PERSONAL.currentRole}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-50 blur" />
              <div className="relative flex h-64 w-64 overflow-hidden rounded-2xl bg-card sm:h-72 sm:w-72">
                <img
                  src={profileImg}
                  alt={PERSONAL.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-gradient sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
