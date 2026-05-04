"use client";

import { useState } from "react";
import type { Experience } from "@/data/portfolio";
import { experiences } from "@/data/portfolio";
import { Tag } from "@/components/ui";

function BriefcaseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <path d="M4 8h16a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1Z" />
      <path d="M9 13h6" />
      <path d="M3 12h18" />
    </svg>
  );
}

function ExperienceCard({
  item,
  index,
  expanded,
  onToggle,
}: {
  item: Experience;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isLeft = index % 2 === 0;
  const placement = isLeft
    ? "lg:col-start-1 lg:justify-self-end"
    : "lg:col-start-3 lg:justify-self-start";

  return (
    <article
      className={`relative grid grid-cols-[1rem_minmax(0,1fr)] gap-x-4 sm:gap-x-6 lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] lg:gap-x-0 ${
        index > 0 ? "mt-10 lg:mt-14" : ""
      }`}
    >
      <div className="relative col-start-1 row-start-1 flex justify-center lg:col-start-2">
        <div className="mt-8 h-3 w-3 rounded-full border-2 border-accent bg-ink shadow-[0_0_0_4px_rgba(79,209,197,.08),0_0_22px_rgba(79,209,197,.9)]" />
      </div>
      <div
        className={`group col-start-2 row-start-1 w-full rounded-lg border border-line bg-panel/90 p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,.16)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-[0_24px_90px_rgba(79,209,197,.09)] sm:max-w-[420px] sm:p-7 lg:ml-0 ${placement}`}
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
          <BriefcaseIcon />
          <span>{item.period}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{item.company}</h3>
        <p className="mt-1 text-sm font-medium text-subdued">{item.role}</p>
        <p className="mt-5 text-sm leading-6 text-subdued">{item.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.stack.slice(0, 5).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div
          className={`grid transition-all duration-500 ease-out ${
            expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-md border border-line bg-ink/25 p-4">
              <p className="mb-3 text-sm font-semibold text-foreground">Key achievements</p>
              <ul className="space-y-3 text-sm leading-6 text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          className="mt-5 rounded-md border border-line px-4 py-2 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          {expanded ? "Hide details" : "Show details"}
        </button>
      </div>
    </article>
  );
}

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-line bg-ink px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(79,209,197,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,.8)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-accent/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-6xl scroll-mt-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experience shaped by real product delivery.
          </h2>
          <p className="mt-4 text-base leading-7 text-subdued">
            A timeline of full-stack work across web platforms, cloud integrations,
            and workflow automation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-px -translate-x-1/2 bg-accent/80 shadow-[0_0_18px_rgba(79,209,197,.45)] lg:hidden" />
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-accent/80 shadow-[0_0_20px_rgba(79,209,197,.45)] lg:block">
            <div className="absolute inset-y-0 left-1/2 w-4 -translate-x-1/2 bg-accent/10 blur-xl" />
          </div>
          <div className="space-y-10 lg:space-y-0">
            {experiences.map((item, index) => (
              <ExperienceCard
                key={`${item.company}-${item.period}`}
                item={item}
                index={index}
                expanded={expandedIndex === index}
                onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
