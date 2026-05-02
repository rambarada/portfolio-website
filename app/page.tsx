import { Section } from "@/components/Section";

const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const contactLinks = [
  { label: "Email", value: "owmrambarada@gmail.com", href: "mailto:owmrambarada@gmail.com" },
  { label: "GitHub", value: "github.com/rambarada", href: "https://github.com/rambarada" },
  { label: "LinkedIn", value: "linkedin.com/in/ram-barada", href: "https://linkedin.com/in/ram-barada" },
];

const heroActions = [
  { label: "GitHub", href: "https://github.com/rambarada" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ram-barada" },
  { label: "Request CV", href: "mailto:owmrambarada@gmail.com?subject=CV%20request" },
];

const highlights = [
  { value: "10k -> 200", label: "Algolia monthly requests" },
  { value: "15 -> 16", label: "Angular platform migration" },
  { value: "Lead", label: "Reviews, mentoring, delivery" },
  { value: "Cloud", label: "Firebase, GCP, AWS systems" },
];

const principles = [
  {
    title: "Product thinking",
    text: "I like understanding the workflow first, then shaping features around the people using them every day.",
  },
  {
    title: "Clean engineering",
    text: "I care about readable code, stable migrations, thoughtful APIs, and reviews that make the team better.",
  },
  {
    title: "Cloud-ready delivery",
    text: "I build with deployment, integrations, automation, and future maintenance in mind from the start.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    accent: "from-accent/25 to-skysoft/10",
    skills: ["Angular", "TypeScript", "React", "Next.js", "Tailwind CSS", "SASS", "Angular Material"],
  },
  {
    title: "Backend",
    accent: "from-skysoft/20 to-white/5",
    skills: ["Node.js", "Spring Boot", "REST APIs", "Google APIs", "Nodemailer", "IMAP/Gmail API", "Flask"],
  },
  {
    title: "Cloud & DevOps",
    accent: "from-accent/20 to-emerald-400/10",
    skills: ["Firebase", "GCP", "AWS", "Firebase Cloud Functions", "Docker", "CI/CD", "GitHub"],
  },
  {
    title: "Databases & Tools",
    accent: "from-white/10 to-accent/10",
    skills: ["PostgreSQL", "Prisma ORM", "SQL Server", "NoSQL", "Algolia", "Swagger", "Postman"],
  },
];

const experiences = [
  {
    role: "Lead / Full-Stack Developer",
    company: "Nahaus.de",
    location: "Germany, Remote",
    period: "Nov 2023 - Present",
    summary:
      "Leading full-stack development for property-management workflows with Angular, Node.js, Firebase, and Google Cloud.",
    featured: "Shipped product improvements across document management, search optimization, email workflows, and cloud functions.",
    points: [
      "Directed an Angular 15 to 16 migration with stable platform delivery.",
      "Reduced Algolia monthly requests from around 10,000 to around 200.",
      "Built Google Drive-like folder and file management for property documents.",
      "Integrated SMTP, Gmail, IMAP, and Gmail API workflows for in-app email features.",
    ],
    stack: ["Angular", "Node.js", "Firebase", "GCP", "Algolia"],
  },
  {
    role: "Full-Stack Developer Apprentice",
    company: "Forward MENA",
    location: "Beirut, Lebanon",
    period: "May 2025 - Sep 2025",
    summary:
      "Developed HR onboarding and offboarding workflows with Next.js, Node.js, PostgreSQL, Prisma, and Docker.",
    featured: "Led a 2-person team across architecture, task planning, GitHub reviews, and REST API delivery.",
    points: [
      "Built customizable HR task templates and settings.",
      "Used PostgreSQL and Prisma for structured workflow data.",
      "Supported microservices-oriented backend development.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Web Development Intern",
    company: "Intalio",
    location: "Beirut, Lebanon",
    period: "Apr 2024 - Sep 2024",
    summary:
      "Built secure web tooling for document classifier management using Angular, Flask, SQL Server, JWT, and Swagger.",
    featured: "Delivered a responsive multilingual admin portal with authentication, dashboards, and API documentation.",
    points: [
      "Implemented JWT-based authentication for protected data.",
      "Designed a real-time tracking dashboard.",
      "Documented APIs with Swagger for easier onboarding.",
    ],
    stack: ["Angular", "Flask", "SQL Server", "JWT", "Swagger"],
  },
];

const projects = [
  {
    name: "Property Document Management System",
    kicker: "Nahaus.de workflow UX",
    problem:
      "Property teams needed an easier way to organize and retrieve folders, documents, and files inside the product.",
    solution:
      "Designed a Google Drive-like UX with folder/file organization, clear navigation, and cloud-backed document workflows.",
    impact:
      "Reduced friction in daily document handling for property-management users.",
    stack: ["Angular", "Firebase", "GCP", "TypeScript"],
  },
  {
    name: "Search Optimization with Algolia",
    kicker: "Performance and cost control",
    problem:
      "The existing search integration was creating excessive request volume and avoidable operational cost.",
    solution:
      "Refined Algolia usage patterns and request flow while preserving the user-facing search experience.",
    impact:
      "Cut monthly Algolia requests from around 10,000 to around 200.",
    stack: ["Algolia", "Angular", "Node.js", "Firebase"],
  },
  {
    name: "In-App Email Integration",
    kicker: "Communication inside the platform",
    problem:
      "Users needed email capabilities inside the platform without leaving their operational workflow.",
    solution:
      "Connected external email hosts through SMTP, Gmail, Nodemailer, IMAP, and Gmail API integrations.",
    impact:
      "Enabled richer in-app communication workflows across cloud-hosted services.",
    stack: ["Node.js", "Nodemailer", "IMAP", "Gmail API"],
  },
  {
    name: "HR Onboarding Workflow Module",
    kicker: "Forward MENA team project",
    problem:
      "HR teams needed configurable onboarding and offboarding flows with repeatable task templates.",
    solution:
      "Built a high-performance module with customizable settings, REST APIs, Prisma models, and PostgreSQL data design.",
    impact:
      "Supported structured HR operations with cleaner configuration and team-ready workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    detail: "DVA-C02",
    badge: "AWS",
  },
  {
    name: "Spring Certified Professional",
    issuer: "VMware",
    detail: "2024",
    badge: "SP",
  },
  {
    name: "Advanced Full Stack Development with AI",
    issuer: "OnRamp",
    detail: "Full-stack + AI tooling",
    badge: "AI",
  },
];

const education = [
  "Master's in Web Development, Lebanese University",
  "Bachelor's in Computer Science, Lebanese University",
];

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-lg border border-line bg-panel/75 shadow-glow backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-panel ${className}`}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-accent/40 group-hover:text-white">
      {children}
    </span>
  );
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,209,197,0.16),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(125,211,252,0.12),transparent_24%),linear-gradient(180deg,#080b12_0%,#0b111d_48%,#080b12_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-base font-semibold text-white transition hover:text-accent">
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
        className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.04fr_0.96fr]"
      >
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(79,209,197,.85)]" />
            Currently building cloud workflows for property-management teams
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
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-skysoft hover:shadow-[0_12px_35px_rgba(79,209,197,.22)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {heroActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-accent/60 hover:text-white"
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-rise delay-150">
          <div className="absolute -left-6 top-8 hidden rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent shadow-glow lg:block">
            Firebase + GCP
          </div>
          <div className="absolute -right-4 bottom-10 hidden rounded-full border border-skysoft/30 bg-skysoft/10 px-4 py-2 text-sm font-medium text-skysoft shadow-glow lg:block">
            Angular + Node.js
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_120px_rgba(0,0,0,.35)] backdrop-blur-xl">
            <div className="rounded-md border border-line bg-panel/90 p-5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="text-sm font-medium text-accent">Portfolio dashboard</p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">Ram Barada</h2>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-skysoft/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
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
              <div className="mt-5 rounded-md border border-accent/20 bg-accent/[0.06] p-4">
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span>Current focus</span>
                  <span>Nahaus.de</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-accent to-skysoft" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Shipping cloud-backed property workflows, search improvements,
                  file management, and email integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="About" title="I like turning messy workflows into calm software.">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-lg leading-8 text-slate-300">
              My best work happens between product context and implementation detail:
              understanding what a team is trying to accomplish, then building the
              interface, API, automation, and cloud pieces that make the workflow feel
              lighter. I enjoy mentoring, code reviews, and steady delivery as much as
              writing the feature itself.
            </p>
            <div className="mt-6 rounded-lg border border-line bg-white/[0.03] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Education
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                {education.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {principles.map((item) => (
              <Card key={item.title} className="p-5">
                <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="A stack shaped around modern web products.">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <Card key={group.title} className="overflow-hidden p-0">
              <div className={`h-2 bg-gradient-to-r ${group.accent}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Designed like a timeline, written for fast scanning.">
        <div className="relative">
          <div className="absolute left-4 top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-accent via-line to-transparent md:block" />
          <div className="grid gap-6">
            {experiences.map((item) => (
              <div key={`${item.company}-${item.role}`} className="relative md:pl-12">
                <div className="absolute left-2 top-7 hidden h-4 w-4 rounded-full border border-accent bg-ink shadow-[0_0_18px_rgba(79,209,197,.5)] md:block" />
                <Card className="p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-medium text-accent">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.company} - {item.location}
                      </p>
                      <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
                      <p className="mt-4 rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-slate-300">
                        {item.featured}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                      {item.stack.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-md border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Case-study previews from real product work.">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={project.name} className="overflow-hidden p-0">
              <div className="relative min-h-36 overflow-hidden border-b border-line bg-gradient-to-br from-accent/18 via-skysoft/10 to-white/[0.03] p-6">
                <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-ink/40 px-3 py-1 text-xs text-slate-300">
                  0{index + 1}
                </div>
                <p className="text-sm font-medium text-accent">{project.kicker}</p>
                <h3 className="mt-4 max-w-md text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <div className="p-6">
                <div className="grid gap-4 text-sm leading-6 text-slate-300">
                  <div>
                    <p className="font-semibold text-slate-100">Problem</p>
                    <p className="mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-100">Solution</p>
                    <p className="mt-1">{project.solution}</p>
                  </div>
                  <div className="rounded-md border border-accent/20 bg-accent/[0.06] p-4">
                    <p className="font-semibold text-accent">Impact</p>
                    <p className="mt-1">{project.impact}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="mt-6">
                  <ArrowLink href="#contact">Read case study</ArrowLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications" title="Credentials that support the stack.">
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((certification) => (
            <Card key={certification.name} className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-sm font-bold text-accent">
                {certification.badge}
              </div>
              <p className="text-sm text-slate-400">{certification.issuer}</p>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{certification.name}</h3>
              <p className="mt-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                {certification.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Have a product workflow that needs a serious build?">
        <div className="rounded-lg border border-accent/20 bg-gradient-to-br from-accent/[0.12] via-panel/90 to-skysoft/[0.08] p-6 shadow-[0_30px_120px_rgba(0,0,0,.28)] backdrop-blur sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white">
                Let us turn the next operational problem into a clean web application.
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Reach out for Angular applications, Node.js APIs, Firebase/GCP
                cloud workflows, AWS-backed systems, and production-ready web platforms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:owmrambarada@gmail.com"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-accent"
                >
                  Send Email
                </a>
                <a
                  href="mailto:owmrambarada@gmail.com?subject=CV%20request"
                  className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Request CV
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-col rounded-md border border-white/10 bg-ink/35 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/70 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-400">{link.label}</span>
                  <span className="text-sm font-semibold text-white">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        (c) 2026 Ram Barada. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
