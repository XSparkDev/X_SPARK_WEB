"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#usp", label: "Our USP" },
  { href: "#team", label: "Team" },
  { href: "#partners", label: "Client/Partners" },
  { href: "#contact", label: "Contact" },
  { href: "#support", label: "Support" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#home"
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => scrollToSection(e, "#home")}
            aria-label="X Spark home"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%207.png-3-ALhPlHZEZyFPXStXQq7Yu9KWBrPMXt.avif"
              alt="X Spark - Appsolutely Software"
              width={160}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#4b5563] hover:text-brand-purple font-semibold transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-brand-red hover:text-brand-purple transition flex items-center gap-1"
            >
              <i className="far fa-user-circle text-xl" aria-hidden="true" />
              <span>Client Login</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#4b5563] hover:text-brand-purple focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-2xl`} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-2 text-[#4b5563] hover:bg-[#f9fafb] hover:text-brand-purple font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="block px-3 py-2 text-brand-red hover:bg-[#f9fafb] font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
