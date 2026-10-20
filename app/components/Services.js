"use client";

import { useState, useEffect } from "react";

const services = [
  { 
    title: "Collective farmland", 
    text: "Agricultural land from members and partner landowners is mapped, soil-tested and farmed as a single block — with every member's share documented.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    title: "Farming teams", 
    text: "Farmers of similar soil and crop plans are grouped into teams of 8–12. Costs, labour and machinery are shared across the whole team.",
    images: [
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    title: "Equipment on rent", 
    text: "Tillers, harvesters, sprayers and pumps available at minimum daily rent — booked by the team instead of bought by one farmer.",
    images: [
      "https://images.unsplash.com/photo-1592982537447-6e1e3b0d4b4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    title: "Saplings & seeds", 
    text: "Nursery-raised, locally suited saplings and certified seed varieties, delivered to the field at the start of every season.",
    images: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    title: "Farming guidance", 
    text: "Agronomist visits, soil health cards, pest alerts and crop planning — practical advice in the farmer's own language.",
    images: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    title: "Market linkage", 
    text: "We aggregate the team's harvest, grade it, and sell it in bulk to buyers and mandis — so the price is settled before the crop leaves the field.",
    images: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    ]
  },
];

function ServiceCard({ service, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const delay = index * 1000; 
    
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % service.images.length);
      }, 4000); 
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [service.images.length, index]);

  return (
    <article className="relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col justify-end p-8 group border border-green-900/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      
      {/* Background Images (Shuffling Animation) */}
      {service.images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={service.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105 ${
            i === currentImage
              ? "opacity-100 translate-x-0 scale-100 z-10"
              : "opacity-0 -translate-x-12 scale-105 -z-10"
          }`}
        />
      ))}

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-900/60 to-transparent z-20" />

      {/* Content */}
      <div className="relative z-30">
        <h3 className="mb-2 font-display text-xl text-white">{service.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed">{service.text}</p>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-green-600 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm">
            What we do
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] text-green-900">
            Everything a small farm needs — in one place
          </h2>
          <p className="mt-4 text-lg text-muted">
            From land preparation to the final sale, Janashakti Agro supports the farming
            team at every step of the season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}