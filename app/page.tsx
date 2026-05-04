import { Header } from "@/components/Header";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Hero } from "@/components/sections/Hero";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ink text-muted">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,209,197,0.16),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.12),transparent_24%),linear-gradient(180deg,var(--color-ink)_0%,var(--color-panel)_48%,var(--color-ink)_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(79,209,197,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(79,209,197,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <Header />
      <Hero />

      <div className="border-y border-line bg-wash">
        <About />
      </div>

      <Skills />

      <ExperienceTimeline />

      <ProjectsCarousel />

      <div className="border-y border-line bg-wash">
        <PersonalProjects />
      </div>

      <div className="border-y border-line bg-wash">
        <Certifications />
      </div>

      <Contact />

      <footer className="border-t border-line px-4 py-8 text-center text-sm text-subdued sm:px-6">
        (c) 2026 Ram Barada. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
