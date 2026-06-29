import type { LegalDoc } from "@/lib/legal";

export function LegalArticle({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
      <h1 className="font-display text-4xl font-bold tracking-[-0.01em] text-navy">{doc.title}</h1>
      <p className="mt-2 text-sm text-muted">{doc.updated}</p>
      <p className="mt-6 rounded-md border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm text-muted">
        {doc.disclaimer}
      </p>
      <p className="mt-8 text-lg leading-relaxed text-muted">{doc.intro}</p>

      <div className="mt-12 space-y-10">
        {doc.sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-semibold text-navy">{s.h}</h2>
            {s.p?.map((para, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted">
                {para}
              </p>
            ))}
            {s.ul && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted">
                {s.ul.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
