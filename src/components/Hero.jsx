import { useEffect, useRef } from 'react'
import Container from './Container.jsx'
import { profile } from '../data/profile.js'
import Typed from 'typed.js'
import { FaBrain, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'

export default function Hero() {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    if (!el.current) return
    typed.current = new Typed(el.current, {
      strings: profile.typing,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })
    return () => typed.current?.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" data-aos-duration="1000">
          <p className="text-primary font-semibold mb-2 tracking-wide">HALO, SAYA</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-secondary mb-6 min-h-[2.5rem]">
            I'm a <span ref={el} className="text-white font-semibold" />
          </h2>

          <p className="text-secondary max-w-lg mb-8 leading-relaxed">{profile.description}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-white text-darker font-bold rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1"
            >
              Lihat Projek
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 border border-white/20 rounded-full hover:border-primary hover:text-primary transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-secondary">
            <a
              href={profile.links.github}
              className="hover:text-white text-2xl transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.links.linkedin}
              className="hover:text-white text-2xl transition transform hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="hover:text-white text-2xl transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="relative" data-aos="fade-left" data-aos-duration="1200">
          <div className="relative z-10 w-full aspect-square bg-gradient-to-tr from-white/5 to-white/0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
            <FaBrain className="text-8xl md:text-9xl text-white/20 group-hover:text-primary transition duration-500 transform group-hover:scale-110" />

            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {profile.stats[0].value}
                </div>
                <div>
                  <p className="text-sm text-secondary">{profile.stats[0].label}</p>
                  <p className="font-bold">Mathematics Student</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-3xl -z-10" />
        </div>
      </Container>
    </section>
  )
}
