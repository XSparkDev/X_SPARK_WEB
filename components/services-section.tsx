const services = [
  {
    title: "ERP Systems:",
    description:
      "Implementing and managing Enterprise Resource Planning systems to streamline operations.",
  },
  {
    title: "Cloud Infrastructure:",
    description:
      "Setting up and supporting client infrastructure on either AWS or Azure depending on their preference.",
  },
  {
    title: "Bespoke Software Development:",
    description:
      "Tailoring software solutions to address specific needs and achieve targeted business objectives.",
  },
  {
    title: "Data Center Infrastructure Management (DCIM):",
    description:
      "Optimise your data center with our comprehensive services, including infrastructure monitoring, resource utilization improvement, and regulatory compliance.",
  },
  {
    title: "Auxiliary Services:",
    description:
      "Providing additional services like Suite Services, specifically SUSE Linux Enterprise Server and Kubernetes, for containerizing applications.",
  },
  {
    title: "Resourcing:",
    description:
      "We help you build the right development team through staff augmentation, project-based teams, and talent acquisition.",
  },
  {
    title: "Network Infrastructure:",
    description:
      "Building and maintaining robust network infrastructure to support seamless operations.",
  },
  {
    title: "Technical Support:",
    description:
      "Delivering ongoing technical assistance to ensure smooth operation and address any challenges users may encounter.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 bg-linear-to-br from-brand-purple/95 via-pink-700/95 to-brand-red/95 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold text-center mb-16 tracking-wide reveal">
          PRODUCTS & SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal hover:translate-x-2 transition duration-300"
              style={{ transitionDelay: `${(i % 4) * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-2 border-b-2 border-white/30 inline-block pb-1">
                {service.title}
              </h3>
              <p className="text-white/90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
