import { projects } from '../../constants/projects.js'

export default function ProjectCard({ project, index }) {
  const href = project.demo || project.github

  return (
    <article className="flex flex-col">
      <span
        aria-hidden="true"
        className="text-[9px] font-medium tabular-nums text-surface-500"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-2 text-[11px] font-semibold tracking-tight text-surface-50">
        {project.name}
      </h3>
      <p className="mt-2 text-[10px] leading-relaxed text-surface-400">
        {project.description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 py-2 inline-flex items-center gap-1 text-[10px] font-medium text-sky-400 transition-colors duration-200 motion-reduce:transition-none hover:text-sky-300 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none"
        aria-label={project.name}
      >
        {projects.viewLabel}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}
