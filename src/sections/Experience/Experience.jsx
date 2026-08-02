import { experience } from '../../constants/experience.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'
import ExperienceCard from './ExperienceCard.jsx'

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
          className="mx-auto text-center"
        />

        <ol className="mx-auto mt-12 max-w-3xl list-none space-y-6">
          {experience.items.map((item) => (
            <li key={item.role}>
              <ExperienceCard item={item} />
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
