"use client";

import { useState, useEffect } from "react";

const steps = [
  { 
    num: "01", 
    title: "Enroll your land", 
    text: "Visit any Janashakti Agro centre with your land records. We map the plot, test the soil and record your crop history.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    num: "02", 
    title: "Join a farming team", 
    text: "You are grouped with 8–12 farmers of similar soil and crop plans, and a team leader is chosen from within the group.",
    images: [
      "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    num: "03", 
    title: "Farm with shared resources", 
    text: "Land preparation, saplings, equipment and agronomist visits are scheduled for the whole team — cutting each farmer's cost.",
    images: [
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1592982537447-6e1e3b0d4b4c?auto=format&fit=crop&w=800&q=80"
    ]
  },
  { 
    num: "04", 
    title: "Sell together", 
    text: "Produce is graded, pooled and sold in bulk. Every member is paid on the same day, at the same collective price.",
    images: [
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
    ]
  },
];

function StepCard({ step, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const delay = index * 1200; 
    
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % step.images.length);
      }, 4500); 
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [step.images.length, index]);

  return (
    // Added [perspective:1000px] for the 3D depth effect
    <div className="relative overflow-hidden rounded-3xl min-h-[320px] flex flex-col group border border-green-900/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 [perspective:1000px]">
      
      {/* Cycling Background Images with 3D Flip */}
      {step.images.map((img, i) => (
        <img
          key={img}
          src={img}
          alt={step.title}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out [backface-visibility:hidden] ${
            i === currentImage
              ? "opacity-100 [transform:rotateY(0deg)] z-10"
              : "opacity-0 [transform:rotateY(-90deg)] -z-10"
          }`}
        />
      ))}

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-900/50 to-black/10 z-20" />

      {/* Top Step Number Badge */}
      <div className="absolute top-5 left-5 z-30">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ochre text-[#2a1c05] font-display text-xl font-bold shadow-lg">
          {step.num}
        </span>
      </div>

      {/* Bottom Text Content */}
      <div className="relative z-30 mt-auto p-6 pt-16">
        <h3 className="mb-2 font-display text-xl text-white">{step.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed">{step.text}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="relative py-24 overflow-hidden" id="how">
      
      {/* Section Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80" 
          alt="Farm background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/95 backdrop-blur-sm" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-green-600 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm before:mx-auto">
            How it works
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] text-green-900">
            Four steps from your field to the market
          </h2>
          <p className="mt-4 text-lg text-muted">
            Simple, transparent, and the same for every farmer who joins us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.num} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}