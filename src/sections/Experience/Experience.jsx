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
          number={experience.number}
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />

        <ol className="mt-14 max-w-3xl space-y-12">
          {experience.items.map((item, index) => (
            <li
              key={item.role}
              className="grid grid-cols-[1.5rem_1fr] gap-x-6"
            >
              <span
                aria-hidden="true"
                className="flex flex-col items-center"
              >
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-400 ring-4 ring-sky-400/20" />
                {index < experience.items.length - 1 && (
                  <span className="mt-4 w-px flex-1 bg-surface-800" />
                )}
              </span>
              <ExperienceCard item={item} />
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
