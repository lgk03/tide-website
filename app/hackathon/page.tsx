import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Hackathon — Maintenance: Energy · Water · Wildcard',
})

export default function HackathonPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-4 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Hackathon: Sustainability for Infrastructure
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A two-day hackathon solving real-world sustainability challenges in energy, water, and
          circular systems — partnered with high-growth startups and industry experts.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            2 days
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            Munich, Celonis Office
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            Teams of 3–5
          </span>
        </div>
      </div>

      {/* Challenge Tracks */}
      <section className="py-10">
        <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#5c82ff] uppercase">
          Challenge Tracks
        </h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Three software-focused tracks, each with a dedicated startup mentor and industry expert.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 text-sm font-semibold tracking-wider text-yellow-600 uppercase dark:text-yellow-400">
              Energy
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              Management & Infrastructure
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Develop software for efficient grid management, smart charging, and infrastructure
              optimization.
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-yellow-500" />
                Grid load balancing
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-yellow-500" />
                Smart charging systems
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-yellow-500" />
                Infrastructure efficiency tracking
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Water
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              Irrigation & Infrastructure
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Build predictive maintenance and monitoring software for irrigation systems and water
              infrastructure.
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Leak detection dashboards
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Smart scheduling algorithms
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Remote diagnostics & monitoring
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 text-sm font-semibold tracking-wider text-purple-600 uppercase dark:text-purple-400">
              Wildcard
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              Open Innovation
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Open challenge for any circular economy solution — bring your own idea or solve a
              partner challenge.
            </p>
            <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-purple-500" />
                New circular business models
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-purple-500" />
                Cross-sector optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-purple-500" />
                Novel waste-to-value systems
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-10">
        <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#5c82ff] uppercase">
          Schedule
        </h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Pitch, ideate, build, and demo — with mentors from leading startups and industry on-site
          for rapid feedback.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-3 text-sm font-semibold text-[#5c82ff]">Day 1</div>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li>Challenge briefings & team formation</li>
              <li>Mentor introductions</li>
              <li>Opening workshop</li>
              <li>Hacking begins</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-3 text-sm font-semibold text-[#5c82ff]">Day 2</div>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li>Final builds & testing</li>
              <li>Project demos</li>
              <li>Judging & feedback</li>
              <li>Awards ceremony</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-10">
        <h2 className="mb-2 text-sm font-semibold tracking-wider text-[#5c82ff] uppercase">
          Judging Criteria
        </h2>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          Each track is judged by its dedicated startup mentor and industry expert.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Technical Quality</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Clean, maintainable code that works reliably under test conditions.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Innovation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Novel approaches or clever use of the provided tools and data.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 dark:border-gray-700">
            <h3 className="mb-2 font-bold text-gray-900 dark:text-white">Impact</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Real potential to improve operations, reduce waste, or drive sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Interested in sponsoring or participating?
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Support the next generation of circular economy innovators.
            </p>
          </div>
          <a
            href="mailto:team@tum-tide.com"
            className="bg-primary-500 hover:bg-primary-600 shrink-0 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
