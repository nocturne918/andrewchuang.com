import Link from "next/link";
import { Icon } from "@iconify/react";

const NAV_ITEMS = [
  { label: "home", href: "/" },
  { label: "blog", href: "/blog" },
  { label: "cloud", href: "#", title: "Coming Soon" },
];

const SOCIAL_LINKS = [
  { icon: "simple-icons:github", href: "https://github.com/nocturne918" },
  { icon: "simple-icons:linkedin", href: "https://linkedin.com/in/andrew-cs" },
  { icon: "simple-icons:gmail", href: "mailto:andrewchuangsaladin@gmail.com" },
];

export function Navbar() {
  return (
    <nav className="fixed -translate-x-1/2 left-1/2 z-50 sm:top-6 sm:bottom-auto w-fit px-4">
      <div className="flex items-center gap-6 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 px-6 py-3 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 text-md font-mono text-neutral-400">
          <span className="text-neutral-600">::</span>
          {NAV_ITEMS.map((link, index) => (
            <div key={link.label} className="flex items-center gap-2">
              <Link
                href={link.href}
                className="hover:text-white transition-colors underline decoration-transparent hover:decoration-neutral-500 underline-offset-4"
              >
                {link.label}
              </Link>
              {index < NAV_ITEMS.length - 1 && (
                <span className="text-neutral-600">::</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 pl-4 border-l border-neutral-800 ml-4">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <Icon icon={link.icon} className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}