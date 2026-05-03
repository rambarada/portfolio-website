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
  const placement = isLeft ? "lg:justify-self-end lg:pr-16" : "lg:col-start-2 lg:pl-16";
  const dotPlacement = isLeft ? "lg:right-[-0.55rem]" : "lg:left-[-0.55rem]";

  return (
    <article className={`relative lg:grid lg:grid-cols-2 ${index > 0 ? "mt-10 lg:mt-12" : ""}`}>
      <div
        className={`group relative ml-9 w-full max-w-[420px] rounded-lg border border-white/10 bg-[#070a10]/90 p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-[0_24px_90px_rgba(79,209,197,.09)] sm:p-7 lg:ml-0 ${placement}`}
      >
        <div
          className={`absolute -left-[2.45rem] top-8 z-10 h-3 w-3 rounded-full border-2 border-accent bg-ink shadow-[0_0_0_4px_rgba(79,209,197,.08),0_0_22px_rgba(79,209,197,.9)] lg:left-auto ${dotPlacement}`}
        />

        <div className="flex items-center gap-2 text-sm font-semibold text-accent">
          <BriefcaseIcon />
          <span>{item.period}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{item.company}</h3>
        <p className="mt-1 text-sm font-medium text-slate-500">{item.role}</p>
        <p className="mt-5 text-sm leading-6 text-slate-400">{item.summary}</p>

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
            <div className="rounded-md border border-white/10 bg-white/[0.025] p-4">
              <p className="mb-3 text-sm font-semibold text-white">Selected achievements</p>
              <ul className="space-y-3 text-sm leading-6 text-slate-300">
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
          className="mt-5 rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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
      className="relative overflow-hidden border-y border-white/10 bg-ink px-6 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-accent/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-6xl scroll-mt-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
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
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-accent/80 via-accent/35 to-transparent lg:hidden" />
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/90 via-accent/45 to-transparent shadow-[0_0_18px_rgba(79,209,197,.25)] lg:block" />
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
