"use client"

import { useState, type FormEvent } from "react"

const socialLinks = [
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-behance", href: "#" },
  { icon: "fab fa-dribbble", href: "#" },
]

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setTimeout(() => {
      setStatus("sent")
      const form = e.target as HTMLFormElement
      form.reset()
      setTimeout(() => setStatus("idle"), 3000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="bg-[#1a1a1a]/95 text-white py-20 relative overflow-hidden backdrop-blur-sm"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="reveal text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-brand-red mb-2 uppercase">
              Contact Us
            </h2>
            <h3 className="text-xl text-[#9ca3af] mb-8 uppercase tracking-widest">
              {"Let's Talk About IT"}
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Physical Address:</h4>
                <p className="text-[#9ca3af] leading-relaxed">
                  Building 2 Constantia Park, 546
                  <br />
                  16th Rd, Randjespark, Midrand,
                  <br />
                  1682
                </p>
              </div>
              <div className="pt-4 space-y-2 text-[#9ca3af]">
                <p>
                  <span className="text-white">Tel:</span> +27 (0)87 265 5236
                </p>
                <p>
                  <span className="text-white">Email:</span> studio@xspark.co.za
                </p>
                <p>
                  <span className="text-white">Website:</span> www.xspark.co.za
                </p>
              </div>
              <div className="flex gap-4 pt-6 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.icon}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition duration-300 text-white"
                    aria-label={link.icon.split("fa-")[1]}
                  >
                    <i className={link.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="ENTER NAME"
                  required
                  className="w-full bg-[#222] border border-[#374151] rounded p-4 text-white focus:outline-none focus:border-brand-red transition"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="ENTER EMAIL"
                  required
                  className="w-full bg-[#222] border border-[#374151] rounded p-4 text-white focus:outline-none focus:border-brand-red transition"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Phone number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="ENTER PHONE NUMBER"
                  className="w-full bg-[#222] border border-[#374151] rounded p-4 text-white focus:outline-none focus:border-brand-red transition"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="ENTER YOUR MESSAGE"
                  required
                  className="w-full bg-[#222] border border-[#374151] rounded p-4 text-white focus:outline-none focus:border-brand-red transition"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full border font-bold py-4 px-6 rounded uppercase tracking-wider transition duration-300 ${
                  status === "sent"
                    ? "bg-brand-red border-brand-red text-white"
                    : status === "sending"
                      ? "bg-brand-red border-brand-red text-white"
                      : "border-[#4b5563] text-white hover:bg-brand-red hover:border-brand-red"
                }`}
              >
                {status === "sending"
                  ? "SENDING..."
                  : status === "sent"
                    ? "MESSAGE SENT!"
                    : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
