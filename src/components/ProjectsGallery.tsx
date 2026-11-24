import { Code2, GitBranch, Github, Monitor, Radio, type LucideIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

const projectIcons: Partial<Record<string, LucideIcon>> = {
  "real-time-auction": Radio,
  "internet-cafe-manager": Monitor,
  "agent-research": GitBranch,
};

function TechnologyList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tech-list" aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function RepositoryLink({ href, title }: { href: string; title: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="repo-link" aria-label={`GitHub repository for ${title}`}>
      <Github size={17} aria-hidden="true" />
      View on GitHub
    </a>
  );
}

export function ProjectsGallery() {
  const [featured, ...moreProjects] = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="section-band anchor-target" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-heading">
          <h2 id="projects-title">Projects</h2>
          <p>Machine learning research, AI agents, and applications I’ve built.</p>
        </div>

        <article className="featured-project">
          <div className="featured-copy">
            <p className="eyebrow">{featured.category}</p>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <ul className="contribution-list">
              {featured.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <TechnologyList items={featured.tech} />
            {featured.githubUrl && <RepositoryLink href={featured.githubUrl} title={featured.title} />}
          </div>

          <div className="graph-visual" aria-hidden="true">
            <div className="graph-visual-heading">
              <Code2 size={17} />
              <span>C/C++ source</span>
            </div>
            <div className="graph-inputs">
              <span>AST</span>
              <span>Control flow</span>
              <span>Data flow</span>
            </div>
            <div className="graph-model">
              <GitBranch size={26} />
              <span>Graph Transformer</span>
            </div>
            <div className="graph-output">Vulnerability classification</div>
          </div>
        </article>

        <div className="project-grid">
          {moreProjects.map((project) => {
            const Icon = projectIcons[project.id] ?? Code2;

            return (
              <article className="project-card" key={project.id}>
                <div className="project-icon"><Icon size={22} aria-hidden="true" /></div>
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <details className="project-details">
                  <summary>My contributions</summary>
                  <ul className="contribution-list">
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </details>
                <TechnologyList items={project.tech} />
                {project.githubUrl && <RepositoryLink href={project.githubUrl} title={project.title} />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
