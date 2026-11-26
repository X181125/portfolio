import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";
import { ContactDialog } from "./ContactDialog";
import { CopyEmailButton } from "./CopyEmailButton";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const { email, name } = PORTFOLIO_DATA.profile;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="contact-section anchor-target">
      <div className="site-container section-columns">
        <div className="section-heading">
          <p className="kicker">05 / Contact</p>
          <h2 id="contact-heading">Get in touch.</h2>
        </div>
        <div className="contact-body">
          <p>For roles and collaborations in AI automation, software engineering, or security:</p>
          <div className="email-line">
            <a href={`mailto:${email}`}>{email}</a>
            <CopyEmailButton email={email} />
          </div>
          <div className="contact-actions">
            <ContactDialog email={email} name={name} />
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
