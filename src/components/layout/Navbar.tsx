"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile, resumeHref } from "@/data/profile";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const external = !profile.resumeAvailable; // resume falls back to LinkedIn
  const resumeProps = external ? { external: true } : {};

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-lg font-semibold tracking-tight">
          {profile.wordmark}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <Button href={resumeHref} variant="secondary" className="min-h-9! px-4!" {...resumeProps}>
              Resume
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-line/60 py-4 text-lg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={resumeHref} className="mt-5 w-full" {...resumeProps}>
            Resume
          </Button>
        </div>
      )}
    </header>
  );
}
