'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import InteractiveChart from '@/components/InteractiveChart'
import { CURRENT_MEMBER_COUNT } from '@/data/memberStats'
import VideoBackground from '@/components/VideoBackground'
import MemberCarousel from '@/components/MemberCarousel'
import { Member } from '../lib/members'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'
import eventsData from '@/data/eventsData'

const MAX_DISPLAY = 3
// const BACKGROUND_VIDEO = '/static/videos/water_drops.mp4'
// const BACKGROUND_VIDEO = '/static/videos/waves_looped_1920x1080.mp4'
// const BACKGROUND_VIDEO = '/static/videos/waves_looped_720p.mp4'
const BACKGROUND_VIDEO = '/static/videos/waves_looped_short_compressed.mp4'

// Animated counter component
function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span>{count}</span>
}

interface BlogPost {
  slug: string
  date: string
  title: string
  summary?: string
  tags?: string[]
  draft?: boolean
  images?: string[]
  authors?: string[]
}

interface HomeProps {
  posts: BlogPost[]
  members: Member[]
}

export default function Home({ posts, members }: HomeProps) {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-8 sm:pt-36"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <VideoBackground
          src={BACKGROUND_VIDEO}
          poster="/static/images/ocean-min.jpeg"
          overlay={true}
        />

        {/* Hero content */}
        <div className="relative z-10 px-4 text-center">
          <motion.div
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            // initial={{ y: 50, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="mb-6 text-8xl font-black tracking-tight text-white md:text-[10rem] lg:text-[13rem]">
              <span className="text-[#5c82ff]">TIDE</span>
            </h1>
            {/* <p className="mb-6 text-lg font-bold tracking-wide text-white/80 md:text-xl">
              TUM Initiative for Data Excellence
            </p> */}
            <p className="mx-auto mb-10 max-w-5xl text-2xl leading-relaxed text-white/90 md:text-4xl">
              Where <span className="font-bold text-[#5c82ff]">real world</span> data problems meet{' '}
              <span className="font-bold text-[#5c82ff]">students</span>
            </p>
          </motion.div>

          <motion.div
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            // initial={{ y: 50, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              href="/apply"
              className="transform rounded-full border-2 border-white px-12 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
            >
              Join Us
            </Link>
            <Link
              href="/events"
              className="transform rounded-full border-2 border-white px-12 py-5 text-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
            >
              Explore Events
            </Link>
          </motion.div>

          {/* Stats section */}
          {/* <motion.div
            className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { label: 'Active Members', value: CURRENT_MEMBER_COUNT },
              { label: 'Projects Completed', value: 0 },
              { label: 'Workshops Hosted', value: 0 },
              { label: 'Coffee Consumed', value: 9999 },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-black text-white md:text-4xl">
                  <AnimatedCounter end={stat.value} />
                  {stat.value === 9999 ? '+' : ''}
                </div>
                <div className="text-sm text-white/80 md:text-base">{stat.label}</div>
              </div>
            ))}
          </motion.div> */}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/50">
            <div className="mt-2 h-3 w-1 rounded-full bg-white/70" />
          </div>
        </motion.div>
      </motion.section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              What We <span className="text-[#5c82ff]">Build</span>
            </h2>
            <p className="mx-auto max-w-4xl text-xl text-gray-600 dark:text-gray-300">
              From ML models that predict the future to data pipelines that power innovation
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              {
                title: 'Machine Learning',
                description: 'Building AI that actually works in the real world',
                icon: (
                  <svg
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 0 0 1 1h1a4 4 0 0 1 0 8h-1a1 1 0 0 0-1 1v1a4 4 0 0 1-8 0v-1a1 1 0 0 0-1-1H6a4 4 0 0 1 0-8h1a1 1 0 0 0 1-1V6a4 4 0 0 1 4-4z" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                color: 'from-[#5c82ff] to-pink-300',
              },
              {
                title: 'Data Engineering',
                description: 'Designing robust pipelines that power real-world applications',
                icon: (
                  <svg
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6M4 6l2-2h12l2 2" />
                    <path d="M9 10l2 2 4-4" />
                  </svg>
                ),
                color: 'from-[#5c82ff] to-pink-300',
              },
              {
                title: 'Analytics',
                description: 'Turning messy data into beautiful insights across industries',
                icon: (
                  <svg
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 16l4-6 4 3 5-7" />
                  </svg>
                ),
                color: 'from-[#5c82ff] to-pink-300',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-300 group-hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />
                  <div className="mb-4 text-[#5c82ff]">{item.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Visualization Section */}
      {/* <section className="bg-white py-20 dark:bg-gray-800">
        <div className="px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              Our <span className="text-[#5c82ff]">Journey</span>
            </h2>
            <p className="mx-auto max-w-4xl text-xl text-gray-600 dark:text-gray-300">
              Watch how we've grown from a small group of data enthusiasts to TUM's premier data
              science community
            </p>
          </motion.div>

          <motion.div
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveChart />
          </motion.div>
        </div>
      </section> */}

      {/* Member Carousel Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              Meet Our <span className="text-[#5c82ff]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collective of learners, builders, and data enthusiasts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <MemberCarousel members={members} />
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-20 dark:bg-gray-800">
        <div className="px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              Upcoming <span className="text-[#5c82ff]">Events</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join us at our next events and be part of the community
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {eventsData.slice(0, MAX_DISPLAY).map((event, index) => (
              <motion.article
                key={event.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 group-hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <div className="mb-3 text-sm font-medium text-[#5c82ff]">
                    {event.displayDate || event.date}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#5c82ff] dark:text-white">
                    {event.href ? <Link href={event.href}>{event.title}</Link> : event.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">
                    {event.description}
                  </p>
                  <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    {event.location}
                  </div>
                  {event.href && (
                    <Link
                      href={event.href}
                      className="inline-flex items-center font-medium text-[#5c82ff] transition-colors hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Learn more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 text-4xl font-black text-gray-900 md:text-6xl dark:text-white">
              Interested in <span className="text-[#5c82ff]">working with us</span>?
            </h2>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <Link href="/apply">
                <motion.div
                  className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 flex justify-center text-[#5c82ff]">
                    <svg
                      className="h-10 w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422A12.083 12.083 0 0 1 21 17.5c-3 2.5-6 3.5-9 3.5s-6-1-9-3.5a12.083 12.083 0 0 1 2.84-6.922L12 14z" />
                      <path d="M21 10v5" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    For Students
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Learn, grow, and network with like-minded peers
                  </p>
                </motion.div>
              </Link>

              <a href="mailto:team@tum-tide.com">
                <motion.div
                  className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 flex justify-center text-[#5c82ff]">
                    <svg
                      className="h-10 w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                      <path d="M12 12v4" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    For Professionals
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share knowledge and mentor the next generation
                  </p>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section
      {siteMetadata.newsletter?.provider && (
        <motion.section
          className="relative overflow-hidden py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <VideoBackground
            src={BACKGROUND_VIDEO}
            opacity="opacity-40"
            overlay={true}
          />
          <div className="relative z-10 px-4 text-center">
            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">Stay in the Loop</h2>
            <p className="mb-8 text-xl text-white/90">
              Get the latest updates, event announcements, and data science insights delivered to
              your inbox
            </p>
            <div className="mx-auto max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </motion.section>
      )} */}
    </div>
  )
}
