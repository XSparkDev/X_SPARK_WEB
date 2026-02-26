const usps = [
  {
    icon: "fas fa-cogs",
    color: "brand-purple",
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. That's why we don't believe in one-size-fits-all solutions. Our team takes the time to understand your specific needs and challenges, crafting bespoke solutions that precisely align with your goals and objectives.",
  },
  {
    icon: "fas fa-layer-group",
    color: "brand-red",
    title: "Expertise Across the Spectrum",
    description:
      "With a diverse team of experts spanning various domains including ERP Systems, Cloud Infrastructure, Bespoke Software Development, and Data Center Infrastructure Management (DCIM), we offer comprehensive solutions under one roof.",
  },
  {
    icon: "fas fa-heart",
    color: "brand-purple",
    title: "Client-Centric Approach",
    description:
      "At X Spark, our clients are at the heart of everything we do. We prioritize your satisfaction and success above all else, striving to exceed your expectations at every step of the journey.",
  },
  {
    icon: "fas fa-lightbulb",
    color: "brand-red",
    title: "Innovation at the Core",
    description:
      "Innovation drives everything we do. We're constantly pushing the boundaries of technology to deliver cutting-edge solutions that propel your business forward.",
  },
  {
    icon: "fas fa-award",
    color: "brand-purple",
    title: "Commitment to Excellence",
    description:
      "Quality is non-negotiable for us. We adhere to the highest standards of excellence in everything we do, from the solutions we deliver to the support we provide.",
  },
  {
    icon: "fas fa-handshake",
    color: "brand-red",
    title: "Partnership for Success",
    description:
      "We don't just see ourselves as service providers; we see ourselves as your partners in success. We're with you every step of the way, offering guidance, support, and expertise.",
  },
]

export function USPSection() {
  return (
    <section id="usp" className="py-24 glass-light relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-[#111827]">
            What Sets Us Apart
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4" />
        </div>
        <div className="space-y-12">
          {usps.map((usp) => (
            <div key={usp.title} className="flex flex-col md:flex-row gap-6 items-start reveal">
              <div
                className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  usp.color === "brand-purple"
                    ? "bg-brand-purple/10 text-brand-purple"
                    : "bg-brand-red/10 text-brand-red"
                }`}
              >
                <i className={`${usp.icon} text-xl`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-2">{usp.title}</h3>
                <p className="text-[#374151] leading-relaxed">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center reveal">
          <p className="text-[#4b5563] italic">
            Experience the X Spark difference and unlock the full potential of your business. Partner
            with us today and embark on a journey of innovation, excellence, and success.
          </p>
        </div>
      </div>
    </section>
  )
}
