export default function ExperienceCard({ item }) {
  return (
    <article className="rounded-xl border border-surface-800 bg-surface-900/50 p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-xl font-semibold text-surface-50">
            {item.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-sky-400">
            {item.organization}
          </p>
        </div>
        <p className="shrink-0 text-sm text-surface-500">{item.period}</p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-surface-400">
        {item.description}
      </p>

      {item.bullets.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-surface-400">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  )
}
