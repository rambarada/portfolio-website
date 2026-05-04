import { education, principles } from "@/data/portfolio";
import { Card } from "@/components/ui";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="I connect product thinking with full-stack execution.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">
            I build practical web products for teams that need dependable workflows,
            clear interfaces, and cloud-backed systems. My work combines frontend
            architecture, backend APIs, integrations, automation, and delivery habits
            that keep products maintainable after launch.
          </p>
          <div className="mt-6 rounded-lg border border-line bg-panel/60 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Education
            </p>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-muted sm:grid-cols-2">
              {education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {principles.map((item) => (
            <Card key={item.title} className="p-5">
              <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
