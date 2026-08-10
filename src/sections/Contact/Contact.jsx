import { contact } from '../../constants/contact.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'
import Button from '../../components/common/Button/Button.jsx'

export default function Contact() {
  const mailtoHref = `mailto:${contact.email}`
  const linkedinUrl = contact.socialLinks.find(
    (link) => link.name === 'LinkedIn'
  ).href

  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          number={contact.number}
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-14 max-w-3xl rounded-2xl border border-surface-800 bg-surface-900/40 p-8 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-surface-400">
            Email
          </p>
          <a
            href={mailtoHref}
            className="text-surface-50 mt-3 block break-all text-2xl font-semibold tracking-tight transition-colors duration-300 hover:text-sky-400 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 sm:text-3xl focus:outline-none"
          >
            {contact.email}
          </a>

          <div className="mt-8 flex flex-col gap-4 border-t border-surface-800 pt-8 sm:flex-row sm:gap-10">
            <p className="text-sm leading-relaxed text-surface-400 sm:text-base">
              <span className="font-medium text-surface-300">
                Availability:
              </span>{' '}
              {contact.availability}
            </p>
            <p className="text-sm leading-relaxed text-surface-400 sm:text-base">
              <span className="font-medium text-surface-300">Location:</span>{' '}
              {contact.location}
            </p>
          </div>

          <ul
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            role="list"
            aria-label="Social links"
          >
            {contact.socialLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-surface-400 underline-offset-4 transition-colors duration-300 hover:text-sky-400 hover:underline focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 focus:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-sky-400/60"
                  />
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <Button variant="primary" href={mailtoHref}>
              {contact.emailCta.label}
            </Button>
            <Button
              variant="secondary"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedinCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
