import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import Typed from 'typed.js'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/subhan-irsyaduddien-alhaq',
  github: 'https://github.com/',
  whatsapp: 'https://wa.me/62895365569306',
  email: 'mailto:subhanirsyaduddien@gmail.com',
}

function Chip({ children }) {
  return <span className="chip">{children}</span>
}

function SectionTitle({ title, subtitle, center = true }) {
  return (
    <div className={center ? 'sectionTitle center' : 'sectionTitle'} data-aos="fade-up">
      <h2>{title}</h2>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
      <div className={center ? 'underline center' : 'underline'} />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'glass' : ''}`}>
      <div className="container navInner">
        <a className="brand" href="#home">
          Subhan<span className="brandDot">.Data</span>
        </a>

        <div className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">Tentang</a>
          <a href="#expertise">Keahlian</a>
          <a href="#experience">Pengalaman</a>
          <a href="#projects">Proyek</a>
          <a className="btn btnPrimary" href="#contact">Kontak</a>
        </div>

        <button className="menuBtn" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      <div className={`mobileMenu ${open ? 'show' : ''}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>Tentang</a>
        <a href="#expertise" onClick={() => setOpen(false)}>Keahlian</a>
        <a href="#experience" onClick={() => setOpen(false)}>Pengalaman</a>
        <a href="#projects" onClick={() => setOpen(false)}>Proyek</a>
        <a href="#contact" className="primaryLink" onClick={() => setOpen(false)}>Kontak Saya</a>
      </div>
    </nav>
  )
}

