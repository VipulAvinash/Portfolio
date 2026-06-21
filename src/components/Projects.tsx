import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A selection of full-stack and AI-powered applications I&apos;ve built.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass group relative flex flex-col rounded-xl p-6 transition-shadow hover:shadow-lg hover:shadow-violet-600/10"
            >
              {project.featured && (
                <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </span>
              )}

              <div className="mb-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-violet-600/20 hover:text-primary"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-muted transition-all hover:bg-violet-600/20 hover:text-primary"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
