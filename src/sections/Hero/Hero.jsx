import { hero } from '../../constants/hero.js'
import Button from '../../components/common/Button/Button.jsx'
import Container from '../../components/common/Container/Container.jsx'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-surface-950 pt-16"
    >
      <Container className="text-center">
        <p className="mb-4 text-lg font-medium text-sky-400">
          {hero.greeting}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-surface-50 sm:text-5xl lg:text-6xl">
          {hero.name}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-surface-400 sm:text-xl">
          {hero.tagline}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button variant="primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </Button>
          <Button variant="secondary" href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
