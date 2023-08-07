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

const MAX_DISPLAY = 12

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="py-2">
          <Image
            className="w-full h-auto object-contain rounded-2xl"
            src={banner_1920x980}
            alt="banner"
            width="1920"
            height="1080"
          />
        </div>
        <div className="py-2">
          <div className="relative py-20 bg-[url('/static/images/bg_data_center_2.png')] bg-cover">
            <div className="w-full h-auto mt-48 grid grid-cols-4 content-end px-28 gap-10">
              <div className="col-span-2 w-full h-auto ">
                <Image
                  className="w-full h-auto object-contain rounded-2xl"
                  src={'/static/images/Home_Hero.jpg'}
                  alt="bg_data_center_2"
                  width="500"
                  height="300"
                />
              </div>
              <div className="h-[300px] col-span-2 text-gray-100 overflow-y-auto">
                <p>
                  มหาวิทยาลัยบูรพา
                  เป็นสถาบันอุดมศึกษาของรัฐแห่งแรกที่ตั้งอยู่ในส่วนภูมิภาคของประเทศไทย
                  ซึ่งในปัจจุบันเป็นมหาวิทยาลัยในกำกับของรัฐ ตั้งอยู่ที่ 169 ถนนลงหาดบางแสน
                  ตำบลแสนสุข อำเภอเมือง จังหวัดชลบุรี ก่อตั้งขึ้นเมื่อวันที่ 8 กรกฎาคม พ.ศ. 2498
                  มหาวิทยาลัยบูรพา
                  เป็นสถาบันอุดมศึกษาของรัฐแห่งแรกที่ตั้งอยู่ในส่วนภูมิภาคของประเทศไทย
                  ซึ่งในปัจจุบันเป็นมหาวิทยาลัยในกำกับของรัฐ ตั้งอยู่ที่ 169 ถนนลงหาดบางแสน
                  ตำบลแสนสุข อำเภอเมือง จังหวัดชลบุรี ก่อตั้งขึ้นเมื่อวันที่ 8 กรกฎาคม พ.ศ. 2498
                  มหาวิทยาลัยบูรพา
                  เป็นสถาบันอุดมศึกษาของรัฐแห่งแรกที่ตั้งอยู่ในส่วนภูมิภาคของประเทศไทย
                  ซึ่งในปัจจุบันเป็นมหาวิทยาลัยในกำกับของรัฐ ตั้งอยู่ที่ 169 ถนนลงหาดบางแสน
                  ตำบลแสนสุข อำเภอเมือง จังหวัดชลบุรี ก่อตั้งขึ้นเมื่อวันที่ 8 กรกฎาคม พ.ศ. 2498
                  มหาวิทยาลัยบูรพา
                  เป็นสถาบันอุดมศึกษาของรัฐแห่งแรกที่ตั้งอยู่ในส่วนภูมิภาคของประเทศไทย
                  ซึ่งในปัจจุบันเป็นมหาวิทยาลัยในกำกับของรัฐ ตั้งอยู่ที่ 169 ถนนลงหาดบางแสน
                  ตำบลแสนสุข อำเภอเมือง จังหวัดชลบุรี ก่อตั้งขึ้นเมื่อวันที่ 8 กรกฎาคม พ.ศ. 2498
                  มหาวิทยาลัยบูรพา
                  เป็นสถาบันอุดมศึกษาของรัฐแห่งแรกที่ตั้งอยู่ในส่วนภูมิภาคของประเทศไทย
                  ซึ่งในปัจจุบันเป็นมหาวิทยาลัยในกำกับของรัฐ ตั้งอยู่ที่ 169 ถนนลงหาดบางแสน
                  ตำบลแสนสุข อำเภอเมือง จังหวัดชลบุรี ก่อตั้งขึ้นเมื่อวันที่ 8 กรกฎาคม พ.ศ. 2498
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
        <ul className="px-0 md:px-10 bg-[url('/static/images/bg_home_ข้อมูลให้บริการ.png')] object-cover">
          <li className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-baseline">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
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
                        <div className="text-center">
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-[#0F8787] dark:text-gray-100"
                            >
                              {title}
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
                        <div className="text-center prose max-w-none text-gray-500 dark:text-gray-400">
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
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
