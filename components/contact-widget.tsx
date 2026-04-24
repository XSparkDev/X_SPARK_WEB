"use client"

import { useState } from "react"

export function ContactWidget() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 mx-auto w-auto max-w-sm bg-white/90 p-3 shadow-2xl backdrop-blur-sm transition-all duration-300 sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:w-64 sm:p-4">
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-[#9ca3af] hover:text-[#1f2937]"
        aria-label="Close contact widget"
      >
        <i className="fas fa-times" aria-hidden="true" />
      </button>
      <h4 className="text-xs font-bold text-[#6b7280] uppercase mb-1">Contact Us</h4>
      <p className="text-xl font-bold text-[#1f2937] mb-3">(087) 265-5236</p>
      <div className="flex gap-3">
        <a
          href="#"
          className="text-[#1f2937] hover:text-brand-purple"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-square text-xl" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="text-[#1f2937] hover:text-brand-red"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-xl" aria-hidden="true" />
        </a>
        <a
          href="#"
          className="text-[#1f2937] hover:text-brand-purple"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-xl" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
