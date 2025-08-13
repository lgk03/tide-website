'use client'

import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

interface DataPoint {
  month: string
  members: number
  projects: number
  events: number
}

const data: DataPoint[] = [
  { month: 'Jan', members: 45, projects: 3, events: 2 },
  { month: 'Feb', members: 52, projects: 5, events: 3 },
  { month: 'Mar', members: 68, projects: 8, events: 4 },
  { month: 'Apr', members: 89, projects: 12, events: 6 },
  { month: 'May', members: 112, projects: 15, events: 8 },
  { month: 'Jun', members: 150, projects: 18, events: 10 },
]

export default function InteractiveChart() {
  const [activeMetric, setActiveMetric] = useState<keyof Omit<DataPoint, 'month'>>('members')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const maxValue = Math.max(...data.map((d) => d[activeMetric]))

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

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between gap-4">
          {data.map((point, index) => {
            const height = (point[activeMetric] / maxValue) * 100
            const isHovered = hoveredIndex === index

            return (
              <div
                key={point.month}
                className="flex flex-1 flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="group relative w-full max-w-16 cursor-pointer"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div
                    className={`h-full w-full rounded-t-lg ${
                      activeMetric === 'members'
                        ? 'bg-gradient-to-t from-blue-400 to-blue-600'
                        : activeMetric === 'projects'
                          ? 'bg-gradient-to-t from-purple-400 to-purple-600'
                          : 'bg-gradient-to-t from-pink-400 to-pink-600'
                    } ${isHovered ? 'scale-105 transform shadow-lg' : ''} transition-all duration-300`}
                  />

                  {/* Tooltip */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-sm font-medium whitespace-nowrap text-white"
                    >
                      {point[activeMetric]} {activeMetric}
                      <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-gray-900" />
                    </motion.div>
                  )}
                </motion.div>

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
