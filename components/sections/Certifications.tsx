import { certifications } from "@/data/portfolio";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials that support the stack.">
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((certification) => (
          <Card key={certification.name} className="p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
              {certification.badge}
            </div>
            <p className="text-sm text-slate-400">{certification.issuer}</p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{certification.name}</h3>
            <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
              {certification.detail}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
