import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="pt-16 pb-8 bg-[#0d2016] text-white/65">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr_1fr] gap-10">
          <div>
            <a href="#top" className="flex items-center gap-3 mb-4 text-white">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-ochre text-[#2a1c05]" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </span>
              <span className="flex flex-col leading-none font-display">
                <strong className="text-lg font-semibold">Janashakti</strong>
                <small className="text-[10px] tracking-[0.3em] uppercase opacity-70 mt-1">Agro</small>
              </span>
            </a>
            <p className="max-w-[34ch] text-sm leading-relaxed">
              A farmer-owned collective helping small farming teams share land, tools and
              knowledge — and sell their harvest together.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Explore</h4>
            <ul className="grid gap-3 text-sm">
              <li><a href="#about" className="hover:text-ochre transition-colors">About us</a></li>
              <li><a href="#services" className="hover:text-ochre transition-colors">Services</a></li>
              <li><a href="#how" className="hover:text-ochre transition-colors">How it works</a></li>
              <li><a href="#equipment" className="hover:text-ochre transition-colors">Equipment rental</a></li>
              <li><a href="#contact" className="hover:text-ochre transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] uppercase text-white/90">Reach us</h4>
            <ul className="grid gap-3 text-sm">
              <li>Plot 14, Krushi Bazaar Road, Soygaon, Maharashtra 431001</li>
              <li><a href="tel:+919876543210" className="hover:text-ochre transition-colors">+91 98765 43210</a></li>
              <li><a href="mailto:hello@janashaktiagro.in" className="hover:text-ochre transition-colors">hello@janashaktiagro.in</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2 mt-12 pt-6 border-t border-white/10 text-xs text-white/45">
          <p>© {year} Janashakti Agro. All rights reserved.</p>
          <p>Made with the soil, for the soil.</p>
        </div>
      </div>
    </footer>
  );
}