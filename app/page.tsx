import { Navigation } from "@/src/components/Navigation";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Skills } from "@/src/components/Skills";
import { Experience } from "@/src/components/Experience";
import { ProjectsGallery } from "@/src/components/ProjectsGallery";
import { Contact } from "@/src/components/Contact";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="site-grid fixed inset-0 z-[-2]" aria-hidden="true" />
      <div className="noise fixed inset-0 z-[-1]" aria-hidden="true" />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsGallery />
        <Contact />
      </main>
      <footer className="border-t border-ink-700 px-5 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-ink-600 sm:flex-row">
          <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name}</span>
          <span>Designed for systems thinkers</span>
        </div>
      </footer>
    </div>
  );
}
