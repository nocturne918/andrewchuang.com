import { Header } from "@/components/header";
import { ProjectSection } from "@/components/project-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div className="space-y-14">
      <Header />
      {/* <ExperienceSection /> */}
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
