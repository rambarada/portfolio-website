"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { ArrowLink, Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <Section id="projects" eyebrow="Projects" title="Featured case-study previews.">
      <div className="grid gap-5 lg:grid-cols-[0.7fr_0.3fr]">
        <Card className="overflow-hidden p-0">
          <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-accent/18 via-skysoft/10 to-white/[0.03] p-6 sm:p-8">
            <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-ink/40 px-3 py-1 text-xs text-slate-300">
              0{activeIndex + 1} / 0{projects.length}
            </div>
            <p className="text-sm font-medium text-accent">{active.kicker}</p>
            <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white">
              {active.name}
            </h3>
          </div>
          <div className="p-6 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-100">Problem</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{active.problem}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-100">Solution</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{active.solution}</p>
              </div>
              <div className="rounded-md border border-accent/20 bg-accent/[0.06] p-4">
                <p className="font-semibold text-accent">Impact</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{active.impact}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ArrowLink href="#contact">View details</ArrowLink>
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

        <div className="grid gap-3">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg border p-4 text-left transition duration-300 ${
                activeIndex === index
                  ? "border-accent/70 bg-accent/10 text-white shadow-glow"
                  : "border-line bg-white/[0.03] text-slate-300 hover:-translate-y-0.5 hover:border-accent/50"
              }`}
            >
              <p className="text-xs font-medium text-accent">0{index + 1}</p>
              <p className="mt-2 text-sm font-semibold">{project.name}</p>
              <p className="mt-1 text-xs text-slate-400">{project.kicker}</p>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
