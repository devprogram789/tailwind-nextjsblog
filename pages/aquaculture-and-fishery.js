import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState } from 'react'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export const POSTS_PER_PAGE = 9

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('aquaculture-and-fishery')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export function ListAquacultureAndFisheryLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <div className="flex justify-end">
            <div className="relative max-w-lg">
              <input
                aria-label="Search articles"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="ค้นหาข้อมูล"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul>
          <li className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-baseline">
            {!filteredBlogPosts.length && 'No posts found.'}
            {displayPosts.map((frontMatter) => {
              const { slug, date, title, summary, tags, images } = frontMatter
              return (
                <article key={slug} className="bg-white drop-shadow-lg rounded-2xl px-4 py-4">
                  <div className="space-y-2 ">
                    <div>
                      <Image
                        className="w-full h-auto object-contain rounded-2xl"
                        src={images}
                        alt={title}
                        width="500"
                        height="500"
                      />
                      <div className="py-4">
                        <div className="text-start">
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/aquaculture-and-fishery/${slug}`}
                              className="text-[#0F8787] dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                              <time dateTime={date}>{formatDate(date)}</time>
                            </dd>
                          </dl>
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <div className="text-start prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      {/* <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          อ่านต่อ &rarr;
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </article>
              )
            })}
          </li>
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}

export default function Agriculture({ posts, initialDisplayPosts, pagination }) {
  return (
    <>
      <PageSEO
        title={`Agriculture - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Image
        className="w-full h-auto object-contain rounded-2xl"
        src={'/static/images/02_Aquaculture_and_fishery/Banner-Aquaculture-and-Fishery.jpg'}
        alt="banner"
        width="1920"
        height="1080"
      />
      <ListAquacultureAndFisheryLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Aquaculture and fishery Posts"
      />
    </>
  )
}
