export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-sky-400 text-surface-950 font-medium rounded-md"
      >
        Skip to main content
      </a>
      {children}
    </div>
  )
}
