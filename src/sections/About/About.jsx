import { about } from '../../constants/about.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          number={about.number}
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />

        <div className="mt-14 max-w-3xl space-y-4">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-surface-400 text-base leading-relaxed sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-10 border-t border-surface-800 pt-10 sm:grid-cols-3 sm:gap-8">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col text-center sm:text-left"
            >
              <dd className="order-1 text-4xl font-bold tracking-tight text-surface-50 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="order-2 mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-surface-400">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}
