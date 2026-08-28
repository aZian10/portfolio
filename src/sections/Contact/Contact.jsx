import { contact } from '../../constants/contact.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Contact() {
  const mailtoHref = `mailto:${contact.email}`

  return (
    <Section id="contact">
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle number={contact.number} title={contact.eyebrow} />
          <div>
            <p className="max-w-md text-[12px] leading-relaxed text-surface-400">
              {contact.title}
            </p>
            <a
              href={mailtoHref}
              className="mt-1 py-2 inline-flex items-center gap-1 text-[12px] font-medium text-sky-400 transition-colors duration-200 motion-reduce:transition-none hover:text-sky-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
            >
              {contact.email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
