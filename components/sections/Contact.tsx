"use client";

import { useState } from "react";
import { contactLinks } from "@/data/portfolio";

const email = "owmrambarada@gmail.com";
const mailHref =
  "mailto:owmrambarada@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Ram%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

function ContactIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.13 2.13 0 0 1 .64-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.87 3.87 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02A9.45 9.45 0 0 1 12 7a9.45 9.45 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02a3.6 3.6 0 0 1 .1 2.64 3.87 3.87 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93a2.4 2.4 0 0 1 .68 1.86v2.58c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.98H3.92V20h3.02V8.98ZM5.43 4a1.76 1.76 0 1 0 0 3.52 1.76 1.76 0 0 0 0-3.52Zm5.52 4.98H8.06V20h3.02v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.02v-6.05c0-2.97-.64-5.25-4.11-5.25a3.6 3.6 0 0 0-3.24 1.78h-.04l.01-1.5Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="rounded-lg border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-panel/90 to-skysoft/[0.08] p-5 shadow-[0_30px_120px_rgba(0,0,0,.18)] backdrop-blur sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.24em]">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Need a web product built with ownership?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              I help turn complex workflows into polished, scalable web experiences,
              from product thinking and architecture to implementation, integrations,
              deployment, and long-term maintainability.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailHref}
                className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                Send Email
              </a>
            </div>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((link) => {
              if (link.label === "Email") {
                return (
                  <div
                    key={link.label}
                    className="group flex items-center gap-3 rounded-md border border-line bg-ink/35 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-ink/55 hover:shadow-[0_16px_45px_rgba(79,209,197,.08)]"
                  >
                    <a href={mailHref} className="flex min-w-0 flex-1 items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent transition group-hover:border-accent/50 group-hover:bg-accent/15">
                        <ContactIcon label={link.label} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-subdued">{link.label}</span>
                        <span className="block break-all text-sm font-semibold text-foreground">{link.value}</span>
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={copied ? "Email address copied" : "Copy email address"}
                      className="inline-flex h-10 min-w-10 shrink-0 items-center justify-center rounded-md border border-line px-2 text-muted transition hover:border-accent hover:text-accent"
                    >
                      {copied ? <span className="text-xs font-semibold">Copied</span> : <CopyIcon />}
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-md border border-line bg-ink/35 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70 hover:bg-ink/55 hover:shadow-[0_16px_45px_rgba(79,209,197,.08)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/10 text-accent transition group-hover:border-accent/50 group-hover:bg-accent/15">
                    <ContactIcon label={link.label} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm text-subdued">{link.label}</span>
                    <span className="block break-all text-sm font-semibold text-foreground">{link.value}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line text-muted transition group-hover:border-accent group-hover:text-accent">
                    <ExternalLinkIcon />
                  </span>
                </a>
              );
            })}
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>
      </div>
    </section>
  );
}
