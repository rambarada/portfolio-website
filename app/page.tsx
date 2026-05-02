import { Section } from "@/components/Section";

const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const contactLinks = [
  { label: "Email", value: "owmrambarada@gmail.com", href: "mailto:owmrambarada@gmail.com" },
  { label: "GitHub", value: "github.com/rambarada", href: "https://github.com/rambarada" },
  { label: "LinkedIn", value: "linkedin.com/in/ram-barada", href: "https://linkedin.com/in/ram-barada" },
];

const highlights = [
  { value: "10,000 to 200", label: "monthly Algolia requests after optimization" },
  { value: "Angular 15 to 16", label: "platform migration delivered with stable rollout" },
  { value: "Lead developer", label: "mentoring, reviews, architecture, and delivery" },
  { value: "Cloud apps", label: "Firebase, GCP, AWS, APIs, and deployments" },
];

const skills = [
  "Angular",
  "TypeScript",
  "Node.js",
  "Firebase",
  "GCP",
  "AWS",
  "Spring Boot",
  "REST APIs",
  "Google APIs",
  "Firebase Cloud Functions",
  "Algolia",
  "IMAP/Gmail API",
  "Nodemailer",
  "PostgreSQL",
  "Prisma ORM",
  "Docker",
  "CI/CD",
  "Agile",
];

const experiences = [
  {
    role: "Lead / Full-Stack Developer",
    company: "Nahaus.de",
    location: "Germany, Remote",
    period: "Nov 2023 - Present",
    summary:
      "Leading full-stack development for property-management workflows, combining Angular, Node.js, Firebase, and Google Cloud to ship practical product improvements.",
    points: [
      "Directed an Angular 15 to 16 migration with stable platform delivery.",
      "Reduced Algolia monthly requests from around 10,000 to around 200 through search integration improvements.",
      "Built Google Drive-like folder and file management for property documents.",
      "Integrated SMTP, Gmail, IMAP, and Gmail API workflows for in-app email features.",
      "Mentor developers through task planning, code reviews, onboarding, and technical guidance.",
    ],
    stack: ["Angular", "Node.js", "Firebase", "GCP", "Algolia"],
  },
  {
    role: "Full-Stack Developer Apprentice",
    company: "Forward MENA",
    location: "Beirut, Lebanon",
    period: "May 2025 - Sep 2025",
    summary:
      "Developed HR onboarding and offboarding workflows using Next.js, Node.js, PostgreSQL, Prisma, Docker, and disciplined Git practices.",
    points: [
      "Built customizable task templates and settings for HR operations.",
      "Led a 2-person team with task assignments, code architecture, and GitHub reviews.",
      "Built and consumed REST APIs in a microservices-oriented backend.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Web Development Intern",
    company: "Intalio",
    location: "Beirut, Lebanon",
    period: "Apr 2024 - Sep 2024",
    summary:
      "Built secure, multilingual web tooling for document classifier management with Angular, Flask, SQL Server, JWT, and Swagger documentation.",
    points: [
      "Implemented a responsive admin portal and JWT-based authentication.",
      "Designed a real-time tracking dashboard for better data visibility.",
      "Documented APIs with Swagger to support developer onboarding.",
    ],
    stack: ["Angular", "Flask", "SQL Server", "JWT", "Swagger"],
  },
];

const projects = [
  {
    name: "Property Document Management System",
    problem:
      "Property teams needed an easier way to organize and retrieve folders, documents, and files inside the product.",
    solution:
      "Designed a Google Drive-like UX with folder/file organization, clear navigation, and cloud-backed document workflows.",
    impact:
      "Improved day-to-day document handling and reduced friction for property-management users.",
    stack: ["Angular", "Firebase", "GCP", "TypeScript"],
  },
  {
    name: "Search Optimization with Algolia",
    problem:
      "The existing search integration was creating excessive request volume and avoidable operational cost.",
    solution:
      "Refined Algolia usage patterns and request flow while preserving the search experience.",
    impact:
      "Cut monthly Algolia requests from around 10,000 to around 200.",
    stack: ["Algolia", "Angular", "Node.js", "Firebase"],
  },
  {
    name: "In-App Email Integration",
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
  "AWS Certified Developer - Associate (DVA-C02)",
  "VMware Spring Certified Professional 2024",
  "OnRamp Advanced Full Stack Development with AI",
];

const education = [
  "Master's in Web Development, Lebanese University",
  "Bachelor's in Computer Science, Lebanese University",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-lg border border-line bg-panel/80 p-6 shadow-glow backdrop-blur ${className}`}>
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
        className="mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Lead Full-Stack Developer
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            I build cloud-based web applications that solve real operational problems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I am Ram Barada, a full-stack developer working across Angular,
            TypeScript, Node.js, Firebase, GCP, AWS, and Spring Boot. At Nahaus.de,
            I lead product-focused engineering for property-management workflows.
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

        <Card className="lg:justify-self-end">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-lg bg-accent text-2xl font-bold text-ink">
            RB
          </div>
          <h2 className="text-2xl font-semibold text-white">Proof points</h2>
          <div className="mt-6 grid gap-4">
            {highlights.map((item) => (
              <div key={item.value} className="border-t border-line pt-4">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Section id="about" eyebrow="About" title="Practical engineering from UI to cloud deployment.">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <p className="text-lg leading-8 text-slate-300">
            I combine leadership and hands-on full-stack development to turn
            product needs into maintainable web systems. My strongest work sits
            where Angular interfaces, Node.js services, Firebase/GCP cloud
            functions, APIs, automation, and user experience meet.
          </p>
          <div className="rounded-lg border border-line bg-white/[0.03] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Education
            </p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {education.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Core technologies and strengths.">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Real product work across web, cloud, and integrations.">
        <div className="grid gap-5">
          {experiences.map((item) => (
            <Card key={`${item.company}-${item.role}`}>
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.company} - {item.location}
                  </p>
                  <p className="mt-4 leading-7 text-slate-300">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Case studies grounded in production experience.">
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name}>
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                <div>
                  <p className="font-semibold text-slate-100">Problem</p>
                  <p className="mt-1">{project.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Solution</p>
                  <p className="mt-1">{project.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Impact</p>
                  <p className="mt-1 text-accent">{project.impact}</p>
                </div>
              </div>
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

      <Section id="certifications" eyebrow="Certifications" title="Cloud and backend credentials.">
        <div className="grid gap-4 sm:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification}
              className="rounded-lg border border-line bg-white/[0.03] p-5 text-sm font-medium leading-6 text-white"
            >
              {certification}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let us build something useful.">
        <Card>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Available for full-stack work</h3>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Reach out for Angular applications, Node.js APIs, Firebase/GCP
                cloud workflows, AWS-backed systems, and production web platforms.
              </p>
            </div>
            <div className="grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex flex-col rounded-md border border-line bg-white/[0.03] px-4 py-3 transition hover:border-accent sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-400">{link.label}</span>
                  <span className="text-sm font-semibold text-white">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        (c) 2026 Ram Barada. Built with Next.js, TypeScript, and Tailwind CSS.
      </footer>
    </main>
  );
}
