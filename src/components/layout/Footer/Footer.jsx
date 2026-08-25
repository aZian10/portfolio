import Container from '../../common/Container/Container.jsx'
import { footer } from '../../../constants/footer.js'
import { socials } from '../../../constants/socials.js'

const linkClass =
  'p-2 -m-2 rounded text-[9px] font-medium text-surface-400 underline-offset-4 transition-colors duration-300 hover:text-sky-400 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-950">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-[9px] text-surface-400">{footer.copyright}</p>
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
      </Container>
    </footer>
  )
}
