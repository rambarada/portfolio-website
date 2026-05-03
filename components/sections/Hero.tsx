import Image from "next/image";
import { highlights } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui";

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[680px] scroll-mt-24 max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 xl:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.82fr)] xl:gap-16"
    >
      <div className="animate-rise max-w-3xl">
        <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
          <span className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_18px_rgba(79,209,197,.85)]" />
          <span>Currently building cloud workflows for property-management teams</span>
        </div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          Lead Full-Stack Developer
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Cloud-based web applications with product sense and engineering depth.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I am Ram Barada, a full-stack developer working across Angular,
          TypeScript, Node.js, Firebase, GCP, AWS, and Spring Boot. At Nahaus.de,
          I lead product-focused engineering for property-management workflows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#product-work" variant="primary">
            View Product Work
          </ButtonLink>
          <ButtonLink href="#contact">Contact Me</ButtonLink>
        </div>
      </div>

      <div className="animate-rise relative mx-auto w-full max-w-[520px] delay-150 xl:mr-0">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_120px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
          <div className="grid gap-4 rounded-md border border-line bg-panel/90 p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-accent/40 bg-ink shadow-[0_0_35px_rgba(79,209,197,.18)]">
                  <Image
                    src="/profile.jpg"
                    alt="Ram Barada"
                    fill
                    sizes="96px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">Portfolio dashboard</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Ram Barada</h2>
                  <p className="mt-1 text-sm text-slate-400">Lead Full-Stack Developer @ Nahaus.de</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.value}
                  className="rounded-md border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-4 transition duration-300 hover:border-accent/50"
                >
                  <p className="text-xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-accent/20 bg-accent/[0.06] p-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>Current delivery focus</span>
                <span>Nahaus.de</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-accent to-skysoft" />
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Shipping workflow-heavy product features, automation, search improvements,
                file management, and platform integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
