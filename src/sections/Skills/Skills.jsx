import { skills } from '../../constants/skills.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle number={skills.number} title={skills.eyebrow} />
          <ul
            className="flex flex-wrap gap-x-8 gap-y-3"
            role="list"
            aria-label="Technologies"
          >
            {skills.items.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-2 text-[11px] text-surface-300"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-sky-400/70"
                />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
