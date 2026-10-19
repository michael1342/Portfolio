import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./BrandIcons";
import { social } from "../data/projects";



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          © {year} Michael Anazodo. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4">
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary hover:text-accent transition-colors focus-ring rounded"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-accent transition-colors focus-ring rounded"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-secondary hover:text-accent transition-colors focus-ring rounded"
            >
              <TwitterIcon size={18} />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              aria-label="Email"
              className="text-secondary hover:text-accent transition-colors focus-ring rounded"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
