export default function About() {
  return (
    <section className="py-24" id="about">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative pb-10 max-w-[520px] lg:max-w-none mx-auto w-full">
          <img
            className="w-full aspect-[4/3.4] object-cover rounded-3xl shadow-xl shadow-green-900/10"
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80"
            alt="A farmer standing in his field"
          />
          <img
            className="absolute -right-4 bottom-0 w-[42%] aspect-square object-cover rounded-2xl border-[6px] border-cream shadow-xl shadow-green-900/10"
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80"
            alt="Hands holding a young sapling"
          />
          <div className="absolute top-6 -left-4 px-5 py-3 rounded-2xl bg-green-800 text-white shadow-xl shadow-green-900/20">
            <strong className="block font-display text-xl">340+</strong>
            <span className="text-[10px] tracking-widest uppercase opacity-75">farming families</span>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-green-600 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm">
            Who we are
          </span>
          <h2 className="mb-6 font-display text-[clamp(1.9rem,4vw,2.7rem)] text-green-900">
            Small farms. One strong voice.
          </h2>

          <p className="mb-4 text-lg text-text-main">
            Most farmers around us work less than three acres. Alone, a small farm cannot
            afford a harvester, cannot fill a truck, and cannot argue over a price. Together,
            it can.
          </p>
          <p className="text-muted mb-6">
            Janashakti Agro is a farmer-owned collective. We map unused and under-used
            agricultural land, group nearby farmers into small working teams, and support
            them from soil testing to the final sale. Nothing is owned by a middleman — every
            rupee earned goes back to the team that grew the crop.
          </p>

          <ul className="grid gap-4 mb-8">
            {[
              "Land pooled and managed as one block, with each farmer's share recorded",
              "Teams of 8–12 farmers, led by a member chosen from the group",
              "Equipment, saplings and seeds at collective rates — no private markup",
              "Produce graded, pooled and sold in bulk for a better market price"
            ].map((item, i) => (
              <li key={i} className="relative pl-9 text-sm text-muted">
                <span className="absolute left-0 top-0.5 grid place-items-center w-5 h-5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#services" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-green-800 text-white font-semibold hover:-translate-y-0.5 hover:bg-green-700 transition-all">
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}