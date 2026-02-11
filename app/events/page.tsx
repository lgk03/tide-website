import eventsData from '@/data/eventsData'
import { genPageMetadata } from 'app/seo'
import EventsContent from './EventsContent'

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

  return <EventsContent upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
}
