export default function SectionTitle({
  id,
  number,
  title,
  className = '',
}) {
  return (
    <header id={id} className={className}>
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-sky-400"
        />
        {number && (
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-surface-400">
            {number}
          </span>
        )}
      </div>
      <h2 className="mt-3 text-[20px] font-medium tracking-tight text-surface-50">
        {title}
      </h2>
    </header>
  )
}
