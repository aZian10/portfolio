import Button from '../../components/common/Button/Button.jsx'
import { projects } from '../../constants/projects.js'

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col rounded-xl border border-surface-800 bg-surface-900/50 p-6 shadow-sm shadow-black/20 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out hover:border-sky-500/40 hover:bg-surface-800/50 motion-safe:hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 focus-within:border-sky-500/50">
      <span
        aria-hidden="true"
        className="mb-5 block h-0.5 w-8 rounded-full bg-gradient-to-r from-sky-400 to-sky-500/50 transition-transform duration-300 motion-safe:group-hover:w-12 motion-safe:group-hover:rounded-full"
      />
      <h3 className="text-xl font-semibold tracking-tight text-surface-50">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-surface-400">
        {project.description}
      </p>

      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-surface-800 bg-surface-950/60 px-2.5 py-1 text-xs font-medium tracking-wide text-surface-300"
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
