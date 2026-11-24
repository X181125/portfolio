import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export function Experience() {
  return (
    <section id="experience" className="section-band anchor-target" aria-labelledby="experience-title">
      <div className="site-container section-columns">
        <div className="section-heading">
          <h2 id="experience-title">Experience</h2>
          <p>AI automation in business operations and applied security research.</p>
        </div>

        <ol className="experience-list">
          {PORTFOLIO_DATA.experience.map((entry) => (
            <li key={entry.role} className="experience-item">
              <div className="experience-title">
                <h3>{entry.role}</h3>
                <p className="experience-period">{entry.period}</p>
              </div>
              <p className="experience-company">{entry.company}</p>
              <ul className="contribution-list">
                {entry.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
