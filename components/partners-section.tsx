import Image from "next/image"

import AbsaLogo from "@/XSpark/Absa.svg.png"
import ATNSLogo from "@/XSpark/atns.jpg"
import AurikLogo from "@/XSpark/Aurik.jpg"
import DiscoveryLogo from "@/XSpark/Discovery.png"
import E4Logo from "@/XSpark/E4 logo.png"
import ECDCLogo from "@/XSpark/ECDC.jpg"
import InvestecLogo from "@/XSpark/Investec.svg.png"
import KTCZALogo from "@/XSpark/KTC-ZA.jpg"
import MicrosoftPartnerLogo from "@/XSpark/Microsoft-partner.png"
import OracleLogo from "@/XSpark/Oracle.png"
import SaabLogo from "@/XSpark/saab.png"
import SamsungLogo from "@/XSpark/Samsung.png"
import SedaLogo from "@/XSpark/seda.jpg"
import SuseLogo from "@/XSpark/Suse.png"
import TushiyahLogo from "@/XSpark/Tushiyah.png"

const partners = [
  { logo: TushiyahLogo, name: "Tushiyah" },
  { logo: SaabLogo, name: "SAAB" },
  { logo: SedaLogo, name: "seda" },
  { logo: SuseLogo, name: "SUSE" },
  // Using the E4 logo image for the CA partner based on available assets
  { logo: E4Logo, name: "CA" },
  { logo: ECDCLogo, name: "ECDC" },
  { logo: SamsungLogo, name: "SAMSUNG" },
  { logo: MicrosoftPartnerLogo, name: "Microsoft Partner" },
  { logo: KTCZALogo, name: "KTC-ZA" },
  { logo: AurikLogo, name: "AURIK" },
  { logo: DiscoveryLogo, name: "Discovery" },
  { logo: AbsaLogo, name: "absa" },
  { logo: InvestecLogo, name: "Investec" },
  { logo: OracleLogo, name: "ORACLE" },
  { logo: ATNSLogo, name: "ATNS" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white border-t border-[#e5e7eb]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-3 reveal text-center md:text-left">
            <h2 className="text-4xl font-[family-name:var(--font-heading)] font-bold text-[#111827] leading-tight">
              CLIENTS &<br />
              PARTNERS
            </h2>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, i) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center p-4 hover:scale-110 transition duration-300 reveal"
                  style={{ transitionDelay: `${(i % 4) * 100}ms` }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.name === "Investec" ? 130 : 100}
                    height={partner.name === "Investec" ? 40 : 30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
