import { useState, useCallback } from 'react'
import { navigation } from '../../../constants/navigation.js'
import useActiveSection from '../../../hooks/useActiveSection.js'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const sectionIds = navigation.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full border-b border-surface-800/70 bg-surface-950/80 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <a
          href="#hero"
          className="text-lg font-bold text-surface-50 transition-colors duration-300 hover:text-sky-400"
        >
          Elian Rivera
        </a>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navigation.map(({ id, label }) => {
            const isActive = activeId === id

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? 'font-semibold text-sky-400'
                      : 'font-normal text-surface-400 hover:text-surface-50'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-sky-400" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="flex flex-col gap-1.5 p-2 md:hidden"
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
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4" role="list">
          {navigation.map(({ id, label }) => {
            const isActive = activeId === id

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMobileMenu}
                  className={`block rounded px-3 py-2 text-sm transition-colors duration-300 ${
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
  )
}
