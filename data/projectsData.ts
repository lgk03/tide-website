interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Munich Mobility Insights',
    description: `We are analyzing comprehensive data from Munich's public transportation network (MVG) to explore the current state of urban mobility. Our focus is on modeling real-time transit patterns to identify bottlenecks and understand delay dynamics. This research aims to uncover insights that could pave the way for a more efficient and reliable public transport system.\n\nInterested? Get in touch at team@tum-tide.com.`,
    imgSrc: '/static/images/deutsche-bahn-verspaetungen-anzeigetafel.jpg',
    // href: '/blog/the-time-machine || https://www.google.com' => insert blog article or user interface once we have something
  },
  {
    title: 'Smart Building Digital Twin',
    description: `In collaboration with an MIT-based stealth startup, we are exploring the development of advanced digital twins for building infrastructure. Our focus is on creating sophisticated models to analyze and simulate complex internal systems, paving the way for smarter infrastructure management. Interested? Get in touch at team@tum-tide.com.`,
    imgSrc: '/static/images/smart-building-analytics.jpg',
    // href: '/blog/the-time-machine || https://www.google.com' => insert blog article or user interface once we have something
  },
]

export default projectsData
