'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import InteractiveChart from '@/components/InteractiveChart'
import { CURRENT_MEMBER_COUNT } from '@/data/memberStats'
import VideoBackground from '@/components/VideoBackground'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const MAX_DISPLAY = 3
// const BACKGROUND_VIDEO = '/static/videos/water_drops.mp4'
// const BACKGROUND_VIDEO = '/static/videos/waves_looped_1920x1080.mp4'
// const BACKGROUND_VIDEO = '/static/videos/waves_looped_720p.mp4'
const BACKGROUND_VIDEO = '/static/videos/waves_looped_shortend.mp4'

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

export default function Home({ posts }) {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-8 sm:pt-28"
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
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="mb-4 text-6xl font-black tracking-tight text-white md:text-8xl lg:text-9xl">
              <span className="text-[#5c82ff]">TIDE</span>
            </h1>
            <p className="mb-6 text-lg font-bold tracking-wide text-white/80 md:text-xl">
              TUM Initiative for Data Excellence
            </p>
            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl">
              TUM's most <span className="font-bold text-[#5c82ff]">innovative</span> data science
              community.<br></br> Where students turn{' '}
              <span className="font-bold text-pink-300">data into magic</span> ✨
            </p>
          </motion.div>

          <motion.div
            className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              href="/apply"
              className="transform rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
            >
              Join Us 🚀
            </Link>
            <Link
              href="/events"
              className="transform rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
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
                icon: '🤖',
                color: 'from-[#5c82ff] to-pink-300',
              },
              {
                title: 'Data Engineering',
                description: 'Pipelines so smooth they make data scientists cry tears of joy',
                icon: '⚡',
                color: 'from-[#5c82ff] to-pink-300',
              },
              {
                title: 'Analytics',
                description: 'Turning messy data into beautiful insights across industries',
                icon: '📊',
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
                  <div className="mb-4 text-6xl">{item.icon}</div>
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

      {/* Community Testimonials Section */}
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
              What Our <span className="text-[#5c82ff]">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real stories from real data scientists, engineers, and ML enthusiasts
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "TIDE pushed me to move from just understanding systems to actually improving them. It challenges how I think, work and lead, reminding me that real change starts with clarity, consistency and the willingness to aim higher than what's expected.",
                author: 'Arthur G.',
                role: 'M.Sc. Information Systems',
                avatar: '👨🏻‍💻',
              },
              {
                quote:
                  "The community here is incredible. I've made lifelong friends and learned more about ML in one semester than in all my courses combined.",
                author: 'Tim B.',
                role: 'M.Sc. Mechanical Engineering',
                avatar: '👷🏼‍♂️',
              },
              {
                quote:
                  'My motivation for building TIDE lies in connecting different study fields and disciplines on their common denominator - Data. ',
                author: 'Luca K.',
                role: 'M.Sc. Information Systems',
                avatar: '🧑‍💻',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full rounded-3xl border border-white/20 bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl dark:border-gray-700/50 dark:bg-gray-800/80">
                  <div className="mb-6 text-center text-6xl">{testimonial.avatar}</div>
                  <blockquote className="mb-6 text-gray-700 italic dark:text-gray-300">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
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
              Latest <span className="text-[#5c82ff]">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fresh takes on data science, ML, and everything in between
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {posts.slice(0, MAX_DISPLAY).map((post, index) => {
              const { slug, date, title, summary, tags } = post
              return (
                <motion.article
                  key={slug}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-full rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 group-hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                    <div className="mb-3 text-sm font-medium text-purple-600 dark:text-purple-400">
                      {formatDate(date, siteMetadata.locale)}
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h3>
                    <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-300">{summary}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {tags.slice(0, 3).map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center font-medium text-purple-600 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      Read more
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
                  </div>
                </motion.article>
              )
            })}
          </div>

          {posts.length > MAX_DISPLAY && (
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/blog"
                className="inline-flex transform items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700"
              >
                Explore All Posts
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="relative overflow-hidden bg-gray-900 py-20">
        <VideoBackground src={BACKGROUND_VIDEO} opacity="opacity-30" overlay={false}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900/80" />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        </VideoBackground>

        <div className="relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-black text-white md:text-6xl">
              Ready to Join the <span className="gradient-text">Data Revolution</span>?
            </h2>
            <p className="mx-auto mb-12 max-w-4xl text-xl text-gray-300">
              Whether you're a complete beginner or a seasoned pro, there's a place for you in our
              community. Let's build the future of data science together! 🚀
            </p>

            <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
              <motion.div
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 text-4xl">🎓</div>
                <h3 className="mb-2 text-xl font-bold text-white">For Students</h3>
                <p className="text-gray-300">Learn, grow, and network with like-minded peers</p>
              </motion.div>

              <motion.div
                className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 text-4xl">💼</div>
                <h3 className="mb-2 text-xl font-bold text-white">For Professionals</h3>
                <p className="text-gray-300">Share knowledge and mentor the next generation</p>
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/apply"
                className="transform rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
              >
                Apply Now 🎯
              </Link>
              <Link
                href="/events"
                className="transform rounded-full border-2 border-white px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#5c82ff]"
              >
                Attend an Event
              </Link>
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
