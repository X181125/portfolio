import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

export function About() {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section id="about" className="section-band about-section anchor-target" aria-labelledby="about-title">
      <div className="site-container section-columns">
        <div className="section-heading">
          <p className="kicker">03 / Background</p>
          <h2 id="about-title">Education &amp;<br /> achievements</h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <p className="kicker">Degree</p>
            <h3>{education.degree}</h3>
            <p>{education.school}</p>
            <p className="about-meta">
              <time dateTime={education.expectedDate}>{education.expected}</time>
              <span>GPA {education.gpa}</span>
            </p>
          </article>

          {achievements.map((achievement) => (
            <article className="about-card" key={achievement.title}>
              <p className="kicker">Competition</p>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <dl className="race-scores">
                {achievement.results.map(({ label, value }) => (
                  <div key={label}>
                    <dt>{label}</dt><dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
