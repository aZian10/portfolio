import Container from '../../common/Container/Container.jsx'
import { footer } from '../../../constants/footer.js'
import { navigation } from '../../../constants/navigation.js'
import { socials } from '../../../constants/socials.js'

const linkClass =
  'text-sm font-medium text-surface-400 underline-offset-4 transition-colors duration-300 hover:text-sky-400 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 focus:outline-none'

export default function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950">
      <Container className="flex flex-col items-center gap-10 py-16 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
        <div className="max-w-sm">
          <p className="text-lg font-bold text-surface-50">{footer.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-surface-500">
            {footer.tagline}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3" role="list">
            {navigation.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-6 lg:items-end">
          <ul className="flex gap-5" role="list" aria-label="Social links">
            {socials.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-surface-500">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}