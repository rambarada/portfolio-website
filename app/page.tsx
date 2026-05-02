import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTabs } from "@/components/sections/ExperienceTabs";
import { Hero } from "@/components/sections/Hero";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,209,197,0.16),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.12),transparent_24%),linear-gradient(180deg,#080b12_0%,#0b111d_48%,#080b12_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Header />
      <Hero />

      <div className="border-y border-white/10 bg-white/[0.015]">
        <About />
      </div>

      <Skills />

      <div className="border-y border-white/10 bg-gradient-to-b from-white/[0.025] to-transparent">
        <ExperienceTabs />
      </div>

      <ProjectsCarousel />

      <div className="border-y border-white/10 bg-white/[0.015]">
        <Certifications />
      </div>

      <Contact />

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        (c) 2026 Ram Barada. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
