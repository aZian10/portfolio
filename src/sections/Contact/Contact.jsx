import { contact } from '../../constants/contact.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Contact() {
  const headingId = 'contact-heading'

  return (
    <Section id="contact" headingId={headingId}>
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle headingId={headingId} number={contact.number} title={contact.eyebrow} />
          <div className="space-y-3">
            <h3 className="max-w-md text-base font-medium text-surface-200">
              {contact.title}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-surface-400">
              {contact.description}
            </p>
            <address className="flex flex-wrap gap-5 not-italic">
              {contact.socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 py-2 inline-flex items-center gap-1 text-sm font-medium text-sky-400 transition-colors duration-200 motion-reduce:transition-none hover:text-sky-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
                >
                  {name}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </address>
          </div>
        </div>
      </Container>
    </Section>
  )
}
