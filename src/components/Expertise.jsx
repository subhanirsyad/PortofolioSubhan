import Container from './Container.jsx'
import { skills } from '../data/skills.js'

export default function Expertise() {
  return (
    <section id="expertise" className="py-20">
      <Container>
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keahlian & Fokus</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/70 transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
              >
                <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition duration-300">
                  <Icon className="text-2xl text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
