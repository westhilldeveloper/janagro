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
            <a href="#top" className="inline-flex items-center mb-4">
              <img
                src="/images/ANASHAKTIAGRO-01-01.png"
                alt="Janashakti Agro"
                /* Footer is dark, so invert the logo to white */
                className="h-20 w-auto object-contain "
              />
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