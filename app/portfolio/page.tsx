"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { StaticImageData } from "next/image"
import jsQR from "jsqr"
import { ContactWidget } from "@/components/contact-widget"
import KhayaProfile from "@/profileimages/khaya.jpg"
import SaphoProfile from "@/profileimages/sapho.jpg"
import KhayaQr from "@/profileimages/khayaqr.jpg"
import SaphoQr from "@/profileimages/saphoqr.jpg"
import TikiboxScreen1 from "@/tikiboxscreens/iPhone 6 Plus Mockup (1) copy.png"
import TikiboxScreen2 from "@/tikiboxscreens/iPhone 6 Plus Mockup (2).png"
import TikiboxScreen3 from "@/tikiboxscreens/iPhone 6 Plus Mockup (Splash).png"
import MiwillScreen1 from "@/Miwill/IMG_0282-left.png"
import MiwillScreen2 from "@/Miwill/IMG_0282-portrait.png"
import MiwillScreen3 from "@/Miwill/IMG_0284-left.png"
import MiwillScreen4 from "@/Miwill/IMG_0284-portrait.png"
import MiwillScreen5 from "@/Miwill/IMG_0285-left.png"
import MiwillScreen6 from "@/Miwill/IMG_0285-portrait.png"
import MiwillScreen7 from "@/Miwill/IMG_0287-left.png"
import MiwillScreen8 from "@/Miwill/IMG_0287-portrait.png"
import IdiskiPcScreen1 from "@/Diskiyethu/PCScreen1.jpg"
import IdiskiMobileScreen1 from "@/Diskiyethu/iDiskiyethuMobile1.jpg"
import IdiskiMobileScreen2 from "@/Diskiyethu/iDiskiYethuMobile2.jpg"
import IdiskiYethuLogo from "@/Diskiyethu/iDiskiYethuLogo.jpg"
import SithmaLogo from "@/Sithma/LogoSithma.jpeg"
import SithmaDesktopScreen1 from "@/Sithma/SithmaDesktop1.jpg"
import SithmaMobileScreen1 from "@/Sithma/SithmaMobile1.jpg"
import SithmaMobileScreen2 from "@/Sithma/SithmaMobile2.jpg"
import SithmaMobileScreen3 from "@/Sithma/SithmaMobile3.jpg"
import MightyRaveDesktopScreen from "@/MightyRave/MightyRaveDesktop.jpg"
import MightyRaveLogo from "@/MightyRave/MightyRaveLogo.jpg"
import MakhobaAdminDashboard from "@/Makhoba/MakhobaAdminDashboard.jpg"
import MakhobaAdminDashboard1 from "@/Makhoba/MakhobaAdminDashboard1.jpg"
import MakhobaDesktopLoginInfo from "@/Makhoba/MakhobaDesktopimage1LoginInfo.jpg"
import MakhobaMobile1 from "@/Makhoba/MakhobaMobileimage1.jpg"
import MakhobaMobile2 from "@/Makhoba/MakhobaMobileimage2.jpg"
import MakhobaMobileQr from "@/Makhoba/MakhobaMobileimageQRGenerated3.jpg"
import MakhobaLogo from "@/Makhoba/MakhobaLogo2.svg"
import TrueHomesDesktopLanding from "@/TrueHomes/Truehomesdesktoplandingpage.jpg"
import TrueHomesLogo from "@/TrueHomes/TruehomesLogo.jpg"
import XsCardAdmin1 from "@/XSCard/ScreenshotsEnterprise/Admin/Screenshot 2026-04-08 at 11.27.17.png"
import XsCardAdmin2 from "@/XSCard/ScreenshotsEnterprise/Admin/Screenshot 2026-04-08 at 11.27.33.png"
import XsCardManager1 from "@/XSCard/ScreenshotsEnterprise/Manager/Screenshot 2026-04-08 at 11.30.57.png"
import XsCardMobile1 from "@/XSCard/ScreenshotMobile/xs-card-mobile-1.png"
import XsCardMobile2 from "@/XSCard/ScreenshotMobile/xs-card-mobile-2.png"
import XsCardMobile3 from "@/XSCard/ScreenshotMobile/xs-card-mobile-3.png"
import XsCardMobile4 from "@/XSCard/ScreenshotMobile/xs-card-mobile-4.png"
import XsCardMobile5 from "@/XSCard/ScreenshotMobile/xs-card-mobile-5.png"
import XsCardLogo from "@/XSCard/xscard-logo.webp"
import AgriHero from "@/Agri/agri-hero.jpg"
import AgriScreen1 from "@/Agri/agri-screenshot-1.png"
import AgriScreen2 from "@/Agri/agri-screenshot-2.png"
import AgriScreen3 from "@/Agri/agri-screenshot-3.png"

/** Replace with the live URLs encoded in each founder QR (vCard, LinkedIn, etc.). */
const FOUNDER_QR_LINK_KHAYA = "https://www.xspark.co.za/"
const FOUNDER_QR_LINK_SAPHO = "https://www.xspark.co.za/"

const VALUE_PROPOSITIONS = [
  {
    icon: "fa-bullseye",
    title: "Fixed price MVPs",
    description:
      "Translate early-stage ideas into high-quality, investor-ready prototypes with transparent, predictable costs.",
  },
  {
    icon: "fa-gear",
    title: "Scalable engineering support",
    description:
      "Access competitively priced, full-stack technical expertise to move from concept validation to product launch.",
  },
  {
    icon: "fa-shield-alt",
    title: "De risked execution",
    description:
      "Eliminate technical uncertainty, scope creep, and delivery risk that undermine early-stage product development.",
  },
]

const APPROACH_STEPS = [
  {
    number: "1",
    title: "Concept validation",
    description:
      "Clarify your founder's vision and validate core assumptions before engineering begins.",
  },
  {
    number: "2",
    title: "Rapid prototyping",
    description:
      "Build high-quality MVPs and clickable demos designed for investor and user feedback.",
  },
  {
    number: "3",
    title: "Iterative refinement",
    description:
      "Evolve the product through structured feedback loops and performance optimisation.",
  },
  {
    number: "4",
    title: "Scale ready",
    description:
      "Hand off a technically sound, scalable codebase ready for growth and investment.",
  },
]

