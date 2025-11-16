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
          Join a hackathon solving real-world maintenance challenges in water,
          energy and waste. Work alongside founders of high-growth circular startups and
          industry experts to build software that keeps critical systems running longer and more efficiently.
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
                <p className="text-sm text-gray-600 dark:text-gray-300">Build predictive maintenance and monitoring software for irrigation systems and water infrastructure.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>Leak detection dashboards</li>
                <li>Smart scheduling algorithms</li>
                <li>Remote diagnostics & monitoring</li>
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
                <p className="text-sm text-gray-600 dark:text-gray-300">Develop software for battery health monitoring, charging optimization, and lifecycle management.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>State-of-health dashboards</li>
                <li>Charging optimization algorithms</li>
                <li>Predictive lifecycle analysis</li>
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
                <p className="text-sm text-gray-600 dark:text-gray-300">Create collection logistics, sorting intelligence, and waste-to-resource tracking software platforms.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>Fill-level prediction models</li>
                <li>Route optimization software</li>
                <li>Material sorting & tracking systems</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Software Challenges</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Three software-focused challenges, each with a dedicated startup mentor and industry expert. Prize pool of €2,000+ per challenge plus exclusive goodies.</p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-blue-500 glass animated-outline">
              <h4 className="font-bold text-lg">Water Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Build predictive or monitoring software for irrigation systems, leak detection, or water infrastructure.</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Startup Mentor</p>
              <p className="text-sm font-medium mt-1">Circular Water Startup</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Industry Expert</p>
              <p className="text-sm font-medium mt-1">Global Water Infrastructure Player</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950">
              <p className="text-sm font-semibold">€2,000+ Prize Pool</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">+ merchandise and goodies</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-yellow-500 glass animated-outline">
              <h4 className="font-bold text-lg">Energy Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Create dashboards, diagnostics, or optimization algorithms for battery health, charging, or energy storage systems.</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Startup Mentor</p>
              <p className="text-sm font-medium mt-1">Battery Tech Circular Startup</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Industry Expert</p>
              <p className="text-sm font-medium mt-1">Major Energy / Battery Manufacturer</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-950">
              <p className="text-sm font-semibold">€2,000+ Prize Pool</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">+ merchandise and goodies</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-green-500 glass animated-outline">
              <h4 className="font-bold text-lg">Waste Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Build collection optimization, sorting intelligence, or waste-to-resource tracking platforms.</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Startup Mentor</p>
              <p className="text-sm font-medium mt-1">Waste Tech Circular Startup</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Industry Expert</p>
              <p className="text-sm font-medium mt-1">Leading Waste Management Corporation</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950">
              <p className="text-sm font-semibold">€2,000+ Prize Pool</p>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">+ merchandise and goodies</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 rounded-xl glass animated-outline flex items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Your Benefits</h3>
            </div>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Network with Circular Leaders</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Direct access to founders of high-growth circular startups and decision-makers at industry-leading organizations.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Explore High-Growth Fields</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Water, energy, and waste are among the fastest-growing sectors by venture capital funding globally.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Learn & Test Technology</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Work hands-on with APIs, datasets, and tools from leading companies in a practical, supportive environment.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20c4.4 0 8.55-1.5 11.8-4m-7.8 4v-3m0-3c4.4 0 8.55-1.5 11.8-4M5 11c1.5-2.25 4-3.5 7-3.5m0 0c3 0 5.5-1.25 7-3.5m-7 3.5v3m0-3h3m0 0V8" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Full Catering Included</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Focus on your code — meals, snacks, and refreshments are on us both days.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Compete for Prizes</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">€2,000+ per challenge plus goodies and exclusive perks for top teams.</p>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold">Format & Schedule</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Two-day hybrid hackathon: pitch, ideate, build, and demo. Mentors from leading startups and industry will be on-site for rapid feedback.</p>
            <ol className="mt-4 space-y-3 list-inside">
              <li><strong>Day 1:</strong> Challenge briefings, team formation, mentor intros, opening workshop</li>
              <li><strong>Day 2:</strong> Final builds, testing, demos, judging, and awards ceremony</li>
            </ol>
          </div>

          <aside className="mt-6 md:mt-0 md:w-1/3">
            <div className="p-4 rounded-lg glass-dark">
              <h4 className="font-semibold">Ready to build?</h4>
              <p className="text-sm text-gray-400 mt-2">Solo or team — all skill levels welcome. Software developers only.</p>
              <div className="mt-4">
                <a href="/apply" className="inline-block rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 transition">Express interest</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-bold">How We Judge</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Judging criteria emphasize code quality, innovation, and real-world impact. Each challenge is judged by its dedicated startup mentor and industry expert.</p>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <div className="p-4 rounded-lg glass animated-outline">
            <h5 className="font-semibold">Technical Quality</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Clean, maintainable code that works reliably under test conditions.</p>
          </div>
          <div className="p-4 rounded-lg glass animated-outline">
            <h5 className="font-semibold">Innovation</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Novel approaches or clever use of the provided tools and data.</p>
          </div>
          <div className="p-4 rounded-lg glass animated-outline">
            <h5 className="font-semibold">Impact</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Real potential to improve operations, reduce waste, or drive sustainability.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
