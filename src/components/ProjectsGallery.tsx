import { ArrowUpRight, ExternalLink, GitBranch, Layers3 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProjectsGallery() {
  return (
    <section id="projects" className="anchor-target border-t border-ink-700 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="05 / Selected work"
              title="Systems with a point of view."
              description="Four projects exploring how security engineering, machine intelligence, and practical product development can reinforce one another."
            />
            <p className="max-w-xs font-mono text-[0.65rem] uppercase leading-6 tracking-[0.16em] text-ink-500 sm:text-right">
              Built for clarity<br />
              designed for inspection
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <Reveal key={project.title} delay={0.08 * index} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-acid/55 hover:shadow-glow sm:p-8">
                <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-acid/[0.06] blur-3xl transition duration-500 group-hover:bg-acid/[0.12]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-ink-700 bg-ink-950 text-acid">
                      {index === 0 ? <GitBranch size={18} /> : <Layers3 size={18} />}
                    </span>
                    <span className="font-mono text-[0.66rem] tracking-[0.2em] text-ink-600">0{index + 1}</span>
                  </div>
                  <span className="rounded-full border border-acid/30 bg-acid/[0.09] px-3 py-1.5 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-acid">
                    {project.type}
                  </span>
                </div>

                <h3 className="relative mt-9 max-w-md text-2xl font-semibold leading-tight tracking-[-0.04em] text-ink-50 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="relative mt-5 max-w-xl text-sm leading-7 text-ink-300">{project.description}</p>

                <div className="relative mt-8 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span key={technology} className="rounded-full border border-ink-700 bg-ink-950 px-3 py-1.5 font-mono text-[0.62rem] text-ink-400">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="relative mt-auto pt-10">
                  <a
                    href={project.githubUrl}
                    aria-label={`Open ${project.title} GitHub repository`}
                    className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-200 transition hover:text-acid"
                  >
                    <ExternalLink size={14} />
                    GitHub repository
                    <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
