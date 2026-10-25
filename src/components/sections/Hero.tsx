import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 sm:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-130 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28">
        <div>
          <p
            className="rise mb-3 text-base text-accent"
            style={{ ["--i" as string]: 0 }}
          >
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="rise font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-5xl"
            style={{ ["--i" as string]: 1 }}
          >
            {profile.name}
          </h1>
          <p
            className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ ["--i" as string]: 2 }}
          >
            {profile.intro}
          </p>
          <div
            className="rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ ["--i" as string]: 3 }}
          >
            <Button href="#projects">
              Explore My Projects <ArrowDown className="size-4" aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
          <div
            className="rise mt-8 flex gap-3"
            style={{ ["--i" as string]: 4 }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md pr-3 text-sm text-muted hover:text-ink"
            >
              <GitHubIcon className="size-5" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-md pr-3 text-sm text-muted hover:text-ink"
            >
              <LinkedInIcon className="size-5" /> LinkedIn
            </a>
          </div>
        </div>

        <figure
          className="rise relative aspect-6/5 overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(76,194,255,0.35)]"
          style={{ ["--i" as string]: 3 }}
        >
          <Image
            src="/myimage.png"
            alt="Portrait of Mumin Tariq"
            width={600}
            height={520}
            priority
            className="absolute inset-0 block h-full w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
