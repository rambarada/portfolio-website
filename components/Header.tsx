"use client";

import { useEffect, useState } from "react";
import { headerCta, navItems } from "@/data/portfolio";

type Theme = "dark" | "light";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {theme === "dark" ? (
        <path d="M21 13.1A7.5 7.5 0 1 1 10.9 3a6 6 0 0 0 10.1 10.1Z" />
      ) : (
        <>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const ids = ["hero", ...navItems.map((item) => item.id)];
    let frameId = 0;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isAtBottom) {
        setActive(navItems[navItems.length - 1].id);
        return;
      }

      const currentId = ids.reduce((current, id) => {
        const element = document.getElementById(id);

        if (element && element.offsetTop <= scrollPosition) {
          return id;
        }

        return current;
      }, "hero");

      setActive(currentId);
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);

    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const currentTheme = theme ?? "dark";
  const toggleTheme = () =>
    setTheme((current) => ((current ?? currentTheme) === "dark" ? "light" : "dark"));

  const renderThemeToggle = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-panel/80 text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      <ThemeIcon theme={currentTheme} />
    </button>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:py-4">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="min-w-0 text-base font-semibold text-foreground transition hover:text-accent"
          >
            Ram Barada
          </a>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      isActive ? "bg-accent/10 text-accent" : "text-muted hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="hidden md:block">{renderThemeToggle()}</div>
            <a
              href={headerCta.href}
              download
              className="hidden rounded-full border border-accent/40 bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(79,209,197,.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-skysoft hover:shadow-[0_14px_36px_rgba(79,209,197,.24)] md:inline-flex"
            >
              {headerCta.label}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-panel/80 text-foreground transition hover:border-accent hover:text-accent md:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>
        <div
          id="mobile-navigation"
          className={`grid overflow-hidden border-t border-line/80 bg-ink/95 px-4 transition-all duration-300 ease-out md:hidden ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 py-4">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => {
                      setActive(item.id);
                      setMenuOpen(false);
                    }}
                    className={`rounded-md px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:bg-panel hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-2 flex items-center justify-between gap-3 border-t border-line/80 pt-3">
                <span className="text-sm font-medium text-muted">Theme</span>
                {renderThemeToggle()}
              </div>
              <a
                href={headerCta.href}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-ink transition hover:bg-skysoft"
              >
                {headerCta.label}
              </a>
            </div>
          </div>
        </div>
      </header>
      <div aria-hidden="true" className="h-[65px] md:h-[73px]" />
    </>
  );
}
