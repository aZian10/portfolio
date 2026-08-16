import Container from '../../common/Container/Container.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Container>{children}</Container>
    </div>
  )
}
