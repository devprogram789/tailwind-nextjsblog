import Flag_of_Thailand from '@/data/img/Flag_of_Thailand.png'
import Flag_United_States from '@/data/img/Flag_of_the_United_States.png'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import SearchIcon from '@/data/img/search-icon.png'
import Image from 'next/image'

export default function LanguageSwitch() {
  const [searchValue, setSearchValue] = useState('')
  // const filteredBlogPosts = posts.filter((frontMatter) => {
  //   const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
  //   return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  // })
  // const displayPosts =
  //   initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts
  return (
    <div className="w-26 text-right flex">
      <div className="hidden md:flex relative max-w-lg">
        <svg
          className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
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
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="     ค้นหาข้อมูล"
          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex gap-4 w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <Image className="w-8 h-auto" src={Flag_of_Thailand} alt="Flag_of_Thailand" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Image
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        src={Flag_of_Thailand}
                        alt="Flag_of_Thailand"
                      />
                    ) : (
                      <Image
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        src={Flag_United_States}
                        alt="Flag_United_States"
                      />
                    )}
                    THAI
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <Image
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        src={Flag_United_States}
                        alt="Flag_United_States"
                      />
                    ) : (
                      <Image
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                        src={Flag_of_Thailand}
                        alt="Flag_of_Thailand"
                      />
                    )}
                    ENGLISH
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
