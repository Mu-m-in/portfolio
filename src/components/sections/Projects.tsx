import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 border-t border-line bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading id="projects-title" title="Featured projects" lead="Full-stack applications, built end to end. Previews are illustrative; the code is on GitHub." />
        <div className="flex flex-col gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
