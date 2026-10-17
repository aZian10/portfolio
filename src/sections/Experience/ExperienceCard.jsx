export default function ExperienceCard({ item }) {
  return (
    <article className="flex flex-col gap-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-base font-semibold tracking-tight text-surface-50">
            {item.role}
          </h3>
          <span aria-hidden="true" className="text-sm text-surface-500">
            —
          </span>
          <p className="text-sm font-medium text-sky-400">
            {item.organization}
          </p>
        </div>
        <p className="text-sm tabular-nums text-surface-500">
          {item.period}
        </p>
      </div>
      <p className="max-w-md text-[15px] leading-relaxed text-surface-400">
        {item.description}
      </p>
    </article>
  )
}
