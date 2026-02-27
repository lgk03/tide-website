// components/ApplyNowButton.tsx
import React from 'react'
import Link from 'next/link'

interface ApplyNowButtonProps {
  href: string
  text?: string
  size?: 'normal' | 'small'
}

const ApplyNowButton: React.FC<ApplyNowButtonProps> = ({
  href,
  text = 'Apply Now',
  size = 'normal',
}) => {
  const sizeClasses = size === 'small' ? 'px-6 py-3 text-base' : 'px-10 py-5 text-xl'

  return (
    <Link
      className={`bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 inline-block rounded-xl font-semibold text-white shadow-md transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none ${sizeClasses}`}
      href={href}
    >
      {text}
    </Link>
  )
}

export default ApplyNowButton
