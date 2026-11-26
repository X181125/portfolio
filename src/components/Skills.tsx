import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { TechnologyList } from "./TechnologyList";

export function Skills() {
  return (
    <section id="skills" className="section-band anchor-target" aria-labelledby="skills-title">
      <div className="site-container section-columns">
        <div className="section-heading">
          <p className="kicker">04 / Toolkit</p>
          <h2 id="skills-title">Technical skills</h2>
        </div>

        <div>
          {PORTFOLIO_DATA.skills.map(({ label, items }) => (
            <div className="skill-row" key={label}>
              <h3>{label}</h3>
              <TechnologyList items={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
