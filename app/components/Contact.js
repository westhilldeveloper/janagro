"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-24 bg-green-900 text-white" id="contact">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-white/80 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm">
            Join us
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] text-white">
            Bring your land. We&apos;ll bring the rest.
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Walk into any Janashakti Agro centre, or send us a message and our field officer
            will visit your plot within a week.
          </p>

          <ul className="grid gap-6 mt-10">
            {[
              { icon: "📍", title: "Visit us", content: "Janashakti Agro, Plot 14, Krushi Bazaar Road, Soygaon, Maharashtra 431001", link: null },
              { icon: "📞", title: "Call us", content: "+91 98765 43210", link: "tel:+919876543210" },
              { icon: "✉️", title: "Write to us", content: "hello@janashaktiagro.in", link: "mailto:hello@janashaktiagro.in" },
              { icon: "🕖", title: "Centre hours", content: "Monday – Saturday, 7:00 am – 6:00 pm", link: null }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="grid place-items-center shrink-0 w-10 h-10 rounded-xl bg-white/10 text-base" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <strong className="block mb-0.5 text-xs font-semibold tracking-[0.13em] uppercase text-white/55">
                    {item.title}
                  </strong>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-white/90 hover:text-ochre transition-colors">{item.content}</a>
                  ) : (
                    <span className="text-sm text-white/90 leading-relaxed">{item.content}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-cream text-text-main shadow-2xl">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-[11px] font-semibold tracking-wider uppercase text-green-800">Full name</label>
                <input id="name" type="text" placeholder="Your name" required className="w-full px-4 py-3 rounded-xl border border-green-900/20 bg-white focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-[11px] font-semibold tracking-wider uppercase text-green-800">Phone number</label>
                <input id="phone" type="tel" placeholder="10-digit mobile" required className="w-full px-4 py-3 rounded-xl border border-green-900/20 bg-white focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="village" className="block mb-1 text-[11px] font-semibold tracking-wider uppercase text-green-800">Village / Taluka</label>
              <input id="village" type="text" placeholder="Village and taluka" required className="w-full px-4 py-3 rounded-xl border border-green-900/20 bg-white focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm" />
            </div>

            <div>
              <label htmlFor="interest" className="block mb-1 text-[11px] font-semibold tracking-wider uppercase text-green-800">I am interested in</label>
              <select id="interest" defaultValue="land" className="w-full px-4 py-3 rounded-xl border border-green-900/20 bg-white focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm">
                <option value="land">Collective farming land</option>
                <option value="team">Joining a farming team</option>
                <option value="equipment">Equipment rental</option>
                <option value="saplings">Saplings &amp; seeds</option>
                <option value="guidance">Farming guidance</option>
                <option value="market">Selling produce together</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-[11px] font-semibold tracking-wider uppercase text-green-800">Message (optional)</label>
              <textarea id="message" rows="3" placeholder="Tell us about your land or crop" className="w-full px-4 py-3 rounded-xl border border-green-900/20 bg-white focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm resize-y"></textarea>
            </div>

            <button type="submit" className="w-full mt-2 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-green-800 text-white font-semibold hover:bg-green-700 hover:-translate-y-0.5 transition-all">
              Send enquiry
            </button>

            {sent && (
              <p className="mt-2 p-3 rounded-xl bg-green-100 text-green-700 text-sm" role="status">
                Thank you — your enquiry has been noted. Our field officer will call you
                within two working days.
              </p>
            )}

            <p className="text-center text-xs text-muted mt-2">
              We only use your number to contact you about this enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}