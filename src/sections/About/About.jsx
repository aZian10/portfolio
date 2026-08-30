import { about } from '../../constants/about.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function About() {
  const headingId = 'about-heading'
  return (
    <Section id="about" headingId={headingId}>
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle headingId={headingId} number={about.number} title={about.eyebrow} />
          <div className="space-y-3">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-md text-[12px] leading-relaxed text-surface-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
