import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Hackathon — Maintenance: Water · Energy · Waste' })

export default function HackathonPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight gradient-text sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hackathon: Maintenance for a Circular Future
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 max-w-3xl">
          Rapidly prototype solutions for real-world maintenance challenges in water (irrigation),
          energy (batteries) and waste. Collaborate with multidisciplinary teams — build tools,
          sensors, and processes that keep critical systems running longer and cleaner.
        </p>
      </header>

      <section className="py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="glass p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg float">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 7 7 7 11C7 14.866 9.686 18 12 20C14.314 18 17 14.866 17 11C17 7 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Water — Irrigation & Infrastructure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Predictive maintenance for pipes, pumps, sensors and smart irrigation that reduces leaks and water loss.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>Leak detection & sensor networks</li>
                <li>Smart scheduling for irrigation to extend equipment life</li>
                <li>Low-cost remote diagnostics</li>
              </ul>
            </div>
          </article>

          <article className="glass p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 20H17C17 20 17 16 12 16C7 16 7 20 7 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Energy — Batteries & Storage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Extend battery lifetimes, improve diagnostics, and optimise charging to reduce replacements and hazards.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>State-of-health monitoring</li>
                <li>Safe fast-charging strategies</li>
                <li>Predictive replacements and lifecycle analysis</li>
              </ul>
            </div>
          </article>

          <article className="glass p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg float">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19 18 21 12 21C6 21 3 19 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Waste — Collection & Circularity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Innovate on collection logistics, sensor-driven sorting, and maintenance to keep systems circulating resources longer.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>Sensor-based fill-level detection</li>
                <li>Robust sorting & maintenance tooling</li>
                <li>Repair-first strategies and incentives</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="py-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold">Format & Schedule</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Two-day hybrid hackathon: ideation, prototyping, and demos. Mentors from industry and research will be available for rapid feedback.</p>

            <ol className="mt-4 space-y-3 list-decimal list-inside">
              <li><strong>Day 1:</strong> Problem pitches, team formation, workshops</li>
              <li><strong>Day 2:</strong> Build, test, final demos and judging</li>
            </ol>
          </div>

          <aside className="mt-6 md:mt-0 md:w-1/3">
            <div className="p-4 rounded-lg glass-dark">
              <h4 className="font-semibold">Want to join?</h4>
              <p className="text-sm text-gray-400 mt-2">Sign up as an individual or a team. We welcome prototypes across hardware, software and processes.</p>
              <div className="mt-4">
                <a href="/apply" className="inline-block rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 transition">Express interest</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">How we judge</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Judging criteria focus on impact, feasibility, and maintainability — we prioritise solutions that reduce lifecycle costs and increase system resilience.</p>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <div className="p-4 rounded-lg glass">
            <h5 className="font-semibold">Impact</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Does this reduce resource loss or replacement rates?</p>
          </div>
          <div className="p-4 rounded-lg glass">
            <h5 className="font-semibold">Feasibility</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Can this be realistically prototyped or deployed?</p>
          </div>
          <div className="p-4 rounded-lg glass">
            <h5 className="font-semibold">Maintainability</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Is it easy to operate, monitor and repair long-term?</p>
          </div>
        </div>
      </section>
    </div>
  )
}
