"use client";

import { useEffect, useState } from "react";

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
          ? "bg-[#fcf9f4]/93 shadow-[0_4px_24px_rgba(28,28,25,0.08)]"
          : "bg-[#fcf9f4]/80"
      } border-b border-[#d9c1bf]/15 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="font-headline text-xl font-black text-[#501818] tracking-tight shrink-0"
        >
          Hey Brew Cafe PH
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-tight text-[#1c1c19]">
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
          className="md:hidden text-[#501818] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fcf9f4] border-t border-[#d9c1bf]/20 px-6 py-5 flex flex-col gap-4 text-sm font-bold uppercase tracking-tight text-[#1c1c19]">
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
