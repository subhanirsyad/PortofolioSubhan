import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Subhan Irsyaduddien",
  description: "Every project with its problem, approach, result and limitations.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 section-glow">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold text-[#00d4ff] tracking-widest uppercase mb-4">Projects</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#f0f4ff] mb-4">All projects</h1>
          <p className="text-[#6b7fa0] max-w-xl leading-relaxed mb-12">
            {projects.length} projects across LLM fine-tuning, NLP, BI, anomaly detection and statistics. Each page
            covers the problem, the approach, the result and what did not work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
