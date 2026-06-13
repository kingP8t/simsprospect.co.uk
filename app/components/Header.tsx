"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { Cta } from "@/app/components/Cta";
import { navLinks } from "@/app/lib/site";
import { services } from "@/app/lib/services";

/** Sticky top navigation with a Services dropdown and a mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const servicesRef = useRef<HTMLDivElement>(null);

  // Links other than Services — Services gets its own dropdown.
  const otherLinks = navLinks.filter((link) => link.href !== "#services");

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    function onPointerDown(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="block text-sm font-semibold text-slate-900">
                      {service.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">
                      {service.cardOutcome}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/#services"
                  onClick={() => setServicesOpen(false)}
                  className="mt-1 flex items-center gap-1.5 border-t border-slate-100 px-3 pb-1 pt-3 text-sm font-semibold text-brand"
                >
                  View all services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Cta size="md">Book a call</Cta>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
        >
          {/* Services section */}
          <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Services
          </p>
          <ul className="flex flex-col gap-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Other links */}
          <ul className="mt-2 flex flex-col gap-1 border-t border-slate-100 pt-2">
            {otherLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Cta size="lg" className="w-full">
              Book a call
            </Cta>
          </div>
        </div>
      )}
    </header>
  );
}
