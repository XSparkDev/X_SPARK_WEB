"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const HERO_PHRASES = [
  "Upgrade your company\ninto a new future.",
  "We are committed to creating\nquality apps and IT solutions.",
  "In the business of developing\nideas into solutions.",
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const cycle = useCallback(() => {
    setFade(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_PHRASES.length)
      setFade(true)
    }, 500)
  }, [])

  useEffect(() => {
    const id = setInterval(cycle, 4000)
    return () => clearInterval(id)
  }, [cycle])

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector("#contact")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector("#services")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center reveal active">
        <div className="mb-4 relative inline-block">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/X%20Spark%20Logo%20Final-01-TwFWQgJSGD7Bc0xl1U1D4a9sicJkCY.png"
            alt="X Spark logo"
            width={500}
            height={500}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] drop-shadow-2xl transform hover:scale-105 transition duration-500 object-contain"
            priority
          />
        </div>

        {/* Glass backdrop behind text – fixed height/width, overflow hidden so phrases never spill out */}
        <div className="bg-white/20 backdrop-blur-[2px] border border-white/30 shadow-lg rounded-xl px-6 sm:px-8 py-4 sm:py-6 mb-6 w-72 sm:w-[26rem] md:w-[30rem] h-32 sm:h-36 md:h-40 flex items-center justify-center overflow-hidden">
          <h1
            className={`text-lg sm:text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-semibold text-gray-800 leading-snug whitespace-pre-line transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            {HERO_PHRASES[currentIndex]}
          </h1>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-block px-16 py-4 bg-linear-to-r from-brand-purple to-brand-red text-white font-bold text-sm tracking-widest uppercase rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
        >
          CONTACT US
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#services"
          onClick={scrollToServices}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 border border-white/80 text-white backdrop-blur-md shadow-md transition-colors duration-300"
        >
          <i className="fas fa-chevron-down text-2xl text-white" aria-hidden="true" />
          <span className="sr-only">Scroll to services</span>
        </a>
      </div>
    </section>
  )
}
