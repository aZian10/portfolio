import Button from '../../components/common/Button/Button.jsx'
import { projects } from '../../constants/projects.js'

export default function ProjectCard({ project, index }) {
  const projectNumber = String(index + 1).padStart(2, '0')

  return (
    <article className="group relative flex flex-col rounded-xl border border-surface-800 bg-surface-900/40 p-6 transition-all duration-300 ease-in-out motion-safe:hover:-translate-y-1 hover:border-sky-400/40 hover:bg-surface-800/40 focus-within:border-sky-400/50">
      <div className="mb-5 flex items-center justify-between">
        <span
          aria-hidden="true"
          className="h-px w-10 bg-sky-400 transition-all duration-300 motion-safe:group-hover:w-16"
        />
        <span
          aria-hidden="true"
          className="text-xs font-semibold tabular-nums text-surface-500 transition-colors duration-300 motion-safe:group-hover:text-sky-400"
        >
          {projectNumber}
        </span>
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-surface-50 sm:text-xl">
        {project.name}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-surface-400">
        {project.description}
      </p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-surface-700/60 bg-surface-950/40 px-2.5 py-1 text-xs font-medium tracking-wide text-surface-300"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap gap-3">
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
          <span className="inline-flex items-center rounded-lg border-2 border-dashed border-surface-700 px-5 py-2.5 text-sm font-medium text-surface-400">
            {projects.demoPlaceholder}
          </span>
        )}
      </div>
    </article>
  )
}
