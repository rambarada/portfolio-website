import { skillGroups } from "@/data/portfolio";
import { Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

const icons = {
  interface: (
    <path d="M4 6.5h16M7 11h5m-5 4h10M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
  ),
  integration: (
    <path d="M8 7h8M8 17h8M7 7a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm13 10a3 3 0 1 1-3-3 3 3 0 0 1 3 3ZM7 7l10 10" />
  ),
  cloud: (
    <path d="M7.5 18h9a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 6.5 8.5 4.75 4.75 0 0 0 7.5 18Z" />
  ),
  data: (
    <path d="M6 7c0-1.66 2.69-3 6-3s6 1.34 6 3-2.69 3-6 3-6-1.34-6-3Zm0 0v5c0 1.66 2.69 3 6 3s6-1.34 6-3V7m-12 5v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
  ),
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Skills I use to build production-ready web platforms.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card
            key={group.title}
            className="animate-rise flex min-h-[320px] flex-col overflow-hidden p-0"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className={`h-2 bg-gradient-to-r ${group.accent}`} />
            <div className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    {group.description}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent shadow-[0_0_28px_rgba(79,209,197,.12)] transition duration-300 group-hover:border-accent/60 group-hover:bg-accent/15">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    {icons[group.icon]}
                  </svg>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <div className="rounded-md border border-accent/20 bg-accent/[0.06] px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Applied to
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300 md:text-[13px]">
                    {group.proof}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
