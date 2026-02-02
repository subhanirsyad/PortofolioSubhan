import Container from './Container.jsx'
import { profile } from '../data/profile.js'
import { FaLocationDot, FaGraduationCap, FaWandMagicSparkles } from 'react-icons/fa6'

export default function About() {
  return (
    <section id="about" className="py-20 bg-darker/50">
      <Container>
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-secondary leading-relaxed">
                {profile.headline}
              </p>
              <div className="mt-6 space-y-3 text-white/85">
                <div className="flex items-center gap-3">
                  <FaGraduationCap className="text-primary" />
                  <span>Matematika — Universitas Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-primary" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaWandMagicSparkles className="text-primary" />
                  <span>Minat: Data Science, Analytics, Modeling</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="grid gap-4">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/60 transition"
                >
                  <p className="text-secondary text-sm">{s.label}</p>
                  <p className="text-2xl font-bold mt-1">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
