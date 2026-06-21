import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { PERSONAL } from '../data/constants'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">
            Built with React + TypeScript + Tailwind CSS
          </p>
          <p className="mt-1 text-sm text-muted">
            &copy; {new Date().getFullYear()} {PERSONAL.shortName}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-primary"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-primary"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
