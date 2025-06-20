import eventsData from '@/data/eventsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Events' })

export default function EventsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Events
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Discover our latest events, workshops, and industry visits!
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {eventsData.map((event) => (
          <li key={event.title} className="py-12">
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
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">{event.title}</h2>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{event.date}</span> &middot; <span>{event.location}</span>
                  </div>
                  <p className="mt-3 text-lg leading-7 text-gray-700 dark:text-gray-300">
                    {event.description}
                  </p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
