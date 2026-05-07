import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ram-barada.vercel.app"),

  title: "Ram Barada | Full-Stack Developer",
  description:
    "Portfolio of Ram Barada, a Lead Full-Stack Developer specializing in Angular, TypeScript, Node.js, Firebase, GCP, AWS, Spring Boot, and cloud-based web applications.",

  openGraph: {
    title: "Ram Barada | Full-Stack Developer",
    description:
      "Lead Full-Stack Developer building cloud-based web applications with product sense and engineering depth.",
    url: "https://ram-barada.vercel.app",
    siteName: "Ram Barada Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ram Barada Full-Stack Developer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ram Barada | Full-Stack Developer",
    description:
      "Lead Full-Stack Developer building cloud-based web applications with product sense and engineering depth.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var theme = stored === 'light' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle('dark', theme === 'dark');
      } catch (_) {
        document.documentElement.dataset.theme = 'dark';
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <html lang="en" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
