import { projects } from '../../constants/projects.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const featured = projects.items.slice(0, 3)

  return (
    <Section id="projects">
      <Container>
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-9">
          <SectionTitle number={projects.number} title={projects.eyebrow} />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 md:divide-x md:divide-white/10">
            {featured.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
