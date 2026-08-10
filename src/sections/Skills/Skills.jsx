import { skills } from '../../constants/skills.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          number={skills.number}
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-surface-800 bg-surface-900/40 px-5 py-6 transition-colors duration-300 hover:border-sky-400/30 hover:bg-surface-800/40"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-semibold text-surface-50 transition-colors duration-300 motion-safe:group-hover:text-sky-400">
                  {skill.name}
                </h3>
                <span className="shrink-0 rounded-full border border-surface-700/60 bg-surface-950/40 px-3 py-1 text-xs font-medium text-surface-400">
                  {skill.category}
                </span>
              </div>
              <p className="text-surface-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
