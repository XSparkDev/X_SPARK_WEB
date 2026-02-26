"use client"

import { useState } from "react"

export function ContactWidget() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur-sm shadow-2xl rounded-lg p-4 w-64 transition-all duration-300">
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
