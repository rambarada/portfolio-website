import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ram Barada | Full-Stack Developer",
  description:
    "Portfolio of Ram Barada, a Lead Full-Stack Developer specializing in Angular, TypeScript, Node.js, Firebase, GCP, AWS, Spring Boot, and cloud-based web applications.",
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
