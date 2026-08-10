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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400 sm:text-base">
          {hero.greeting}
        </p>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-surface-50 sm:text-6xl md:text-7xl lg:text-8xl">
          {hero.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-300 sm:text-xl">
          {hero.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-5">
          <Button
            variant="primary"
            href={hero.primaryCta.href}
            className="px-7 py-3.5 text-base"
          >
            {hero.primaryCta.label}
          </Button>
          <Button
            variant="secondary"
            href={hero.secondaryCta.href}
            className="px-7 py-3.5 text-base"
          >
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
