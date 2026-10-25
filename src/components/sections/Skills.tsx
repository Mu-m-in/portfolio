import { skillGroups } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading id="skills-title" title="Skills and tools" lead="Grouped by area. No percentages: these are things I've used in projects or am actively learning." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display text-lg font-medium">{g.title}</h3>
              {g.note && <p className="mt-1 text-sm text-muted">{g.note}</p>}
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li key={it} className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-sm">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
