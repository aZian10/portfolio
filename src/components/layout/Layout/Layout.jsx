import Container from '../../common/Container/Container.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Container>
        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-screen"
        >
          {children}
        </main>
      </Container>
    </div>
  )
}
