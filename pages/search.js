import React, { useState, useEffect } from 'react'

import { useDebounce } from 'use-debounce'
import Head from 'next/head'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

// export async function getStaticProps() {
//     //const tags = await getAllTags('blog')

//    // return { props: { tags } }
//   }
const API_KEY = '2a51d78da56f66254cc2e2a5acf1f712'
export default function Search() {
  const [query, setQuery] = useState('')
  const [data, setData] = useState()
  const [value] = useDebounce(query, 1000)

  useEffect(() => {
    async function fetchData() {
      if (query !== '') {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=th-TH&page=1&query=${value}`
        )
        const apiData = await res.json()
        setData(apiData)
      }
    }
    fetchData()
  }, [value])
  return (
    <>
      <PageSEO
        title={'ค้นหา - ข้อมูลให้บริการ'}
        description={'ค้นหา - ข้อมูลให้บริการ' + siteMetadata.description}
      />
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-lg font-extrabold leading-9 text-center tracking-tight text-[#0966D5] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
          ค้นหา ข้อมูลให้บริการ
        </h1>
      </div>
      <div className="flex justify-center">
        <input
          className="rounded-md py-2 px-12 text-zinc-800 text-center border truncate"
          defaultValue={''}
          type="text"
          name="search"
          id="search"
          placeholder="🔍 ค้นหา ข้อมูลให้บริการ"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="md:mx-24">
        <div className="flex flex-wrap py-4 pb-4 overflow-hidden sm:-mx-2 pl-16 md:-mx-2 lg:-mx-2 xl:-mx-2">
          {data ? (
            data.results.map((MovieCard) => {
              let poster_path = `https://image.tmdb.org/t/p/w500${MovieCard.poster_path}`
              let first_air_date = MovieCard.first_air_date
              let release_date = MovieCard.release_date
              first_air_date == null || first_air_date == ''
                ? (first_air_date = '')
                : (first_air_date = `(${first_air_date.substr(0, 4)})`)
              release_date == null || release_date == ''
                ? (release_date = '')
                : (release_date = `(${release_date.substr(0, 4)})`)
              MovieCard.poster_path == null
                ? (poster_path = '/images/landingPage.jpg')
                : poster_path
              return (
                <div
                  key={MovieCard.id + 5}
                  className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/4 lg:my-2 lg:px-2 lg:w-1/5 xl:my-2 xl:px-2 xl:w-1/5"
                >
                  <div key={MovieCard.id + 7} className="rounded-md overflow-hidden">
                    {MovieCard.media_type == 'movie' ? (
                      <Link
                        key={MovieCard.id}
                        href="/movie/[id]"
                        as={`/movie/${MovieCard.id}`}
                        title={MovieCard.title}
                      >
                        <img
                          className="w-72 rounded-sm hover:opacity-70"
                          key={MovieCard.id + 3}
                          title={MovieCard.title}
                          src={poster_path}
                          alt={MovieCard.title}
                        />
                        <p
                          key={MovieCard.id + 11}
                          className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-gray-300 text-sm leading-0 font-semibold py-2 text-center"
                        >
                          🎬 {MovieCard.title} <b>{release_date}</b>
                        </p>
                      </Link>
                    ) : (
                      <Link
                        key={MovieCard.id}
                        href="/tv/[id]"
                        as={`/tv/${MovieCard.id}`}
                        title={MovieCard.title}
                      >
                        <img
                          className="w-72 rounded-sm hover:opacity-70"
                          key={MovieCard.id + 3}
                          title={MovieCard.name}
                          src={poster_path}
                          alt={MovieCard.name}
                        />
                        <p
                          key={MovieCard.id + 13}
                          className="bg-zinc-800 max-w-[18rem] rounded-sm break-words text-gray-300 text-sm leading-0 font-semibold py-2 text-center"
                        >
                          📺 {MovieCard.name} <b>{first_air_date}</b>
                        </p>
                      </Link>
                    )}
                  </div>
                </div>
              )
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  )
}
