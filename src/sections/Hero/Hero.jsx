import { hero } from '../../constants/hero.js'
import Button from '../../components/common/Button/Button.jsx'
import Container from '../../components/common/Container/Container.jsx'

export default function Hero() {
  return (
    <section id="hero" className="bg-surface-950">
      <Container className="flex flex-col items-center justify-center pt-36 pb-24 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-sky-400">
          {hero.greeting}
        </p>
        <h1 className="mt-4 text-[36px] font-medium leading-tight tracking-tight text-surface-50 sm:text-[38px]">
          {`${hero.name} — ${hero.role}`}
        </h1>
        <p className="mt-4 max-w-md text-[11px] leading-relaxed text-surface-400">
          {hero.tagline}
        </p>
        <div className="mt-8 flex items-center gap-3">
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
