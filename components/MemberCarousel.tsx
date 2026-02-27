'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { Member } from '../lib/members'

// Utility function to truncate text
const truncateText = (text: string, maxLength: number = 150): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

interface MemberCarouselProps {
  members: Member[]
}

export default function MemberCarousel({ members }: MemberCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasSwiped, setHasSwiped] = useState(false)

  // Auto-rotate every 4 seconds when not hovered and user hasn't swiped manually
  useEffect(() => {
    if (!isHovered && !hasSwiped && members && members.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered, hasSwiped, members])

  // Track if device is mobile to enable drag only there
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    // Only run on client side
    if (typeof window !== 'undefined') {
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Safety check for empty members array
  if (!members || members.length === 0) {
    return (
      <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>No members data available</p>
        </div>
      </div>
    )
  }

  const getVisibleMembers = (): (Member & { position: number })[] => {
    const visible: (Member & { position: number })[] = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % members.length
      visible.push({ ...members[index], position: i })
    }
    return visible
  }

  const handleMemberClick = (position: number) => {
    if (position === 1) return // Center card is already active
    if (position === 0) {
      // Clicked left card - go to previous
      setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
    } else {
      // Clicked right card - go to next
      setCurrentIndex((prev) => (prev + 1) % members.length)
    }
  }

  return (
    <div
      className="relative h-[500px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient - removed for transparency */}

      {/* Member cards */}
      <div className="relative flex h-full items-center justify-center">
        <AnimatePresence>
          {getVisibleMembers().map((member, index) => {
            const isCenter = member.position === 1
            const isLeft = member.position === 0
            const isRight = member.position === 2

            return (
              <motion.div
                key={`${member.name || 'member'}-${index}-${currentIndex}`}
                className={`absolute cursor-pointer ${isCenter ? 'z-20' : 'z-10'}`}
                initial={{
                  x: isLeft ? -400 : isRight ? 400 : 0,
                  scale: isCenter ? 1 : 0.8,
                  opacity: 0,
                }}
                animate={{
                  x: isLeft ? -200 : isRight ? 200 : 0,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.6,
                  rotateY: isLeft ? -15 : isRight ? 15 : 0,
                }}
                exit={{
                  x: isLeft ? -400 : isRight ? 400 : 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: isCenter ? 1.05 : 0.85,
                  y: isCenter ? -10 : -5,
                }}
                onClick={() => handleMemberClick(member.position)}
                drag={isMobile ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset }) => {
                  if (offset.x < -50) {
                    setHasSwiped(true)
                    handleMemberClick(2) // Swiped left, go to next
                  } else if (offset.x > 50) {
                    setHasSwiped(true)
                    handleMemberClick(0) // Swiped right, go to previous
                  }
                }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className={`relative h-96 w-80 rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 dark:border-gray-700/50 dark:bg-gray-800/90 ${isCenter ? 'shadow-3xl' : 'shadow-xl'} `}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10`}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Photo */}
                    <div className="mb-4 text-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-transform duration-300 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg">
                          <img
                            src={member.photo}
                            alt={member.name}
                            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              // Fallback to a placeholder if image fails to load
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&size=96`
                            }}
                          />
                        </div>
                      </a>
                      <div
                        className={`mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r ${member.color}`}
                      />
                    </div>

                    {/* Member info */}
                    <div className="mb-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </h3>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          onClick={(e) => e.stopPropagation()}
                          title="View LinkedIn Profile"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                      <p className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {member.role}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {member.background}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="flex-1">
                      <blockquote className="text-sm leading-relaxed text-gray-700 italic dark:text-gray-300">
                        "{truncateText(member.quote, 150)}"
                      </blockquote>
                    </div>

                    {/* Decorative element */}
                    <div className="mt-4 flex justify-center">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${member.color} opacity-60`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Side navigation arrows */}
      <button
        className="absolute top-1/2 left-16 z-30 hidden -translate-y-1/2 transform rounded-full bg-white/80 p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white md:block dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={() => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)}
      >
        <svg
          className="h-6 w-6 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute top-1/2 right-16 z-30 hidden -translate-y-1/2 transform rounded-full bg-white/80 p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white md:block dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
      >
        <svg
          className="h-6 w-6 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
