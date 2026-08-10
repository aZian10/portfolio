export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`border-b border-white/10 py-10 sm:py-12 ${className}`}
    >
      {children}
    </section>
  )
}
