import { Github, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/src/data/portfolio_data";

const { github, linkedin } = PORTFOLIO_DATA.profile;

const socialLinks = [
  { href: github, label: "GitHub", Icon: Github },
  { href: linkedin, label: "LinkedIn", Icon: Linkedin },
];

export function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer">
          <Icon size={17} aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
}
