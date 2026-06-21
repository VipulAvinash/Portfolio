import { useState, useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { ArrowRight } from 'lucide-react'
import { PERSONAL, TYPEWRITER_ROLES, STATS } from '../data/constants'

const HLS_STREAM =
  'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_STREAM
      video.play().catch(() => { })
      return
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: false })
      hls.loadSource(HLS_STREAM)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => { })
      })
      return () => hls.destroy()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover opacity-60"
      autoPlay
      muted
      loop
      playsInline
    />
  )
}

function CentralGlow() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
      <svg
        width="900"
        height="350"
        viewBox="0 0 900 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="hero-glow-blur"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur stdDeviation="25" />
          </filter>
          <radialGradient
            id="hero-glow-gradient"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#5ed29c" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#1a4a3a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#070b0a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx="450"
          cy="80"
          rx="420"
          ry="110"
          fill="url(#hero-glow-gradient)"
          filter="url(#hero-glow-blur)"
        />
      </svg>
    </div>
  )
}

function GridLines() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <div className="absolute left-1/4 top-0 h-full w-px bg-white/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
      <div className="absolute left-3/4 top-0 h-full w-px bg-white/10" />
    </div>
  )
}

function LiquidGlassCard() {
  return (
    <div className="liquid-glass-card mb-2 -translate-y-[50px] rounded-2xl p-5">
      <p className="mb-3 text-[12px] tracking-wide text-white/60">
        [ {STATS[0].value} {STATS[0].label} ]
      </p>
      <h2 className="mb-3 text-[18px] leading-snug text-white">
        <span className="font-serif italic">Full-Stack</span> Developer
      </h2>
      <p className="text-[11px] leading-relaxed text-white/50">
        {PERSONAL.currentRole}
      </p>
    </div>
  )
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = TYPEWRITER_ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % TYPEWRITER_ROLES.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1),
          )
        },
        isDeleting ? 40 : 80,
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-codenest-bg"
    >
      <BackgroundVideo />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070b0a] via-[#070b0a]/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b0a] via-[#070b0a]/40 to-transparent"
        aria-hidden="true"
      />

      <GridLines />
      <CentralGlow />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <LiquidGlassCard />

        <p className="font-jakarta mb-4 text-[11px] font-bold uppercase tracking-widest text-codenest-accent">
          Hello, I&apos;m
        </p>

        <h1 className="mb-4 max-w-4xl text-[40px] font-extrabold uppercase leading-[1.05] tracking-tight text-white lg:text-[72px]">
          {PERSONAL.name.split(' ').slice(1).join(' ')}
          <span className="text-codenest-accent">.</span>
        </h1>

        <div className="mb-6 flex min-h-[2rem] items-center text-lg font-semibold text-codenest-accent sm:text-xl md:text-2xl">
          <span>{displayText}</span>
          <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-codenest-accent sm:h-7" />
        </div>

        <p className="mb-10 max-w-[512px] text-[14px] leading-relaxed text-white/70">
          {PERSONAL.tagline}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={scrollToProjects}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-codenest-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-codenest-bg transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
          <a
            href={PERSONAL.resume}
            download={PERSONAL.resumeFileName}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-codenest-accent/40 hover:text-codenest-accent"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
