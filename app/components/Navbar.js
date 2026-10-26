"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#equipment", label: "Equipment" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      } ${open ? "bg-cream" : ""}`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a
          href="#top"
          className={`flex items-center gap-3 font-display transition-colors duration-300 ${
            scrolled || open ? "text-green-900" : "text-white"
          }`}
          onClick={() => setOpen(false)}
        >
           <img
            src="/images/ANASHAKTIAGRO-01-01.png"
            alt="Janashakti Agro"
            /* If scrolled or mobile menu open, show original colors. 
               Otherwise, make it white to stand out against the dark hero image. */
            className={`h-24  w-auto object-contain transition-all duration-300 ${
              scrolled || open ? "" : "brightness-0 invert"
            }`}
          />
         
          {/* <span className="flex flex-col leading-none">
            <strong className="text-lg font-semibold">Janashakti</strong>
            <small className="text-[10px] tracking-[0.3em] uppercase opacity-70 mt-1">Agro</small>
          </span> */}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:text-ochre transition-colors relative group ${
                scrolled ? "text-green-900" : "text-white/90"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ochre transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full bg-ochre text-[#2a1c05] font-semibold text-sm hover:-translate-y-0.5 hover:bg-[#e6a733] transition-all shadow-[0_8px_20px_rgba(217,154,43,0.28)]"
        >
          Join the collective
        </a>

        <button
          type="button"
          className={`md:hidden grid place-items-center w-11 h-11 rounded-xl border transition-colors ${
            scrolled || open
              ? "border-green-900/20 text-green-900 bg-transparent"
              : "border-white/35 text-white bg-white/10"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-current"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream px-5 pb-6 shadow-xl absolute top-full left-0 right-0 flex flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 border-b border-green-900/10 text-green-900 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-6 inline-flex w-full items-center justify-center px-6 py-3 rounded-full bg-ochre text-[#2a1c05] font-semibold text-sm"
            onClick={() => setOpen(false)}
          >
            Join the collective
          </a>
        </div>
      )}
    </header>
  );
}