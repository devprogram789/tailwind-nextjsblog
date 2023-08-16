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
import { useSelector } from 'react-redux'

const MAX_DISPLAY = 12

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const resxz = await fetch(`https://baansuanpui.com/api/categories`)
  const DataCategories = await resxz.json()
  const resxza = await fetch(`https://baansuanpui.com/api/generals`)
  const DataGenerals = await resxza.json()
  // const jdata = DataCategories.json()
  // console.log(DataGenerals)
  return { props: { DataCatego: DataCategories, DataGene: DataGenerals } }
}

export default function Home({ DataCatego, DataGene }) {
  const languageSW = useSelector((state) => state.language)
  //console.log(languageSW.Language)
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="py-0">
          <Image
            className="w-full h-auto object-contain rounded-none"
            src={'https://baansuanpui.com/' + DataGene[0].index_cover_path}
            alt={DataGene[0].index_title_content}
            width="1920"
            height="1080"
          />
        </div>
        <div className="py-0 hidden sm:block">
          <div className="relative py-20 bg-[url('/static/images/bg_data_center_2.png')] bg-cover rounded-none">
            <div className="px-0 md:px-52 w-full h-auto mt-48 grid grid-cols-4 content-end gap-10">
              <div className="col-span-2 w-full h-auto ">
                <Image
                  className="w-full h-auto object-contain rounded-2xl"
                  src={'/static/images/Home_Hero.jpg'}
                  alt="bg_data_center_2"
                  width="500"
                  height="300"
                />
              </div>
              <div className="rounded-2xl px-4 py-4 bg-white/80 h-[330px] col-span-2 text-gray-100 overflow-y-auto">
                <p className="prose  text-gray-700">
                  {languageSW.Language == 'th'
                    ? DataGene[0].contact_us_th
                    : DataGene[0].contact_us_en}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-lg font-extrabold leading-9 text-center tracking-tight text-[#0966D5] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            ข้อมูลให้บริการ
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 text-center dark:text-gray-400">
            {siteMetadata.description}
          </p> */}
        </div>
        <ul className="px-0 md:px-52 md:px-10 bg-[url('/static/images/bg_home_ข้อมูลให้บริการ.png')] object-cover">
          <li className="py-4 md:py-12 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 items-baseline">
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
                  className="bg-white drop-shadow-lg rounded-md md:rounded-2xl px-2 py-2 md:px-4 md:py-4"
                >
                  <div className="space-y-2 ">
                    <div>
                      <Image
                        className="w-full h-auto object-contain rounded-md md:rounded-2xl"
                        src={'https://baansuanpui.com/' + cover_path}
                        alt={alt_cover}
                        width="500"
                        height="500"
                      />
                      <div className="py-4">
                        <div className="text-center">
                          <h2 className="text-lg md:text-2xl font-bold leading-8 tracking-tight line-clamp-1">
                            <Link href={`/${slug}`} className="text-[#0F8787] dark:text-gray-100">
                              {languageSW.Language == 'th' ? title_th : title_en}
                            </Link>
                          </h2>
                          {/* <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </dd>
                        </dl> */}
                          {/* <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div> */}
                        </div>
                        <p className="text-xs md:text-base text-center prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-1">
                          {des_th}
                        </p>
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
