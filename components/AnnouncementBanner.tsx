'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AnnouncementBanner() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check local storage on mount
    const isHidden = localStorage.getItem('hackathon-banner-hidden')
    if (!isHidden) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsVisible(false)
    localStorage.setItem('hackathon-banner-hidden', 'true')
  }

  if (pathname === '/hackathon') return null
  if (new Date() > new Date('2026-04-19')) return null
  if (!isVisible) return null

  return (
    <div className="relative">
      <Link
        href="/hackathon"
        className="group bg-primary-950/80 hover:bg-primary-900/90 relative block w-full py-1.5 pr-8 text-center transition-colors sm:pr-0"
      >
        <div className="via-primary-500/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
        <span className="text-primary-200 hidden text-sm sm:inline">
          Hackathon | Sustainability for Infrastructure | April 17-18, Munich{' '}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
        <span className="text-primary-200 text-sm sm:hidden">
          Hackathon — Apr 17-18, Munich{' '}
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </span>
      </Link>
      <button
        onClick={handleClose}
        className="text-primary-200 absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Close banner"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
