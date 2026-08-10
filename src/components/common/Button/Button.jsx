export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ease-in-out cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]'

  const styles = {
    primary:
      'bg-sky-400 text-surface-950 shadow-sm shadow-sky-500/25 hover:bg-sky-300 hover:shadow-md hover:shadow-sky-500/30 focus-visible:ring-sky-400 focus-visible:ring-offset-surface-950',
    secondary:
      'border-2 border-surface-500 bg-surface-900/40 text-surface-200 hover:border-sky-400/70 hover:text-sky-300 focus-visible:ring-sky-400 focus-visible:ring-offset-surface-950',
  }

  const allClasses = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={allClasses} {...props}>
      {children}
    </button>
  )
}
