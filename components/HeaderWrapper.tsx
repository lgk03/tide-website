'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import AnnouncementBanner from './AnnouncementBanner'
import Header from './Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHomepage) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomepage])

  if (isHomepage) {
    return (
      <div
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/30 bg-black/40 shadow-xl shadow-black/10 backdrop-blur-xl dark:bg-black/60'
            : 'border-b border-white/20 bg-black/30 shadow-lg shadow-black/5 backdrop-blur-lg dark:bg-black/50'
        }`}
      >
        <AnnouncementBanner />
        <div className="relative px-4 sm:px-6 xl:px-8">
          <Header isHomepage={true} />
        </div>
      </div>
    )
  }

  // All other pages get full-width header too, but with normal styling
  return (
    <div>
      <AnnouncementBanner />
      <div className="w-full px-4 sm:px-6 xl:px-8">
        <Header isHomepage={false} />
      </div>
    </div>
  )
}
