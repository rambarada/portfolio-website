export type LinkItem = {
  label: string;
  value?: string;
  href: string;
};

export type Highlight = {
  value: string;
  label: string;
};

export type Principle = {
  title: string;
  text: string;
};

export type SkillGroup = {
  title: string;
  accent: string;
  skills: string[];
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export type Project = {
  name: string;
  kicker: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  detail: string;
  badge: string;
};

export const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export const contactLinks: LinkItem[] = [
  { label: "Email", value: "owmrambarada@gmail.com", href: "mailto:owmrambarada@gmail.com" },
  { label: "GitHub", value: "github.com/rambarada", href: "https://github.com/rambarada" },
  { label: "LinkedIn", value: "linkedin.com/in/ram-barada", href: "https://linkedin.com/in/ram-barada" },
];

export const heroActions: LinkItem[] = [
  { label: "GitHub profile", href: "https://github.com/rambarada" },
  { label: "LinkedIn profile", href: "https://linkedin.com/in/ram-barada" },
  { label: "CV by email", href: "mailto:owmrambarada@gmail.com?subject=CV%20request" },
];

export const highlights: Highlight[] = [
  { value: "10k -> 200", label: "Algolia monthly requests" },
  { value: "15 -> 16", label: "Angular platform migration" },
  { value: "Lead", label: "Reviews, mentoring, delivery" },
  { value: "Cloud", label: "Firebase, GCP, AWS systems" },
];

export const principles: Principle[] = [
  {
    title: "Product thinking",
    text: "I translate real workflow needs into product decisions that reduce friction for users and teams.",
  },
  {
    title: "Clean engineering",
    text: "I value readable architecture, stable migrations, thoughtful APIs, and practical code reviews.",
  },
  {
    title: "Cloud-ready delivery",
    text: "I build with deployment, integrations, automation, and long-term maintainability in mind.",
  },
];

export const skillGroups: SkillGroup[] = [
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

export const experiences: Experience[] = [
  {
    role: "Lead / Full-Stack Developer",
    company: "Nahaus.de",
    location: "Germany, Remote",
    period: "Nov 2023 - Present",
    summary:
      "Leading full-stack development for property-management workflows with Angular, Node.js, Firebase, and Google Cloud.",
    achievements: [
      "Directed an Angular 15 to 16 migration with stable platform delivery.",
      "Reduced Algolia monthly requests from around 10,000 to around 200.",
      "Built Google Drive-like folder and file management for property documents.",
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
    achievements: [
      "Led a 2-person team across architecture, task planning, and GitHub reviews.",
      "Built customizable HR task templates and settings.",
      "Supported REST API delivery in a microservices-oriented backend.",
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
    achievements: [
      "Delivered a responsive multilingual admin portal.",
      "Implemented JWT-based authentication for protected data.",
      "Designed a real-time tracking dashboard and documented APIs with Swagger.",
    ],
    stack: ["Angular", "Flask", "SQL Server", "JWT", "Swagger"],
  },
];

export const projects: Project[] = [
  {
    name: "Property Document Management System",
    kicker: "Nahaus.de workflow UX",
    problem: "Property teams needed a faster way to organize and retrieve documents inside the platform.",
    solution: "Designed a Google Drive-like folder and file experience backed by cloud document workflows.",
    impact: "Reduced friction in daily document handling for property-management users.",
    stack: ["Angular", "Firebase", "GCP", "TypeScript"],
  },
  {
    name: "Search Optimization with Algolia",
    kicker: "Performance and cost control",
    problem: "The search integration created excessive request volume and avoidable operational cost.",
    solution: "Refined Algolia usage patterns and request flow while preserving the user-facing experience.",
    impact: "Cut monthly Algolia requests from around 10,000 to around 200.",
    stack: ["Algolia", "Angular", "Node.js", "Firebase"],
  },
  {
    name: "In-App Email Integration",
    kicker: "Communication inside the platform",
    problem: "Users needed email capabilities without leaving their operational workflow.",
    solution: "Connected external email hosts through SMTP, Gmail, Nodemailer, IMAP, and Gmail API integrations.",
    impact: "Enabled richer in-app communication workflows across cloud-hosted services.",
    stack: ["Node.js", "Nodemailer", "IMAP", "Gmail API"],
  },
  {
    name: "HR Onboarding Workflow Module",
    kicker: "Forward MENA team project",
    problem: "HR teams needed configurable onboarding and offboarding flows with repeatable task templates.",
    solution: "Built workflow settings, REST APIs, Prisma models, and PostgreSQL-backed task configuration.",
    impact: "Supported structured HR operations with cleaner configuration and team-ready workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];

export const certifications: Certification[] = [
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

export const education = [
  "Master's in Web Development, Lebanese University",
  "Bachelor's in Computer Science, Lebanese University",
];
