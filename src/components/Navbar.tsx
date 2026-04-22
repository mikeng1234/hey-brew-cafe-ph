"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Our Story",    href: "#why" },
  { label: "Products",     href: "#why" },
  { label: "Franchise ROI",href: "#inquiry" },
  { label: "Support",      href: "#inquiry" },
  { label: "Locations",    href: "#inquiry" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Site Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          : "bg-black/90"
      } border-b border-white/10 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="shrink-0">
          <Image
            src="/images/hb-logo-horizontal.png"
            alt="Hey Brew Cafe PH"
            height={40}
            width={180}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-tight text-white/90">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#924b27] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#inquiry"
          className="hidden md:block bg-[#501818] text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm hover:bg-[#340406] transition-all duration-200 active:scale-[0.92]"
        >
          Inquire Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-5 flex flex-col gap-4 text-sm font-bold uppercase tracking-tight text-white/90">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#924b27] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="mt-2 bg-[#501818] text-white text-center px-6 py-3 rounded font-headline font-bold hover:bg-[#340406] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  );
}
