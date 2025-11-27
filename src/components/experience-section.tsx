import { EXPERIENCE } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-bold">Experience</h2>
      <div className="space-y-8">
        {EXPERIENCE.map((job) => (
          <div key={job.company} className="group">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {job.company}
              </h3>
              <span className="text-sm font-mono text-neutral-500">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {job.role}
            </p>
            <p className="text-sm text-neutral-500 mt-2 max-w-prose">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
