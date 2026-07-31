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
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
          className="mx-auto text-center"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
