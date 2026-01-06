import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Hackathon — Maintenance: Water · Energy · Wildcard' })

export default function HackathonPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <header className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight gradient-text sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Hackathon: Maintenance for a Circular Future
        </h1>
        Join a hackathon solving real-world maintenance challenges in water,
        energy and circular systems. Partner with high-growth circular startups and
        support student teams building software that keeps critical systems running longer and more efficiently.
      </header>

      <section className="py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="glass p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg float">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 7 7 7 11C7 14.866 9.686 18 12 20C14.314 18 17 14.866 17 11C17 7 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14C8 14 10 16 12 16C14 16 16 14 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Water - Irrigation & Infrastructure</h3>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Energy - Management & Infrastructure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Develop software for efficient grid management, smart charging, and infrastructure optimization.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>Grid load balancing</li>
                <li>Smart charging systems</li>
                <li>Infrastructure efficiency tracking</li>
              </ul>
            </div>
          </article>

          <article className="glass p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-lg float">
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" stroke="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Wildcard - Open Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Open challenge for any circular economy solution. Bring your own idea or solve a partner challenge.</p>
              </div>
            </div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ul>
                <li>New circular business models</li>
                <li>Cross-sector optimization</li>
                <li>Novel waste-to-value systems</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6">Software Challenges</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Three software-focused challenges, each with a dedicated startup mentor and industry expert.</p>

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

          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-yellow-500 glass animated-outline">
              <h4 className="font-bold text-lg">Energy Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Create dashboards and algorithms for energy management, grid efficiency, or smart infrastructure.</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Startup Mentor</p>
              <p className="text-sm font-medium mt-1">Energy Management Startup</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Industry Expert</p>
              <p className="text-sm font-medium mt-1">Major Energy Infrastructure Provider</p>
            </div>

          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-lg border-l-4 border-purple-500 glass animated-outline">
              <h4 className="font-bold text-lg">Wildcard Challenge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Build any solution that closes the loop, optimizes resources, or reduces waste.</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Startup Mentor</p>
              <p className="text-sm font-medium mt-1">Circular Economy Startup</p>
            </div>
            <div className="p-4 rounded-lg glass-dark">
              <p className="text-xs font-semibold text-gray-400 uppercase">Industry Expert</p>
              <p className="text-sm font-medium mt-1">Innovation Leader</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <div className="p-8 rounded-xl glass animated-outline flex items-center justify-center text-center transform transition-all duration-500 hover:scale-105">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Sponsor Benefits</h3>
            </div>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Access Top Talent</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Connect with Munich's best data science, engineering, and business students in action.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Drive Innovation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Support and discover novel solutions in water, energy, and circular economy sectors.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Showcase Technology</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Put your APIs, datasets, and tools directly in the hands of capable developers.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Brand Visibility</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Prominent logo placement, booth space, and engagement opportunities with participants.</p>
          </div>

          <div className="p-6 rounded-xl glass transform transition-all duration-500 hover:scale-105">
            <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-lg">Connect with Startups</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Network with high-growth circular startups and other industry leaders.</p>
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
              <h4 className="font-semibold">Interested in Sponsoring?</h4>
              <p className="text-sm text-gray-400 mt-2">Support the next generation of circular economy innovators.</p>
              <div className="mt-4">
                <a href="mailto:team@tum-tide.com" className="inline-block rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-600 transition">Get in Touch</a>
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
