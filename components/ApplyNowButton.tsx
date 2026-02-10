// components/ApplyNowButton.tsx
import React from 'react'
import Link from 'next/link'

interface ApplyNowButtonProps {
  href: string
  text?: string
}

const ApplyNowButton: React.FC<ApplyNowButtonProps> = ({ href, text = 'Apply Now' }) => {
  return (
    <Link
      className="bg-primary-500 hover:bg-primary-600 focus:ring-primary-500 inline-block rounded-xl px-10 py-5 text-xl font-semibold text-white shadow-md transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none"
      href={href}
    >
      {text}
    </Link>
  )
}

export default ApplyNowButton
