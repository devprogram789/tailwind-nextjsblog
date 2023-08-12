import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState } from 'react'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
// import { DataRacx } from '@/data/dataset'
export const POSTS_PER_PAGE = 3
import axios from 'axios'

export async function getServerSideProps(context) {
  const postsxz = await getAllFilesFrontMatter('agriculture')
  const slugxr = context.query
  const { data: postsx } = await axios.get('https://baansuanpui.com/api/categories')
  //console.log(slugxr['slugxr'])
  const posts = postsx.filter((itxj) => {
    return itxj['data']['slug'].includes(slugxr['slugxr'])
  })
  // console.log(posts[0])

  const initialDisplayPosts = posts[0]['sub_data'].slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts[0]['sub_data'].length / POSTS_PER_PAGE),
  }

  return { props: { initialDisplayPosts, posts, pagination } }
}

export function ListALayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts[0]['sub_data'].filter((frontMatter) => {
    const searchContent = frontMatter.title_th + frontMatter.des_th // + frontMatter.tags.join(' ')
    //console.log(frontMatter)
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {posts[0]['data']['title_th']}
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
            {!posts[0]['sub_data'].length && 'No posts found.'}
            {posts[0] &&
              posts[0]['sub_data'].map((frontMatter, inxxssa) => {
                //console.log(frontMatter)
                const {
                  id,
                  categorie_id,
                  title_th,
                  title_en,
                  des_th,
                  des_en,
                  path,
                  alt,
                  enable,
                  created_at,
                } = frontMatter

                return (
                  <article key={inxxssa} className="bg-white drop-shadow-lg rounded-2xl px-4 py-4">
                    <div className="space-y-2 ">
                      <div>
                        <Image
                          className="w-full h-auto object-contain rounded-2xl"
                          src={`https://baansuanpui.com/${path}`}
                          alt={alt}
                          width="500"
                          height="500"
                          priority
                        />
                        <div className="py-4">
                          <div className="text-start">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/service/${id}`}
                                as={`/service/${id}`}
                                className="text-[#0F8787] dark:text-gray-100"
                              >
                                {title_th}
                              </Link>
                            </h2>
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={created_at}>{formatDate(created_at)}</time>
                              </dd>
                            </dl>
                            {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                          </div>
                          <div className="text-start prose max-w-none text-gray-500 dark:text-gray-400">
                            {des_th}
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
  //console.log()
  return (
    <>
      <PageSEO
        title={`${posts[0]['data']['title_th']} - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Image
        className="w-full h-auto object-contain rounded-2xl"
        src={'https://baansuanpui.com/' + posts[0]['data']['banner_path']}
        alt="banner"
        width="1920"
        height="1080"
      />
      <div className="px-0 md:px-8 bg-[url('/static/images/bg-blog.png')] bg-cover">
        <ListALayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title={posts[0]['data']['title_th']}
        />
        <div>
          <h2 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            งานวิจัยพร้อมใช้
          </h2>
          <div className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts[0]['research_data'].map((dx, ix) => {
              return (
                <Link
                  key={ix}
                  href={dx['link']}
                  className="group block w-full mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                      src={'/static/images/folder-icon.png'}
                      alt="banner"
                      width="100"
                      height="100"
                    />
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                      {dx['title_th']}
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm">{dx['des_th']}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
