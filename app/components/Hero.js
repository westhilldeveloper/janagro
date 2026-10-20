export default function Hero() {
  return (
    <section className="relative flex items-center min-h-svh pl-6 overflow-hidden"  id="top">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
          alt="Golden farmland at sunrise"
          className="w-full h-full object-cover object-[center_60%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-900/50 to-green-900/90" />

      <div className="container-custom relative z-10 w-full pt-36 pb-20">
        <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-white/80 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm">
          Farmer-owned collective · Since 2016
        </span>

        <h1 className="max-w-[17ch] font-display text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-[1.14] tracking-tight text-white">
          Growing together, <br />
          <em className="italic text-[#eec06a]">selling stronger.</em>
        </h1>

        <p className="max-w-[54ch] mt-6 text-lg text-white/85">
          Janashakti Agro brings small farming teams onto shared land, shares tools and
          knowledge at fair rates, and sells the harvest together — so every farmer gets
          the price their hard work deserves.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-ochre text-[#2a1c05] font-semibold hover:-translate-y-0.5 hover:bg-[#e6a733] transition-all shadow-[0_8px_20px_rgba(217,154,43,0.28)]">
            Join the collective
          </a>
          <a href="#equipment" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 border border-white/45 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5">
            Rent equipment
          </a>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/15 max-w-4xl">
          <li>
            <strong className="block font-display text-2xl md:text-3xl font-semibold text-white">1,200+</strong>
            <span className="block mt-1 text-xs leading-relaxed text-white/70">acres under collective farming</span>
          </li>
          <li>
            <strong className="block font-display text-2xl md:text-3xl font-semibold text-white">340+</strong>
            <span className="block mt-1 text-xs leading-relaxed text-white/70">farming families onboard</span>
          </li>
          <li>
            <strong className="block font-display text-2xl md:text-3xl font-semibold text-white">60+</strong>
            <span className="block mt-1 text-xs leading-relaxed text-white/70">equipment units on rent</span>
          </li>
          <li>
            <strong className="block font-display text-2xl md:text-3xl font-semibold text-white">18</strong>
            <span className="block mt-1 text-xs leading-relaxed text-white/70">villages across the district</span>
          </li>
        </ul>
      </div>
    </section>
  );
}