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
    description: `We’re analyzing Deutsche Bahn data to explore the current state of Germany’s public transportation infrastructure. Join our planning meeting to help shape the project. Interested? Get in touch at tide.tum@gmail.com.`,
    date: '2025-09-28',
    location: 'virtual',
    imgSrc: '/static/images/deutsche-bahn-verspaetungen-anzeigetafel.jpg',
  },
]

export default eventsData
