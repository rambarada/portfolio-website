"use client";

import { useEffect, useState } from "react";
import { headerCta, navItems } from "@/data/portfolio";

export function Header() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const ids = ["hero", ...navItems.map((item) => item.toLowerCase())];
    let frameId = 0;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isAtBottom) {
        setActive(navItems[navItems.length - 1].toLowerCase());
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

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#hero" className="text-base font-semibold text-white transition hover:text-accent">
            Ram Barada
          </a>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const id = item.toLowerCase();
                const isActive = active === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => setActive(id)}
                    className={`rounded-full px-3 py-2 text-sm transition ${
                      isActive ? "bg-accent/10 text-accent" : "text-slate-300 hover:text-accent"
                    }`}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
            <a
              href={headerCta.href}
              target={headerCta.newTab ? "_blank" : undefined}
              rel={headerCta.newTab ? "noreferrer" : undefined}
              className="rounded-full border border-accent/40 bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-[0_10px_30px_rgba(79,209,197,.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-skysoft hover:shadow-[0_14px_36px_rgba(79,209,197,.24)]"
            >
              {headerCta.label}
            </a>
          </div>
        </nav>
      </header>
      <div aria-hidden="true" className="h-[65px]" />
    </>
  );
}