const LIVE_COLLABORATOR_PREVIEWS = [
  {
    name: "Tik'iBox Wallet",
    url: "https://tikiboxwallet.com/",
    role: "Digital finance collaborator",
    summary:
      "TikiBox is a self-funded X Spark app for inclusive finance, built with a leading South African bank and focused on underserved communities.",
    screenshots: [
      { src: TikiboxScreen1, device: "mobile" },
      { src: TikiboxScreen2, device: "mobile" },
      { src: TikiboxScreen3, device: "mobile" },
    ],
    story:
      "TikiBox is a self-funded digital application by X Spark, developed in partnership with one of South Africa's leading banks. The platform is designed to support financial inclusion by targeting underserved and underbanked communities. Built for accessibility and ease of use, TikiBox enables secure digital transactions and simplified financial services, helping bridge the gap between traditional banking and emerging markets. The solution is currently moving into commercialisation, with a strong focus on scaling impact within the inclusive finance ecosystem.",
  },
  {
    name: "MiWill",
    url: "https://miwill-webapp.onrender.com",
    role: "Legal-tech innovation collaborator",
    summary: "Digital wills and estate planning: trust-first UX and compliant delivery.",
    screenshots: [
      { src: MiwillScreen1, device: "mobile" },
      { src: MiwillScreen2, device: "mobile" },
      { src: MiwillScreen3, device: "mobile" },
      { src: MiwillScreen4, device: "mobile" },
      { src: MiwillScreen5, device: "mobile" },
      { src: MiwillScreen6, device: "mobile" },
      { src: MiwillScreen7, device: "mobile" },
      { src: MiwillScreen8, device: "mobile" },
    ],
    story:
      "MiWill collaborates with us on secure digital planning systems, trust-first UX, and compliance-conscious platform delivery. We support architecture and execution quality so sensitive user journeys remain dependable as adoption grows.",
  },
  {
    name: "iDiski Yethu",
    role: "Football fan experience platform",
    summary: "SA football fan app: match insight, line-ups, and digital ticketing in one place.",
    screenshots: [
      { src: IdiskiPcScreen1, device: "desktop" },
      { src: IdiskiMobileScreen1, device: "mobile" },
      { src: IdiskiMobileScreen2, device: "mobile" },
    ],
    previewImage: IdiskiPcScreen1,
    previewVideo: "/Diskiyethu/iDiski_Yethi_Profile.mov",
    logo: IdiskiYethuLogo,
    story:
      "iDiski Yethu is a self-funded startup by X Spark focused on delivering the ultimate South African football fan experience. The platform brings fans closer to the game through rich match insights, real-time stats, and interactive features like predicting starting line-ups. It also integrates a seamless digital ticketing experience with fan engagement built in. Currently in development and market-entry phase, iDiski Yethu is positioned to redefine how local fans experience and interact with diski.",
  },
  {
    name: "SITHIMA",
    role: "Smart transport ticketing platform",
    summary: "Bus ticketing online/offline: QR, PIN, and operations tooling for operators.",
    logo: SithmaLogo,
    logoMode: "wordmark" as const,
    screenshots: [
      { src: SithmaDesktopScreen1, device: "desktop" },
      { src: SithmaMobileScreen1, device: "mobile" },
      { src: SithmaMobileScreen2, device: "mobile" },
      { src: SithmaMobileScreen3, device: "mobile" },
    ],
    previewImage: SithmaMobileScreen2,
    previewVideo: "https://www.youtube.com/embed/uaeyxbivux8",
    previewVideoType: "embed",
    story:
      "Sithma is a smart bus ticketing application designed to operate seamlessly both online and offline, supporting both smartphones and feature phones. The platform uses QR codes and PIN-based access to enable secure, efficient ticketing while consolidating backend systems for transport operators. Built for scalability and accessibility in the South African public transport sector, Sithma is currently in negotiation with major operators such as Buscor and PUTCO. The solution is not yet live due to ongoing partnership discussions and IP protection considerations.",
  },
  {
    name: "MIGHTY RAVE",
    role: "Courier and delivery management platform",
    summary: "End-to-end courier ops: orders, dispatch, routes, and live tracking.",
    screenshots: [{ src: MightyRaveDesktopScreen, device: "desktop" }],
    previewImage: MightyRaveDesktopScreen,
    logo: MightyRaveLogo,
    story:
      "Mighty Rave is a funded startup operating a courier and delivery management system built for internal use. The platform streamlines end-to-end logistics, including order management, dispatching, route coordination, and delivery tracking. Designed for efficiency and scalability, the system enables real-time visibility across operations, improving turnaround times and overall service delivery.",
  },
  {
    name: "Makhoba Technican Dash",
    role: "Telecom operations and field execution platform",
    summary: "Field + control-room platform for tower work: jobs, data, and technician apps.",
    screenshots: [
      { src: MakhobaAdminDashboard, device: "desktop" },
      { src: MakhobaAdminDashboard1, device: "desktop" },
      { src: MakhobaDesktopLoginInfo, device: "desktop" },
      { src: MakhobaMobile1, device: "mobile" },
      { src: MakhobaMobile2, device: "mobile" },
      { src: MakhobaMobileQr, device: "mobile" },
    ],
    previewImage: MakhobaDesktopLoginInfo,
    logo: MakhobaLogo,
    story:
      "Makhoba Professional Services Platform is a custom-built internal system developed for a multi-award-winning telecommunications infrastructure company. Serving major clients such as MTN Group and Adapt IT, the solution includes a centralized dashboard and a technician-facing mobile application. The platform enables efficient site coordination, task allocation, and real-time communication between field technicians and management. It streamlines operations across telecom tower deployments and maintenance, improving visibility, productivity, and service delivery across projects. This platform allows client information to be captured so field technicians can access and use structured data effectively, reducing errors while improving execution accuracy and operational efficiency.",
  },
  {
    name: "True Home Inc. Platform",
    role: "Real estate transaction orchestration platform",
    summary: "7-step home-buying flow with MLS data and internal coordination in NYC.",
    screenshots: [{ src: TrueHomesDesktopLanding, device: "desktop" }],
    previewImage: TrueHomesDesktopLanding,
    logo: TrueHomesLogo,
    story:
      "True Home Inc. Platform is a bespoke real estate solution developed for a New York-based agency to enable a transparent and structured home buying process. The system integrates with key property data sources such as MLS and OneKey MLS, alongside internal systems. Built for internal use, the platform guides users through a streamlined 7-step home buying journey, ensuring visibility and coordination across all stakeholders, including agents, buyers, sellers, and service providers such as repair writers. The solution enhances efficiency, accountability, and clarity throughout the property acquisition process.",
  },
  {
    name: "XS Card",
    url: "https://xscard.co.za/",
    role: "Digital business cards and networking platform",
    summary:
      "XS Card (Access Cards) is X Spark's self-funded digital business card, event dashboard, and light CRM platform used in live ecosystems.",
    logo: XsCardLogo,
    logoMode: "xscard" as const,
    eventLinks: [
      { label: "Joe Gqabi", url: "https://joegqabiinvestment.co.za/" },
      { label: "Indaba 2026", url: "https://indaba2026.kznera.org.za/" },
    ],
    screenshots: [
      { src: XsCardAdmin1, device: "desktop" },
      { src: XsCardAdmin2, device: "desktop" },
      { src: XsCardManager1, device: "desktop" },
      { src: XsCardMobile1, device: "mobile" },
      { src: XsCardMobile2, device: "mobile" },
      { src: XsCardMobile3, device: "mobile" },
      { src: XsCardMobile4, device: "mobile" },
      { src: XsCardMobile5, device: "mobile" },
    ],
    story:
      "XS Card (Access Cards) is a self-funded product by X Spark, designed as a digital business card platform combined with a networking event management dashboard and light CRM functionality. The solution enables users to share contact details seamlessly, manage connections, and track engagement during and after events. Built for modern networking environments, Access Cards enhances how individuals and organizations connect, capture leads, and manage relationships in real time. The product is commercially active and in use across events and professional ecosystems.",
  },
  {
    name: "Agri5 Expo",
    url: "https://agri5expo.co.za",
    /** Live site uses bot protection / no iframe embed — use static preview image on the card. */
    embedLiveSite: false,
    previewImage: AgriHero,
    role: "Agriculture exhibition and event platform",
    summary: "Ag sector events and exhibitors: programme visibility and audience reach.",
    logo: AgriHero,
    screenshots: [
      { src: AgriHero, device: "desktop" },
      { src: AgriScreen1, device: "desktop" },
      { src: AgriScreen2, device: "desktop" },
      { src: AgriScreen3, device: "desktop" },
    ],
    story:
      "Agri5 Expo is a public web platform for the agricultural sector, supporting event visibility, exhibitor and programme presence, and audience engagement. The experience is live at agri5expo.co.za, giving producers, service providers, and partners a focused channel to connect around agriculture-focused programmes and field days.",
  },
]

const WORKSPACE_SHELL_CLASS =
  "rounded-[2rem] border border-white/10 bg-black/28 shadow-[0_22px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl"

const DARK_CARD_CLASS =
  "rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"

const PORTFOLIO_SECTIONS = [
  {
    id: "home",
    label: "Portfolio Overview",
    filename: "overview.tsx",
    description: "X Spark hero and positioning",
    icon: "fa-house",
  },
  {
    id: "approach",
    label: "Our Approach",
    filename: "approach.tsx",
    description: "4-step execution flow",
    icon: "fa-diagram-project",
  },
  {
    id: "value-proposition",
    label: "Value Proposition",
    filename: "value-proposition.tsx",
    description: "Core venture-building offers",
    icon: "fa-layer-group",
  },
  {
    id: "collaborators",
    label: "Our Portfolio",
    filename: "portfolio-work.tsx",
    description: "Selected products and case studies",
    icon: "fa-users",
  },
  {
    id: "contact",
    label: "Get in Touch",
    filename: "contact.tsx",
    description: "Final CTA and contact block",
    icon: "fa-envelope",
  },
] as const

type PortfolioSectionId = (typeof PORTFOLIO_SECTIONS)[number]["id"]
type TransitionPhase = "idle" | "exiting" | "entering"
type ThemeMode = "dark" | "light"

const EXIT_DURATION_MS = 280
const ENTER_DURATION_MS = 420

const PARTICLES = [
  { top: "8%", left: "12%", size: 2, delay: "0s", duration: "12s" },
  { top: "16%", left: "28%", size: 3, delay: "1.2s", duration: "15s" },
  { top: "11%", left: "72%", size: 2, delay: "2.4s", duration: "13s" },
  { top: "24%", left: "84%", size: 4, delay: "0.8s", duration: "17s" },
  { top: "33%", left: "18%", size: 3, delay: "3.5s", duration: "14s" },
  { top: "38%", left: "62%", size: 2, delay: "1.8s", duration: "16s" },
  { top: "46%", left: "88%", size: 3, delay: "2.8s", duration: "11s" },
  { top: "54%", left: "10%", size: 2, delay: "0.4s", duration: "18s" },
  { top: "58%", left: "36%", size: 4, delay: "4.1s", duration: "15s" },
  { top: "63%", left: "70%", size: 2, delay: "2.1s", duration: "12s" },
  { top: "72%", left: "22%", size: 3, delay: "1.1s", duration: "19s" },
  { top: "78%", left: "54%", size: 2, delay: "3.2s", duration: "14s" },
  { top: "82%", left: "80%", size: 3, delay: "0.9s", duration: "16s" },
  { top: "88%", left: "42%", size: 2, delay: "2.9s", duration: "13s" },
]

type ScreenshotSlide = {
  src: StaticImageData
  device?: "desktop" | "mobile"
}

