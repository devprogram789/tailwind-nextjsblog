import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from 'next/image'
import NewsletterForm from '@/components/NewsletterForm'
import banner_1920x980 from '@/data/img/banner/banner_1920x980.jpg'
import bg_data_center_2 from '@/data/img/banner/bg_data_center_2.png'
import { useSelector, useDispatch } from 'react-redux'
import { footerActions } from '../store/footerData'
import Iframe from 'react-iframe'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const MAX_DISPLAY = 12

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const resxz = await fetch(`https://baansuanpui.com/api/categories`)
  const DataCategories = await resxz.json()
  const resxza = await fetch(`https://baansuanpui.com/api/generals`)
  const DataGenerals = await resxza.json()
  // const jdata = DataCategories.json()
  //console.log(DataGenerals)

  return { props: { DataCatego: DataCategories, DataGene: DataGenerals } }
}

export default function Home({ DataCatego, DataGene }) {
  const dispatch = useDispatch()
  const languageSW = useSelector((state) => state.language)
  //console.log(languageSW.Language)
  if (DataGene['footer'][0]) {
    dispatch(footerActions.setfooterData(DataGene['footer'][0]))
  }
  const DataGeneTTTT = [
    {
      id: 1,
      title_th: 'xxx',
      path: 'https://baansuanpui.com/' + DataGene['data'][0].index_cover_path,
      type: 'image',
    },
    {
      id: 2,
      title_th: 'xxx',
      path: 'https://baansuanpui.com/' + DataGene['data'][0].index_cover_path,
      type: 'image',
    },
    {
      id: 3,
      title_th: 'xxx',
      path: 'https://www.youtube.com/embed/T2vNeQ36dKc',
      type: 'video',
    },
  ]

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="pb-48">
        {/* <div className="py-0">
          <Image
            className="w-full h-auto object-contain rounded-none"
            src={'https://baansuanpui.com/' + DataGene['data'][0].index_cover_path}
            alt={DataGene['data'][0].index_title_content}
            width="1920"
            height="1080"
          />
        </div>  */}
        <div className="mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            //centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {DataGeneTTTT.map((itexm, ickd) => (
              <SwiperSlide key={ickd}>
                <div>
                  {itexm.type == 'image' ? (
                    <Image
                      className="w-full h-full object-contain mt-14 md:mt-22"
                      src={itexm.path}
                      alt={itexm.title_th}
                      width="1920"
                      height="1080"
                    />
                  ) : null}
                  {itexm.type == 'video' ? (
                    <div>
                      <Iframe url={itexm.path} className="w-full aspect-video mt-14 md:-mt-10" />
                    </div>
                  ) : null}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-0 flex sm:block">
          <div className="relative pt-20 bg-[url('/static/images/bg_data_center_2.png')] bg-contain md:bg-cover">
            <div className="px-0 md:px-72 w-full h-auto mt-10 md:mt-64 grid grid-cols-1 md:grid-cols-8 content-end gap-10 py-20">
              <div className="col-span-1 md:col-span-5 px-4 md:px-0 w-full h-auto ">
                <Image
                  className="w-full h-[500px] object-cover rounded-md md:rounded-2xl"
                  src={'/static/images/Home_Hero.jpg'}
                  alt="bg_data_center_2"
                  width="800"
                  height="400"
                />
              </div>
              <div className="rounded-md md:rounded-2xl px-4 py-4 bg-white/80 h-[500px] col-span-1 md:col-span-3 text-gray-100 overflow-y-auto">
                <p className="prose  text-gray-700">
                  {languageSW.Language == 'th'
                    ? DataGene['data'][0].contact_us_th
                    : DataGene['data'][0].contact_us_en}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[url('/static/images/bg_home_ข้อมูลให้บริการ.png')] object-cover bg-bottom">
          <div className="space-y-2 pt-48 pb-10 md:space-y-2">
            <h1 className="text-lg font-extrabold text-center tracking-tight text-[#004DB3] dark:text-gray-100 sm:leading-4 md:text-5xl md:leading-6">
              ข้อมูลให้บริการ
            </h1>
            {/* <p className="text-lg leading-7 text-gray-500 text-center dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
          </div>
          <ul className="px-0 md:px-72">
            <li className="py-4 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-x-14 md:gap-y-20 items-baseline">
              {!DataCatego.length && 'No posts found.'}
              {DataCatego.slice(0, MAX_DISPLAY).map((frontMatter, indxs) => {
                //const { slug, date, title, summary, tags, images } = frontMatter
                const {
                  id,
                  title_th,
                  title_en,
                  cover_path,
                  alt_cover,
                  banner_path,
                  alt_banner,
                  des_th,
                  slug,
                  des_en,
                  enable,
                } = frontMatter.data
                return (
                  <article
                    key={indxs}
                    className="bg-white drop-shadow-lg rounded-md md:rounded-2xl px-2 py-2 md:px-7 md:py-7"
                  >
                    <div className="space-y-2 ">
                      <div>
                        <Link href={`/${slug}`}>
                          <Image
                            className="w-full h-[250px] object-cover rounded-md md:rounded-2xl"
                            src={'https://baansuanpui.com/' + cover_path}
                            alt={alt_cover}
                            width="300"
                            height="300"
                          />
                        </Link>
                        <div className="py-4">
                          <div className="text-center">
                            <h2 className="text-lg md:text-2xl font-bold leading-8 tracking-tight">
                              <Link href={`/${slug}`}>
                                <div>
                                  <h2 className="text-2xl text-[#008080] leading-12">{title_en}</h2>
                                  <p className="text-base text-gray-500/80 leading-6">{title_th}</p>
                                </div>
                              </Link>
                            </h2>
                          </div>
                          <p className="text-xs md:text-base text-center prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-1">
                            {des_th}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </li>
          </ul>
        </div>
      </div>
      {DataCatego.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}

//getHomeCategories
