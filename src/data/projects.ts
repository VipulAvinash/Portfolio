export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  tags: string[]
  github: string
  live?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'fatechat',
    title: 'FateChat',
    description:
      'Real-time chat application with instant messaging, online user detection, notifications, and file sharing powered by Socket.IO.',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    tags: ['Full-Stack', 'Real-Time'],
    github: 'https://github.com/VipulAvinash/FateChat',
    live: 'https://fatechat.onrender.com/',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    description:
      'Full-stack academic platform with role-based dashboards for admins, faculty, and students — CRUD operations, document uploads, and fee management.',
    stack: ['React', 'Express', 'MongoDB', 'Cloudinary'],
    tags: ['MERN', 'RBAC'],
    github: 'https://github.com/VipulAvinash/Student-Management',
    live: 'https://student-management-vip.netlify.app/login',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    description:
      'Premium dark-themed shop with JWT authentication, real-time cart sync, interactive shipping forms, and transactional checkout workflows.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT'],
    tags: ['Full-Stack', 'Payments'],
    github: 'https://github.com/VipulAvinash/E-Commerce-Project',
    live: 'https://dashcartt.netlify.app/',
  },
  {
    id: 'deal-matrix',
    title: 'AI Product Aggregator',
    description:
      'Multi-LLM product search engine querying Grok, Gemini, and OpenRouter to aggregate and compare results from Amazon, Flipkart, Croma, and more.',
    stack: ['React', 'Node.js', 'Redis', 'MongoDB', 'AI APIs'],
    tags: ['AI', 'MERN', 'Redis'],
    github: 'https://github.com/VipulAvinash/DealMatrix',
    featured: true,
  },
]
