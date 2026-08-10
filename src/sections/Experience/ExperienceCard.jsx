export default function ExperienceCard({ item }) {
  return (
    <article>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-surface-50 sm:text-xl">
            {item.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-sky-400">
            {item.organization}
          </p>
        </div>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.15em] text-surface-400">
          {item.period}
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-surface-400 sm:text-base">
        {item.description}
      </p>

      {item.bullets.length > 0 && (
        <ul className="mt-4 list-none space-y-2">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 text-sm leading-relaxed text-surface-400"
            >
              <span
                aria-hidden="true"
                className="absolute top-[0.55em] left-0 h-1 w-1.5 rounded-full bg-sky-400/70"
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
