"use client";

import { useState } from "react";
import { personalProjects } from "@/data/portfolio";
import { Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

export function PersonalProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = personalProjects[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex(
      (current) => (current + direction + personalProjects.length) % personalProjects.length,
    );
  };

  return (
    <Section id="personal-projects" eyebrow="Technical labs" title="Personal projects & technical labs.">
      <p className="-mt-4 mb-6 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
        A few personal and academic builds that helped me explore different parts
        of the web and software stack.
      </p>

      <div className="max-w-4xl">
        <Card className="relative overflow-hidden p-0">
          <div className="h-1 bg-gradient-to-r from-accent/70 via-skysoft/30 to-transparent" />
          <div key={active.name} className="animate-rise p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-semibold text-accent">
                  {active.type}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-slate-400">
                  {active.date}
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-ink/35 px-3 py-1 text-xs text-slate-400">
                {activeIndex + 1} / {personalProjects.length}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              {active.name}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
              {active.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Show previous personal project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-base font-semibold text-white shadow-glow backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <span aria-hidden="true">&lt;</span>
              </button>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                {personalProjects.map((project, index) => (
                  <button
                    key={project.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${project.name}`}
                    aria-current={activeIndex === index}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-7 bg-accent shadow-[0_0_18px_rgba(79,209,197,.45)]"
                        : "w-2.5 bg-white/20 hover:bg-accent/60"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Show next personal project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-base font-semibold text-white shadow-glow backdrop-blur transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <span aria-hidden="true">&gt;</span>
              </button>
            </div>
          </div>
        </Card>
      </div>

      <p className="mt-5 text-sm text-slate-400">
        Additional personal builds available on GitHub.
      </p>
    </Section>
  );
}
