import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  const { name, nameLines, tagline, description, location } = PORTFOLIO_DATA.profile;
  const [firstLine, secondLine] = nameLines;
  const currentJob = PORTFOLIO_DATA.experience.find((job) => job.current);

  return (
    <section id="top" className="site-container anchor-target" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div>
          <p className="kicker hero-kicker">Engineering portfolio</p>
          <h1 id="hero-title" className="hero-title">
            {firstLine}<br />
            <em>{secondLine}</em><span className="hero-period" aria-hidden="true">.</span>
          </h1>
          <p className="hero-role">{tagline}</p>
          <p className="hero-description">{description}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Projects <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <Link href="/resume" className="text-link">
              View résumé <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-mat">
            <div className="portrait-image">
              <Image
                src="/avatar.jpg"
                alt={name}
                fill
                sizes="(max-width: 380px) 86vw, (max-width: 620px) 330px, (max-width: 1080px) 34vw, 385px"
                preload
              />
            </div>
          </div>
          <figcaption>
            <span className="figure-id">Fig. 01</span>
            <span><MapPin size={13} aria-hidden="true" /> {location}</span>
          </figcaption>
        </figure>
      </div>
      <div className="hero-foot">
        {currentJob && (
          <p className="current-role">
            <span className="kicker">Currently at</span>
            <a href="#experience">{currentJob.company}</a>
          </p>
        )}
        <SocialLinks />
      </div>
    </section>
  );
}
