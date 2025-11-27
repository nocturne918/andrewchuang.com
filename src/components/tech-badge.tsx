import { Icon } from "@iconify/react";
import { TECH_ICONS } from "@/data/tech-stack";

interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  const iconName = TECH_ICONS[name];

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
      {iconName && <Icon icon={iconName} className="w-3.5 h-3.5" />}
      {name}
    </span>
  );
}
