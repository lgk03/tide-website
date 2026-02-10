import projectsData from '@/data/projectsData'
import ProjectTimeline from '@/components/ProjectTimeline'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  const sortedProjects = [...projectsData].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Find out how we help companies and the community through data-driven projects
          <br /> Click on a project to explore details
        </p>
      </div>
      <div className="py-12">
        <ProjectTimeline projects={sortedProjects} />
      </div>
    </div>
  )
}
