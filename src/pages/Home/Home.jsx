import Navbar from '../../components/layout/Navbar/Navbar.jsx'
import Footer from '../../components/layout/Footer/Footer.jsx'
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
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
