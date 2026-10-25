import { approach } from "@/data/skills";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EngineeringApproach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading id="approach-title" title="How I build" />
        <dl className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {approach.map((a) => (
            <div key={a.title} className="border-t border-line pt-4">
              <dt className="font-display text-lg font-medium">{a.title}</dt>
              <dd className="mt-2 leading-relaxed text-muted">{a.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
