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
    title: 'Insights into Transit Reliability',
    summary:
      "Analyzing real-time transit data from Munich's MVG network to understand how delays propagate across lines.",
    description: `We are analyzing real-time transit data from Munich's MVG network to understand how delays propagate across lines. Currently building predictive models to identify bottlenecks. Goal: actionable insights for improving urban transit reliability.`,
    date: '2025-09',
    duration: 'Sep 2025 – present',
    status: 'ongoing',
    imgSrc: '/static/images/deutsche-bahn-verspaetungen-anzeigetafel.jpg',
  },
  {
    title: 'Self-Learning Leak Detection',
    summary:
      'Built a self-learning model that detects irrigation leaks and blockages in near real-time using flow data.',
    description: `With a US-based sensor startup, we built a self-learning model that detects irrigation leaks and blockages in near real-time using flow data. The MVP is deployed and in use.`,
    date: '2025-10',
    duration: 'Oct – Nov 2025',
    status: 'finished',
  },
  {
    title: 'Synthetic Data for Leak Detection',
    summary:
      "Built a digital twin of a real building's pipe network to generate synthetic training data for leak detection.",
    description: `With an MIT-based startup, we built a digital twin of a real building's pipe network to generate synthetic training data for leak detection. We also optimized sensor placement and the minimum number of sensors needed for reliable coverage.`,
    date: '2025-08',
    duration: 'Aug – Oct 2025',
    status: 'finished',
    imgSrc: '/static/images/smart-building-analytics.jpg',
  },
]

export default projectsData
