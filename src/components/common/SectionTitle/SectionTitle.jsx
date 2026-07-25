export default function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  className = '',
}) {
  return (
    <header id={id} className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="text-surface-500 mb-3 block text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-surface-50 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-surface-400 mt-4 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </header>
  )
}
