export default function SectionTitle({
  id,
  number,
  eyebrow,
  title,
  description,
  className = '',
}) {
  return (
    <header id={id} className={`max-w-3xl ${className}`}>
      {number && (
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tabular-nums text-sky-400">
            {number}
          </span>
          <span aria-hidden="true" className="h-px w-10 bg-sky-400/40" />
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-surface-400">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-surface-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-400 sm:text-lg">
          {description}
        </p>
      )}
    </header>
  )
}
