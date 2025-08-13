'use client'

import { usePathname } from 'next/navigation'
import SectionContainer from './SectionContainer'

interface PageWrapperProps {
  children: React.ReactNode
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname()
  const isHomepage = pathname === '/'

  if (isHomepage) {
    return <>{children}</>
  }

  return <SectionContainer>{children}</SectionContainer>
}
