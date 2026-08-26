import { ArrowUpRight, Eye, Fingerprint, Radar } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const principles = [
  {
    icon: Fingerprint,
    label: "Security first",
    detail: "Guardrails and scope control are part of the product, not an afterthought.",
  },
  {
    icon: Radar,
    label: "Observable systems",
    detail: "Every agent decision should leave a trace that a human can inspect.",
  },
  {
    icon: Eye,
    label: "Research mindset",
    detail: "Prototype quickly, measure honestly, and turn experiments into reliable workflows.",
  },
];

export function About() {
  return (
    <section id="about" className="anchor-target border-t border-ink-700 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.74fr_1.26fr] lg:gap-24">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Perspective"
            title="Engineering with a threat model."
          />
          <div className="mt-8 flex items-center gap-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink-400">
            <span className="h-px w-12 bg-ink-700" />
            Built at the intersection of AI + security
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.08}>
            <p className="text-xl leading-9 tracking-[-0.025em] text-ink-100 sm:text-2xl sm:leading-10">
              {PORTFOLIO_DATA.about.journey}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.label} delay={0.12 + index * 0.07} className="h-full">
                  <article className="card-surface group h-full rounded-2xl p-5 transition duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <Icon size={19} className="text-acid" />
                      <ArrowUpRight size={15} className="text-ink-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid" />
                    </div>
                    <h3 className="mt-9 text-sm font-semibold text-ink-100">{principle.label}</h3>
                    <p className="mt-2 text-xs leading-6 text-ink-400">{principle.detail}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
