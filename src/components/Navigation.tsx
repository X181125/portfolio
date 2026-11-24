const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a href="#top" className="site-brand" aria-label="Nguyen Dinh Hung, home">
          <span className="brand-mark" aria-hidden="true">NH</span>
          <span className="brand-name">Nguyen Dinh Hung</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="button button-secondary header-contact">Contact</a>
      </div>
    </header>
  );
}
