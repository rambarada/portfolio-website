"use client";

import { useState } from "react";
import type { Experience } from "@/data/portfolio";
import { experiences } from "@/data/portfolio";
import { Tag } from "@/components/ui";

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
  const side = index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16";
  const alignTags = index % 2 === 0 ? "lg:justify-end" : "";
  const dotPosition =
    index % 2 === 0
      ? "-left-[2.85rem] lg:left-auto lg:right-[-2.55rem]"
      : "-left-[2.85rem] lg:left-[-2.55rem]";

  return (
    <article className={`relative lg:grid lg:grid-cols-2 ${index > 0 ? "mt-8 lg:mt-0" : ""}`}>
      <div
        className={`group relative ml-10 rounded-lg border border-line bg-panel/75 p-5 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-panel sm:p-6 lg:ml-0 ${side}`}
      >
        <div
          className={`absolute top-7 h-4 w-4 rounded-full border border-accent bg-ink shadow-[0_0_20px_rgba(79,209,197,.75)] ${dotPosition}`}
        />

        <p className="text-sm font-semibold text-accent">{item.period}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{item.company}</h3>
        <p className="mt-1 text-sm font-medium text-slate-400">{item.role}</p>
        <p className="mt-4 text-sm leading-6 text-slate-300">{item.summary}</p>

        <div className={`mt-5 flex flex-wrap gap-2 ${alignTags}`}>
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
            <div className="rounded-md border border-white/10 bg-white/[0.025] p-4">
              <p className="mb-3 text-sm font-semibold text-white">Selected achievements</p>
              <ul className="space-y-3 text-sm leading-6 text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 lg:text-left">
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
          className="mt-5 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
        >
          {expanded ? "Hide details" : "Show details"}
        </button>
      </div>
    </article>
  );
}

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/10 bg-ink px-6 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-accent/[0.08] to-transparent" />

      <div className="relative mx-auto max-w-6xl scroll-mt-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Experience shaped by real product delivery.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A timeline of full-stack work across web platforms, cloud integrations,
            and workflow automation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-accent via-line to-transparent lg:left-1/2" />
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
