'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import {
  CURRENT_MEMBER_COUNT,
  MEMBER_GROWTH_DATA,
  PROJECT_GROWTH_DATA,
  EVENT_GROWTH_DATA,
} from '@/data/memberStats'

interface DataPoint {
  month: string
  members: number
  projects: number
  events: number
}

// Function to get the last 6 months excluding current month
const getLast6Months = (): DataPoint[] => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const now = new Date()
  const currentMonth = now.getMonth() // 0-11
  const currentYear = now.getFullYear()

  const data: DataPoint[] = []

  // Generate data for last 6 months (excluding current month)
  for (let i = 0; i < 6; i++) {
    const targetDate = new Date(currentYear, currentMonth - 6 + i, 1)
    const monthIndex = targetDate.getMonth()
    const year = targetDate.getFullYear()
    const monthName = months[monthIndex]

    // Use hardcoded growth data - i directly corresponds to array index
    const baseMembers = MEMBER_GROWTH_DATA[i]
    const baseProjects = PROJECT_GROWTH_DATA[i]
    const baseEvents = EVENT_GROWTH_DATA[i]

    console.log(
      `Month ${i}: members=${baseMembers}, projects=${baseProjects}, events=${baseEvents}`
    )

    data.push({
      month: `${monthName} ${year === currentYear ? '' : year}`.trim(),
      members: baseMembers,
      projects: baseProjects,
      events: baseEvents,
    })
  }

  return data
}

export default function InteractiveChart() {
  const [activeMetric, setActiveMetric] = useState<keyof Omit<DataPoint, 'month'>>('members')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Generate dynamic data for last 6 months
  const data = getLast6Months()
  const maxValue = Math.max(...data.map((d) => d[activeMetric]))

  // Debug logging
  useEffect(() => {
    console.log('InteractiveChart rendered:', { activeMetric, maxValue, data })
  }, [activeMetric, maxValue])

  const metrics = [
    { key: 'members' as const, label: 'Members', color: 'bg-blue-500', icon: '👥' },
    { key: 'projects' as const, label: 'Projects', color: 'bg-purple-500', icon: '🚀' },
    { key: 'events' as const, label: 'Events', color: 'bg-pink-500', icon: '🎉' },
  ]

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="mb-8">
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Our Growth Story</h3>
        <div className="flex flex-wrap gap-3">
          {metrics.map((metric) => (
            <button
              key={metric.key}
              onClick={() => setActiveMetric(metric.key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                activeMetric === metric.key
                  ? `${metric.color} scale-105 transform text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              <span>{metric.icon}</span>
              {metric.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-64 rounded-lg bg-gray-50 dark:bg-gray-700">
        {/* Y-axis labels */}
        <div className="absolute top-4 bottom-4 left-2 flex w-8 flex-col justify-between text-xs text-gray-500 dark:text-gray-400">
          {[
            maxValue,
            Math.round(maxValue * 0.75),
            Math.round(maxValue * 0.5),
            Math.round(maxValue * 0.25),
            0,
          ].map((value, index) => (
            <div key={index} className="text-right">
              {value}
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="mr-4 ml-12 flex h-full items-end justify-between gap-2 py-4">
          {data.map((point, index) => {
            const heightPercent = (point[activeMetric] / maxValue) * 90 // Use 90% of available height
            const heightPx = Math.max(heightPercent * 2, 10) // Convert to pixels with minimum
            const isHovered = hoveredIndex === index

            // Debug logging for height calculation
            console.log(
              `${point.month}: value=${point[activeMetric]}, maxValue=${maxValue}, heightPercent=${heightPercent}%, heightPx=${heightPx}px`
            )

            return (
              <div
                key={point.month}
                className="flex flex-1 flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex w-full justify-center">
                  <motion.div
                    className="w-12 origin-bottom cursor-pointer"
                    style={{ height: `${heightPx}px` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                  >
                    <div
                      className={`h-full w-full rounded-t-lg shadow-md ${
                        activeMetric === 'members'
                          ? 'bg-gradient-to-t from-blue-400 to-blue-600'
                          : activeMetric === 'projects'
                            ? 'bg-gradient-to-t from-purple-400 to-purple-600'
                            : 'bg-gradient-to-t from-pink-400 to-pink-600'
                      } ${isHovered ? 'scale-105 transform shadow-xl' : ''} transition-all duration-300`}
                    />
                  </motion.div>

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 z-20 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium whitespace-nowrap text-white shadow-lg"
                    >
                      {point[activeMetric]} {activeMetric}
                      <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-gray-900" />
                    </motion.div>
                  )}
                </div>

                <div className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {point.month}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {activeMetric === 'members' && "We're growing fast! Join our amazing community 🌟"}
          {activeMetric === 'projects' && 'Innovation never stops at TIDE 💡'}
          {activeMetric === 'events' && 'Always something exciting happening! 🎊'}
        </p>
      </div>
    </div>
  )
}
