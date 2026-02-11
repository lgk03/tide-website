'use client'

import Link from '@/components/Link'
import { motion } from 'motion/react'

interface Event {
  title: string
  description: string
  date: string
  displayDate?: string
  location: string
  imgSrc?: string
  href?: string
}

function EventCard({
  event,
  isPast = false,
  index = 0,
}: {
  event: Event
  isPast?: boolean
  index?: number
}) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div
        className={`flex h-full flex-col rounded-2xl border p-8 transition-all duration-300 ${
          isPast
            ? 'border-gray-200/60 bg-gray-50 dark:border-gray-700/40 dark:bg-gray-800/50'
            : 'border-gray-200 bg-white group-hover:-translate-y-1 group-hover:shadow-lg dark:border-gray-700 dark:bg-gray-900'
        }`}
      >
        <div
          className={`mb-3 font-semibold ${isPast ? 'text-gray-400 dark:text-gray-500' : 'text-[#5c82ff]'}`}
        >
          {event.displayDate || event.date}
        </div>

        <h3
          className={`mb-3 text-xl font-bold ${
            isPast ? 'text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'
          }`}
        >
          {event.title}
        </h3>

        <p
          className={`mb-4 line-clamp-2 text-base ${
            isPast ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {event.description}
        </p>

        <div
          className={`mt-auto flex items-center gap-1.5 text-sm ${isPast ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'}`}
        >
          <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          {event.location}
        </div>

        {event.href && !isPast && (
          <Link
            href={event.href}
            className="mt-4 inline-flex items-center text-sm font-medium text-[#5c82ff] transition-colors hover:text-blue-700 dark:hover:text-blue-300"
          >
            Learn more
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </motion.article>
  )
}

export default function EventsContent({
  upcomingEvents,
  pastEvents,
}: {
  upcomingEvents: Event[]
  pastEvents: Event[]
}) {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="pt-6 pb-10">
        <motion.h1
          className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Events
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hackathons, workshops, and industry visits
        </motion.p>
      </div>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="mb-6 text-sm font-semibold tracking-wider text-[#5c82ff] uppercase">
          Upcoming
        </h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-500">No upcoming events — check back soon!</p>
        )}
      </section>

      {/* Past Events */}
      <section>
        <h2 className="mb-6 text-sm font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
          Past
        </h2>
        {pastEvents.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event, index) => (
              <EventCard key={event.title} event={event} isPast index={index} />
            ))}
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-500">No past events yet.</p>
        )}
      </section>
    </div>
  )
}
