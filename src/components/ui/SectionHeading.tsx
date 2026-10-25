export default function SectionHeading({ id, title, lead }: { id: string; title: string; lead?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {lead && <p className="mt-3 text-base leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}
