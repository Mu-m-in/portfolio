import { Mail } from "lucide-react";
import { emailHref, profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-20 border-t border-line bg-surface/30"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          id="contact-title"
          title="Let's connect"
          lead="II'm interested in software engineering and AI engineering internships where I can contribute to real products, learn from experienced developers, and solve meaningful technical problems.

      Feel free to explore my projects or reach out."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {emailHref ? (
            <Button href={emailHref}>
              <Mail className="size-4" aria-hidden /> {profile.email}
            </Button>
          ) : (
            // TODO: set email and emailConfigured in src/data/profile.ts
            <span className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-dashed border-line px-5 text-sm text-muted">
              <Mail className="size-4" aria-hidden /> Email: {profile.email}
            </span>
          )}
          <Button href={profile.linkedin} external variant="secondary">
            <LinkedInIcon className="size-4" /> LinkedIn
          </Button>
          <Button href={profile.github} external variant="secondary">
            <GitHubIcon className="size-4" /> GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
