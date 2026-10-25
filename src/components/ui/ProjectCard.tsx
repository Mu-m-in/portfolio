import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { statusLabels } from "@/data/projects";
import { GitHubIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import ProjectPreview from "@/components/ui/ProjectPreview";

const statusDot: Record<Project["status"], string> = {
  live: "bg-emerald-400",
  "awaiting-deployment": "bg-amber-400",
  "in-progress": "bg-accent",
};

export default function ProjectCard({ project, flip }: { project: Project; flip?: boolean }) {
  const headingId = `${project.id}-title`;
  return (
    <article aria-labelledby={headingId} className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/40 lg:grid-cols-2">
      <div className={`border-b border-line lg:border-b-0 ${flip ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
        <ProjectPreview
          image={project.previewImage}
          name={project.name}
          category={project.category}
        />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span>{project.category}</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1">
            <span className={`size-2 rounded-full ${statusDot[project.status]}`} aria-hidden />
            {statusLabels[project.status]}
          </span>
        </div>
        <h3 id={headingId} className="mt-4 font-display text-3xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
          {project.engineering.map((e) => (
            <li key={e} className="flex gap-3">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{e}</span>
            </li>
          ))}
        </ul>

        <ul aria-label={`${project.name} technology stack`} className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <li key={s} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted">{s}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={project.repoUrl} external variant="secondary">
            <GitHubIcon className="size-4" /> View {project.name} on GitHub
          </Button>
          {project.demoUrl ? (
            <Button href={project.demoUrl} external>
              Open live demo <ArrowUpRight className="size-4" aria-hidden />
            </Button>
          ) : (
            <span className="inline-flex min-h-11 items-center px-1 text-sm text-muted">Live demo: coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