type CollaboratorPreview = (typeof LIVE_COLLABORATOR_PREVIEWS)[number]

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState<PortfolioSectionId>("home")
  const [pendingSection, setPendingSection] = useState<PortfolioSectionId | null>(null)
  const [transitionPhase, setTransitionPhase] = useState<TransitionPhase>("idle")
  const [themeMode, setThemeMode] = useState<ThemeMode>("light")
  const [previewModal, setPreviewModal] = useState<{ title: string; slides: ScreenshotSlide[] } | null>(null)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [videoPreviewModal, setVideoPreviewModal] = useState<{ title: string; src: string; type?: "file" | "embed" } | null>(null)
  const [expandedPortfolioWriteups, setExpandedPortfolioWriteups] = useState<Record<string, boolean>>({})
  const qrDecodeCacheRef = useRef<Record<string, string | null>>({})
  const sectionNavScrollRef = useRef<HTMLDivElement>(null)
  const sidebarNavScrollRef = useRef<HTMLDivElement>(null)
  const sectionContentScrollRef = useRef<HTMLDivElement>(null)

  const isLightMode = themeMode === "light"

  const openExternalUrl = (url: string) => {
    if (!url || typeof window === "undefined") {
      return
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const resolveImageSrc = (source: StaticImageData | string) =>
    typeof source === "string" ? source : source.src

  const decodeQrUrlFromImage = async (source: StaticImageData | string) => {
    const sourceKey = resolveImageSrc(source)
    if (sourceKey in qrDecodeCacheRef.current) {
      return qrDecodeCacheRef.current[sourceKey]
    }

    const image = new window.Image()
    image.src = sourceKey
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve()
      image.onerror = () => reject(new Error("Unable to load QR image"))
    })

    const canvas = document.createElement("canvas")
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) {
      qrDecodeCacheRef.current[sourceKey] = null
      return null
    }

    ctx.drawImage(image, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const qrResult = jsQR(imageData.data, imageData.width, imageData.height)
    const decoded = qrResult?.data ?? null
    qrDecodeCacheRef.current[sourceKey] = decoded
    return decoded
  }

  const onFounderQrClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
    qrImage: StaticImageData,
    fallbackUrl: string,
  ) => {
    event.preventDefault()
    try {
      const decodedUrl = await decodeQrUrlFromImage(qrImage)
      openExternalUrl(decodedUrl ?? fallbackUrl)
    } catch {
      openExternalUrl(fallbackUrl)
    }
  }

  const openPreviewModal = (title: string, slides: ScreenshotSlide[]) => {
    if (!slides.length) {
      return
    }
    setPreviewModal({ title, slides })
    setPreviewIndex(0)
  }

  const closePreviewModal = () => {
    setPreviewModal(null)
    setPreviewIndex(0)
  }

  const openVideoPreviewModal = (title: string, src: string, type: "file" | "embed" = "file") => {
    setPreviewModal(null)
    setPreviewIndex(0)
    setVideoPreviewModal({ title, src, type })
  }

  const closeVideoPreviewModal = () => {
    setVideoPreviewModal(null)
  }

  const showNextPreviewSlide = () => {
    if (!previewModal) {
      return
    }
    setPreviewIndex((prev) => (prev + 1) % previewModal.slides.length)
  }

  const showPreviousPreviewSlide = () => {
    if (!previewModal) {
      return
    }
    setPreviewIndex((prev) => (prev - 1 + previewModal.slides.length) % previewModal.slides.length)
  }

  const onPortfolioCardClick = (preview: CollaboratorPreview) => {
    if (typeof window === "undefined" || window.matchMedia("(min-width: 768px)").matches) {
      return
    }
    if (preview.screenshots?.length) {
      openPreviewModal(preview.name, preview.screenshots as ScreenshotSlide[])
      return
    }
    if (preview.previewVideo) {
      openVideoPreviewModal(
        preview.name,
        preview.previewVideo as string,
        (preview.previewVideoType as "file" | "embed" | undefined) ?? "file",
      )
      return
    }
    if (preview.url) {
      openExternalUrl(preview.url)
    }
  }

  const togglePortfolioWriteup = (name: string) => {
    setExpandedPortfolioWriteups((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const currentSection =
    PORTFOLIO_SECTIONS.find((section) => section.id === activeSection) ?? PORTFOLIO_SECTIONS[0]

  const switchSection = (nextSection: PortfolioSectionId) => {
    if (transitionPhase === "idle" && nextSection === activeSection) {
      return
    }

    if (pendingSection === nextSection) {
      return
    }

    setPendingSection(nextSection)

    if (transitionPhase === "idle") {
      setTransitionPhase("exiting")
    }
  }

  useEffect(() => {
    if (transitionPhase !== "exiting" || !pendingSection) {
      return
    }

    const exitTimer = window.setTimeout(() => {
      setActiveSection(pendingSection)
      setTransitionPhase("entering")
    }, EXIT_DURATION_MS)

    return () => window.clearTimeout(exitTimer)
  }, [pendingSection, transitionPhase])

  useEffect(() => {
    if (transitionPhase !== "entering") {
      return
    }

    const enterTimer = window.setTimeout(() => {
      if (pendingSection && pendingSection !== activeSection) {
        setTransitionPhase("exiting")
        return
      }

      setPendingSection(null)
      setTransitionPhase("idle")
    }, ENTER_DURATION_MS)

    return () => window.clearTimeout(enterTimer)
  }, [activeSection, pendingSection, transitionPhase])

  useEffect(() => {
    if (transitionPhase !== "idle") {
      return
    }
    const root = sectionNavScrollRef.current
    const target = root?.querySelector<HTMLElement>(`[data-section-nav="${activeSection}"]`)
    target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [activeSection, transitionPhase])

  useEffect(() => {
    if (transitionPhase !== "idle") {
      return
    }
    const root = sidebarNavScrollRef.current
    const target = root?.querySelector<HTMLElement>(`[data-sidebar-nav="${activeSection}"]`)
    target?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }, [activeSection, transitionPhase])

  useEffect(() => {
    if (transitionPhase !== "idle") {
      return
    }
    sectionContentScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeSection, transitionPhase])

  const shellClass = isLightMode
    ? "rounded-[2rem] border border-[#cfd5e3]/90 bg-white/58 shadow-[0_18px_60px_rgba(50,60,90,0.16)] backdrop-blur-2xl"
    : WORKSPACE_SHELL_CLASS

  const cardClass = isLightMode
    ? "rounded-[1.75rem] border border-[#d6dbe8]/90 bg-white/68 shadow-[0_16px_48px_rgba(64,74,106,0.12)] backdrop-blur-xl"
    : DARK_CARD_CLASS

  const headingClass = isLightMode ? "text-[#1d2340]" : "text-white"
  const mutedClass = isLightMode ? "text-[#4e597a]" : "text-white/72"
  const eyebrowClass = isLightMode ? "text-[#6e7391]" : "text-white/45"
  const sectionSurfaceClass = isLightMode
    ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(246,248,255,0.58))]"
    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]"

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <section className="flex h-full min-h-0 min-w-0 flex-col">
            <div
              className={`portfolio-section-heading ${
                isLightMode ? "portfolio-section-heading-light text-[#1d2340]" : "portfolio-section-heading-dark text-white"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.35em]">Portfolio overview</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-[family-name:var(--font-heading)] font-bold">Cover Sheet</h2>
            </div>

            <div className="relative z-10 flex-1 w-full text-center flex items-center justify-center">
              <div className="w-full max-w-[88rem] mx-auto px-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Asset%207.png-3-ALhPlHZEZyFPXStXQq7Yu9KWBrPMXt.avif"
                  alt="X Spark logo"
                  width={500}
                  height={500}
                  className={`mx-auto mb-10 sm:mb-14 h-24 w-auto sm:h-28 object-contain ${
                    isLightMode
                      ? "drop-shadow-[0_14px_32px_rgba(67,77,111,0.22)]"
                      : "drop-shadow-[0_18px_42px_rgba(0,0,0,0.38)]"
                  }`}
                  priority
                />

                <div className="mx-auto max-w-6xl px-2">
                  <h1
                    className={`text-5xl sm:text-6xl md:text-7xl font-[family-name:var(--font-heading)] font-bold tracking-tight ${headingClass}`}
                  >
                 
                  </h1>

                  <p
                    className={`mt-4 text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] ${
                      isLightMode ? "text-[#596289]" : "text-white/65"
                    }`}
                  >
                   
                  </p>

                  <p
                    className={`mt-10 sm:mt-12 text-lg sm:text-2xl md:text-[2rem] leading-relaxed ${
                      isLightMode ? "text-[#253059]" : "text-white/86"
                    }`}
                  >
                    South African venture-building technology partner helping accelerators,
                    incubators, and enterprise development programmes de-risk technical
                    execution across founder portfolios.
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] shadow-lg backdrop-blur-xl transition ${
                      isLightMode
                        ? "border border-[#c8d1ea] bg-white/85 text-[#1f2d5c] hover:bg-white"
                        : "border border-white/14 bg-white/[0.08] text-white hover:bg-white/[0.12]"
                    }`}
                    onClick={() => switchSection("contact")}
                  >
                    Get in touch
                  </button>
                  <button
                    type="button"
                    onClick={() => switchSection("approach")}
                    className={`inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isLightMode ? "text-[#4f5b83] hover:text-[#1f2d5c]" : "text-white/75 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-lg ${
                        isLightMode
                          ? "border border-[#c8d1ea] bg-white/70"
                          : "border border-white/14 bg-white/[0.06]"
                      }`}
                    >
                      <i className="fas fa-chevron-right text-sm" aria-hidden="true" />
                    </span>
                    Open approach
                  </button>
                </div>
              </div>
            </div>
          </section>
        )

      case "approach":
        return (
          <section className="flex h-full min-h-0 min-w-0 flex-col">
            <div
              className={`portfolio-section-heading ${isLightMode ? "portfolio-section-heading-light" : "portfolio-section-heading-dark"}`}
            >
              <p className={`text-xs uppercase tracking-[0.35em] ${eyebrowClass}`}>Execution</p>
              <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold ${headingClass}`}>
                Our approach
              </h2>
            </div>

            <div className="portfolio-map-grid portfolio-card-3d-root relative flex-1 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <svg
                className="portfolio-connector-svg pointer-events-none absolute inset-0 hidden lg:block"
                viewBox="0 0 1000 260"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="portfolio-connector-base"
                  style={{ stroke: isLightMode ? "rgba(80, 92, 142, 0.38)" : "rgba(255, 255, 255, 0.2)" }}
                  d="M125 130 C220 80, 280 80, 375 130"
                />
                <path
                  className="portfolio-connector-base"
                  style={{ stroke: isLightMode ? "rgba(80, 92, 142, 0.38)" : "rgba(255, 255, 255, 0.2)" }}
                  d="M375 130 C470 180, 530 180, 625 130"
                />
                <path
                  className="portfolio-connector-base"
                  style={{ stroke: isLightMode ? "rgba(80, 92, 142, 0.38)" : "rgba(255, 255, 255, 0.2)" }}
                  d="M625 130 C720 80, 780 80, 875 130"
                />

                <path
                  className="portfolio-connector-spark spark-path-a"
                  style={{ stroke: isLightMode ? "rgba(85, 54, 170, 0.88)" : "rgba(230, 207, 255, 0.92)" }}
                  d="M125 130 C220 80, 280 80, 375 130"
                />
                <path
                  className="portfolio-connector-spark spark-path-b"
                  style={{ stroke: isLightMode ? "rgba(85, 54, 170, 0.88)" : "rgba(230, 207, 255, 0.92)" }}
                  d="M375 130 C470 180, 530 180, 625 130"
                />
                <path
                  className="portfolio-connector-spark spark-path-c"
                  style={{ stroke: isLightMode ? "rgba(85, 54, 170, 0.88)" : "rgba(230, 207, 255, 0.92)" }}
                  d="M625 130 C720 80, 780 80, 875 130"
                />
              </svg>

              {APPROACH_STEPS.map((step) => {
                return (
                <article
                  key={step.number}
                  className={`${cardClass} portfolio-card-spin-shell group relative z-[1] flex min-h-[16rem] flex-col justify-center p-5 text-center`}
                >
                  <div>
                    <div
                      className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold shadow-lg ${
                        isLightMode
                          ? "border border-[#c8d1ea] bg-[#eef1ff] text-[#2a2f52]"
                          : "border border-white/12 bg-brand-purple/18 text-white"
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3 className={`text-2xl font-[family-name:var(--font-heading)] font-bold mb-4 ${headingClass}`}>
                      {step.title}
                    </h3>
                    <p className={`mx-auto max-w-md text-[0.95rem] xl:text-base leading-relaxed ${mutedClass}`}>
                      {step.description}
                    </p>
                  </div>
                </article>
                )
              })}
            </div>
          </section>
        )

      case "value-proposition":
        return (
          <section className="flex h-full min-h-0 min-w-0 flex-col">
            <div
              className={`portfolio-section-heading ${isLightMode ? "portfolio-section-heading-light" : "portfolio-section-heading-dark"}`}
            >
              <p className={`text-xs uppercase tracking-[0.35em] ${eyebrowClass}`}>Offerings</p>
              <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold ${headingClass}`}>
                Our Value Proposition
              </h2>
            </div>

            <div className="portfolio-value-grid portfolio-card-3d-root relative flex-1 grid gap-5 xl:grid-cols-3">
              <svg
                className="portfolio-connector-svg pointer-events-none absolute inset-0 hidden xl:block"
                viewBox="0 0 1000 250"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="portfolio-connector-base"
                  style={{ stroke: isLightMode ? "rgba(80, 92, 142, 0.38)" : "rgba(255, 255, 255, 0.2)" }}
                  d="M160 125 C260 75, 340 75, 500 125"
                />
                <path
                  className="portfolio-connector-base"
                  style={{ stroke: isLightMode ? "rgba(80, 92, 142, 0.38)" : "rgba(255, 255, 255, 0.2)" }}
                  d="M500 125 C660 175, 740 175, 840 125"
                />

                <path
                  className="portfolio-connector-spark spark-path-a"
                  style={{ stroke: isLightMode ? "rgba(85, 54, 170, 0.88)" : "rgba(230, 207, 255, 0.92)" }}
                  d="M160 125 C260 75, 340 75, 500 125"
                />
                <path
                  className="portfolio-connector-spark spark-path-b"
                  style={{ stroke: isLightMode ? "rgba(85, 54, 170, 0.88)" : "rgba(230, 207, 255, 0.92)" }}
                  d="M500 125 C660 175, 740 175, 840 125"
                />
              </svg>

              {VALUE_PROPOSITIONS.map((item) => {
                return (
                <article
                  key={item.title}
                  className={`${cardClass} portfolio-card-spin-shell group relative z-[1] flex min-h-[16rem] flex-col justify-center p-5 text-center`}
                >
                  <div>
                    <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-lg ${
                      isLightMode
                        ? "border border-[#c8d1ea] bg-[#eef1ff] text-[#2a2f52]"
                        : "border border-white/12 bg-brand-purple/16 text-white"
                    }`}>
                      <div
                        className="flex h-full w-full items-center justify-center"
                      >
                        <i className={`fas ${item.icon} text-3xl`} aria-hidden="true" />
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-2xl font-[family-name:var(--font-heading)] font-bold mb-4 ${headingClass}`}>
                        {item.title}
                      </h3>

                      <p className={`mx-auto max-w-md text-[0.95rem] xl:text-base leading-relaxed ${mutedClass}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
                )
              })}
            </div>
          </section>
        )

      case "collaborators":
        return (
          <section className="flex h-full min-h-0 min-w-0 flex-col">
            <div
              className={`portfolio-section-heading ${isLightMode ? "portfolio-section-heading-light" : "portfolio-section-heading-dark"}`}
            >
              <p className={`text-xs uppercase tracking-[0.35em] ${eyebrowClass}`}>Portfolio</p>
              <h2 className={`mt-2 text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-heading)] font-bold ${headingClass}`}>
                Our Portfolio
              </h2>
            </div>

            <div className="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-3 overflow-y-auto px-0.5 sm:gap-4 sm:px-1">
              {LIVE_COLLABORATOR_PREVIEWS.map((preview) => {
                const ext = preview as typeof preview & {
                  previewImage?: StaticImageData
                  embedLiveSite?: boolean
                  summary?: string
                }
                const summaryLine = ext.summary ?? ""
                const mobileScreenshot = preview.screenshots?.find((slide) => slide.device === "mobile")?.src
                const mobileBg = mobileScreenshot ?? ext.previewImage ?? preview.screenshots?.[0]?.src
                const useLiveIframe = Boolean(preview.url && ext.embedLiveSite !== false)
                const eventLinks = (preview as { eventLinks?: { label: string; url: string }[] }).eventLinks
                const isWriteupExpanded = true
                const pill = isLightMode
                  ? "border border-[#c8d1ea] bg-white/95 text-[#2d3a69] active:bg-white"
                  : "border border-white/22 bg-black/60 text-white/92 active:bg-black/75"
                const mobileCardMinHClass =
                  preview.name === "Tik'iBox Wallet"
                    ? "min-h-[34rem] sm:min-h-[36rem]"
                    : preview.name === "MiWill"
                      ? "min-h-[28rem] sm:min-h-[30rem]"
                      : preview.name === "Agri5 Expo"
                        ? "min-h-[30rem] sm:min-h-[32rem]"
                        : preview.name === "Makhoba Technican Dash"
                          ? "min-h-[42rem] sm:min-h-[44rem]"
                          : preview.name === "MIGHTY RAVE"
                            ? "min-h-[34rem] sm:min-h-[36rem]"
                            : "min-h-[38rem] sm:min-h-[40rem]"
                const portfolioCardMobileScrollWriteup =
                  preview.name === "iDiski Yethu" ||
                  preview.name === "SITHIMA" ||
                  preview.name === "Makhoba Technican Dash" ||
                  preview.name === "Tik'iBox Wallet"
                const portfolioCardBodyPadding =
                  preview.name === "SITHIMA"
                    ? "px-3 pt-3 pb-2 sm:p-5"
                    : preview.name === "MIGHTY RAVE"
                      ? "px-3 pt-3 pb-1.5 sm:p-5"
                      : preview.name === "Tik'iBox Wallet"
                        ? "md:p-5 max-md:px-3 max-md:pt-3 max-md:pb-6"
                        : "p-3 sm:p-5"

                return (
                <article
                  key={preview.url ?? preview.name}
                  onClick={() => onPortfolioCardClick(preview)}
                  className={`group relative flex flex-col overflow-hidden rounded-[1.35rem] max-md:cursor-pointer sm:rounded-[1.75rem] md:min-h-[16rem] ${mobileCardMinHClass} ${cardClass}`}
                >
                  <div
                    className={`absolute right-3 top-3 z-20 hidden max-w-[min(100%,calc(100%-11rem))] flex-col items-stretch gap-2 sm:right-4 sm:top-4 md:flex sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-2`}
                  >
                    {preview.screenshots?.length ? (
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          openPreviewModal(preview.name, preview.screenshots as ScreenshotSlide[])
                        }}
                        className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
                          isLightMode
                            ? "border border-[#c8d1ea] bg-white/92 text-[#2d3a69] hover:bg-white"
                            : "border border-white/20 bg-black/45 text-white/85 hover:bg-black/62"
                        }`}
                        aria-label={`Open ${preview.name} screenshots`}
                      >
                        <i className="fas fa-camera-retro text-xs" aria-hidden="true" />
                        Preview
                      </button>
                    ) : null}
                    {eventLinks?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
                          isLightMode
                            ? "border border-[#c8d1ea] bg-white/80 text-[#2d3a69] hover:bg-white"
                            : "border border-white/20 bg-black/40 text-white/88 hover:bg-black/55"
                        }`}
                      >
                        <i className="fas fa-link text-[10px]" aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                  {preview.logo ? (
                    (() => {
                      const logoMode = (preview as { logoMode?: "wordmark" | "xscard" }).logoMode
                      if (logoMode === "wordmark") {
                        return (
                          <div
                            className={`absolute left-3 top-3 z-20 flex h-[2.5rem] w-[9.5rem] items-center justify-center overflow-hidden rounded-xl border shadow-[0_6px_24px_rgba(0,0,0,0.1)] sm:left-4 sm:top-4 sm:h-[3.1rem] sm:w-[11.75rem] sm:rounded-2xl md:h-[3.35rem] md:w-[12.75rem] ${
                              isLightMode
                                ? "border-[#d9dee8] bg-white ring-1 ring-black/[0.04]"
                                : "border-[#2a2f3d] bg-white ring-1 ring-white/10"
                            }`}
                          >
                            <div className="relative flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-hidden px-0.5">
                              <Image
                                src={preview.logo as never}
                                alt={`${preview.name} logo`}
                                className="h-[128%] w-[128%] min-h-[128%] min-w-[128%] max-w-none object-contain object-center"
                              />
                            </div>
                          </div>
                        )
                      }
                      if (logoMode === "xscard") {
                        return (
                          <div
                            className={`absolute left-3 top-3 z-20 flex h-10 w-[9rem] items-center justify-center overflow-hidden rounded-2xl border sm:left-4 sm:top-4 sm:h-11 sm:w-[10.4rem] md:h-12 md:w-[11.1rem] ${
                              isLightMode
                                ? "border-[#dce1ec] bg-white shadow-[0_4px_18px_rgba(32,40,80,0.12)]"
                                : "border-white/10 bg-gradient-to-b from-white/[0.11] to-white/[0.04] shadow-[0_4px_18px_rgba(0,0,0,0.35)]"
                            }`}
                          >
                            <Image
                              src={preview.logo as never}
                              alt={`${preview.name} logo`}
                              className="h-[88%] w-[86%] object-contain object-center [image-rendering:-webkit-optimize-contrast]"
                            />
                          </div>
                        )
                      }
                      return (
                        <div
                          className={`absolute left-3 top-3 z-20 flex h-9 w-[8.25rem] items-center justify-center overflow-hidden rounded-xl border p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.2)] sm:left-4 sm:top-4 sm:h-10 sm:w-[9.25rem] md:h-11 md:w-[10.25rem] ${
                            isLightMode ? "border-[#c8d1ea] bg-white/90" : "border-white/22 bg-black/40"
                          }`}
                        >
                          <Image
                            src={preview.logo as never}
                            alt={`${preview.name} logo`}
                            className="h-full w-full object-contain object-center"
                          />
                        </div>
                      )
                    })()
                  ) : null}
                  {preview.previewVideo ? (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        openVideoPreviewModal(
                          preview.name,
                          preview.previewVideo as string,
                          (preview.previewVideoType as "file" | "embed" | undefined) ?? "file",
                        )
                      }}
                      className={`absolute right-3 z-20 hidden items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition md:inline-flex ${
                        preview.screenshots?.length
                          ? (preview as { eventLinks?: unknown[] }).eventLinks?.length
                            ? "top-24 sm:top-14"
                            : "top-14"
                          : "top-12 sm:top-4"
                      } ${
                        isLightMode
                          ? "border border-[#c8d1ea] bg-white/92 text-[#2d3a69] hover:bg-white"
                          : "border border-white/20 bg-black/45 text-white/85 hover:bg-black/62"
                      }`}
                      aria-label={`Open ${preview.name} video preview`}
                    >
                      <i className="fas fa-video text-xs" aria-hidden="true" />
                      Video
                    </button>
                  ) : null}
                  {preview.url ? (
                    <a
                      href={preview.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={`absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] md:hidden ${
                        isLightMode
                          ? "border border-[#c8d1ea] bg-white/95 text-[#24315f]"
                          : "border border-white/24 bg-black/65 text-white"
                      }`}
                      aria-label={`Open ${preview.name} live site`}
                    >
                      Site
                      <i className="fas fa-arrow-up-right-from-square text-[9px]" aria-hidden="true" />
                    </a>
                  ) : null}

                  <div className="relative h-52 w-full shrink-0 overflow-hidden bg-[#12141f] md:absolute md:inset-0 md:h-full">
                    {mobileBg ? (
                      <Image
                        src={mobileBg as never}
                        alt=""
                        fill
                        className="object-contain object-center p-1.5 md:hidden"
                        sizes="100vw"
                        priority={preview.name === "Agri5 Expo"}
                      />
                    ) : null}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#04050a] from-40% via-[#04050a]/70 to-transparent md:hidden"
                      aria-hidden
                    />

                    <div className="absolute inset-0 hidden overflow-hidden md:block">
                      {useLiveIframe ? (
                        <iframe
                          src={preview.url}
                          title={`${preview.name} live preview`}
                          className="h-full w-full origin-top-left scale-[0.66] border-0 pointer-events-none"
                          style={{ width: "151.5%", height: "151.5%" }}
                          loading="lazy"
                          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      ) : ext.previewImage ? (
                        <Image
                          src={ext.previewImage as never}
                          alt={`${preview.name} preview`}
                          className="h-full w-full object-cover"
                          priority={preview.name === "Agri5 Expo"}
                        />
                      ) : (
                        <div
                          className={`h-full w-full ${
                            isLightMode ? "bg-[#e8ecf7]" : "bg-[#12141f]"
                          }`}
                          aria-hidden
                        />
                      )}
                      <div
                        className={`absolute inset-0 ${
                          isLightMode
                            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.52))]"
                            : "bg-[linear-gradient(180deg,rgba(8,11,20,0.26),rgba(8,11,20,0.62))]"
                        }`}
                      />
                    </div>
                  </div>
                  {!preview.logo ? (
                    <div
                      className={`absolute left-3 top-3 z-20 inline-flex max-w-[13rem] items-center rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] sm:left-4 sm:top-4 ${
                        isLightMode
                          ? "border border-[#c8d1ea] bg-white/92 text-[#24315f]"
                          : "border border-white/20 bg-black/55 text-white/88"
                      }`}
                    >
                      <span className="truncate">{preview.name}</span>
                    </div>
                  ) : null}

                  <div
                    className={`relative z-[1] flex flex-1 flex-col justify-start ${portfolioCardBodyPadding} md:absolute md:inset-0 md:justify-end ${
                      portfolioCardMobileScrollWriteup ? "max-md:min-h-0" : ""
                    } ${
                      isLightMode
                        ? "md:bg-transparent max-md:border-t max-md:border-[#d6dbe8]/30 max-md:bg-[#f5f6fb]"
                        : "md:bg-transparent max-md:border-t max-md:border-white/10 max-md:bg-[#0a0c12]"
                    }`}
                  >
                    <div
                      className={
                        portfolioCardMobileScrollWriteup
                          ? "max-md:flex max-md:min-h-0 max-md:flex-1 max-md:flex-col md:mt-auto"
                          : "md:mt-auto"
                      }
                    >
                    <p className={`text-[0.65rem] uppercase tracking-[0.24em] sm:text-xs sm:tracking-[0.28em] ${isLightMode ? "text-[#56608a]" : "text-white/70"}`}>
                      Portfolio
                    </p>
                    <h3 className={`mt-1 text-lg font-[family-name:var(--font-heading)] font-bold sm:mt-1.5 sm:text-xl md:text-2xl ${headingClass}`}>
                      {preview.name}
                    </h3>
                    <p className={`mt-0.5 text-sm leading-snug sm:mt-1 ${mutedClass}`}>{preview.role}</p>
                    {!preview.url ? (
                      <p className={`mt-2 inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        isLightMode ? "border border-[#cad2ec] bg-white/85 text-[#35406e]" : "border border-white/20 bg-black/35 text-white/82"
                      }`}>
                        Launching soon
                      </p>
                    ) : null}
                    <p
                      className={`mt-2 text-[0.8125rem] leading-snug lg:hidden ${mutedClass}${
                        portfolioCardMobileScrollWriteup
                          ? " max-md:min-h-0 max-md:flex-1 max-md:overflow-y-auto max-md:pr-0.5"
                          : ""
                      }`}
                    >
                      {preview.story || summaryLine}
                    </p>
                    <div className="mt-auto flex shrink-0 flex-col gap-2 pt-4 md:hidden">
                      <div className="flex flex-wrap gap-2">
                        {preview.screenshots?.length ? (
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation()
                              openPreviewModal(preview.name, preview.screenshots as ScreenshotSlide[])
                            }}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${pill}`}
                            aria-label={`Open ${preview.name} screenshots`}
                          >
                            <i className="fas fa-camera-retro text-xs" aria-hidden="true" />
                            Preview
                          </button>
                        ) : null}
                        {preview.previewVideo ? (
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation()
                              openVideoPreviewModal(
                                preview.name,
                                preview.previewVideo as string,
                                (preview.previewVideoType as "file" | "embed" | undefined) ?? "file",
                              )
                            }}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${pill}`}
                            aria-label={`Open ${preview.name} video preview`}
                          >
                            <i className="fas fa-video text-xs" aria-hidden="true" />
                            Video
                          </button>
                        ) : null}
                        {preview.url ? (
                          <a
                            href={preview.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-semibold tracking-[0.1em] uppercase ${pill}`}
                          >
                            Live site
                            <i className="fas fa-arrow-up-right-from-square text-[10px]" aria-hidden="true" />
                          </a>
                        ) : null}
                        {eventLinks?.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className={`inline-flex items-center justify-center gap-1.5 rounded-full px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] ${pill}`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                    {preview.url ? (
                      <a
                        href={preview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-3 hidden w-fit items-center gap-2 rounded-full px-3 py-2 text-[10px] font-semibold tracking-[0.12em] uppercase sm:tracking-[0.16em] md:inline-flex ${
                          isLightMode
                            ? "border border-[#c8d1ea] bg-white/90 text-[#24315f]"
                            : "border border-white/20 bg-white/[0.12] text-white"
                        }`}
                      >
                        Open live site
                        <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
                      </a>
                    ) : null}
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 z-30 max-md:hidden invisible opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <div
                      className={`absolute inset-0 ${
                        isLightMode ? "bg-white/70" : "bg-black/68"
                      } backdrop-blur-lg`}
                    />
                    <div className="absolute inset-0 z-[1] flex flex-col justify-center p-5 pt-20 sm:pt-16">
                      <h4 className={`text-xl font-[family-name:var(--font-heading)] font-bold ${headingClass}`}>
                        Our Portfolio
                      </h4>
                      <p className={`mt-3 text-sm leading-relaxed ${mutedClass}`}>{preview.story}</p>
                      {preview.url ? (
                        <a
                          href={preview.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] uppercase ${
                            isLightMode
                              ? "border border-[#c8d1ea] bg-white/90 text-[#24315f]"
                              : "border border-white/20 bg-white/[0.08] text-white"
                          }`}
                        >
                          Open live site
                          <i className="fas fa-arrow-up-right-from-square text-xs" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
                )
              })}
            </div>
          </section>
        )

      case "contact":
        return (
          <section className="flex h-full min-h-0 min-w-0 flex-col">
            <div
              className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] shadow-[0_20px_70px_rgba(0,0,0,0.35)] ${
                isLightMode ? "border border-[#d6dbe8] bg-white/68" : "border border-white/10 bg-black/28"
              }`}
            >
              <div
                className={`min-h-0 flex-1 overflow-y-auto overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch] ${
                  isLightMode
                    ? "bg-[linear-gradient(145deg,rgba(229,233,255,0.96),rgba(248,249,255,0.96)_55%,rgba(236,239,255,0.96))]"
                    : "bg-[linear-gradient(145deg,rgba(82,23,98,0.55),rgba(19,20,32,0.92)_55%,rgba(105,22,50,0.5))]"
                }`}
              >
                <div
                  className={`mx-auto w-full max-w-7xl px-4 py-6 text-center sm:px-6 sm:py-8 md:px-12 md:py-10 ${isLightMode ? "text-[#253059]" : "text-white/95"}`}
                >
                  <div className="mb-6 md:mb-10">
                    <p className={`text-xs uppercase tracking-[0.32em] ${eyebrowClass}`}>Leadership</p>
                    <h3 className={`mt-3 text-2xl font-[family-name:var(--font-heading)] font-bold sm:text-3xl md:text-5xl ${headingClass}`}>
                      Meet The Founders
                    </h3>
                    <p className={`mx-auto mt-2 hidden max-w-2xl text-sm md:mt-3 md:block md:text-base ${mutedClass}`}>
                      Hover each profile to reveal QR details and connect directly.
                    </p>
                    <p className={`mx-auto mt-2 max-w-2xl text-sm md:hidden ${mutedClass}`}>
                      Tap a QR code to open the link it encodes.
                    </p>
                  </div>

                  <div className="flex flex-col items-stretch gap-8 pb-14 md:hidden">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full shadow-xl ring-2 ring-white/15 sm:h-44 sm:w-44">
                        <Image src={KhayaProfile} alt="Khaya Maqhwazima" className="h-full w-full object-cover object-[50%_18%]" />
                      </div>
                      <a
                        href={FOUNDER_QR_LINK_KHAYA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 inline-block rounded-2xl border-2 p-2 shadow-lg transition active:scale-[0.98] ${
                          isLightMode
                            ? "border-[#c8d1ea] bg-white ring-2 ring-brand-purple/25"
                            : "border-white/25 bg-white/5 ring-2 ring-white/20"
                        }`}
                        aria-label="Open Khaya connection link (QR)"
                        onClick={(event) => onFounderQrClick(event, KhayaQr, FOUNDER_QR_LINK_KHAYA)}
                      >
                        <Image
                          src={KhayaQr}
                          alt="Khaya QR"
                          width={120}
                          height={120}
                          className="h-[5.25rem] w-[5.25rem] rounded-lg object-cover sm:h-[5.75rem] sm:w-[5.75rem]"
                        />
                      </a>
                      <p className={`mt-4 text-lg font-semibold sm:text-xl ${headingClass}`}>Khaya Maqhwazima</p>
                      <p className={`text-sm ${mutedClass}`}>Co-founder and CEO</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full shadow-xl ring-2 ring-white/15 sm:h-44 sm:w-44">
                        <Image src={SaphoProfile} alt="Sapho Maqhwazima" className="h-full w-full object-cover" />
                      </div>
                      <a
                        href={FOUNDER_QR_LINK_SAPHO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 inline-block rounded-2xl border-2 p-2 shadow-lg transition active:scale-[0.98] ${
                          isLightMode
                            ? "border-[#c8d1ea] bg-white ring-2 ring-brand-purple/25"
                            : "border-white/25 bg-white/5 ring-2 ring-white/20"
                        }`}
                        aria-label="Open Sapho connection link (QR)"
                        onClick={(event) => onFounderQrClick(event, SaphoQr, FOUNDER_QR_LINK_SAPHO)}
                      >
                        <Image
                          src={SaphoQr}
                          alt="Sapho QR"
                          width={120}
                          height={120}
                          className="h-[5.25rem] w-[5.25rem] rounded-lg object-cover sm:h-[5.75rem] sm:w-[5.75rem]"
                        />
                      </a>
                      <p className={`mt-4 text-lg font-semibold sm:text-xl ${headingClass}`}>Sapho Maqhwazima</p>
                      <p className={`text-sm ${mutedClass}`}>Co-Founder and CTO</p>
                    </div>
                  </div>

                  <div className="hidden grid-cols-1 gap-8 pb-2 md:grid md:grid-cols-2 md:gap-6">
                    <div className="group portfolio-founder-card flex flex-col items-center text-center">
                      <div
                        className="relative h-64 w-64 overflow-visible md:h-80 md:w-80 portfolio-founder-orb"
                      >
                        <div className="h-full w-full overflow-hidden rounded-full shadow-xl">
                          <Image
                            src={KhayaProfile}
                            alt="Khaya Maqhwazima"
                            className="h-full w-full object-cover object-[50%_18%] transition-opacity duration-300 group-hover:opacity-0"
                          />
                        </div>
                        <a
                          href={FOUNDER_QR_LINK_KHAYA}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`pointer-events-none absolute inset-0 z-[2] flex items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                            isLightMode ? "bg-white/92" : "bg-[#0f1326]/92"
                          }`}
                          aria-label="Open Khaya connection link"
                          onClick={(event) => onFounderQrClick(event, KhayaQr, FOUNDER_QR_LINK_KHAYA)}
                        >
                          <Image
                            src={KhayaQr}
                            alt="Khaya Maqhwazima QR code"
                            width={200}
                            height={200}
                            className="h-44 w-44 rounded-2xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.15)] md:h-56 md:w-56"
                          />
                        </a>
                        <div
                          className={`pointer-events-none absolute bottom-0 left-1/2 z-[1] flex h-20 w-20 -translate-x-1/2 translate-y-6 items-center justify-center rounded-xl border text-sm font-bold tracking-[0.18em] transition-all duration-300 ${
                            isLightMode
                              ? "border-[#b9c3e9] bg-white/90 text-[#39406e]"
                              : "border-white/30 bg-[#12172e]/90 text-white/90"
                          } opacity-75 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100`}
                        >
                          <a
                            href={FOUNDER_QR_LINK_KHAYA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto relative h-16 w-16 overflow-hidden rounded-md"
                            aria-label="Open Khaya connection link (QR)"
                            onClick={(event) => {
                              event.stopPropagation()
                              void onFounderQrClick(event, KhayaQr, FOUNDER_QR_LINK_KHAYA)
                            }}
                          >
                            <Image
                              src={KhayaQr}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </a>
                        </div>
                      </div>
                      <p className={`mt-5 text-xl font-semibold md:text-2xl ${headingClass}`}>Khaya Maqhwazima</p>
                      <p className={`mt-1 text-sm md:text-base ${mutedClass}`}>Co-founder and CEO</p>
                    </div>

                    <div className="group portfolio-founder-card flex flex-col items-center text-center">
                      <div
                        className="relative h-64 w-64 overflow-visible md:h-80 md:w-80 portfolio-founder-orb"
                      >
                        <div className="h-full w-full overflow-hidden rounded-full shadow-xl">
                          <Image
                            src={SaphoProfile}
                            alt="Sapho Maqhwazima"
                            className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                          />
                        </div>
                        <a
                          href={FOUNDER_QR_LINK_SAPHO}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`pointer-events-none absolute inset-0 z-[2] flex items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${
                            isLightMode ? "bg-white/92" : "bg-[#0f1326]/92"
                          }`}
                          aria-label="Open Sapho connection link"
                          onClick={(event) => onFounderQrClick(event, SaphoQr, FOUNDER_QR_LINK_SAPHO)}
                        >
                          <Image
                            src={SaphoQr}
                            alt="Sapho Maqhwazima QR code"
                            width={200}
                            height={200}
                            className="h-44 w-44 rounded-2xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.15)] md:h-56 md:w-56"
                          />
                        </a>
                        <div
                          className={`pointer-events-none absolute bottom-0 left-1/2 z-[1] flex h-20 w-20 -translate-x-1/2 translate-y-6 items-center justify-center rounded-xl border text-sm font-bold tracking-[0.18em] transition-all duration-300 ${
                            isLightMode
                              ? "border-[#b9c3e9] bg-white/90 text-[#39406e]"
                              : "border-white/30 bg-[#12172e]/90 text-white/90"
                          } opacity-75 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100`}
                        >
                          <a
                            href={FOUNDER_QR_LINK_SAPHO}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto relative h-16 w-16 overflow-hidden rounded-md"
                            aria-label="Open Sapho connection link (QR)"
                            onClick={(event) => {
                              event.stopPropagation()
                              void onFounderQrClick(event, SaphoQr, FOUNDER_QR_LINK_SAPHO)
                            }}
                          >
                            <Image
                              src={SaphoQr}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </a>
                        </div>
                      </div>
                      <p className={`mt-5 text-xl font-semibold md:text-2xl ${headingClass}`}>Sapho Maqhwazima</p>
                      <p className={`mt-1 text-sm md:text-base ${mutedClass}`}>Co-Founder and CTO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <>
      <div
        className={`relative min-h-screen overflow-hidden ${
          isLightMode ? "bg-[#f2f5ff]" : "bg-[#070a12]"
        }`}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className={`absolute inset-0 ${
              isLightMode
                ? "bg-[radial-gradient(circle_at_top_left,rgba(121,91,199,0.16),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(189,88,129,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(99,130,205,0.12),transparent_34%),linear-gradient(180deg,rgba(245,248,255,0.95),rgba(237,242,255,0.96))]"
                : "bg-[radial-gradient(circle_at_top_left,rgba(110,35,140,0.28),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(147,25,63,0.22),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(95,42,125,0.14),transparent_34%),linear-gradient(180deg,rgba(7,10,18,0.96),rgba(10,12,22,0.98))]"
            }`}
          />
          <div
            className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] ${
              isLightMode ? "opacity-[0.09]" : "opacity-[0.06]"
            }`}
          />
          <div
            className={`absolute top-[10%] left-[8%] h-56 w-56 rounded-full blur-3xl ${
              isLightMode ? "bg-brand-purple/10" : "bg-brand-purple/12"
            }`}
          />
          <div
            className={`absolute right-[10%] top-[20%] h-64 w-64 rounded-full blur-3xl ${
              isLightMode ? "bg-brand-red/7" : "bg-brand-red/10"
            }`}
          />
          <div
            className={`absolute bottom-[12%] left-[35%] h-72 w-72 rounded-full blur-3xl ${
              isLightMode ? "bg-brand-purple/6" : "bg-brand-purple/8"
            }`}
          />

          {PARTICLES.map((particle, index) => (
            <span
              key={index}
              className="portfolio-particle absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              style={{
                top: particle.top,
                left: particle.left,
                width: `${particle.size * 2}px`,
                height: `${particle.size * 2}px`,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div className="relative z-[1] h-dvh min-h-0 overflow-hidden">
          <main className="h-full min-h-0 px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4">
            <div className="h-full min-h-0 w-full">
              <div className="grid h-full min-h-0 min-w-0 grid-cols-[minmax(0,1fr)] gap-3 sm:gap-4 lg:grid-cols-[minmax(0,21rem)_minmax(0,1fr)]">
              <aside className={`${shellClass} hidden h-full min-h-0 shrink-0 overflow-hidden p-4 lg:block`}>
                <div
                  className={`flex h-full min-h-0 flex-col rounded-[1.5rem] p-5 ${
                    isLightMode
                      ? "border border-[#d6dbe8] bg-white/52 text-[#1d2340]"
                      : "border border-white/8 bg-black/26 text-white"
                  }`}
                >
                  <div className={`mb-6 shrink-0 pb-4 ${isLightMode ? "border-b border-[#d6dbe8]" : "border-b border-white/10"}`}>
                    <p
                      className={`text-[0.65rem] uppercase tracking-[0.35em] ${
                        isLightMode ? "text-[#6d7390]" : "text-white/48"
                      }`}
                    >
                      Portfolio Explorer
                    </p>
                    <h1 className={`mt-2 text-2xl font-[family-name:var(--font-heading)] font-bold ${headingClass}`}>
                      X Spark Portfolio
                    </h1>
                  </div>

                  <div ref={sidebarNavScrollRef} className="min-h-0 flex-1 space-y-2 overflow-y-auto overflow-x-hidden pr-0.5 [-webkit-overflow-scrolling:touch]">
                    {PORTFOLIO_SECTIONS.map((section) => {
                      const isActive = section.id === activeSection

                      return (
                        <button
                          key={section.id}
                          type="button"
                          data-sidebar-nav={section.id}
                          onClick={() => switchSection(section.id)}
                          className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                            isActive
                              ? isLightMode
                                ? "border-[#cbd3ea] bg-white/78 shadow-[0_12px_30px_rgba(80,92,130,0.12)]"
                                : "border-white/18 bg-white/[0.08] shadow-[0_14px_36px_rgba(0,0,0,0.24)]"
                              : isLightMode
                                ? "border-transparent bg-transparent hover:border-[#d5dbee] hover:bg-white/50"
                                : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                                isActive
                                  ? isLightMode
                                    ? "bg-[#eef1ff] text-[#2b3259] border border-[#c8d1ea]"
                                    : "bg-brand-purple/18 text-white border border-brand-purple/22"
                                  : isLightMode
                                    ? "bg-white/55 text-[#6b7394] border border-[#d6dbe8]"
                                    : "bg-white/[0.04] text-white/70 border border-white/6"
                              }`}
                            >
                              <i className={`fas ${section.icon}`} aria-hidden="true" />
                            </div>
                            <div className="min-w-0">
                              <p className={`truncate text-base font-semibold ${headingClass}`}>{section.label}</p>
                              <p className={`truncate text-xs uppercase tracking-[0.25em] ${isLightMode ? "text-[#7b83a4]" : "text-white/42"}`}>
                                {section.filename}
                              </p>
                              <p className={`mt-1 text-sm leading-relaxed ${mutedClass}`}>{section.description}</p>
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </aside>

              <section
                className={`${shellClass} flex h-full min-h-0 min-w-0 flex-col overflow-hidden ${
                  transitionPhase !== "idle"
                    ? isLightMode
                      ? "portfolio-shell-transition-light"
                      : "portfolio-shell-transition"
                    : ""
                }`}
              >
                <div
                  className={`shrink-0 px-3 py-3 transition-[border-color,background-color,box-shadow] duration-300 sm:px-5 sm:py-4 ${
                    isLightMode
                      ? "border-b border-[#d6dbe8] bg-white/52 text-[#1d2340]"
                      : "border-b border-white/10 bg-black/22 text-white"
                  } ${
                    transitionPhase !== "idle"
                      ? isLightMode
                        ? "portfolio-workspace-header-active-light"
                        : "portfolio-workspace-header-active"
                      : ""
                  }`}
                >
                  <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                      <p className={`text-[0.6rem] uppercase tracking-[0.3em] sm:text-[0.65em] sm:tracking-[0.35em] ${isLightMode ? "text-[#6f7797]" : "text-white/46"}`}>
                        Portfolio Workspace
                      </p>
                      <p className={`mt-1.5 break-words text-sm font-semibold sm:mt-2 sm:text-base md:text-lg ${headingClass}`}>
                        portfolio / {currentSection.filename}
                      </p>
                    </div>

                    <div className="flex min-w-0 flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="button"
                        onClick={() => setThemeMode((prev) => (prev === "dark" ? "light" : "dark"))}
                        className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
                          isLightMode
                            ? "border-[#c8d1ea] bg-white/86 text-[#203062]"
                            : "border-white/14 bg-white/[0.08] text-white/90"
                        }`}
                        aria-label="Toggle portfolio light mode"
                      >
                        <i className={`fas ${isLightMode ? "fa-moon" : "fa-sun"}`} aria-hidden="true" />
                        {isLightMode ? "Dark mode" : "Light mode"}
                      </button>

                      <div className="w-full max-w-full lg:hidden">
                        <p
                          className={`mb-1.5 text-center text-[0.58rem] font-medium uppercase tracking-[0.22em] ${
                            isLightMode ? "text-[#7b83a4]" : "text-white/48"
                          }`}
                        >
                          Swipe tabs — more sections
                        </p>
                        <div className="relative">
                          <div
                            className={`pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 bg-gradient-to-r ${
                              isLightMode
                                ? "from-white via-white/90 to-transparent"
                                : "from-[rgb(18,20,28)] via-[rgb(18,20,28)]/90 to-transparent"
                            }`}
                            aria-hidden
                          />
                          <div
                            className={`pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l ${
                              isLightMode
                                ? "from-white via-white/90 to-transparent"
                                : "from-[rgb(18,20,28)] via-[rgb(18,20,28)]/90 to-transparent"
                            }`}
                            aria-hidden
                          />
                          <div
                            ref={sectionNavScrollRef}
                            role="tablist"
                            aria-label="Portfolio sections"
                            className="flex w-full min-w-0 max-w-full touch-pan-x snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5"
                          >
                            {PORTFOLIO_SECTIONS.map((section) => {
                              const isActive = section.id === activeSection
                              return (
                                <button
                                  key={section.id}
                                  type="button"
                                  role="tab"
                                  aria-selected={isActive}
                                  data-section-nav={section.id}
                                  onClick={() => switchSection(section.id)}
                                  className={`shrink-0 snap-center whitespace-nowrap rounded-full border px-3 py-2 text-[0.7rem] font-semibold transition sm:text-xs ${
                                    isActive
                                      ? isLightMode
                                        ? "border-[#c8d1ea] bg-white/86 text-[#203062]"
                                        : "border-white/18 bg-white/[0.08] text-white"
                                      : isLightMode
                                        ? "border-[#d5dbee] bg-white/56 text-[#677196]"
                                        : "border-white/10 bg-white/[0.03] text-white/68"
                                  }`}
                                >
                                  {section.label}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                        <div
                          className="mt-2 flex flex-wrap items-center justify-center gap-1.5"
                          aria-label="Section indicators"
                        >
                          {PORTFOLIO_SECTIONS.map((section) => {
                            const isActive = section.id === activeSection
                            return (
                              <button
                                key={`${section.id}-dot`}
                                type="button"
                                onClick={() => switchSection(section.id)}
                                className={`rounded-full transition-all ${
                                  isActive
                                    ? isLightMode
                                      ? "h-2 w-6 bg-[#4a5a9a]"
                                      : "h-2 w-6 bg-white/85"
                                    : isLightMode
                                      ? "h-1.5 w-1.5 bg-[#b8c0da]"
                                      : "h-1.5 w-1.5 bg-white/28"
                                }`}
                                aria-label={`Go to ${section.label}${isActive ? " (current)" : ""}`}
                              />
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  key={activeSection}
                  className={`relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden ${sectionSurfaceClass} p-3 sm:p-4 md:p-5 lg:p-6 ${
                    transitionPhase === "exiting"
                      ? "portfolio-section-exit pointer-events-none"
                      : transitionPhase === "entering"
                        ? "portfolio-section-enter pointer-events-none"
                        : "portfolio-section-idle"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 ${
                      transitionPhase === "exiting"
                        ? "portfolio-liquid-overlay-out"
                        : transitionPhase === "entering"
                          ? "portfolio-liquid-overlay-in"
                          : ""
                    }`}
                  />
                  <div
                    ref={sectionContentScrollRef}
                    className="portfolio-section-scroll flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden [-webkit-overflow-scrolling:touch]"
                  >
                    {renderSection()}
                  </div>
                </div>
              </section>
              </div>
            </div>
          </main>

        </div>
      </div>

      {previewModal ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 md:p-8">
          <button
            type="button"
            onClick={closePreviewModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close screenshot preview"
          />

          <div
            className={`relative z-[1] flex max-h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.25rem] border sm:rounded-[1.5rem] ${
              isLightMode ? "border-[#c9d2ec] bg-white/95 text-[#1f2950]" : "border-white/16 bg-[#0b1122]/92 text-white"
            }`}
          >
            <div className={`flex shrink-0 items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 ${isLightMode ? "border-b border-[#d4dbef]" : "border-b border-white/10"}`}>
              <p className="min-w-0 truncate text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm sm:tracking-[0.18em]">
                {previewModal.title} Screenshots
              </p>
              <button
                type="button"
                onClick={closePreviewModal}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                  isLightMode ? "border-[#c8d1ea] bg-white text-[#2b3768]" : "border-white/20 bg-white/[0.06] text-white"
                }`}
                aria-label="Close screenshot preview"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-black/55">
              <div className="flex min-h-[16rem] items-center justify-center px-2 py-4 sm:px-4 sm:py-5 md:min-h-[30rem]">
                <div className="w-full max-w-4xl rounded-xl bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-2xl sm:p-4 md:p-6">
                  <div className="flex min-h-[14rem] w-full items-center justify-center rounded-lg bg-white sm:min-h-[22rem] md:h-[32rem] md:min-h-0">
                    {previewModal.slides[previewIndex]?.device === "mobile" ? (
                      <>
                        <div className="w-full rounded-xl border border-[#d8dbe6] bg-[#eef1f7] p-2 shadow-[0_18px_40px_rgba(26,35,58,0.2)] sm:hidden">
                          <div className="rounded-lg border border-[#d6d9e4] bg-white p-1.5">
                            <Image
                              src={previewModal.slides[previewIndex].src}
                              alt={`${previewModal.title} screenshot ${previewIndex + 1}`}
                              className="h-[14rem] w-full rounded-md object-contain bg-[#f8f9fc]"
                            />
                          </div>
                        </div>
                        <div className="relative hidden h-[20.5rem] w-[10.5rem] rounded-[2rem] border-[7px] border-[#0f1425] bg-[#0f1425] p-[6px] shadow-[0_24px_55px_rgba(10,14,30,0.35)] sm:block md:h-[28rem] md:w-[14rem]">
                          <div className="absolute left-1/2 top-[9px] h-[14px] w-[78px] -translate-x-1/2 rounded-full bg-[#0f1425]" />
                          <div className="h-full w-full overflow-hidden rounded-[1.45rem] bg-[#f7f8fb]">
                            <Image
                              src={previewModal.slides[previewIndex].src}
                              alt={`${previewModal.title} screenshot ${previewIndex + 1}`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full max-w-[52rem] rounded-xl border border-[#d8dbe6] bg-[#eef1f7] p-2 shadow-[0_18px_40px_rgba(26,35,58,0.2)] sm:rounded-2xl sm:p-3 md:p-4">
                        <div className="rounded-lg border border-[#d6d9e4] bg-white p-1.5 sm:rounded-xl sm:p-2">
                          <Image
                            src={previewModal.slides[previewIndex].src}
                            alt={`${previewModal.title} screenshot ${previewIndex + 1}`}
                            className="h-[12rem] w-full rounded-md object-contain bg-[#f8f9fc] sm:h-[16rem] md:h-[24rem]"
                          />
                        </div>
                        <div className="mx-auto mt-3 h-2.5 w-20 rounded-full bg-[#c4cada]" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={showPreviousPreviewSlide}
                className="absolute left-1 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white sm:left-3 sm:h-10 sm:w-10"
                aria-label="Previous screenshot"
              >
                <i className="fas fa-chevron-left text-sm sm:text-base" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={showNextPreviewSlide}
                className="absolute right-1 top-1/2 z-[2] inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white sm:right-3 sm:h-10 sm:w-10"
                aria-label="Next screenshot"
              >
                <i className="fas fa-chevron-right text-sm sm:text-base" aria-hidden="true" />
              </button>
            </div>

            <div className={`shrink-0 px-3 py-2.5 text-center text-[0.65rem] sm:px-4 sm:py-3 sm:text-xs ${isLightMode ? "border-t border-[#d4dbef] text-[#53608a]" : "border-t border-white/10 text-white/68"}`}>
              {previewIndex + 1} / {previewModal.slides.length}
            </div>
          </div>
        </div>
      ) : null}

      {videoPreviewModal ? (
        <div className="fixed inset-0 z-[71] flex items-center justify-center p-3 sm:p-4 md:p-8">
          <button
            type="button"
            onClick={closeVideoPreviewModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close video preview"
          />

          <div
            className={`relative z-[1] flex max-h-[min(92dvh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.25rem] border sm:rounded-[1.5rem] ${
              isLightMode ? "border-[#c9d2ec] bg-white/95 text-[#1f2950]" : "border-white/16 bg-[#0b1122]/92 text-white"
            }`}
          >
            <div className={`flex shrink-0 items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 ${isLightMode ? "border-b border-[#d4dbef]" : "border-b border-white/10"}`}>
              <p className="min-w-0 truncate text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm sm:tracking-[0.18em]">
                {videoPreviewModal.title} Video Preview
              </p>
              <button
                type="button"
                onClick={closeVideoPreviewModal}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                  isLightMode ? "border-[#c8d1ea] bg-white text-[#2b3768]" : "border-white/20 bg-white/[0.06] text-white"
                }`}
                aria-label="Close video preview"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto bg-black/55 px-2 py-4 sm:px-4 sm:py-5 md:py-7">
              <div className="w-full max-w-[54rem] rounded-xl border border-[#d8dbe6] bg-[#eef1f7] p-2 shadow-[0_18px_40px_rgba(26,35,58,0.2)] sm:rounded-2xl sm:p-3 md:p-4">
                <div className="rounded-lg border border-[#d6d9e4] bg-white p-1.5 sm:rounded-xl sm:p-2">
                  {videoPreviewModal.type === "embed" ? (
                    <iframe
                      src={videoPreviewModal.src}
                      title={`${videoPreviewModal.title} video`}
                      className="aspect-video w-full rounded-md border-0 bg-black"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={videoPreviewModal.src}
                      controls
                      autoPlay
                      className="min-h-[12rem] w-full rounded-md object-contain bg-black sm:min-h-[16rem] md:min-h-[26rem]"
                    />
                  )}
                </div>
                <div className="mx-auto mt-3 h-2.5 w-20 rounded-full bg-[#c4cada]" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <ContactWidget />

      <style jsx global>{`
        @keyframes portfolioParticleFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(0.95);
            opacity: 0.22;
          }
          25% {
            opacity: 0.75;
          }
          50% {
            transform: translate3d(0, -18px, 0) scale(1.05);
            opacity: 0.42;
          }
          75% {
            opacity: 0.82;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(0.95);
            opacity: 0.22;
          }
        }

        .portfolio-particle {
          animation-name: portfolioParticleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        @keyframes portfolioGlassExit {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
            filter: blur(0px);
          }
          40% {
            transform: translate3d(0, 14px, 0) scale(0.986);
            opacity: 0.76;
            filter: blur(5px);
          }
          100% {
            transform: translate3d(0, 42px, 0) scale(0.942);
            opacity: 0;
            filter: blur(18px);
          }
        }

        @keyframes portfolioGlassEnter {
          0% {
            transform: translate3d(0, -52px, 0) scale(1.06);
            opacity: 0;
            filter: blur(20px);
          }
          58% {
            transform: translate3d(0, 8px, 0) scale(0.992);
            opacity: 0.94;
            filter: blur(4px);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
            filter: blur(0px);
          }
        }

        .portfolio-section-idle {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
          filter: blur(0px);
        }

        .portfolio-section-exit {
          animation: portfolioGlassExit ${EXIT_DURATION_MS}ms cubic-bezier(0.48, 0.03, 0.52, 0.96) forwards;
          will-change: transform, opacity, filter;
          transform-origin: center center;
        }

        .portfolio-section-enter {
          animation: portfolioGlassEnter ${ENTER_DURATION_MS}ms cubic-bezier(0.16, 0.84, 0.26, 1) forwards;
          will-change: transform, opacity, filter;
          transform-origin: center center;
        }

        .portfolio-shell-transition {
          box-shadow:
            0 24px 90px rgba(0, 0, 0, 0.44),
            0 0 0 1px rgba(255, 255, 255, 0.04),
            0 0 34px rgba(139, 0, 139, 0.12);
        }

        .portfolio-shell-transition-light {
          box-shadow:
            0 16px 56px rgba(70, 80, 120, 0.2),
            0 0 0 1px rgba(180, 190, 220, 0.24),
            0 0 26px rgba(118, 92, 196, 0.18);
        }

        .portfolio-workspace-header-active {
          background-color: rgba(10, 12, 24, 0.42);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.03);
        }

        .portfolio-workspace-header-active-light {
          background-color: rgba(255, 255, 255, 0.78);
          border-color: rgba(198, 206, 230, 0.9);
          box-shadow: inset 0 -1px 0 rgba(192, 201, 228, 0.8);
        }

        @keyframes portfolioLiquidSweepOut {
          0% {
            opacity: 0;
            transform: translate3d(0, 6%, 0) scaleY(0.82);
          }
          30% {
            opacity: 0.18;
          }
          100% {
            opacity: 0.38;
            transform: translate3d(0, -4%, 0) scaleY(1.06);
          }
        }

        @keyframes portfolioLiquidSweepIn {
          0% {
            opacity: 0.34;
            transform: translate3d(0, -6%, 0) scaleY(1.05);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 4%, 0) scaleY(0.88);
          }
        }

        .portfolio-liquid-overlay-out,
        .portfolio-liquid-overlay-in {
          background:
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2), transparent 28%),
            radial-gradient(circle at 75% 35%, rgba(139, 0, 139, 0.18), transparent 24%),
            linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
          mix-blend-mode: screen;
          filter: blur(22px);
        }

        .portfolio-liquid-overlay-out {
          animation: portfolioLiquidSweepOut ${EXIT_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .portfolio-liquid-overlay-in {
          animation: portfolioLiquidSweepIn ${ENTER_DURATION_MS}ms cubic-bezier(0.16, 0.84, 0.26, 1) forwards;
        }

        .portfolio-section-heading {
          position: sticky;
          top: 0;
          z-index: 8;
          margin-bottom: 1rem;
          border-radius: 1rem;
          border: 1px solid;
          padding: 0.9rem 1rem;
          backdrop-filter: blur(10px);
        }

        .portfolio-section-heading-dark {
          background: rgba(8, 11, 20, 0.46);
          border-color: rgba(255, 255, 255, 0.12);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.25);
        }

        .portfolio-section-heading-light {
          background: rgba(255, 255, 255, 0.82);
          border-color: rgba(205, 213, 236, 0.88);
          box-shadow: 0 10px 24px rgba(93, 104, 142, 0.14);
        }

        @media (max-width: 639px) {
          .portfolio-section-heading {
            padding: 0.65rem 0.75rem;
            margin-bottom: 0.65rem;
          }
        }

        .portfolio-section-scroll {
          overscroll-behavior-y: contain;
          touch-action: pan-y;
        }

        .portfolio-card-3d-root {
          perspective: 1100px;
          perspective-origin: 50% 50%;
        }

        .portfolio-card-spin-shell {
          transform-origin: center center;
          will-change: transform, box-shadow;
          transition:
            transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 260ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .portfolio-card-spin-shell:hover {
            transform: translateY(-6px) scale(1.012);
            box-shadow:
              0 20px 42px rgba(13, 16, 30, 0.26),
              0 0 0 1px rgba(255, 255, 255, 0.08);
          }
        }

        @media (hover: none) {
          .portfolio-card-spin-shell:hover {
            transform: none;
            box-shadow: inherit;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-card-spin-shell:hover {
            transform: none !important;
            box-shadow: inherit !important;
          }
        }

        @keyframes portfolioFounderFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes portfolioFounderHalo {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(157, 117, 255, 0.2), 0 22px 42px rgba(0, 0, 0, 0.24);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(157, 117, 255, 0), 0 28px 58px rgba(0, 0, 0, 0.32);
          }
        }

        .portfolio-founder-card {
          animation: portfolioFounderFloat 4.8s ease-in-out infinite;
        }

        .portfolio-founder-card:nth-child(2) {
          animation-delay: 0.6s;
        }

        .portfolio-founder-orb > div {
          animation: portfolioFounderHalo 3.8s ease-in-out infinite;
        }

        .portfolio-connector-svg {
          overflow: visible;
        }

        .portfolio-connector-base {
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 2 8;
          opacity: 0.56;
          animation: portfolioConnectorPulse 2.8s ease-in-out infinite;
        }

        .portfolio-connector-spark {
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 20 400;
          filter: drop-shadow(0 0 8px rgba(180, 140, 255, 0.45));
          animation: portfolioSparkTravel 2.2s linear infinite;
        }

        .portfolio-connector-spark.spark-path-b {
          animation-delay: 0.35s;
        }

        .portfolio-connector-spark.spark-path-c {
          animation-delay: 0.7s;
        }

        @keyframes portfolioSparkTravel {
          0% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          65% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: -430;
            opacity: 0;
          }
        }

        @keyframes portfolioConnectorPulse {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.72;
          }
        }
      `}</style>
    </>
  )
}
