import { TechBadge } from "@/components/tech-badge";
import { TECH_ICONS } from "@/data/tech-stack";

export function SkillsSection() {
  const skills = Object.keys(TECH_ICONS);

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechBadge key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