function Hero() {
  const typedEl = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Data Scientist', 'Mathematics Student', 'AI Engineer', 'Math Tutor'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="blob blobA" aria-hidden="true" />
      <div className="blob blobB" aria-hidden="true" />

      <div className="container heroGrid">
        <div data-aos="fade-right" data-aos-duration="1000">
          <p className="kicker">HALO, SAYA</p>
          <h1 className="heroTitle">
            Subhan <span className="textGradient">Irsyaduddien</span>
          </h1>
          <h2 className="heroSub">
            I'm a <span ref={typedEl} className="typedText" />
          </h2>
          <p className="muted heroDesc">
            Mahasiswa Matematika Universitas Indonesia dengan minat kuat pada Data Science & Analytics.
            Berpengalaman dalam Python, SQL, dan Machine Learning untuk memecahkan masalah kompleks.
          </p>

          <div className="heroCtas">
            <a className="btn btnLight" href="#projects">Lihat Proyek</a>
            <a className="btn btnOutline" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className="socialRow" aria-label="Social links">
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            <a href={LINKS.email} aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>

        <div className="heroCardWrap" data-aos="fade-left" data-aos-duration="1200">
          <div className="heroCard">
            <i className="fas fa-brain heroIcon" aria-hidden="true" />
            <div className="heroMini">
              <div className="heroBadge">3.51</div>
              <div>
                <p className="miniMuted">GPA (Universitas Indonesia)</p>
                <p className="miniBold">Mathematics Student</p>
              </div>
            </div>
          </div>
          <div className="heroCardBorder" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container aboutGrid">
        <div data-aos="fade-up">
          <h2 className="h2">Tentang Saya</h2>
          <div className="underline" />
          <p className="muted">
            Saya adalah mahasiswa Matematika Universitas Indonesia yang fokus pada Data Science, Analytics, dan Machine Learning.
            Saya suka mengubah data menjadi insight yang bisa dipakai untuk mengambil keputusan—mulai dari data cleaning,
            eksplorasi, sampai membangun model prediksi.
          </p>
          <p className="muted">
            Saat ini saya aktif mengerjakan proyek-proyek berbasis Python, SQL, dan TensorFlow/Scikit-learn, serta terbuka untuk kolaborasi riset,
            magang, maupun freelance project di bidang data.
          </p>

          <div className="ctaRow">
            <a className="btn btnPrimary" href="#contact">Ayo Kolaborasi</a>
            <a className="btn btnOutline" href={LINKS.email}>Kirim Email</a>
          </div>
        </div>

        <div className="highlightCard" data-aos="fade-up" data-aos-delay="100">
          <h3 className="h3">Highlight</h3>
          <div className="highlightGrid">
            <div className="tile">
              <p className="tileTitle"><i className="fas fa-code" /> Tech Stack</p>
              <p className="mutedSmall">Python, SQL, TensorFlow, Scikit-learn</p>
            </div>
            <div className="tile">
              <p className="tileTitle"><i className="fas fa-chart-line" /> Fokus</p>
              <p className="mutedSmall">Analytics, NLP, Time Series, CV</p>
            </div>
            <div className="tile">
              <p className="tileTitle"><i className="fas fa-location-dot" /> Lokasi</p>
              <p className="mutedSmall">Jakarta / Depok, Indonesia</p>
            </div>
            <div className="tile">
              <p className="tileTitle"><i className="fas fa-bolt" /> Open To</p>
              <p className="mutedSmall">Internship, Research, Data Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section sectionAlt">
      <div className="container">
        <SectionTitle title="Keahlian & Fokus" />
        <div className="grid3">
          <div className="skillCard" data-aos="fade-up" data-aos-delay="100">
            <div className="skillIcon"><i className="fas fa-chart-line" /></div>
            <h3>Data Analytics</h3>
            <p className="mutedSmall">
              Data Cleaning, Visualization, dan Statistical Analysis menggunakan <strong>Python (Pandas, NumPy), SQL</strong>, serta Tableau.
            </p>
          </div>

          <div className="skillCard" data-aos="fade-up" data-aos-delay="200">
            <div className="skillIcon"><i className="fas fa-robot" /></div>
            <h3>Machine Learning</h3>
            <p className="mutedSmall">
              Membangun model prediksi dan klasifikasi menggunakan <strong>Scikit-learn, Keras, TensorFlow</strong>. Berpengalaman dengan ANN & NLP.
            </p>
          </div>

          <div className="skillCard" data-aos="fade-up" data-aos-delay="300">
            <div className="skillIcon"><i className="fas fa-square-root-variable" /></div>
            <h3>Mathematical Modeling</h3>
            <p className="mutedSmall">
              Penerapan logika matematika yang kuat untuk pemecahan masalah, <strong>Linear Models</strong>, dan struktur data untuk hasil yang reproduksibel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const EXPERIENCE = [
  {
    role: 'Mathematics Tutor',
    org: 'BIMBINGAN ALUMNI',
    when: 'Nov 2025 - Saat ini',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengajar dan membimbing siswa dalam sesi bimbingan yang dipimpin alumni, fokus pada kejelasan konsep dan kemampuan pemecahan masalah.',
      'Menyiapkan rencana pembelajaran, soal latihan, dan materi review yang disesuaikan dengan kebutuhan siswa.',
      'Memantau progres siswa dan memberikan umpan balik untuk meningkatkan performa dan hasil belajar.',
    ],
    tags: ['Teaching'],
    current: true,
  },
  {
    role: 'Assistant Lecturer on Calculus',
    org: 'Universitas Indonesia (UI)',
    when: 'Sep 2025 - Des 2025',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengevaluasi tugas mahasiswa dan memberikan umpan balik konstruktif untuk meningkatkan pemahaman.',
      'Berkoordinasi dengan sesama asisten dosen untuk memastikan standar penilaian yang konsisten.',
    ],
    tags: ['Teaching', 'Calculus'],
    current: false,
  },
  {
    role: 'Mathematics Tutor',
    org: 'Tutorin Math',
    when: 'Mei 2025 - Saat ini',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Merancang modul untuk tiga program unggulan di Tutorin Math.',
      'Mengajar les privat kepada lebih dari 20 siswa dalam waktu tiga bulan.',
    ],
    tags: ['Teaching', 'LaTeX', 'Analytical Skills'],
    current: true,
  },
  {
    role: 'Steering Committee',
    org: 'LOGIKA UI 2024',
    when: 'Mei 2025 - Des 2025',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengawasi seluruh kegiatan lomba untuk memastikan kesesuaian dengan tujuan, lini masa, dan standar kualitas.',
      'Memberikan rekomendasi strategis kepada panitia pelaksana.',
      'Bertindak sebagai penghubung antara tim penyelenggara dan Departemen Matematika.',
    ],
    tags: ['Supervisory Skills'],
    current: false,
  },
  {
    role: 'Head of Department (Academic)',
    org: 'HMD Matematika FMIPA UI',
    when: 'Mar 2025 - Saat ini',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Merencanakan dan mengawasi program akademik seperti seminar, pelatihan, dan workshop.',
      'Berkoordinasi dengan fakultas untuk kompetisi yang diselenggarakan HMDM.',
      'Membimbing staf divisi untuk memastikan efektivitas program.',
      'Menginisiasi kolaborasi antar organisasi untuk meningkatkan keterlibatan akademik.',
    ],
    tags: ['Kepemimpinan', 'Manajemen Waktu'],
    current: true,
  },
  {
    role: 'Staff (Academic Division)',
    org: 'HMD Matematika FMIPA UI',
    when: 'Mar 2024 - Feb 2025',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Menjabat sebagai Project Officer untuk Math Creativity, mengawasi pelaksanaan acara dari awal hingga akhir.',
      'Mendukung pelaksanaan program dan acara akademik.',
      'Berkontribusi pada pengembangan prestasi akademik dan bakat ilmiah mahasiswa Matematika.',
    ],
    tags: ['Leadership'],
    current: false,
  },
  {
    role: 'Treasurer Controller',
    org: 'Ksatria MIPA 2024',
    when: 'Jul 2024 - Nov 2024',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengelola dan memantau transaksi keuangan serta penganggaran.',
      'Memastikan kegiatan keuangan mengikuti regulasi dan prosedur.',
      'Menyusun dan mendokumentasikan laporan keuangan untuk transparansi.',
      'Berkoordinasi dengan divisi lain untuk menyelaraskan alokasi dana dengan kebutuhan lomba.',
    ],
    tags: ['Budgeting'],
    current: false,
  },
  {
    role: 'Competition Coordinator',
    org: 'UI Science Olympiad',
    when: 'Jun 2024 - Nov 2024',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengelola 3 cabang lomba: Poster Ilmiah, Esai Kritis, dan Studi Kasus.',
      'Menyusun pedoman teknis, kriteria penilaian, dan lini masa acara.',
      'Berkontribusi pada acara yang diikuti oleh lebih dari 7.000 siswa di seluruh negeri.',
    ],
    tags: ['Leadership'],
    current: false,
  },
  {
    role: 'Staff (External Relations)',
    org: 'MATRIX XIX',
    when: 'Jun 2024 - Okt 2024',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Membangun kemitraan dengan perusahaan untuk kunjungan dan pameran.',
      'Mengkoordinasikan partisipasi perusahaan dalam pameran booth dan promosi rekrutmen.',
      'Menyusun proposal untuk meningkatkan kolaborasi industri.',
    ],
    tags: ['Leadership', 'Communication'],
    current: false,
  },
  {
    role: 'Intern (Magang)',
    org: 'HMD Matematika FMIPA UI',
    when: 'Agu 2023 - Feb 2024',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Membuat konten apresiasi yang menyoroti prestasi mahasiswa Departemen Matematika.',
      'Merancang visual menarik untuk merayakan pemenang dan meningkatkan keterlibatan komunitas.',
    ],
    tags: ['Time Management'],
    current: false,
  },
  {
    role: 'Staff (Competition Division)',
    org: 'LOGIKA UI 2024',
    when: 'Okt 2023 - Des 2023',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Mengembangkan soal kompetisi matematika untuk kategori SMA (MIC & MTC).',
      'Mengawasi jalannya kompetisi dan bertindak sebagai Game Master saat semifinal.',
      'Menjadi Liaison Officer untuk membantu peserta selama acara.',
    ],
    tags: ['Analytical Skills', 'Problem Solving'],
    current: false,
  },
  {
    role: 'Staf & Project Officer',
    org: 'Salam Universitas Indonesia',
    when: 'Okt 2023 - Des 2023',
    where: 'Depok, Jawa Barat, Indonesia',
    points: [
      'Memimpin "Muhasabah Akbar Muharram" sebagai Project Officer (PO).',
      'Mengelola kegiatan edukasi Islam, pembuatan konten, dan diskusi.',
      'Membuat dan mempublikasikan konten edukasi di media internal.',
    ],
    tags: [],
    current: false,
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle title="Pengalaman Organisasi & Kerja" />
        <div className="timeline">
          {EXPERIENCE.map((item, idx) => (
            <div className="timelineItem" key={idx} data-aos="fade-left">
              <div className={`dot ${item.current ? 'dotPrimary' : ''}`} aria-hidden="true" />
              <div className="timelineCard">
                <div className="timelineTop">
                  <div>
                    <h3 className="h3">{item.role}</h3>
                    <p className="org">{item.org}</p>
                  </div>
                  <span className="pill">{item.when}</span>
                </div>
                <p className="loc"><i className="fas fa-map-marker-alt" /> {item.where}</p>
                <ul className="bullets">
                  {item.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
                {item.tags?.length ? (
                  <div className="chipRow">
                    {item.tags.map((t, i) => <Chip key={i}>{t}</Chip>)}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    title: 'SafeBites (SQL Database)',
    desc: 'Membangun database produk grocery berbasis dataset Nutritionix. Menerapkan filtering allergen berbasis keyword dan manajemen katalog produk menggunakan MySQL.',
    icon: 'fas fa-database',
    iconClass: 'iconYellow',
    tags: ['SQL / MySQL', 'Database'],
    links: [
      { label: 'Demo', href: 'https://safebites-sql1.vercel.app', primary: true, icon: 'fas fa-external-link-alt' },
      { label: 'GitHub', href: 'https://github.com/subhanirsyad/safebites-sql1', icon: 'fab fa-github' },
    ],
    overlayTitle: 'SafeBites',
    overlaySub: 'Allergen Filtering & Grocery Database',
  },
  {
    title: 'Play Store Sentiment Analysis',
    desc: 'Membangun NLP pipeline (TF-IDF + SVM) untuk klasifikasi ulasan Play Store Indonesia. Scraping otomatis & labeling sentimen biner dari rating bintang.',
    icon: 'fas fa-comments',
    iconClass: 'iconPink',
    tags: ['NLP', 'Python', 'SVM'],
    links: [
      { label: 'GitHub', href: 'https://github.com/subhanirsyad/sentiment-analysis', icon: 'fab fa-github' },
    ],
    overlayTitle: 'Sentiment Analysis',
    overlaySub: 'NLP Pipeline for Indonesian Reviews',
  },
  {
    title: 'Bitcoin Forecast Pipeline',
    desc: 'Pipeline forecasting time-series BTC (Close Price) menggunakan TensorFlow/Keras. Fitur auto-detection timestamp dan model Seq2Seq LSTM + Attention.',
    icon: 'fab fa-bitcoin',
    iconClass: 'iconOrange',
    tags: ['TensorFlow', 'Time Series', 'LSTM'],
    links: [
      { label: 'GitHub', href: 'https://github.com/subhanirsyad/bitcoin-forecast', icon: 'fab fa-github' },
    ],
    overlayTitle: 'Bitcoin Forecast',
    overlaySub: 'Time-Series Prediction with LSTM',
  },
  {
    title: 'Animal Image Classifier',
    desc: 'Klasifikasi gambar 10 kelas hewan menggunakan CNN (TensorFlow). Pipeline preprocessing standar (224x224) & export model portable ke TFLite.',
    icon: 'fas fa-paw',
    iconClass: 'iconTeal',
    tags: ['Computer Vision', 'TensorFlow', 'TFLite'],
    links: [
      { label: 'GitHub', href: 'https://github.com/subhanirsyad/animal-image-clasifier', icon: 'fab fa-github' },
    ],
    overlayTitle: 'Image Classification',
    overlaySub: '10-Class Animal Classifier & TFLite Export',
  },
  {
    title: 'Cloud Data Security',
    desc: 'Analisis risiko keamanan cloud menggunakan UEBA dan Unsupervised Learning (Isolation Forest + SHAP) untuk mendeteksi anomali.',
    icon: 'fas fa-shield-halved',
    iconClass: 'iconBlue',
    tags: ['Python', 'Anomaly Detection'],
    links: [],
    overlayTitle: 'Risk Analysis',
    overlaySub: 'Mendeteksi anomali perilaku user.',
  },
  {
    title: 'Nutrition Classification',
    desc: 'Klasifikasi status gizi balita membandingkan ANN vs Random Forest dengan akurasi 99%.',
    icon: 'fas fa-child-reaching',
    iconClass: 'iconGreen',
    tags: ['Machine Learning', 'SMOTE'],
    links: [],
    overlayTitle: 'Stunting Analysis',
    overlaySub: 'Klasifikasi status gizi balita.',
  },
  {
    title: 'House Price Prediction',
    desc: 'Model regresi linear berganda menggunakan R dengan 7 prediktor dan 1000 data observasi.',
    icon: 'fas fa-house-chimney',
    iconClass: 'iconPurple',
    tags: ['R Language', 'Statistics'],
    links: [],
    overlayTitle: 'Regression Model',
    overlaySub: 'Prediksi harga rumah dengan analisis statistik.',
  },
]

function Projects() {
  return (
    <section id="projects" className="section sectionAlt">
      <div className="container">
        <div className="projectsHeader" data-aos="fade-left">
          <div>
            <h2 className="h2">Proyek Unggulan</h2>
            <p className="muted">Geser untuk melihat proyek lainnya <i className="fas fa-arrow-right" /></p>
          </div>
          <a className="projectsLink" href={LINKS.github} target="_blank" rel="noreferrer">
            Lihat semua di GitHub <i className="fas fa-arrow-up-right-from-square" />
          </a>
        </div>

        <div className="hscroll" aria-label="Project list">
          {PROJECTS.map((p, i) => (
            <div className="projectCard" key={i} data-aos={i === 0 ? 'fade-right' : 'fade-up'}>
              <div className="projectTop">
                <i className={`${p.icon} ${p.iconClass}`} aria-hidden="true" />
              </div>
              <div className="projectBody">
                <h3 className="h3">{p.title}</h3>
                <p className="mutedSmall clamp3">{p.desc}</p>
                <div className="chipRow">
                  {p.tags.map((t, idx) => <Chip key={idx}>{t}</Chip>)}
                </div>
              </div>

              <div className="overlay" aria-hidden="true">
                <h3>{p.overlayTitle}</h3>
                <p>{p.overlaySub}</p>
                {p.links?.length ? (
                  <div className="overlayBtns" aria-label="Project links">
                    {p.links.map((l, idx) => (
                      <a
                        key={idx}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn ${l.primary ? 'btnLight' : 'btnOutlineLight'}`}
                      >
                        <i className={`${l.icon}`} /> {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contactCard" data-aos="fade-up">
          <div className="contactHead">
            <h2 className="h2">Hubungi Saya</h2>
            <p className="muted">Terbuka untuk kolaborasi riset, proyek data, atau diskusi matematika.</p>
            <p className="contactLoc"><i className="fas fa-map-marker-alt" /> Pasar Minggu, Jakarta Selatan</p>
          </div>

          <div className="contactGrid">
            <a className="contactItem" href={LINKS.email}>
              <i className="fas fa-envelope contactIcon primary" />
              <p className="mutedSmall">Email</p>
              <p className="contactValue">subhanirsyaduddien@gmail.com</p>
            </a>

            <a className="contactItem" href={LINKS.whatsapp} target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp contactIcon wa" />
              <p className="mutedSmall">WhatsApp</p>
              <p className="contactValue">+62 895 3655 69306</p>
            </a>

            <a className="contactItem" href={LINKS.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github contactIcon" />
              <p className="mutedSmall">GitHub</p>
              <p className="contactValue">Lihat Repository</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <p className="mutedSmall">&copy; 2026 Subhan Irsyaduddien Alhaq. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
