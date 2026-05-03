export type LinkItem = {
  label: string;
  value?: string;
  href: string;
  newTab?: boolean;
};

export type NavItem = {
  label: string;
  id: string;
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
  description: string;
  proof: string;
  icon: "interface" | "integration" | "cloud" | "data";
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
  context: string;
  improved: string;
  outcome: string;
  stack: string[];
};

export type PersonalProject = {
  name: string;
  type: string;
  date: string;
  summary: string;
  stack: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  detail: string;
  badge: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Product Work", id: "product-work" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const contactLinks: LinkItem[] = [
  { label: "Email", value: "owmrambarada@gmail.com", href: "mailto:owmrambarada@gmail.com" },
  { label: "GitHub", value: "github.com/rambarada", href: "https://github.com/rambarada" },
  { label: "LinkedIn", value: "linkedin.com/in/ram-barada", href: "https://linkedin.com/in/ram-barada" },
];

export const headerCta: LinkItem = {
  label: "Preview CV",
  href: "/documents/ram-barada-cv.pdf",
  newTab: true,
};

export const highlights: Highlight[] = [
  { value: "10k -> 200", label: "Algolia requests optimized" },
  { value: "15 -> 16", label: "Angular migration delivered" },
  { value: "Lead", label: "Reviews, mentoring, delivery" },
  { value: "Cloud", label: "Firebase, GCP, AWS workflows" },
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
    title: "Frontend Product Interfaces",
    accent: "from-accent/25 to-skysoft/10",
    icon: "interface",
    description: "Building responsive, maintainable interfaces for operational web platforms.",
    proof:
      "Dashboards, workflow UIs, responsive layouts, document experiences, and maintainable Angular applications.",
    skills: ["Angular", "TypeScript", "React", "Next.js", "Tailwind CSS", "SASS", "Angular Material"],
  },
  {
    title: "APIs & Integrations",
    accent: "from-skysoft/20 to-white/5",
    icon: "integration",
    description: "Designing backend services and connecting external systems into product workflows.",
    proof:
      "REST services, third-party integrations, authentication flows, email systems, and product automation.",
    skills: ["Node.js", "Spring Boot", "REST APIs", "Google APIs", "Nodemailer", "IMAP/Gmail API", "Flask"],
  },
  {
    title: "Cloud & Automation",
    accent: "from-accent/20 to-emerald-400/10",
    icon: "cloud",
    description: "Shipping serverless workflows, deployments, and cloud-backed application logic.",
    proof:
      "Serverless functions, cloud deployments, background workflows, CI/CD pipelines, and scalable application logic.",
    skills: ["Firebase", "GCP", "AWS", "Firebase Cloud Functions", "Docker", "CI/CD", "GitHub"],
  },
  {
    title: "Data, Search & Tooling",
    accent: "from-white/10 to-accent/10",
    icon: "data",
    description: "Working with databases, search, and developer tooling to support scalable features.",
    proof:
      "Structured data models, search optimization, API documentation, database-backed features, and developer workflows.",
    skills: ["Firestore", "PostgreSQL", "Prisma ORM", "SQL Server", "NoSQL", "Algolia", "Swagger", "Postman"],
  },
];

