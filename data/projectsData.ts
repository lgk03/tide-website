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

const projectsData: Project[] = [
  {
    title: 'AI-Powered Study Group Matcher',
    summary:
      'Matching TUM students into optimal study groups using ML-based compatibility scoring.',
    description: `We are developing a recommendation engine that uses collaborative filtering and NLP analysis of course preferences to match TUM students into high-performing study groups. The system analyzes learning styles, schedule availability, and academic goals to suggest compatible peers.\n\nInterested? Get in touch at team@tum-tide.com.`,
    date: '2025-11',
    duration: 'Nov 2025 – present',
    status: 'planned',
    imgSrc: '/static/images/production-process-mining.jpg',
  },
  {
    title: 'Munich Mobility Insights',
    summary: 'Analyzing Munich public transit data to uncover delay patterns and optimize routes.',
    description: `We are analyzing comprehensive data from Munich's public transportation network (MVG) to explore the current state of urban mobility. Our focus is on modeling real-time transit patterns to identify bottlenecks and understand delay dynamics. This research aims to uncover insights that could pave the way for a more efficient and reliable public transport system.\n\nInterested? Get in touch at team@tum-tide.com.`,
    date: '2025-08',
    duration: 'Aug 2025 – present',
    status: 'ongoing',
    imgSrc: '/static/images/deutsche-bahn-verspaetungen-anzeigetafel.jpg',
  },
  {
    title: 'Smart Building Digital Twin',
    summary:
      'Creating digital twins for building infrastructure in collaboration with an MIT startup.',
    description: `In collaboration with an MIT-based stealth startup, we are exploring the development of advanced digital twins for building infrastructure. Our focus is on creating sophisticated models to analyze and simulate complex internal systems, paving the way for smarter infrastructure management. Interested? Get in touch at team@tum-tide.com.`,
    date: '2025-06',
    duration: 'Jun 2025 – present',
    status: 'ongoing',
    imgSrc: '/static/images/smart-building-analytics.jpg',
  },
  {
    title: 'TUM Campus Energy Dashboard',
    summary: 'Visualizing real-time energy consumption across TUM campus buildings.',
    description: `We built an interactive dashboard that aggregates and visualizes energy consumption data from sensors across TUM campus buildings. The dashboard highlights usage patterns, identifies waste, and provides actionable recommendations for reducing the university's carbon footprint.\n\nInterested? Get in touch at team@tum-tide.com.`,
    date: '2025-04',
    duration: 'Apr – Jul 2025',
    status: 'finished',
    imgSrc: '/static/images/time-machine.jpg',
  },
]

export default projectsData
