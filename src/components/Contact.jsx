import Container from './Container.jsx'
import { profile } from '../data/profile.js'
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-darker/50">
      <Container>
        <div
          className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Hubungi Saya</h2>
            <p className="text-secondary">Terbuka untuk kolaborasi riset, proyek data, atau diskusi matematika.</p>
            <p className="text-primary mt-2 flex items-center justify-center gap-2">
              <FaLocationDot /> {profile.location}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <a
              href={`mailto:${profile.links.email}`}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary transition"
            >
              <FaEnvelope className="text-3xl text-primary mb-4 mx-auto" />
              <p className="text-sm text-secondary">Email</p>
              <p className="font-bold text-white text-sm break-all">{profile.links.email}</p>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary transition"
            >
              <FaLinkedin className="text-3xl text-sky-400 mb-4 mx-auto" />
              <p className="text-sm text-secondary">LinkedIn</p>
              <p className="font-bold text-white text-sm">Lihat Profil</p>
            </a>

            <a
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary transition"
            >
              <FaWhatsapp className="text-3xl text-green-500 mb-4 mx-auto" />
              <p className="text-sm text-secondary">WhatsApp</p>
              <p className="font-bold text-white text-sm">Chat via WA</p>
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary transition"
            >
              <FaGithub className="text-3xl text-white mb-4 mx-auto" />
              <p className="text-sm text-secondary">GitHub</p>
              <p className="font-bold text-white text-sm">Lihat Repository</p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
