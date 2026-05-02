import { skillGroups } from "@/data/portfolio";
import { Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A stack shaped around modern web products.">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title} className="overflow-hidden p-0">
            <div className={`h-2 bg-gradient-to-r ${group.accent}`} />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
