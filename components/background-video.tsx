"use client"

export function BackgroundVideo() {
  return (
    <video
      className="fixed-bg"
      autoPlay
      muted
      loop
      playsInline
    >
      <source
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20video-Ge3gf78gQLvufOHasUAhrkToawQa7g.mp4"
        type="video/mp4"
      />
    </video>
  )
}
