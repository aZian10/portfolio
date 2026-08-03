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
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          className="mx-auto text-center"
        />

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-surface-800 bg-surface-900/50 p-8 text-center sm:p-10">
          <p className="text-surface-400 text-sm font-medium uppercase tracking-wider">
            Email
          </p>
          <a
            href={mailtoHref}
            className="text-surface-50 mt-2 inline-block break-all text-xl font-semibold transition-colors duration-300 hover:text-sky-400 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 sm:text-2xl focus:outline-none"
          >
            {contact.email}
          </a>

          <div className="mt-6 space-y-2">
            <p className="text-surface-400">
              <span className="font-medium text-surface-300">Availability:</span>{' '}
              {contact.availability}
            </p>
            <p className="text-surface-400">
              <span className="font-medium text-surface-300">Location:</span>{' '}
              {contact.location}
            </p>
          </div>

          <ul
            className="mt-6 flex flex-wrap justify-center gap-4"
            role="list"
            aria-label="Social links"
          >
            {contact.socialLinks.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-surface-400 underline-offset-4 transition-colors duration-300 hover:text-sky-400 hover:underline focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900 focus:outline-none"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
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