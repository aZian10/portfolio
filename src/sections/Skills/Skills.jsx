import { skills } from '../../constants/skills.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
          className="mx-auto text-center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-surface-800 bg-surface-900/50 px-5 py-6 transition-colors hover:border-sky-500/30 hover:bg-surface-800/50"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="text-surface-50 font-semibold">
                  {skill.name}
                </h3>
                <span className="shrink-0 rounded-full bg-surface-800 px-3 py-1 text-xs font-medium text-surface-400">
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
