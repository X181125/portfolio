import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/src/components/PrintButton";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import "./resume.css";

const { achievements, education, experience, hero, languages, projects, skills } = PORTFOLIO_DATA;
const featuredProject = projects.find(({ id }) => id === "graph-transformer");

export const metadata: Metadata = {
  title: `Résumé | ${hero.name}`,
  description: `The professional résumé of ${hero.name}, an AI automation engineer in ${hero.location}.`,
};

function profileLabel(url: string) {
  return url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="site-container resume-container">
        <div className="resume-actions">
          <Link href="/" className="button button-secondary">
            Back to portfolio
          </Link>
          <PrintButton />
        </div>

        <article className="resume-sheet" aria-labelledby="resume-name">
          <header className="resume-header">
            <h1 id="resume-name">{hero.name}</h1>
            <p className="resume-role">{hero.tagline}</p>
            <ul className="resume-contacts" aria-label="Contact details">
              <li>{hero.location}</li>
              <li><a href={`mailto:${hero.email}`}>{hero.email}</a></li>
              <li><a href={hero.github}>{profileLabel(hero.github)}</a></li>
              <li><a href={hero.linkedin}>{profileLabel(hero.linkedin)}</a></li>
            </ul>
            <p className="resume-summary">{hero.description}</p>
          </header>

          <div className="resume-columns">
            <div className="resume-column">
              <section className="resume-section" aria-labelledby="resume-experience">
                <h2 id="resume-experience">Experience</h2>
                {experience.map(({ role, company, period, points }) => (
                  <div className="resume-entry" key={role}>
                    <div className="resume-entry-heading">
                      <h3>{role}</h3>
                      <p className="resume-date">{period}</p>
                    </div>
                    <p className="resume-secondary">{company}</p>
                    <ul className="resume-bullets">
                      {points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </section>

              {featuredProject && (
                <section className="resume-section" aria-labelledby="resume-projects">
                  <h2 id="resume-projects">Selected project</h2>
                  <div className="resume-entry">
                    <h3>{featuredProject.title}</h3>
                    <p className="resume-secondary">{featuredProject.tech.join(" · ")}</p>
                    <p>{featuredProject.description}</p>
                    <ul className="resume-bullets">
                      {featuredProject.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                    {featuredProject.githubUrl && (
                      <a className="resume-source" href={featuredProject.githubUrl}>
                        {profileLabel(featuredProject.githubUrl)}
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>

            <div className="resume-column">
              <section className="resume-section" aria-labelledby="resume-education">
                <h2 id="resume-education">Education</h2>
                <div className="resume-entry">
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                  <p className="resume-secondary">
                    <time dateTime={education.expectedDate}>{education.expected}</time>
                  </p>
                  <p className="resume-secondary">GPA {education.gpa}</p>
                </div>
              </section>

              <section className="resume-section" aria-labelledby="resume-skills">
                <h2 id="resume-skills">Technical skills</h2>
                {skills.map(({ label, items }) => (
                  <div className="resume-entry resume-skill" key={label}>
                    <h3>{label}</h3>
                    <p>{items.join(", ")}</p>
                  </div>
                ))}
              </section>

              <section className="resume-section" aria-labelledby="resume-achievements">
                <h2 id="resume-achievements">Competition</h2>
                {achievements.map(({ title, results }) => (
                  <div className="resume-entry" key={title}>
                    <h3>{title}</h3>
                    <dl className="resume-results">
                      {results.map(({ label, value }) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </section>

              <section className="resume-section" aria-labelledby="resume-languages">
                <h2 id="resume-languages">Languages</h2>
                {languages.map(({ name, proficiency }) => (
                  <div className="resume-entry resume-skill" key={name}>
                    <h3>{name}</h3>
                    <p>{proficiency}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
