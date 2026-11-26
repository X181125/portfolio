import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const { name, initials } = PORTFOLIO_DATA.profile;

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a href="#top" className="site-brand">
          <span className="brand-mark">{initials}</span>
          <span className="brand-name">{name}</span>
          <span className="sr-only">Home</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="header-contact">Contact <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
    </header>
  );
}
