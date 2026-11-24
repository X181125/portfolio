import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export function Skills() {
  return (
    <section id="skills" className="section-band anchor-target" aria-labelledby="skills-title">
      <div className="site-container section-columns">
        <div className="section-heading">
          <h2 id="skills-title">Technical skills</h2>
        </div>

        <div className="skill-list">
          {PORTFOLIO_DATA.skills.map(({ label, items }) => (
            <div className="skill-row" key={label}>
              <h3>{label}</h3>
              <ul className="tech-list">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
