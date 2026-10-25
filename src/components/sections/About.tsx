import { profile } from "@/data/profile";
import SectionHeading from "@/components/ui/SectionHeading";

const layers = [
  { name: "Interface", detail: "React, responsive UI" },
  { name: "API", detail: "Node.js, Express, REST" },
  { name: "Data", detail: "SQL, MongoDB, auth, ownership" },
  { name: "AI", detail: "LLMs, RAG, agents" },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <SectionHeading id="about-title" title="About" />
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              I&apos;m a {profile.education.degree} student graduating in {profile.education.graduation}, focused on building real software rather than isolated interfaces.
            </p>
            <p>
              I like projects where a usable frontend sits on top of meaningful backend work: APIs, databases, authentication and user-specific data.
            </p>
            <p>
              I&apos;m now learning AI engineering, including LLM applications, retrieval-augmented generation and agentic AI, with the aim of bringing it into the full-stack products I build.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_30px_80px_-40px_rgba(76,194,255,0.2)]">
          <p className="mb-4 text-sm text-muted">What I work across</p>
          <ul className="flex flex-col gap-3">
            {layers.map((layer, index) => (
              <li key={layer.name} className="rounded-lg border border-line bg-surface-2 px-4 py-3.5" style={{ marginLeft: `${index * 10}px` }}>
                <p className="font-display font-medium">{layer.name}</p>
                <p className="text-sm text-muted">{layer.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
