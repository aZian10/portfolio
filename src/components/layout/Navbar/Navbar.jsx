import { useState, useCallback, useRef, useEffect } from 'react'
import Container from '../../common/Container/Container.jsx'
import { navigation } from '../../../constants/navigation.js'
import useActiveSection from '../../../hooks/useActiveSection.js'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const links = navigation.filter((item) => item.id !== 'hero')
  const sectionIds = navigation.map((item) => item.id)
  const activeId = useActiveSection(sectionIds)
  const menuButtonRef = useRef(null)
  const firstMenuLinkRef = useRef(null)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu()
      menuButtonRef.current?.focus()
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  useEffect(() => {
    if (isMobileMenuOpen) {
      firstMenuLinkRef.current?.focus()
    } else {
      menuButtonRef.current?.focus()
    }
  }, [isMobileMenuOpen])

  return (
    <header>
      <nav
        className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-surface-950/80 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <Container className="flex items-center justify-between py-3">
<a
              href="#hero"
              className="flex items-center gap-1.5 rounded text-[11px] font-semibold tracking-wide text-surface-50 transition-colors duration-300 motion-reduce:transition-none hover:text-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
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
                      className={`rounded text-[11px] transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none ${
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
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            onKeyDown={handleKeyDown}
            className="flex flex-col gap-1.5 rounded p-2 md:hidden focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
<span
                className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 motion-reduce:transition-none ${
                  isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 motion-reduce:transition-none ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded bg-surface-100 transition-all duration-300 motion-reduce:transition-none ${
                  isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
          </button>
        </Container>

<div
            id="mobile-menu"
            onKeyDown={handleKeyDown}
            className={`overflow-hidden transition-all duration-300 motion-reduce:transition-none md:hidden ${
              isMobileMenuOpen ? 'visible max-h-80' : 'invisible max-h-0'
            }`}
          >
          <ul className="flex flex-col gap-1 px-4 pb-4" role="list">
            {links.map(({ id, label }, index) => {
              const isActive = activeId === id

              return (
                <li key={id}>
<a
                        ref={index === 0 ? firstMenuLinkRef : undefined}
                        href={`#${id}`}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={closeMobileMenu}
                        tabIndex={isMobileMenuOpen ? 0 : -1}
                        className={`block rounded px-3 py-2 text-sm transition-colors duration-300 motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none ${
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
