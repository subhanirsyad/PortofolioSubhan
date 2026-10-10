import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Figure from "@/components/Figure";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

type Props = { params: { id: string } };

const getProject = (id: string) => projects.find((p) => p.id === id) ?? notFound();

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.id);
  return { title: `${project.title} — Subhan Irsyaduddien`, description: project.summary };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-[#1a2d4a] pt-8 lg:grid-cols-12">
      <h2 className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase lg:col-span-3 lg:pt-1">{title}</h2>
      <div className="min-w-0 space-y-6 text-[#c5d0e6] leading-relaxed lg:col-span-9">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3">
          <span className="text-[#00d4ff] shrink-0">·</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.id);
  const index = projects.indexOf(project);
  const more = [1, 2].map((n) => projects[(index + n) % projects.length]);
  const [lead, ...moreFigures] = project.figures;

  const meta = [
    { label: "Role", value: project.team ?? "Solo project" },
    { label: "Type", value: `${project.kind}, ${project.year}` },
    { label: "Tools", value: project.stack.join(", ") },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-28 pb-24 section-glow">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 py-2 text-sm text-[#6b7fa0] hover:text-[#00d4ff] transition-colors duration-200"
          >
            <ArrowLeft size={15} /> All projects
          </Link>

          <header className="mt-6">
            <p className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4">{project.kind}</p>
            <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold tracking-tight leading-tight text-[#f0f4ff]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-[#6b7fa0] leading-relaxed">{project.summary}</p>

            <div className="mt-10 grid gap-4 lg:grid-cols-12">
              <dl className="grid gap-px overflow-hidden rounded-2xl border border-[#1a2d4a] bg-[#1a2d4a] sm:grid-cols-3 lg:col-span-8">
                {meta.map((m) => (
                  <div key={m.label} className="bg-[#0d1729] p-5">
                    <dt className="text-[10px] font-semibold text-[#6b7fa0] tracking-widest uppercase mb-2">{m.label}</dt>
                    <dd className="text-sm text-[#f0f4ff] leading-relaxed">{m.value}</dd>
                  </div>
                ))}
              </dl>
              {project.finding && (
                <div className="rounded-2xl border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-5 lg:col-span-4">
                  <p className="text-3xl font-extrabold text-[#00d4ff] tabular-nums">{project.finding.value}</p>
                  <p className="mt-2 text-sm text-[#c5d0e6] leading-relaxed">{project.finding.label}</p>
                </div>
              )}
            </div>

            <ul className="mt-6 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1a2d4a] text-[#f0f4ff] text-sm font-semibold hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all duration-200"
                  >
                    {l.label} <ArrowUpRight size={15} />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-14">
            <Figure figure={lead} number={1} priority />
          </div>

          <div className="mt-16 space-y-12">
            <Section title="Problem">
              <p>{project.problem}</p>
            </Section>

            <Section title="Approach">
              <Bullets items={project.approach} />
            </Section>

            <Section title="Result">
              <Bullets items={project.result} />
              {project.table && (
                <div className="overflow-x-auto rounded-xl border border-[#1a2d4a]">
                  <table className="w-full min-w-[32rem] border-collapse text-left text-sm tabular-nums">
                    <caption className="caption-bottom p-4 text-left text-[#6b7fa0]">
                      <span className="font-semibold text-[#00d4ff]">Table 1.</span> {project.table.caption}
                    </caption>
                    <thead className="bg-[#0d1729]">
                      <tr>
                        {project.table.head.map((h) => (
                          <th key={h} scope="col" className="px-4 py-3 font-semibold text-[#f0f4ff]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {project.table.rows.map((row) => (
                        <tr key={row[0]} className="border-t border-[#1a2d4a]">
                          {row.map((cell, i) =>
                            i === 0 ? (
                              <th key={i} scope="row" className="px-4 py-3 font-medium text-[#f0f4ff]">
                                {cell}
                              </th>
                            ) : (
                              <td key={i} className="px-4 py-3">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {moreFigures.map((fig, i) => (
                <Figure key={fig.src} figure={fig} number={i + 2} />
              ))}
            </Section>

            <Section title="Limitations">
              <Bullets items={project.limitations} />
            </Section>
          </div>
        </div>
      </article>

      <section className="py-24 border-t border-[#1a2d4a]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold text-[#f0f4ff]">More projects</h2>
            <Link href="/projects" className="text-sm font-semibold text-[#00d4ff] hover:text-[#f0f4ff] transition-colors duration-200">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {more.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
