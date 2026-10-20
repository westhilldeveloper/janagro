const stats = [
  { value: "1,200+", label: "Acres farmed collectively" },
  { value: "340+", label: "Farming families" },
  { value: "60+", label: "Equipment units" },
  { value: "18", label: "Villages covered" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-green-900 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:22px_22px] text-white">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong className="block font-display text-4xl md:text-5xl font-semibold text-[#eec06a]">
              {stat.value}
            </strong>
            <span className="text-sm text-white/70">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}