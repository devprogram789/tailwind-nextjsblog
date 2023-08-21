import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useState, useEffect } from 'react'

import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
// import { DataRacx } from '@/data/dataset'
export const POSTS_PER_PAGE = 9
import axios from 'axios'

import FullYearXS from '@/components/FullYearXS'
import FullMonthXS from '@/components/FullMonthXS'
import { useSelector, useDispatch } from 'react-redux'
import PaginationPX from '@/components/PaginationPX'
import ReactPaginate from 'react-paginate'

export async function getServerSideProps(context) {
  // const dispatch = useDispatch();
  //const count = useSelector(state => state.counter.count);

  const postsxz = await getAllFilesFrontMatter('agriculture')
  const { category } = context.query
  const { data: postsx } = await axios.get('https://baansuanpui.com/api/categories')
  const posts = postsx.filter((itxj) => {
    return itxj['data']['slug'].includes(category)
  })
  //console.log(posts)
  const initialDisplayPosts = posts[0]['sub_data'].slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts[0]['sub_data'].length / POSTS_PER_PAGE),
  }
  return { props: { initialDisplayPosts, posts, pagination } }
}

export function ListALayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const [YearValue, setYearValue] = useState('')
  const [MonthValue, setMonthValue] = useState('')
  const languageSW = useSelector((state) => state.language)
  const filteredBlogPosts = posts[0]['sub_data'].filter((frontMatter) => {
    const searchContent = frontMatter.title_th + frontMatter.des_th // + frontMatter.tags.join(' ')

    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const GroupYear = [new Date(displayPosts[0].created_at).getFullYear()].reduce(
    (previous, current) => {
      if (!previous.includes(current)) {
        previous.push(current)
      }
      return previous
    },
    []
  )

  const GroupMonth = [new Date(displayPosts[0].created_at).getMonth()].reduce(
    (previous, current) => {
      if (!previous.includes(current)) {
        previous.push(current)
      }
      return previous
    },
    []
  )

  useEffect(() => {
    ;(async () => {
      setMonthValue(GroupMonth)
      setYearValue(GroupYear)
    })()
    return () => {}
  }, [])
  //console.log(posts[0]['data']['slug'])
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700 px-0 md:px-52">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            {posts[0]['data']['title_th']}
          </h1>
          <div className="flex gap-2 justify-end">
            <div>
              <FullYearXS YearDValue={YearValue} lang={languageSW} />
            </div>
            <div>
              <FullMonthXS MonthDValue={MonthValue} lang={languageSW} />
            </div>
          </div>
        </div>
        <ul>
          <li className="py-4 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-14 md:gap-y-20 items-baseline">
            {!displayPosts.length && 'No posts found.'}
            {displayPosts &&
              displayPosts.map((frontMatter, inxxssa) => {
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
                  <article
                    key={inxxssa}
                    className="bg-white drop-shadow-lg rounded-md md:rounded-2xl px-2 py-2 md:px-7 md:py-7"
                  >
                    <div className="space-y-2 ">
                      <div>
                        <Image
                          className="w-full h-[280px] object-cover rounded-md md:rounded-2xl"
                          src={`https://baansuanpui.com/${path}`}
                          alt={alt}
                          width="500"
                          height="500"
                          priority
                        />
                        <div className="py-4">
                          <div className="text-start">
                            <h2 className="text-lg md:text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/service/${id}`}
                                as={`/service/${id}`}
                                className="text-[#0F8787] dark:text-gray-100"
                              >
                                <div>
                                  <h2 className="text-2xl text-[#008080] leading-12">
                                    {languageSW.Language == 'th' ? title_th : title_en}
                                  </h2>
                                  <p className="text-base text-gray-500/80 leading-6 line-clamp-2">
                                    {languageSW.Language == 'th' ? des_th : des_en}
                                  </p>
                                </div>
                              </Link>
                            </h2>
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-md font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={created_at}>{formatDate(created_at)}</time>
                              </dd>
                            </dl>
                          </div>
                          <div className="text-start prose max-w-none text-gray-500 dark:text-gray-400">
                            {des_th}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
          </li>
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          catx={posts[0]['data']['slug']}
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  )
}

function Items({ currentItems }) {
  //console.log(currentItems)
  return (
    <>
      <div className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {currentItems &&
          currentItems.map((item, indexa) => (
            <Link
              key={indexa}
              href={item['link']}
              className="group block w-full mx-auto rounded-lg p-6 bg-white/50 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
            >
              <div className="flex items-center space-x-3">
                <Image
                  className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                  src={'/static/images/folder-icon.png'}
                  alt="banner"
                  width="100"
                  height="100"
                />
                <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
                  {item['title_th']}
                </h3>
              </div>
              <p className="text-slate-500 group-hover:text-white text-sm">{item['des_th']}</p>
            </Link>
          ))}
      </div>
    </>
  )
}

function PaginatedItems({ datax, itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = datax.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(datax.length / itemsPerPage)
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % datax.length
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        className="ReactPaginate flex justify-center gap-4"
      />
    </>
  )
}

export default function CategoryPage({ posts, initialDisplayPosts, pagination }) {
  // console.log(posts[0]['research_data'])
  useEffect(() => {
    const getXProject = async () => {
      Items(posts[0]['research_data'])
    }
    getXProject()
    return () => {}
  }, [])
  return (
    <>
      <PageSEO
        title={`${posts[0]['data']['title_th']} - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Image
        className="w-full h-auto object-contain rounded-none"
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
        <div className="mt-10 md:px-52 my-10">
          <h2 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
            งานวิจัยพร้อมใช้
          </h2>

          <PaginatedItems datax={posts[0]['research_data']} itemsPerPage={10} />
        </div>
      </div>
    </>
  )
}
