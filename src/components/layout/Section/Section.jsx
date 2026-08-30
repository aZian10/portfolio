export default function Section({ id, children, className = '', headingId }) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-b border-white/10 py-10 sm:py-12 ${className}`}
    >
      {children}
    </section>
  )
}
