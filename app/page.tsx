import { Section } from "@/components/Section";

const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const skills = [
  "Angular",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Google Cloud Platform",
  "AWS",
  "Spring Boot",
  "REST APIs",
  "Cloud Architecture",
  "CI/CD",
  "SQL",
  "NoSQL",
];

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Cloud-Based Web Applications",
    period: "Current",
    summary:
      "Building reliable frontends, backend services, and cloud integrations for scalable web products.",
  },
  {
    role: "Backend & Cloud Engineer",
    company: "API Platforms",
    period: "Recent",
    summary:
      "Designing Node.js and Spring Boot services with Firebase, GCP, and AWS infrastructure.",
  },
];

const projects = [
  {
    name: "Enterprise Web Dashboard",
    description:
      "A responsive Angular dashboard with secure APIs, real-time data, and cloud-hosted workflows.",
    stack: ["Angular", "Node.js", "Firebase"],
  },
  {
    name: "Cloud API Platform",
    description:
      "Backend services designed for authentication, integrations, observability, and predictable deployment.",
    stack: ["Spring Boot", "GCP", "AWS"],
  },
  {
    name: "Realtime Operations App",
    description:
      "A collaborative application using serverless functions and live data updates for operational teams.",
    stack: ["TypeScript", "Firebase", "Node.js"],
  },
];

const certifications = [
  "Google Cloud Platform",
  "AWS Cloud Foundations",
  "Full-Stack Web Development",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-panel/80 p-6 shadow-glow backdrop-blur">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,209,197,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.11),transparent_28%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-base font-semibold text-white">
            Ram Barada
          </a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-accent"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="hero"
        className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Full-Stack Developer
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building cloud-ready web applications with clarity and craft.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Ram Barada, a developer focused on Angular, Node.js, Firebase,
            GCP, AWS, Spring Boot, and production-ready web platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-skysoft"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        <Card>
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-2xl font-bold text-ink">
            RB
          </div>
          <h2 className="text-2xl font-semibold text-white">Developer Profile</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Practical full-stack engineering across frontend architecture,
            backend APIs, serverless workflows, and cloud deployment.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500">Focus</p>
              <p className="font-medium text-white">Cloud Web Apps</p>
            </div>
            <div>
              <p className="text-slate-500">Stack</p>
              <p className="font-medium text-white">Angular + Node</p>
            </div>
          </div>
        </Card>
      </section>

      <Section id="about" eyebrow="About" title="A full-stack developer with a cloud-first mindset.">
        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          I build clean, maintainable web applications from interface to
          infrastructure. My work spans Angular frontends, Node.js and Spring
          Boot services, Firebase products, and deployments across GCP and AWS.
        </p>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Core technologies and strengths.">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Practical engineering across the stack.">
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <Card key={item.role}>
              <p className="text-sm font-medium text-accent">{item.period}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Selected work and build patterns.">
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name}>
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications" title="Learning backed by cloud credentials.">
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="rounded-lg border border-line bg-white/[0.03] p-5 text-sm font-medium text-white"
            >
              {certification}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let us build something useful.">
        <Card>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Available for full-stack work</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Reach out for cloud-based web applications, API platforms, and
                modern frontend development.
              </p>
            </div>
            <a
              href="mailto:ram.barada@example.com"
              className="inline-flex w-fit rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent"
            >
              ram.barada@example.com
            </a>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Ram Barada. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
