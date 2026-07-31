import Button from '../../components/common/Button/Button.jsx'
import { projects } from '../../constants/projects.js'

export default function ProjectCard({ project }) {
  return (
    <article className="flex flex-col rounded-xl border border-surface-800 bg-surface-900/50 p-6 transition-colors hover:border-sky-500/30 hover:bg-surface-800/50">
      <h3 className="text-xl font-semibold text-surface-50">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-400">
        {project.description}
      </p>

      <ul
        className="mt-4 flex flex-wrap gap-2"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-surface-800 px-3 py-1 text-xs font-medium text-surface-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          variant="secondary"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {projects.githubLabel}
        </Button>
        {project.demo ? (
          <Button
            variant="secondary"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {projects.demoLabel}
          </Button>
        ) : (
          <span className="inline-flex items-center rounded-lg border-2 border-dashed border-surface-800 px-6 py-3 text-sm font-semibold text-surface-500">
            {projects.demoPlaceholder}
          </span>
        )}
      </div>
    </article>
  )
}
