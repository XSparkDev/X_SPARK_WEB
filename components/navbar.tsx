"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

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
  const [loginOpen, setLoginOpen] = useState(false)
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
  const [message, setMessage] = useState("")
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
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

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage("Login request received. Client portal connection can be added next.")
  }

  const onForgotPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setForgotPasswordMessage("Password reset request received. Recovery flow can be connected next.")
  }

  const loginModal =
    mounted && loginOpen
      ? createPortal(
          <div className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-24 pb-6 overflow-y-auto">
            <button
              type="button"
              aria-label="Close client login popup"
              className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
              onClick={() => setLoginOpen(false)}
            />

            <div className="relative w-full max-w-[22rem] rounded-[2rem] border border-white/35 bg-white/20 backdrop-blur-xl shadow-2xl overflow-hidden text-white my-auto">
              <div className="relative h-44 bg-white/72 border-b border-white/50">
                <button
                  type="button"
                  onClick={() => setLoginOpen(false)}
                  className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition hover:bg-black/5 hover:text-black"
                  aria-label="Close popup"
                >
                  <i className="fas fa-times text-xl" aria-hidden="true" />
                </button>
                <div className="absolute left-6 top-12 pr-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-black/70">X Spark</p>
                  <h2 className="text-3xl font-bold leading-tight mt-1 text-black/85">
                    Welcome
                    <br />
                    Back
                  </h2>
                </div>
              </div>

              <div className="px-6 py-6 bg-black/15">
              <form onSubmit={onLoginSubmit} className="space-y-5">
                <div>
                  <label htmlFor="client-login-email" className="block text-xs font-semibold mb-2 text-white/85">
                    Email
                  </label>
                  <input
                    id="client-login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/35 bg-white/12 px-3.5 py-3 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] placeholder:text-white/45 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  />
                </div>

                <div>
                  <label htmlFor="client-login-password" className="block text-xs font-semibold mb-2 text-white/85">
                    Password
                  </label>
                  <input
                    id="client-login-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-white/35 bg-white/12 px-3.5 py-3 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] placeholder:text-white/45 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-2xl font-bold">Sign in</p>
                  <button
                    type="submit"
                    className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-red shadow-lg hover:scale-105 transition-transform duration-300"
                    aria-label="Submit login"
                  >
                    <i className="fas fa-arrow-right text-xl" aria-hidden="true" />
                  </button>
                </div>
              </form>

              <div className="mt-8 flex justify-end text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setLoginOpen(false)
                    setForgotPasswordOpen(true)
                    setForgotPasswordMessage("")
                  }}
                  className="underline underline-offset-2 text-white/80 hover:text-white"
                >
                  Forgot Password
                </button>
              </div>

              {message && <p className="mt-4 text-sm text-white/90">{message}</p>}
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  const forgotPasswordModal =
    mounted && forgotPasswordOpen
      ? createPortal(
          <div className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-24 pb-6 overflow-y-auto">
            <button
              type="button"
              aria-label="Close forgot password popup"
              className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
              onClick={() => setForgotPasswordOpen(false)}
            />

            <div className="relative w-full max-w-[22rem] rounded-[2rem] border border-white/35 bg-white/20 backdrop-blur-xl shadow-2xl overflow-hidden text-white my-auto">
              <div className="relative h-44 bg-white/72 border-b border-white/50">
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(false)}
                  className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-black/70 transition hover:bg-black/5 hover:text-black"
                  aria-label="Close popup"
                >
                  <i className="fas fa-times text-xl" aria-hidden="true" />
                </button>
                <div className="absolute left-6 top-12 pr-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-black/70">X Spark</p>
                  <h2 className="text-3xl font-bold leading-tight mt-1 text-black/85">
                    Forgot
                    <br />
                    Password
                  </h2>
                </div>
              </div>

              <div className="px-6 py-6 bg-black/15">
              <form onSubmit={onForgotPasswordSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="forgot-password-email"
                    className="block text-xs font-semibold mb-2 text-white/85"
                  >
                    Email
                  </label>
                  <input
                    id="forgot-password-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={forgotPasswordEmail}
                    onChange={(event) => setForgotPasswordEmail(event.target.value)}
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-white/35 bg-white/12 px-3.5 py-3 text-base font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] placeholder:text-white/45 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <p className="text-2xl font-bold">Reset</p>
                  <button
                    type="submit"
                    className="h-14 w-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-red shadow-lg hover:scale-105 transition-transform duration-300"
                    aria-label="Submit forgot password request"
                  >
                    <i className="fas fa-arrow-right text-xl" aria-hidden="true" />
                  </button>
                </div>
              </form>

              <div className="mt-8 flex justify-end text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setForgotPasswordOpen(false)
                    setLoginOpen(true)
                    setMessage("")
                  }}
                  className="underline underline-offset-2 text-white/80 hover:text-white"
                >
                  Back to Sign in
                </button>
              </div>

              {forgotPasswordMessage && <p className="mt-4 text-sm text-white/90">{forgotPasswordMessage}</p>}
              </div>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
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
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="text-brand-red hover:text-brand-purple transition flex items-center gap-1"
            >
              <i className="far fa-user-circle text-xl" aria-hidden="true" />
              <span>Client Login</span>
            </button>
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
            <button
              type="button"
              onClick={() => {
                setLoginOpen(true)
                setMobileOpen(false)
              }}
              className="block px-3 py-2 text-brand-red hover:bg-[#f9fafb] font-medium"
            >
              Client Login
            </button>
          </div>
        </div>
      )}

    </nav>
    {loginModal}
    {forgotPasswordModal}
    </>
  )
}
