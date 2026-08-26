import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { CopyEmailButton } from "./CopyEmailButton";
import { Reveal } from "./Reveal";

const RESUME_URL =
  "https://drive.google.com/drive/folders/1ALM_SBVmAyLB9_zoiq1tUD8d4NLnOw_f?usp=sharing";

export function Hero() {
  const { hero } = PORTFOLIO_DATA;

  return (
    <section id="top" className="anchor-target relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24 lg:px-10 lg:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/[0.09] px-3 py-2 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-acid">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
            </span>
            Available for high-impact work
          </div>

          <h1 className="max-w-4xl text-[clamp(3.1rem,9vw,7.4rem)] font-semibold leading-[1.01] tracking-[-0.075em] text-ink-50">
            <span className="block">{hero.name.split(" ")[0]}</span>
            <span className="block text-ink-50">{hero.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <div className="mt-8 flex items-center gap-3 font-mono text-sm sm:text-base">
            <span className="h-px w-10 bg-acid" />
            <span className="font-semibold text-acid">{hero.tagline}</span>
          </div>

          <p className="mt-7 max-w-xl text-base leading-8 text-ink-300 sm:text-lg sm:leading-9">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#8bd438] px-5 py-3.5 text-sm font-semibold text-ink-50 transition hover:-translate-y-0.5 hover:bg-[#a8e34a] hover:shadow-glow-sm"
            >
              <FileText size={17} />
              View Resume
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-ink-700 px-5 py-3.5 text-sm font-semibold text-ink-100 transition hover:-translate-y-0.5 hover:border-acid/60 hover:bg-ink-950"
            >
              Explore selected work
              <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-500">Find me</span>
            <a
              href={`https://${hero.github}`}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 text-ink-300 transition hover:border-acid/60 hover:text-acid"
            >
              <Github size={16} />
            </a>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 text-ink-300 transition hover:border-acid/60 hover:text-acid"
            >
              <Linkedin size={16} />
            </a>
            <CopyEmailButton
              email={hero.email}
              label="Copy email address"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 text-ink-300 transition hover:border-acid/60 hover:text-acid"
            >
              <Mail size={16} />
            </CopyEmailButton>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -right-8 -top-10 h-32 w-32 animate-float rounded-full bg-acid/[0.08] blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-cyan/[0.08] blur-3xl" />

          <div className="gradient-border relative rounded-2xl p-px shadow-glow">
            <div className="overflow-hidden rounded-2xl bg-white">
              <div className="flex items-center justify-between border-b border-ink-700 px-4 py-3 font-mono text-[0.65rem] text-ink-400 sm:px-5">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-acid" />
                  <span>builder_profile.ts</span>
                </div>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
                  <span className="h-2 w-2 rounded-full bg-[#ffd166]" />
                  <span className="h-2 w-2 rounded-full bg-acid" />
                </div>
              </div>

              <div className="grid gap-7 p-5 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="relative shrink-0">
                    <div className="absolute -inset-1 rounded-2xl bg-acid/20 blur-md" />
                    <Image
                      src="/avatar.jpg"
                      alt={hero.name}
                      width={72}
                      height={72}
                      className="relative h-[72px] w-[72px] rounded-2xl border border-acid/25 object-cover grayscale-[0.15]"
                    />
                  </div>
                  <div className="min-w-0 pt-1">
                    <p className="font-mono text-[0.68rem] font-semibold text-ink-400">const identity =</p>
                    <p className="mt-1 truncate font-mono text-sm text-ink-100 sm:text-base">
                      &quot;{hero.name}&quot;
                    </p>
                    <p className="mt-2 flex items-center gap-2 font-mono text-[0.66rem] font-semibold text-acid">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                      online / building
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-l border-acid/30 pl-4 font-mono text-[0.72rem] leading-6 text-ink-300 sm:text-[0.78rem]">
                  <p className="terminal-line"><span className="text-cyan">stack</span> = [PyTorch, LangGraph, FastAPI]</p>
                  <p className="terminal-line"><span className="text-cyan">mission</span> = &quot;secure, observable AI&quot;</p>
                  <p className="terminal-line"><span className="text-cyan">approach</span> = &quot;systems over demos&quot;</p>
                  <p className="terminal-line"><span className="text-cyan">guardrails</span> = true<span className="ml-1 inline-block animate-blink text-acid">_</span></p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-ink-700 bg-ink-950 p-3">
                    <BrainCircuit size={17} className="text-acid" />
                    <p className="mt-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink-400">Core</p>
                    <p className="mt-1 text-sm font-medium text-ink-100">AI systems</p>
                  </div>
                  <div className="rounded-xl border border-ink-700 bg-ink-950 p-3">
                    <ShieldCheck size={17} className="text-cyan" />
                    <p className="mt-3 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink-400">Mindset</p>
                    <p className="mt-1 text-sm font-medium text-ink-100">Secure by design</p>
                  </div>
                  <div className="col-span-2 rounded-xl border border-ink-700 bg-ink-950 p-3 sm:col-span-1">
                    <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink-400">Status</p>
                    <p className="mt-2 flex items-center gap-2 text-sm font-medium text-ink-100"><span className="h-1.5 w-1.5 rounded-full bg-acid" />Open to collaborate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between px-1 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ink-500">
            <span>01 / 04 — intro</span>
            <span className="flex items-center gap-2"><span className="h-px w-8 bg-ink-700" />scroll to explore</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
