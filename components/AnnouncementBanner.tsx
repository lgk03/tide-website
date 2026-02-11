'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function AnnouncementBanner() {
  const pathname = usePathname()

  if (pathname === '/hackathon') return null
  if (new Date() > new Date('2026-04-19')) return null

  return (
    <NextLink
      href="/hackathon"
      className="group bg-primary-950/80 hover:bg-primary-900/90 relative block w-full py-1.5 text-center transition-colors"
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
    </NextLink>
  )
}
