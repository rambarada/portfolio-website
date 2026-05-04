"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Card, Tag } from "@/components/ui";
import { Section } from "@/components/Section";

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <Section id="product-work" eyebrow="Product work" title="Product work & engineering wins.">
      <p className="-mt-4 mb-8 max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
        These are selected examples of product features, workflow improvements,
        and technical wins delivered across real web platforms.
      </p>
      <div className="grid gap-5 lg:grid-cols-[0.7fr_0.3fr]">
        <Card className="overflow-hidden p-0">
          <div className="relative overflow-hidden border-b border-line bg-gradient-to-br from-accent/18 via-skysoft/10 to-panel/40 p-5 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3 sm:block">
              <div className="w-fit rounded-full border border-line bg-ink/30 px-3 py-1 text-xs text-muted sm:absolute sm:right-6 sm:top-6">
                {activeIndex + 1} / {projects.length}
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  aria-label="Show previous product work"
                  className="rounded-md border border-line bg-panel/70 px-3 py-2 text-xs font-semibold text-foreground transition hover:border-accent hover:text-accent"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  aria-label="Show next product work"
                  className="rounded-md bg-accent px-3 py-2 text-xs font-semibold text-ink transition hover:bg-skysoft"
                >
                  Next
                </button>
              </div>
            </div>
            <p className="text-sm font-medium text-accent">{active.kicker}</p>
            <h3 className="mt-5 max-w-2xl text-xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {active.name}
            </h3>
          </div>
          <div className="p-6 sm:p-8">
            <div className="grid gap-4 lg:grid-cols-3">
              <div>
                <p className="font-semibold text-foreground">Context</p>
                <p className="mt-2 text-sm leading-6 text-muted">{active.context}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">What I improved</p>
                <p className="mt-2 text-sm leading-6 text-muted">{active.improved}</p>
              </div>
              <div className="rounded-md border border-accent/20 bg-accent/[0.06] p-4">
                <p className="font-semibold text-accent">Outcome</p>
                <p className="mt-2 text-sm leading-6 text-muted">{active.outcome}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <div className="mt-6 hidden flex-wrap items-center gap-3 sm:flex">
              <button
                type="button"
                onClick={() => move(-1)}
                className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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

        <div className="hidden gap-3 lg:grid">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg border p-4 text-left transition duration-300 ${
                activeIndex === index
                  ? "border-accent/70 bg-accent/10 text-foreground shadow-glow"
                  : "border-line bg-panel/50 text-muted hover:-translate-y-0.5 hover:border-accent/50"
              }`}
            >
              <p className="text-xs font-medium text-accent">{index + 1}</p>
              <p className="mt-2 text-sm font-semibold">{project.name}</p>
              <p className="mt-1 text-xs text-subdued">{project.kicker}</p>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}
