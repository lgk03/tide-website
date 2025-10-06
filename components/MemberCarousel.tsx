'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'

interface Member {
  name: string
  role: string
  background: string
  quote: string
  avatar: string
  color: string
}

const members: Member[] = [
  {
    name: 'Arthur G.',
    role: 'M.Sc. Information Systems',
    background: 'Systems Architecture & ML Engineering',
    quote: 'TIDE inspires me to improve systems and grow personally. It shows that real change starts with clarity, consistency, and the courage to aim higher than expected.',
    avatar: '👨🏻‍💻',
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Tim B.',
    role: 'M.Sc. Mechanical Engineering',
    background: 'Data Engineering & Analytics',
    quote: 'My background in mechanical engineering inspires me to build TIDE as a system where I can learn continuously, connect diverse fields, and transform complexity into clarity.',
    avatar: '👨🏻‍🔧',
    color: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Luca K.',
    role: 'M.Sc. Information Systems',
    background: 'Cross-Disciplinary Data Science',
    quote: 'My motivation for building TIDE lies in connecting different study fields and disciplines on their common denominator - Data.',
    avatar: '🧑‍💻',
    color: 'from-pink-500 to-red-500'
  },
  {
    name: 'Sarah M.',
    role: 'M.Sc. Computer Science',
    background: 'AI Research & Deep Learning',
    quote: 'TIDE provides the perfect environment to explore cutting-edge AI research while building practical solutions that make a real impact.',
    avatar: '👩‍💻',
    color: 'from-green-500 to-blue-500'
  },
  {
    name: 'Alex R.',
    role: 'M.Sc. Data Science',
    background: 'Statistical Modeling & Visualization',
    quote: 'The collaborative spirit at TIDE transforms complex data challenges into exciting opportunities for innovation and learning.',
    avatar: '🧑‍🔬',
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function MemberCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate every 4 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const getVisibleMembers = () => {
    const visible = []
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50" />
      
      {/* Member cards */}
      <div className="relative flex h-full items-center justify-center">
        <AnimatePresence mode="wait">
          {getVisibleMembers().map((member, index) => {
            const isCenter = member.position === 1
            const isLeft = member.position === 0
            const isRight = member.position === 2
            
            return (
              <motion.div
                key={`${member.name}-${currentIndex}`}
                className={`absolute cursor-pointer ${isCenter ? 'z-20' : 'z-10'}`}
                initial={{ 
                  x: isLeft ? -400 : isRight ? 400 : 0,
                  scale: isCenter ? 1 : 0.8,
                  opacity: 0
                }}
                animate={{ 
                  x: isLeft ? -200 : isRight ? 200 : 0,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.6,
                  rotateY: isLeft ? -15 : isRight ? 15 : 0
                }}
                exit={{ 
                  x: isLeft ? -400 : isRight ? 400 : 0,
                  opacity: 0
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: isCenter ? 1.05 : 0.85,
                  y: isCenter ? -10 : -5
                }}
                onClick={() => handleMemberClick(member.position)}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`
                  relative h-96 w-80 rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300
                  dark:border-gray-700/50 dark:bg-gray-800/90
                  ${isCenter ? 'shadow-3xl' : 'shadow-xl'}
                `}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.color} opacity-10`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Avatar */}
                    <div className="mb-4 text-center">
                      <div className="mb-2 text-6xl">{member.avatar}</div>
                      <div className={`mx-auto h-1 w-16 rounded-full bg-gradient-to-r ${member.color}`} />
                    </div>
                    
                    {/* Member info */}
                    <div className="mb-6 text-center">
                      <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400">
                        {member.role}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {member.background}
                      </p>
                    </div>
                    
                    {/* Quote */}
                    <div className="flex-1">
                      <blockquote className="text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
                        "{member.quote}"
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
      
      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {members.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#5c82ff] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      {/* Side navigation arrows */}
      <button
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-white/80 p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={() => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)}
      >
        <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 transform rounded-full bg-white/80 p-3 shadow-lg transition-all duration-300 hover:bg-white hover:scale-110 dark:bg-gray-800/80 dark:hover:bg-gray-800"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
      >
        <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}