import { About } from "@/src/components/About";
import { Contact } from "@/src/components/Contact";
import { Experience } from "@/src/components/Experience";
import { Hero } from "@/src/components/Hero";
import { Navigation } from "@/src/components/Navigation";
import { ProjectsGallery } from "@/src/components/ProjectsGallery";
import { Skills } from "@/src/components/Skills";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <ProjectsGallery />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="site-container">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}</p>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </>
  );
}
