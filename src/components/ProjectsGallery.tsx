import { ArrowUpRight, Plus } from "lucide-react";
import { PORTFOLIO_DATA, type Project } from "@/src/data/portfolio_data";
import { ContributionList } from "./ContributionList";
import { TechnologyList } from "./TechnologyList";

function RepositoryLink({ href, title }: { href: string; title: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-link">
      View repository<span className="sr-only"> for {title} on GitHub</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function GraphTransformerDiagram() {
  return (
    <figure className="graph-figure">
      <figcaption><span className="figure-id">Fig. 02</span> Model architecture</figcaption>
      <svg viewBox="0 0 340 204" role="img" aria-labelledby="graph-title graph-desc">
        <title id="graph-title">From source code to classification</title>
        <desc id="graph-desc">Syntax, control-flow and data-flow graphs from C/C++ code feed a Graph Transformer for vulnerability classification.</desc>
        <g className="graph-line" fill="none">
          <path d="M170 24v16M55 60V40h230v20M170 40v20" />
          <path d="M55 88v27h230V88M170 88v44M170 162v18" />
        </g>
        <g className="graph-node">
          <rect x="13" y="60" width="84" height="28" /><rect x="119" y="60" width="102" height="28" />
          <rect x="235" y="60" width="100" height="28" />
        </g>
        <rect className="graph-model" x="88" y="131" width="164" height="32" />
        <g textAnchor="middle" className="graph-label">
          <text x="170" y="16">C/C++ source</text>
          <text x="55" y="78">Syntax</text><text x="170" y="78">Control flow</text><text x="285" y="78">Data flow</text>
          <text x="170" y="151" className="model-label">Graph Transformer</text>
          <text x="170" y="198">Vulnerability classification</text>
        </g>
      </svg>
    </figure>
  );
}

function ProjectNotes({ project }: { project: Project }) {
  return (
    <details className="project-notes">
      <summary>My contributions <Plus size={15} aria-hidden="true" /></summary>
      <ContributionList items={project.details} />
    </details>
  );
}

export function ProjectsGallery() {
  const { featuredProject, otherProjects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="section-band work-section anchor-target" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-heading work-heading">
          <div>
            <p className="kicker">01 / Project index</p>
            <h2 id="projects-title">Projects</h2>
          </div>
          <span className="index-count">{String(1 + otherProjects.length).padStart(2, "0")} projects</span>
        </div>

        <article className="featured-project">
          <GraphTransformerDiagram />
          <div className="featured-copy">
            <p className="kicker project-category">Featured / {featuredProject.category}</p>
            <h3>{featuredProject.title}</h3>
            <p className="project-description">{featuredProject.description}</p>
            <TechnologyList items={featuredProject.tech} />
            <ProjectNotes project={featuredProject} />
            {featuredProject.githubUrl && <RepositoryLink href={featuredProject.githubUrl} title={featuredProject.title} />}
          </div>
        </article>

        <div className="project-index">
          {otherProjects.map((project, index) => (
            <article key={project.id} className="index-row">
              <span className="index-number" aria-hidden="true">{String(index + 2).padStart(2, "0")}</span>
              <div className="index-title">
                <p className="kicker">{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="index-description">
                <p className="project-description">{project.description}</p>
                <TechnologyList items={project.tech} />
                <ProjectNotes project={project} />
              </div>
              {project.githubUrl && <RepositoryLink href={project.githubUrl} title={project.title} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
