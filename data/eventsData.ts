interface Event {
  title: string
  description: string
  date: string
  location: string
  imgSrc?: string
}

const eventsData: Event[] = [
  {
    title: 'Visit to Leading Tech Consultancy',
    description: `A group of our students had the unique opportunity to visit one of the world's top tech consultancies. We explored how data analytics and process mining are transforming the consulting industry, participated in hands-on workshops, and networked with experienced consultants. The event inspired many of us to pursue ambitious projects and careers in data-driven innovation!`,
    date: '2025-06-20',
    location: 'New York, USA',
    imgSrc: '/static/images/consultancy-visit.jpg',
  },
]

export default eventsData
