import { useState, useCallback } from 'react'
import { navigation } from '../../../constants/navigation.js'
import useActiveSection from '../../../hooks/useActiveSection.js'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = navigation.filter((item) => item.id !== 'hero')
  const sectionIds = navigation.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <header>
      <nav
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-surface-950/80 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="flex items-center gap-1.5 rounded text-[11px] font-semibold tracking-wide text-surface-50 transition-colors duration-300 hover:text-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
          >
            ED
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-sky-400"
            />
          </a>

          <ul className="hidden items-center gap-6 md:flex" role="list">
            {links.map(({ id, label }) => {
              const isActive = activeId === id

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded text-[11px] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none ${
                      isActive
                        ? 'font-semibold text-sky-400'
                        : 'font-normal text-surface-400 hover:text-surface-50'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex flex-col gap-1.5 rounded p-2 md:hidden focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'visible max-h-80' : 'invisible max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 pb-4" role="list">
            {links.map(({ id, label }) => {
              const isActive = activeId === id

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeMobileMenu}
                    className={`block rounded px-3 py-2 text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none ${
                      isActive
                        ? 'bg-surface-800 font-semibold text-sky-400'
                        : 'font-normal text-surface-400 hover:bg-surface-800/50 hover:text-surface-50'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
