import Flag_of_Thailand from '@/data/img/Flag_of_Thailand.png'
import Flag_United_States from '@/data/img/Flag_of_the_United_States.png'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Switch } from '@headlessui/react'
import Image from 'next/image'
import { LanguageActions } from '../store/swLanguage'
import { useDispatch } from 'react-redux'

export default function LanguageSwitch() {
  const [searchValue, setSearchValue] = useState('')
  const [enaXbled, setXEnabled] = useState('th')
  const dispatch = useDispatch()
  // const filteredBlogPosts = posts.filter((frontMatter) => {
  //   const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
  //   return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  // })
  // const displayPosts =
  //   initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  if (enaXbled) {
    //console.log(enaXbled)
    dispatch(LanguageActions.setLanguage(enaXbled))
  }

  // console.log(enaXbled)
  return (
    <div className="w-26 text-right flex">
      <div className="hidden sm:inline-block relative max-w-lg input-container ">
        <svg
          className="icon-search absolute left-3 top-5 h-5 w-5 text-[#333]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="none"
            strokeLinejoin="none"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          placeholder="ค้นหาข้อมูล..."
          className="input-search"
          name="text"
          type="text"
          aria-label="ค้นหาข้อมูล"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex gap-4 w-full justify-center rounded-md p-4 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {enaXbled == 'th' ? (
              <Image className="w-6 h-auto" src={Flag_of_Thailand} alt="Flag_of_Thailand" />
            ) : (
              <Image className="w-6 h-auto" src={Flag_United_States} alt="Flag_United_States" />
            )}
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
                      active ? 'bg-[#004DB3] text-white' : 'text-[#333]'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => setXEnabled('th')}
                  >
                    {active ? (
                      <Image
                        className="mr-2 w-6 h-auto"
                        aria-hidden="true"
                        src={Flag_of_Thailand}
                        alt="Flag_of_Thailand"
                      />
                    ) : (
                      <Image
                        className="mr-2 w-6 h-auto"
                        aria-hidden="true"
                        src={Flag_of_Thailand}
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
                      active ? 'bg-[#004DB3] text-white' : 'text-[#333]'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={(e) => setXEnabled('en')}
                  >
                    {active ? (
                      <Image
                        className="mr-2 w-6 h-auto"
                        aria-hidden="true"
                        src={Flag_United_States}
                        alt="Flag_United_States"
                      />
                    ) : (
                      <Image
                        className="mr-2 w-6 h-auto"
                        aria-hidden="true"
                        src={Flag_United_States}
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
