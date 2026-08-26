import { ArrowUpRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="anchor-target border-t border-ink-700 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.74fr_1.26fr] lg:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Field notes"
            title="Experience that compounds."
            description="A research internship focused on making agentic security workflows more reliable, inspectable, and useful."
          />
        </Reveal>

        <div className="relative">
          <div className="timeline-line absolute bottom-4 left-[7px] top-4 w-px opacity-80" aria-hidden="true" />
          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((entry, index) => (
              <Reveal key={`${entry.company}-${entry.role}`} delay={0.08 * index}>
                <article className="relative pl-9 sm:pl-12">
                  <div className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-acid/70 bg-ink-950 shadow-[0_0_0_5px_rgba(185,242,39,0.06)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                  </div>
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-acid">{entry.company}</p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-ink-50">{entry.role}</h3>
                    </div>
                    <p className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-700 px-3 py-2 font-mono text-[0.64rem] text-ink-400">
                      <CalendarDays size={13} />
                      {entry.duration}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-ink-300">
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-ink-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#projects" className="mt-7 inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-ink-500 transition hover:text-acid">
                    See related systems <ArrowUpRight size={13} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
