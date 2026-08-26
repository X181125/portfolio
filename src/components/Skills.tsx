import { Check, Code2, Cpu, Languages, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    key: "ai_llm",
    label: "AI / LLM",
    number: "01",
    icon: Cpu,
    tone: "text-acid",
    description: "Reasoning systems that can be evaluated, traced, and improved.",
  },
  {
    key: "cybersecurity",
    label: "Cybersecurity",
    number: "02",
    icon: Shield,
    tone: "text-cyan",
    description: "Security workflows grounded in controlled scope and safe execution.",
  },
  {
    key: "frameworks",
    label: "Frameworks",
    number: "03",
    icon: Code2,
    tone: "text-[#d6a8ff]",
    description: "Practical tools for taking an idea from experiment to service.",
  },
  {
    key: "tools_languages",
    label: "Tools / Languages",
    number: "04",
    icon: Languages,
    tone: "text-[#ffbd7a]",
    description: "A broad base for building, debugging, and shipping across layers.",
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="anchor-target border-t border-ink-700 px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Toolkit"
            title="A focused, flexible stack."
            description="The tools are interchangeable. The standard stays the same: clear interfaces, controlled behavior, and useful output."
          />
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const skills = PORTFOLIO_DATA.skills[group.key];

            return (
              <Reveal key={group.key} delay={0.06 * index} className="h-full">
                <article className="card-surface group h-full rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-[0.2em] text-ink-600">{group.number}</p>
                      <h3 className={`mt-3 flex items-center gap-2 text-lg font-semibold ${group.tone}`}>
                        <Icon size={18} strokeWidth={1.7} />
                        {group.label}
                      </h3>
                    </div>
                      <span className="rounded-full border border-ink-700 p-2 text-ink-600 transition group-hover:border-ink-500 group-hover:text-ink-300">
                      <ArrowIcon />
                    </span>
                  </div>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-ink-400">{group.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li key={skill} className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-white/80 px-3 py-2 text-xs text-ink-200 transition hover:border-acid/50 hover:bg-white hover:text-ink-50">
                        <Check size={13} className={group.tone} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return <span className="block h-1.5 w-1.5 rounded-full bg-current" />;
}
