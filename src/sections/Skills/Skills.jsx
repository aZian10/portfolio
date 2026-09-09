import { skills } from '../../constants/skills.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Skills() {
  const headingId = 'skills-heading'
  return (
    <Section id="skills" headingId={headingId}>
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle headingId={headingId} number={skills.number} title={skills.eyebrow} />
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-[12px] font-medium text-surface-200">{skills.title}</h3>
              <p className="max-w-md text-[12px] leading-relaxed text-surface-400">
                {skills.description}
              </p>
            </div>
            <ul
              className="flex flex-wrap gap-x-8 gap-y-3"
              role="list"
              aria-label={skills.title}
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
        </div>
      </Container>
    </Section>
  )
}
