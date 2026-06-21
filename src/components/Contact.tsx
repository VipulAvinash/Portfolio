import { useRef, useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import { PERSONAL } from '../data/constants'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to full-time roles and freelance projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <a
            href={`mailto:${PERSONAL.email}`}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:shadow-violet-600/40"
          >
            <FaEnvelope size={16} />
            {PERSONAL.email}
          </a>

          <div className="flex gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:border-violet-500/30 hover:text-primary"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:border-violet-500/30 hover:text-primary"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href={PERSONAL.resume}
              download={PERSONAL.resumeFileName}
              aria-label="Resume"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all hover:border-violet-500/30 hover:text-primary"
            >
              <FaFileAlt size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="glass space-y-4 rounded-xl p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-violet-500/50"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-violet-500/50"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-primary outline-none transition-colors focus:border-violet-500/50"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-violet-600/25"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
