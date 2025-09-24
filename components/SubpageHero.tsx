'use client'

import VideoBackground from '@/components/VideoBackground'

interface SubpageHeroProps {
  title: string
  subtitle?: string
  className?: string
  backgroundVideoSrc?: string
  poster?: string
  overlay?: boolean
  children?: React.ReactNode
}

export default function SubpageHero({
  title,
  subtitle,
  className = '',
  backgroundVideoSrc = '/static/videos/waves_slow.mp4',
  poster = '/static/images/ocean-min.jpeg',
  overlay = true,
  children,
}: SubpageHeroProps) {
  return (
    <section
      className={`relative mb-10 overflow-hidden rounded-2xl bg-gray-900 px-4 py-16 text-center text-white sm:py-20 ${className}`}
    >
      <VideoBackground
        src={backgroundVideoSrc}
        poster={poster}
        overlay={overlay}
        opacity="opacity-40"
      />

      <div className="relative z-10">
        <h1 className="mb-3 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          <span className="text-[#5c82ff]">{title}</span>
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-3xl text-base text-white/90 sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{children}</div>
        )}
      </div>
    </section>
  )
}
