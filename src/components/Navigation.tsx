import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navigation() {
  return (
    <header className="nav-blur sticky top-0 z-50 border-b border-ink-700">
      <div className="mx-auto flex max-w-6xl items-center gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <nav aria-label="Primary navigation" className="min-w-0 flex-1 overflow-x-auto">
          <ul className="flex min-w-max items-center justify-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-3 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ink-300 transition hover:bg-ink-900 hover:text-ink-50 sm:px-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-acid/55 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-acid transition hover:bg-[#8bd438] hover:text-ink-50 sm:flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
}
