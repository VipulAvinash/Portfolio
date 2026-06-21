import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiRedis,
  SiMongoose,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
} from 'react-icons/si'
import { RiOpenaiFill } from 'react-icons/ri'

export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'AI/ML Tools'
  | 'DevOps/Tools'

export interface Skill {
  name: string
  icon: IconType
  category: SkillCategory
}

export const categoryColors: Record<SkillCategory, string> = {
  Frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Backend: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Database: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'AI/ML Tools': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'DevOps/Tools': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
}

export const categoryHeaderColors: Record<SkillCategory, string> = {
  Frontend: 'text-blue-400',
  Backend: 'text-emerald-400',
  Database: 'text-amber-400',
  'AI/ML Tools': 'text-violet-400',
  'DevOps/Tools': 'text-rose-400',
}

export const skills: Skill[] = [
  { name: 'React', icon: SiReact, category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Redux Toolkit', icon: SiRedux, category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: SiCss, category: 'Frontend' },

  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, category: 'Backend' },
  { name: 'Python', icon: SiPython, category: 'Backend' },
  { name: 'REST APIs', icon: SiPostman, category: 'Backend' },

  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Redis', icon: SiRedis, category: 'Database' },
  { name: 'Mongoose', icon: SiMongoose, category: 'Database' },

  { name: 'Gemini API', icon: SiGooglecloud, category: 'AI/ML Tools' },
  { name: 'xAI Grok', icon: RiOpenaiFill, category: 'AI/ML Tools' },
  { name: 'OpenRouter', icon: RiOpenaiFill, category: 'AI/ML Tools' },
  { name: 'LangChain', icon: RiOpenaiFill, category: 'AI/ML Tools' },

  { name: 'Git', icon: SiGit, category: 'DevOps/Tools' },
  { name: 'GitHub', icon: SiGithub, category: 'DevOps/Tools' },
  { name: 'Postman', icon: SiPostman, category: 'DevOps/Tools' },
  { name: 'JWT', icon: SiJsonwebtokens, category: 'DevOps/Tools' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps/Tools' },
]

export const skillCategories: SkillCategory[] = [
  'Frontend',
  'Backend',
  'Database',
  'AI/ML Tools',
  'DevOps/Tools',
]
