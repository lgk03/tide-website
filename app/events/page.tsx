import Link from 'next/link'
import eventsData from '@/data/eventsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Events' })

export default function EventsPage() {
  const now = new Date()
  now.setHours(0, 0, 0, 0)

  const upcomingEvents = eventsData
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => a.date.localeCompare(b.date))
  const pastEvents = eventsData
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Events
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Discover our latest hackathons, workshops, and industry visits
        </p>
      </div>

      {upcomingEvents.length > 0 && (
        <section className="py-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Upcoming</h2>
          <ul className="space-y-10">
            {upcomingEvents.map((event) => (
              <li key={event.title}>
                <article>
                  <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                    {event.imgSrc && (
                      <img
                        src={event.imgSrc}
                        alt={event.title}
                        className="mb-4 h-40 w-full rounded object-cover md:mb-0 md:w-64"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {event.title}
                      </h3>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{event.displayDate ?? event.date}</span> &middot;{' '}
                        <span>{event.location}</span>
                      </div>
                      <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
                        {event.description}
                      </p>
                      {event.href && (
                        <Link
                          href={event.href}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 inline-block font-medium"
                        >
                          Learn more &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="py-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">Past</h2>
          <ul className="space-y-10">
            {pastEvents.map((event) => (
              <li key={event.title}>
                <article>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    {event.imgSrc && (
                      <img
                        src={event.imgSrc}
                        alt={event.title}
                        className="mb-4 h-40 w-full rounded object-cover md:mb-0 md:w-64"
                      />
                    )}
                    <div>
                      <h3 className="text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {event.title}
                      </h3>
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>{event.displayDate ?? event.date}</span> &middot;{' '}
                        <span>{event.location}</span>
                      </div>
                      <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
                        {event.description}
                      </p>
                      {event.href && (
                        <Link
                          href={event.href}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 inline-block font-medium"
                        >
                          Learn more &rarr;
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
