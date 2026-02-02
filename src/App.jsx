import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Expertise from './components/Expertise.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BlurBlob from './components/BlurBlob.jsx'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-darker" />
      <div className="absolute inset-0 -z-10 opacity-80 bg-grid" />
      <BlurBlob className="top-[-120px] left-[-120px]" variant="blue" />
      <BlurBlob className="bottom-[-160px] right-[-160px]" variant="cyan" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
