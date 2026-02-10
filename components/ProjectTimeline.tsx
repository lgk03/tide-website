'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from '@/components/Image'
import Link from '@/components/Link'

type ProjectStatus = 'planned' | 'ongoing' | 'finished'

interface Project {
  title: string
  summary: string
  description: string
  date: string
  duration: string
  status: ProjectStatus
  href?: string
  imgSrc?: string
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

const statusConfig: Record<ProjectStatus, { label: string; icon: string; color: string }> = {
  planned: {
    label: 'Planned',
    icon: '◇',
    color: 'text-amber-500',
  },
  ongoing: {
    label: 'Ongoing',
    icon: '▶',
    color: 'text-blue-500',
  },
  finished: {
    label: 'Finished',
    icon: '✓',
    color: 'text-green-500',
  },
}

function ProjectTimelineEntry({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const status = statusConfig[project.status]

  return (
    <div className="group relative flex gap-6 pb-12 md:gap-10">
      {/* Date label */}
      <div className="flex w-28 shrink-0 flex-col items-end pt-1 md:w-36">
        <span className="text-primary-500 text-sm font-semibold md:text-base">
          {formatDate(project.date)}
        </span>
      </div>

      {/* Dot on the line */}
      <div className="relative flex flex-col items-center">
        <div
          className={`border-primary-500 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors duration-200 ${isExpanded ? 'bg-primary-500' : 'bg-white dark:bg-gray-900'}`}
        />
      </div>

      {/* Card + Status */}
      <div className="flex min-w-0 flex-1 items-start gap-4 pb-2">
        <button
          type="button"
          className={`min-w-0 flex-1 cursor-pointer overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all duration-300 dark:bg-gray-800 ${isExpanded ? 'border-primary-500/40 shadow-lg' : 'border-gray-200/60 dark:border-gray-700/60'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Summary — always visible */}
          <div className="p-5 md:p-6">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.summary}</p>
            <span className="mt-2 block text-xs text-gray-400 dark:text-gray-500">
              {project.duration}
            </span>
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="border-t border-gray-200/60 px-5 pt-4 pb-5 md:px-6 md:pb-6 dark:border-gray-700/60">
                  {project.imgSrc && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        alt={project.title}
                        src={project.imgSrc}
                        className="object-cover object-center"
                        width={544}
                        height={306}
                      />
                    </div>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  {project.href && (
                    <Link
                      href={project.href}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-3 inline-block text-sm font-medium"
                    >
                      Learn more &rarr;
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <span
          className={`mt-1.5 inline-flex w-24 shrink-0 items-center justify-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${status.color} border-current/20 bg-current/5`}
          title={status.label}
        >
          <span className="text-[10px]">{status.icon}</span>
          {status.label}
        </span>
      </div>
    </div>
  )
}

export default function ProjectTimeline({ projects }: { projects: Project[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute top-2 bottom-2 left-[calc(7rem+1.5rem+6px)] w-0.5 bg-gray-200 md:left-[calc(9rem+2.5rem+6px)] dark:bg-gray-700" />

      {projects.map((project) => (
        <ProjectTimelineEntry key={project.title} project={project} />
      ))}
    </div>
  )
}
