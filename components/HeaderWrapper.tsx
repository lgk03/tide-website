'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  if (isHomepage) {
    return (
      <div className="relative z-50 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm" />
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
