import { projects } from '../../constants/projects.js'
import Section from '../../components/layout/Section/Section.jsx'
import Container from '../../components/common/Container/Container.jsx'
import SectionTitle from '../../components/common/SectionTitle/SectionTitle.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          number={projects.number}
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
