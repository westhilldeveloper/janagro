"use client";

import { useState, useEffect } from "react";

const equipment = [
  { icon: "🚜", name: "Power Tiller", spec: "7 HP · diesel · with rotavator", price: "₹450" },
  { icon: "🌾", name: "Mini Harvester", spec: "Self-propelled · up to 4 acres/day", price: "₹1,200" },
  { icon: "💧", name: "Water Pump Set", spec: "3 HP · 30 m head · with pipes", price: "₹350" },
  { icon: "🌱", name: "Seed Drill", spec: "9-row · tractor mounted", price: "₹500" },
  { icon: "✂️", name: "Brush Cutter", spec: "2-stroke · 1.5 kW · with harness", price: "₹300" },
  { icon: "🎒", name: "Knapsack Sprayer", spec: "16 L · battery + manual options", price: "₹120" },
];

// Array of background images for the section
const bgImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1920&q=80"
];

export default function Equipment() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden" id="equipment">
      
      {/* Cycling Background Images */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt="Farmland background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-cream/70 backdrop-blur-sm" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-green-600 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm">
            Equipment rental
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] text-green-900">
            Good tools, minimum rent
          </h2>
          <p className="mt-4 text-lg text-muted">
            Every farming team gets access to our shared equipment pool. Booked a day in
            advance, delivered to the field, maintained by us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipment.map((item) => (
            <article className="flex flex-col p-6 rounded-2xl border border-green-900/10 bg-white/95 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300" key={item.name}>
              <div className="flex items-center gap-4">
                <div className="grid place-items-center shrink-0 w-12 h-12 rounded-xl bg-green-100 text-xl" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-base text-green-900">{item.name}</h3>
                  <p className="mt-0.5 text-xs text-muted">{item.spec}</p>
                </div>
              </div>
              <div className="flex items-baseline gap-2 mt-5 pt-4 border-t border-dashed border-green-900/20 mt-auto">
                <strong className="font-display text-2xl text-green-800">{item.price}</strong>
                <span className="text-xs text-muted">/ day · members only</span>
              </div>
            </article>
          ))}
        </div>

        <p className="max-w-2xl mt-8 text-sm text-muted">
          Rent is charged per day and includes basic fuel and operator guidance. Members of
          an active farming team pay a further 20% less.
        </p>
      </div>
    </section>
  );
}