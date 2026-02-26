"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { BackgroundVideo } from "@/components/background-video"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { USPSection } from "@/components/usp-section"
import { WelcomeSection } from "@/components/welcome-section"
import { PartnersSection } from "@/components/partners-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ContactWidget } from "@/components/contact-widget"

export default function Home() {
  useScrollReveal()

  return (
    <>
      <BackgroundVideo />
      <div className="relative z-[1]">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <USPSection />
          <WelcomeSection />
          <PartnersSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <ContactWidget />
    </>
  )
}
