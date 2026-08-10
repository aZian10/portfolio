export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-md px-5 py-2 text-[11px] font-medium tracking-wide transition-colors duration-200 ease-in-out cursor-pointer focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950 focus:outline-none'

  const styles = {
    primary:
      'border border-sky-400 bg-sky-400 text-surface-950 hover:bg-sky-300',
    secondary:
      'border border-white/15 text-surface-300 hover:border-sky-400/60 hover:text-sky-300',
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
