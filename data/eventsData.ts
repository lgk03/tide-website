interface Event {
  title: string
  description: string
  date: string
  location: string
  imgSrc?: string
}

const eventsData: Event[] = [
  {
    title: 'DB Delay Desktop',
    description: `tbd`,
    date: '2025-09-28',
    location: 'virtual',
    imgSrc: '/static/images/deutsche-bahn-verspaetungen-anzeigetafel.jpg',
  },
]

export default eventsData
