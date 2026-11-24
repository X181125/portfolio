import Image from "next/image";
import { FileText, Github, Linkedin, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export function Hero() {
  const { hero } = PORTFOLIO_DATA;

  return (
    <section id="top" className="site-container hero-grid anchor-target" aria-labelledby="hero-title">
      <div>
        <p className="eyebrow hero-role">{hero.tagline}</p>
        <h1 id="hero-title" className="hero-title">
          {hero.firstName}
          <br />
          {hero.lastName}<span className="hero-period" aria-hidden="true">.</span>
        </h1>
        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore my work</a>
          <a href="/resume" className="button button-secondary">
            <FileText size={17} aria-hidden="true" />
            View résumé
          </a>
        </div>

        <div className="hero-socials">
          <a href={hero.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
          <a href={hero.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <figure className="hero-portrait">
        <div className="portrait-image">
          <Image
            src="/avatar.jpg"
            alt={hero.name}
            fill
            sizes="(max-width: 760px) 92vw, 420px"
            preload
          />
        </div>
        <figcaption>
          <MapPin size={17} aria-hidden="true" />
          {hero.location}
        </figcaption>
      </figure>
    </section>
  );
}
