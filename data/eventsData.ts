interface Event {
  title: string
  description: string
  date: string
  displayDate?: string
  location: string
  imgSrc?: string
  href?: string
}

const eventsData: Event[] = [
  {
    title: 'Hackathon: Sustainability for Infrastructure',
    description:
      'Join an intense 24-hour hackathon solving real-world sustainability challenges in energy, water, and circular systems. Partner with high-growth circular startups and build software that keeps critical systems running longer and more efficiently.',
    date: '2026-04-17',
    displayDate: 'April 17-18, 2026',
    location: 'Munich',
    href: '/hackathon',
  },
]

export default eventsData
