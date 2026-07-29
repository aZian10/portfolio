import { about } from '../../constants/about.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function About() {
  return (
    <Section id="about">
      <Container className="text-center">
        <SectionTitle
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
          className="mx-auto"
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-12">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-surface-400 text-base leading-relaxed sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-surface-800 bg-surface-900/50 px-6 py-8 backdrop-blur-sm"
            >
              <p className="text-3xl font-bold text-sky-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="text-surface-400 mt-2 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
