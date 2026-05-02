"use client";

import { useState } from "react";
import { experiences } from "@/data/portfolio";
import { Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

export function ExperienceTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + experiences.length) % experiences.length);
  };

  return (
    <Section id="experience" eyebrow="Experience" title="Focused experience, easy to scan.">
      <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:overflow-visible lg:pb-0">
          {experiences.map((item, index) => (
            <button
              key={item.company}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`min-w-56 rounded-lg border p-4 text-left transition duration-300 lg:min-w-0 ${
                activeIndex === index
                  ? "border-accent/70 bg-accent/10 text-white shadow-glow"
                  : "border-line bg-white/[0.03] text-slate-300 hover:-translate-y-0.5 hover:border-accent/50"
              }`}
              aria-pressed={activeIndex === index}
            >
              <p className="text-sm font-semibold">{item.company}</p>
              <p className="mt-1 text-xs text-slate-400">{item.period}</p>
            </button>
          ))}
        </div>

        <Card className="overflow-hidden p-0">
          <div className="border-b border-line bg-gradient-to-r from-accent/[0.12] to-transparent p-6">
            <p className="text-sm font-medium text-accent">{active.period}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{active.role}</h3>
            <p className="mt-1 text-sm text-slate-400">
              {active.company} - {active.location}
            </p>
          </div>
          <div className="p-6">
            <p className="max-w-3xl leading-7 text-slate-300">{active.summary}</p>
            <div className="mt-5 grid gap-3">
              {active.achievements.map((point) => (
                <div
                  key={point}
                  className="rounded-md border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300"
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-skysoft"
              >
                Next
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