export const experiences: Experience[] = [
  {
    role: "Lead / Full-Stack Developer",
    company: "Nahaus.de",
    location: "Germany, Remote",
    period: "Nov 2023 - Present",
    summary:
      "Leading full-stack development for property-management workflows, from Angular interfaces to Firebase/GCP cloud functions and production integrations.",
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
      "Built HR onboarding and offboarding workflows with a modern full-stack setup and team-based delivery practices.",
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
      "Developed secure admin tooling for document classification with multilingual support, authentication, dashboards, and API documentation.",
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
    context: "Property teams needed a clearer way to organize, access, and manage documents inside the platform.",
    improved: "Built a Google Drive-like folder and file experience backed by cloud document workflows.",
    outcome: "Made daily document handling faster and easier for property-management users.",
    stack: ["Angular", "Firebase", "GCP", "TypeScript"],
  },
  {
    name: "Search Optimization with Algolia",
    kicker: "Performance and cost control",
    context: "The search integration generated excessive request volume and avoidable operational cost.",
    improved: "Refined Algolia usage patterns and request flow while preserving the user-facing search experience.",
    outcome: "Reduced monthly Algolia requests from around 10,000 to around 200.",
    stack: ["Algolia", "Angular", "Node.js", "Firebase"],
  },
  {
    name: "In-App Email Integration",
    kicker: "Communication inside the platform",
    context: "Users needed email capabilities without leaving their operational workflow.",
    improved: "Connected external email hosts through SMTP, Gmail, Nodemailer, IMAP, and Gmail API integrations.",
    outcome: "Supported richer in-app communication workflows across cloud-hosted services.",
    stack: ["Node.js", "Nodemailer", "IMAP", "Gmail API"],
  },
  {
    name: "AI-Assisted Invoice Processing",
    kicker: "OCR, automation, and validation workflows",
    context:
      "Property-management teams need to process invoices faster while reducing manual validation mistakes.",
    improved:
      "Created an invoice-processing feature that uses AI OCR to scan invoices, extract relevant fields, and support automated processing workflows. Integrated a Gemini-powered automation layer to compare OCR-extracted receiver data against validated system records.",
    outcome:
      "Helps automate invoice review by measuring confidence between OCR data and stored receiver information, with logic to reject or flag invoices when the receiver is not validated in the system.",
    stack: ["Angular", "Firebase", "Cloud Functions", "Gemini", "OCR", "TypeScript"],
  },
  {
    name: "HR Onboarding Workflow Module",
    kicker: "Forward MENA team project",
    context: "HR teams needed configurable onboarding and offboarding flows with repeatable task templates.",
    improved: "Built workflow settings, REST APIs, Prisma models, and PostgreSQL-backed task configuration.",
    outcome: "Supported structured HR operations with cleaner configuration and team-ready workflows.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    name: "Cloud Task Processor",
    type: "Backend / Cloud Lab",
    date: "Spring + AWS lab",
    summary:
      "Built a cloud microservices lab with an API service that receives tasks and a worker service that processes them asynchronously.",
    stack: [
      "Spring Boot",
      "AWS SQS",
      "AWS S3",
      "PostgreSQL",
      "Docker",
      "EC2",
      "GitHub Actions",
      "Nginx",
    ],
  },
  {
    name: "Anomaly Detection Sampling for IoT",
    type: "Academic / Machine Learning",
    date: "Jan 2022 - Mar 2022",
    summary:
      "Developed a cluster-based sampling approach for anomaly detection on NSL-KDD, designed for resource-conscious thin IoT nodes.",
    stack: ["Machine Learning", "Data Analysis", "Python", "Pandas", "NumPy", "Scikit-learn", "K-means"],
  },
  {
    name: "House of Movies",
    type: "Full-stack Web App",
    date: "Full-stack lab",
    summary:
      "Built an online movie reservation system with Angular admin/client portals and API compatibility across Django REST Framework and Spring Boot backends.",
    stack: ["Angular", "Django REST Framework", "Spring Boot", "SQL Server", "MySQL"],
  },
  {
    name: "Medical Center App",
    type: "Android Application",
    date: "Android lab",
    summary:
      "Created an Android app for EHR-related data and nurse pre-exam records, backed by a PHP REST API and MySQL database.",
    stack: ["Android", "PHP REST API", "MySQL", "Java", "XML"],
  },
  {
    name: "TaskMaster",
    type: "Frontend / Productivity App",
    date: "Frontend lab",
    summary:
      "Built a React, TypeScript, and Vite productivity app with task management, scheduling, routing, forms, UI components, and persistent storage.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Hook Form",
      "Material UI",
      "Tailwind CSS",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    detail: "DVA-C02",
    badge: "AWS",
    href: "https://www.credly.com/badges/10a45beb-b487-48a0-a91a-0307eb511783/linked_in_profile",
  },
  {
    name: "Spring Certified Professional",
    issuer: "VMware",
    detail: "2024",
    badge: "Spring Boot",
    href: "https://www.credly.com/badges/b905e27c-ac24-43a3-a534-2cdb4788be7c",
  },
  {
    name: "Advanced Full Stack Development with AI",
    issuer: "OnRamp",
    detail: "Full-stack + AI tooling",
    badge: "AI",
    href: "https://drive.google.com/drive/folders/1t7b1bonGAsmFPw7Qpb7D1ziJfKtq88a2",
  },
];

export const education = [
  "Master's in Web Development, Lebanese University",
  "Bachelor's in Computer Science, Lebanese University",
];
