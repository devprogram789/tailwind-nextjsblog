import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import facebook_icon from '@/data/img/icon/facebook-icon.png'
import Line_icon from '@/data/img/icon/Line-icon.png'
import youtube_icon from '@/data/img/icon/youtube-icon.png'
import SocialIcon from '@/components/social-icons'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Image
        className="w-full h-auto object-contain rounded-none mt-20"
        src={'/static/images/Contact_Us/banner_1920x980_02.jpg'}
        alt="Banner-Contact"
        width="1920"
        height="1080"
      />
      <div className="bg-[url('/static/images/Contact_Us/bg_contact_3.png')] bg-cover py-20 rounded-2xl">
        <div className="w-full mx-auto max-w-7xl bg-gradient-to-b from-white rounded-2xl">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              ข้อมูลติดต่อ
            </h1>
            <p className="text-lg text-center leading-7 text-[#004DB3] dark:text-gray-400">
              CONTACT US
            </p>
          </div>
          <div className="flex justify-center py-2 md:py-4">
            <Image
              className="w-14 md:w-20 h-auto object-contain rounded-2xl"
              src={'/static/images/Contact_Us/icon-contact-us-01.png'}
              alt="contact-icon"
              width="100"
              height="100"
            />
          </div>
          <p className="text-lg md:text-3xl text-center leading-7 text-[#004DB3] dark:text-gray-400 py-2">
            มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
          </p>
          <p className="text-lg md:text-2xl text-center leading-7 text-[#004DB3] dark:text-gray-400 py-4">
            DATA CENTER BUU CHANTHABURI / อาคาร 100 ปี สมเด็จพระศรีนครินทร์
          </p>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x-2 md:divide-[#004DB3] mt-10 md:mt-20">
            <div className="pl-10 md:pr-10 text-sm md:text-lg text-[#004DB3] text-start md:text-end">
              <p>เลขที่ 57 หมู่ 1 ถนนชลประทาน</p>
              <p>ตำบนโขมง อำเภอท่าใหม่</p>
              <p>จังหวัดจันทบุรี รหัสไปรษณีย์</p>
              <p>22170</p>
            </div>
            <div className="pl-10 md:pr-20 text-sm md:text-lg text-[#004DB3] text-start">
              <p>โทรศัพท์ : 039-310000 ต่อ 4112</p>
              <p>โทรสาร : 039-310128</p>
            </div>
          </div>
          <div className="py-10 text-[#004DB3]">
            <p className="text-center font-semibold">--------------------------------------</p>
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="mt-10 md:mt-0">
            {/* <h3 className="text-sm font-semibold leading-6 text-[#004FB3]">ช่องทางการติดต่อ</h3> */}
            <div className="w-full flex items-center gap-4">
              <div>
                <Link
                  href={'https://www.facebook.com/buu.ac.th/'}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="w-16 h-16 object-contain"
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
                  <Image className="w-16 h-16 object-contain" src={Line_icon} alt="line buu" />
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
                    className="w-16 h-16 object-contain"
                    src={youtube_icon}
                    alt="youtube buu"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <h3 className="text-lg py-10 text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          ตำแหน่งที่ตั้ง
        </h3>
        <div>
          <iframe
            className="w-full h-[450px] aspect-auto"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893.554027767677!2d101.929975!3d12.611617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3103799c1af73f59%3A0xaf14abd70d2c8e7f!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4Lia4Li54Lij4Lie4LiyIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4iOC4seC4meC4l-C4muC4uOC4o-C4tQ!5e0!3m2!1sth!2sth!4v1691485866602!5m2!1sth!2sth"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  )
}
