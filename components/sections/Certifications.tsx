import { certifications } from "@/data/portfolio";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials that support the stack.">
      <div className="grid items-stretch gap-4 md:grid-cols-3">
        {certifications.map((certification) => (
          <Card key={certification.name} className="flex h-full min-h-[230px] flex-col p-6">
            <div className="mb-5 flex h-12 w-fit px-4 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
              {certification.badge}
            </div>
            <p className="text-sm text-slate-400">{certification.issuer}</p>
            <h3 className="mt-2 min-h-[56px] text-lg font-semibold leading-7 text-white">
              {certification.name}
            </h3>
            <div className="mt-4 min-h-[28px]">
              <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {certification.detail}
              </p>
            </div>
            <div className="mt-auto pt-6">
              <a
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                View Certification
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
