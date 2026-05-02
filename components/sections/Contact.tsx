"use client";

import { useState } from "react";
import { contactLinks } from "@/data/portfolio";

const email = "owmrambarada@gmail.com";
const mailHref =
  "mailto:owmrambarada@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Ram%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
      <div className="rounded-lg border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-panel/90 to-skysoft/[0.08] p-6 shadow-[0_30px_120px_rgba(0,0,0,.28)] backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Need a web product built with ownership from idea to launch?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              I help turn complex ideas into polished, scalable web experiences,
              from product thinking and architecture to implementation, integration,
              deployment, and long-term maintainability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailHref}
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                Send Email
              </a>
              <a
                href="/documents/ram-barada-cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Preview CV
              </a>
            </div>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((link) => {
              if (link.label === "Email") {
                return (
                  <div
                    key={link.label}
                    className="flex flex-col gap-3 rounded-md border border-white/10 bg-ink/35 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <a href={mailHref} className="flex flex-col gap-1">
                      <span className="text-sm text-slate-400">{link.label}</span>
                      <span className="text-sm font-semibold text-white">{link.value}</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300 transition hover:border-accent hover:text-accent"
                    >
                      {copied ? (
                        <span className="text-xs font-semibold">OK</span>
                      ) : (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      )}
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-col rounded-md border border-white/10 bg-ink/35 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-400">{link.label}</span>
                  <span className="text-sm font-semibold text-white">{link.value}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
