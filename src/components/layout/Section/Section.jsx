export default function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  )
}
