import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { Timeline } from '@/components/timeline'
import { timelineData } from '@/data/timelineData'
import ApplyNowButton from '@/components/ApplyNowButton'

import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const why = allAuthors.find((p) => p.slug === 'whyjoin') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent} title={'About'}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
      <Timeline data={timelineData} />
      <AuthorLayout content={mainContent} title={'Why Join Us?'}>
        <MDXLayoutRenderer code={why.body.code} />
      </AuthorLayout>
      <div className="flex justify-center py-8">
        <ApplyNowButton href="/apply" />
      </div>
    </>
  )
}
