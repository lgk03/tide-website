'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
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
      <div className="fixed top-0 z-50 w-full transition-all duration-300">
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            scrolled
              ? 'border-b border-white/30 bg-white/20 shadow-xl shadow-black/10 backdrop-blur-xl'
              : 'border-b border-white/20 bg-gradient-to-r from-white/5 via-white/10 to-white/5 shadow-lg shadow-black/5 backdrop-blur-lg'
          }`}
        />
        <div className="relative px-4 sm:px-6 xl:px-8">
          <Header isHomepage={true} />
        </div>
      </div>
    )
  }

  // All other pages get full-width header too, but with normal styling
  return (
    <div className="w-full px-4 sm:px-6 xl:px-8">
      <Header isHomepage={false} />
    </div>
  )
}
