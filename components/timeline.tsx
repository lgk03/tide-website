'use client'
import { useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  // Reference to the full timeline container (for scroll trigger)
  const containerRef = useRef<HTMLDivElement>(null)
  // Reference to the internal content div (to calculate its height)
  const ref = useRef<HTMLDivElement>(null)
  // Store total height of the timeline content
  const [height, setHeight] = useState(0)

  // When component mounts or `ref` changes, calculate height
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  // Get scroll progress relative to the containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0%', 'end 50%'], // starts animation when container is 10% into view, ends at 50%
  })

  // Animate the vertical gradient line height as you scroll
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  // Fade in the line early in the scroll
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row-reverse justify-start gap-6 pt-10 md:gap-10 md:pt-40"
          >
            {/* Right side: timeline marker and title */}
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              {/* The circular marker */}
              <div className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:right-3 dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              {/* Title (only shown on medium+ screens) */}
              <h3 className="hidden text-sm font-bold text-neutral-500 md:block md:pr-20 md:text-2xl dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Left side: content block */}
            <div className="relative w-full pr-4 md:pr-4">
              {/* Title shown on small screens above content */}
              <h3 className="mb-4 block text-left text-xs font-bold text-neutral-500 md:hidden dark:text-neutral-500">
                {item.title}
              </h3>
              {/* Actual content (ReactNode) */}
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical animated timeline line */}
        <div
          style={{
            height: height + 'px', // match total content height
          }}
          className="absolute top-0 left-8 w-[2px] overflow-hidden 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] 
          md:left-8 dark:via-neutral-700"
        >
          {/* Motion div to grow the colored part of the line on scroll */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full 
            bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  )
}
