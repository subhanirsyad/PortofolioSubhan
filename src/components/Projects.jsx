import { useEffect, useMemo, useState } from 'react'
import Container from './Container.jsx'
import { projects as featuredProjects } from '../data/projects.js'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function Projects() {
  const GITHUB_USERNAME = 'subhanirsyad'

  // Custom demo links (Streamlit, etc.) for repos or standalone demos.
  const demoByRepo = useMemo(
    () => ({
      'animal-image-clasifier1': 'https://animal-image-clasifier1.streamlit.app/',
      'house-price-regression': 'https://house-price-regression1.streamlit.app/',
      'sentiment-analysis000': 'https://sentiment-analysis000.streamlit.app/',
      'nutritional-status-classification': 'https://nutritional-status.streamlit.app/',
    }),
    [],
  )

  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [q, setQ] = useState('')

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          },
        )

        if (!res.ok) {
          throw new Error(`GitHub API error (${res.status})`)
        }

        const data = await res.json()
        if (!alive) return
        // Keep non-forks first, then last updated.
        const sorted = [...data].sort((a, b) => {
          if (a.fork !== b.fork) return a.fork ? 1 : -1
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        })
        setRepos(sorted)
      } catch (e) {
        if (!alive) return
        setError(e?.message || 'Gagal memuat repository dari GitHub.')
      } finally {
        if (!alive) return
        setLoading(false)
      }
    })()

    return () => {
      alive = false
    }
  }, [GITHUB_USERNAME])

  const filteredRepos = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return repos
    return repos.filter((r) => {
      const hay = [r.name, r.description, r.language, ...(r.topics || [])]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return hay.includes(query)
    })
  }, [q, repos])

  const missingDemoCards = useMemo(() => {
    const names = new Set(repos.map((r) => r.name))
    const missing = Object.entries(demoByRepo)
      .filter(([repoName]) => !names.has(repoName))
      .map(([repoName, demoUrl]) => ({
        title: repoName
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase()),
        demoUrl,
        repoUrl: `https://github.com/${GITHUB_USERNAME}`,
      }))
    return missing
  }, [demoByRepo, repos])

  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="flex justify-between items-end mb-12" data-aos="fade-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Proyek Unggulan</h2>
            <p className="text-secondary">Penerapan Data Science pada kasus dunia nyata.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative rounded-xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 hover:border-white/20 transition"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                role="article"
              >
                <div className="h-48 w-full flex items-center justify-center bg-white/5">
                  <Icon className={`text-5xl ${p.accent}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-secondary text-sm mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center translate-y-3 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold mb-2">{p.overlayTitle}</h3>
                  <p className="text-white/90 text-sm max-w-xs">{p.overlayDesc}</p>

                  {(p.repoUrl || p.demoUrl) && (
                    <div className="mt-6 flex flex-wrap gap-3 justify-center">
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition"
                        >
                          <FaGithub /> GitHub
                        </a>
                      )}
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-darker hover:bg-gray-200 text-sm font-bold transition"
                        >
                          <FaArrowUpRightFromSquare /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* GitHub repos */}
        <div className="mt-20" data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Semua Project di GitHub</h3>
              <p className="text-secondary">
                Daftar repository akan otomatis sinkron dari GitHub ({GITHUB_USERNAME}).
              </p>
            </div>

            <div className="w-full md:w-80">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Cari repo (contoh: streamlit, sql, r...)"
                className="w-full bg-white/5 border border-white/10 focus:border-primary outline-none rounded-xl px-4 py-3 text-sm"
                aria-label="Cari repository"
              />
              <p className="text-xs text-secondary mt-2">
                Menampilkan {filteredRepos.length}{' '}
                {filteredRepos.length === 1 ? 'repo' : 'repo'}
                {loading ? '…' : ''}
              </p>
            </div>
          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 animate-pulse"
                    aria-hidden="true"
                  >
                    <div className="h-5 w-2/3 bg-white/10 rounded mb-3" />
                    <div className="h-4 w-full bg-white/10 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-white/10 rounded mb-6" />
                    <div className="h-9 w-28 bg-white/10 rounded-full" />
                  </div>
                ))
              : filteredRepos.map((r) => {
                  const demoUrl = demoByRepo[r.name]
                  const updated = r.updated_at
                    ? new Date(r.updated_at).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                      })
                    : ''
                  return (
                    <article
                      key={r.id}
                      className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-bold leading-snug">{r.name}</h4>
                          <p className="text-secondary text-sm mt-2">
                            {r.description || 'Tidak ada deskripsi.'}
                          </p>
                        </div>
                        <a
                          href={r.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 text-white/70 hover:text-white transition"
                          aria-label={`Buka ${r.name} di GitHub`}
                          title="Buka di GitHub"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {r.language && (
                          <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                            {r.language}
                          </span>
                        )}
                        {typeof r.stargazers_count === 'number' && (
                          <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                            ★ {r.stargazers_count}
                          </span>
                        )}
                        {updated && (
                          <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                            Updated {updated}
                          </span>
                        )}
                        {r.fork && (
                          <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/75">
                            Fork
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={r.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition"
                        >
                          <FaGithub /> GitHub
                        </a>
                        {demoUrl && (
                          <a
                            href={demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-darker hover:bg-gray-200 text-sm font-bold transition"
                          >
                            <FaArrowUpRightFromSquare /> Live Demo
                          </a>
                        )}
                      </div>
                    </article>
                  )
                })}
          </div>

          {/* Standalone demos if repo belum ada / belum terdeteksi */}
          {missingDemoCards.length > 0 && (
            <div className="mt-10">
              <h4 className="text-lg font-bold mb-4">Demo Live (Streamlit)</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {missingDemoCards.map((d) => (
                  <article
                    key={d.demoUrl}
                    className="rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition p-6"
                  >
                    <h5 className="text-lg font-bold">{d.title}</h5>
                    <p className="text-secondary text-sm mt-2">
                      Live demo tersedia, tetapi repo belum terdeteksi di akun GitHub ini.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={d.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition"
                      >
                        <FaGithub /> GitHub
                      </a>
                      <a
                        href={d.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-darker hover:bg-gray-200 text-sm font-bold transition"
                      >
                        <FaArrowUpRightFromSquare /> Live Demo
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
