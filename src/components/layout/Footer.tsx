import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="text-ink">{profile.name}</span>, full stack AI engineer.
          <span className="ml-2">© {new Date().getFullYear()}</span>
        </p>
        <div className="flex gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="inline-flex size-11 items-center justify-center rounded-md hover:text-ink">
            <GitHubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="inline-flex size-11 items-center justify-center rounded-md hover:text-ink">
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
