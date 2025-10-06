import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { getMembers } from '../lib/members'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const members = getMembers()

  return (
    <div className="w-full">
      <Main posts={posts} members={members} />
    </div>
  )
}
