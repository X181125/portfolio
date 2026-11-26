import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContributionList } from "@/src/components/ContributionList";
import { PrintButton } from "@/src/components/PrintButton";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import "./resume.css";

const { achievements, education, experience, featuredProject, languages, profile, skills } = PORTFOLIO_DATA;

export const metadata: Metadata = {
  title: `Résumé | ${profile.name}`,
  description: `The professional résumé of ${profile.name}, an AI automation engineer in ${profile.location}.`,
};

function displayUrl(url: string) {
  return url.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, "");
}

type ResumeSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function ResumeSection({ id, title, children }: ResumeSectionProps) {
  return (
    <section className="resume-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      {children}
    </section>
  );
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
            <h1 id="resume-name">{profile.name}</h1>
            <p className="resume-role">{profile.tagline}</p>
            <ul className="resume-contacts" aria-label="Contact details">
              <li>{profile.location}</li>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><a href={profile.github}>{displayUrl(profile.github)}</a></li>
              <li><a href={profile.linkedin}>{displayUrl(profile.linkedin)}</a></li>
            </ul>
            <p className="resume-summary">{profile.description}</p>
          </header>

          <div className="resume-columns">
            <div className="resume-column">
              <ResumeSection id="resume-experience" title="Experience">
                {experience.map(({ id, role, company, period, points }) => (
                  <div className="resume-entry" key={id}>
                    <div className="resume-entry-heading">
                      <h3>{role}</h3>
                      <p className="resume-date">{period}</p>
                    </div>
                    <p className="resume-secondary">{company}</p>
                    <ContributionList items={points} className="resume-bullets" />
                  </div>
                ))}
              </ResumeSection>

              <ResumeSection id="resume-projects" title="Selected project">
                <div className="resume-entry">
                  <h3>{featuredProject.title}</h3>
                  <p className="resume-secondary">{featuredProject.tech.join(" · ")}</p>
                  <p>{featuredProject.description}</p>
                  <ContributionList items={featuredProject.details} className="resume-bullets" />
                  {featuredProject.githubUrl && (
                    <a className="resume-source" href={featuredProject.githubUrl}>
                      {displayUrl(featuredProject.githubUrl)}
                    </a>
                  )}
                </div>
              </ResumeSection>
            </div>

            <div className="resume-column">
              <ResumeSection id="resume-education" title="Education">
                <div className="resume-entry">
                  <h3>{education.school}</h3>
                  <p>{education.degree}</p>
                  <p className="resume-secondary">
                    <time dateTime={education.expectedDate}>{education.expected}</time>
                  </p>
                  <p className="resume-secondary">GPA {education.gpa}</p>
                </div>
              </ResumeSection>

              <ResumeSection id="resume-skills" title="Technical skills">
                {skills.map(({ label, items }) => (
                  <div className="resume-entry resume-skill" key={label}>
                    <h3>{label}</h3>
                    <p>{items.join(", ")}</p>
                  </div>
                ))}
              </ResumeSection>

              <ResumeSection id="resume-achievements" title="Competition">
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
              </ResumeSection>

              <ResumeSection id="resume-languages" title="Languages">
                {languages.map(({ name, proficiency }) => (
                  <div className="resume-entry resume-skill" key={name}>
                    <h3>{name}</h3>
                    <p>{proficiency}</p>
                  </div>
                ))}
              </ResumeSection>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
