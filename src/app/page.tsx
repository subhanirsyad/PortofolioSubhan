import NameCard from "@/components/cards/NameCard";
import StatusCard from "@/components/cards/StatusCard";
import GpaCard from "@/components/cards/GpaCard";
import StackCard from "@/components/cards/StackCard";
import AboutCard from "@/components/cards/AboutCard";
import ProjectsCard from "@/components/cards/ProjectsCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import SkillsCard from "@/components/cards/SkillsCard";
import ContactCard from "@/components/cards/ContactCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c]">
      <div className="bento-grid py-3">
        <NameCard />
        <StatusCard />
        <GpaCard />
        <StackCard />
        <AboutCard />
        <ProjectsCard />
        <ExperienceCard />
        <SkillsCard />
        <ContactCard />
      </div>
    </main>
  );
}
