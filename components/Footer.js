import logofooter from '@/data/logo03.png'
import Image from 'next/image'
import facebook_icon from '@/data/img/icon/facebook-icon.png'
import Line_icon from '@/data/img/icon/Line-icon.png'
import youtube_icon from '@/data/img/icon/youtube-icon.png'
import SocialIcon from '@/components/social-icons'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

export default function Footer() {
  const footerDataX = useSelector((state) => state.footer)
  const languageSW = useSelector((state) => state.language)
  //console.log(footerDataX)
  return (
    <footer
      className="mx-auto xl:px-0 bg-[url('/static/images/bg-footer-01.png')] object-cover"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-6 py-16 sm:py-24 lg:px-8 lg:py-32 xl:grid xl:grid-cols-4 xl:gap-8 divide-x-2 divide-[#004DB3]">
        <div className="w-full flex items-center">
          <Image className="w-full h-auto object-contain px-20" src={logofooter} alt="logofooter" />
        </div>

        <div className="w-full md:grid md:grid-cols-2 md:gap-16 col-span-2">
          <div className="w-full px-14">
            <h3 className="text-lg font-semibold text-[#004FB3] leading-9">
              {languageSW.Language == 'th' ? 'ที่อยู่' : 'Address'}
            </h3>
            <ul role="list" className="text-[#004FB3]">
              {languageSW.Language == 'th' ? (
                <div
                  className="text-base leading-9"
                  dangerouslySetInnerHTML={{
                    __html: footerDataX?.footer?.address_th,
                  }}
                />
              ) : (
                <div
                  className="text-base leading-9"
                  dangerouslySetInnerHTML={{
                    __html: footerDataX?.footer?.address_en,
                  }}
                />
              )}
              {/* <p className="text-sm leading-6 ">มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี</p>
              <p className="text-sm leading-6 ">อาคาร 100 ปี สมเด็จพระศรีนครินทร์</p>
              <p className="text-sm leading-6 ">57 หมู่ 1 ถนนชลประทาน ตำบลโขมง</p>
              <p className="text-sm leading-6 ">อำเภอท่าใหม่ จังหวัดจันทบุรี 22170</p> */}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-lg leading-9 font-semibold text-[#004FB3]">
              {languageSW.Language == 'th' ? 'โทรศัพท์' : 'Telephone'}
            </h3>
            <p className="text-base leading-9 text-[#004FB3]">039-310000 ต่อ 4112</p>
            <h3 className="text-lg leading-9 font-semibold text-[#004FB3]">
              {languageSW.Language == 'th' ? 'แฟกซ์' : 'Fax'}
            </h3>
            <p className="text-base leading-9 text-[#004FB3]">039-310128</p>
            <h3 className="text-lg font-semibold text-[#004FB3]">
              {languageSW.Language == 'th' ? 'อีเมล์' : 'Email'}
            </h3>
            <div className="leading-9 text-[#004FB3]">
              {/* <SocialIcon kind="mail" href={`mailto:arees@go.buu.ac.th`} /> */}
              <p className="text-base leading-9 text-[#004FB3]">arees@go.buu.ac.th</p>
            </div>

            {/* <p className="text-sm leading-6 text-[#004FB3]">arees@go.buu.ac.th</p> */}
          </div>
        </div>

        <div className="w-full px-10">
          <div className="mt-10 md:mt-0">
            <h3 className="text-lg leading-9 font-semibold text-[#004FB3]">
              {languageSW.Language == 'th' ? 'ช่องทางการติดต่อ' : 'Contact'}
            </h3>
            <div className="w-full flex items-center gap-3 mt-4">
              <div>
                <Link
                  href={'https://www.facebook.com/buu.ac.th/'}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-14 h-14 object-contain"
                    src={facebook_icon}
                    alt="facebook buu"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href={'https://www.line.me/'}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image className="w-14 h-14 object-contain" src={Line_icon} alt="line buu" />
                </Link>
              </div>
              <div>
                <Link
                  href={'https://www.youtube.com/channel/UCSZh_FkbzEw3hKNXk7EyNqQ'}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-14 h-14 object-contain"
                    src={youtube_icon}
                    alt="youtube buu"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
