import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  skills,
  skillCategories,
  categoryColors,
  categoryHeaderColors,
  type SkillCategory,
} from '../data/skills'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getSkillsByCategory = (category: SkillCategory) =>
    skills.filter((skill) => skill.category === category)

  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3
                className={`mb-4 text-sm font-semibold uppercase tracking-wider ${categoryHeaderColors[category]}`}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {getSkillsByCategory(category).map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: catIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-transform hover:scale-105 ${categoryColors[category]}`}
                    >
                      <Icon size={16} />
                      {skill.name}
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
