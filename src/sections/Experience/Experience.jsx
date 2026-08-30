import { experience } from '../../constants/experience.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'
import ExperienceCard from './ExperienceCard.jsx'

export default function Experience() {
  const headingId = 'experience-heading'
  return (
    <Section id="experience" headingId={headingId}>
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle headingId={headingId} number={experience.number} title={experience.eyebrow} />
          <ol className="divide-y divide-white/10" role="list">
            {experience.items.map((item) => (
              <li key={item.role} className="py-4 first:pt-0 last:pb-0">
                <ExperienceCard item={item} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
