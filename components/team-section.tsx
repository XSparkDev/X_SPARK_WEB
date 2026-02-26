export function TeamSection() {
  return (
    <section id="team" className="relative py-24 glass-dark">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-brand-red mb-6 uppercase tracking-wider">
          Our Team
        </h2>
        <p className="text-xl text-[#d1d5db] mb-12 font-light">
          X Spark has the best and brightest in the field. This is the foundation of everything we
          do.
        </p>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-2xl">
          <p className="text-white text-lg leading-relaxed">
            We have a team with international software development experience from the UK and EU
            developers.
          </p>
        </div>
      </div>
    </section>
  )
}
