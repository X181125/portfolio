import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { ContributionList } from "./ContributionList";

export function Experience() {
  return (
    <section id="experience" className="section-band anchor-target" aria-labelledby="experience-title">
      <div className="site-container section-columns">
        <div className="section-heading">
          <p className="kicker">02 / Practice</p>
          <h2 id="experience-title">Experience</h2>
        </div>

        <ol>
          {PORTFOLIO_DATA.experience.map(({ id, role, company, period, points }) => (
            <li key={id} className="experience-item">
              <p className="experience-period">{period}</p>
              <h3>{role}</h3>
              <p className="experience-company">{company}</p>
              <ContributionList items={points} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
