const quotes = [
  { text: "Before joining, I sold my tomatoes to whoever came to the gate. Now our team of eleven sells a full truck at a time — the price is fixed before harvest.", name: "Savita Patil", place: "Soygaon", initials: "SP" },
  { text: "A power tiller used to cost me ₹1,800 for two days from a private owner. Here it is ₹450 a day, and it reaches my field in the morning.", name: "Ramesh Bhosale", place: "Kannad", initials: "RB" },
  { text: "The agronomist told us to wait nine days before spraying. That one piece of advice saved the entire crop that season.", name: "Dattatray Kale", place: "Gangapur", initials: "DK" },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-flex items-center gap-3 mb-4 text-xs font-semibold tracking-[0.16em] uppercase text-green-600 before:content-[''] before:w-6 before:h-0.5 before:bg-ochre before:rounded-sm before:mx-auto">
            From our members
          </span>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.7rem)] text-green-900">
            Voices from the field
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {quotes.map((quote) => (
            <figure className="flex flex-col p-8 rounded-3xl border border-green-900/[0.07] bg-white shadow-sm" key={quote.name}>
              <div className="mb-2 font-display text-5xl leading-[0.6] text-ochre" aria-hidden="true">
                &ldquo;
              </div>
              <blockquote className="flex-1">
                <p className="text-sm text-text-main">{quote.text}</p>
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-6 pt-6">
                <span className="grid place-items-center shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-700 text-sm font-bold" aria-hidden="true">
                  {quote.initials}
                </span>
                <div>
                  <cite className="block text-sm font-semibold text-green-900 not-italic">{quote.name}</cite>
                  <small className="text-xs text-muted">{quote.place}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}