import Navbar from '../../components/layout/Navbar/Navbar.jsx'
import Hero from '../../sections/Hero/Hero.jsx'
import About from '../../sections/About/About.jsx'
import Experience from '../../sections/Experience/Experience.jsx'
import Projects from '../../sections/Projects/Projects.jsx'
import Skills from '../../sections/Skills/Skills.jsx'
import Contact from '../../sections/Contact/Contact.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
