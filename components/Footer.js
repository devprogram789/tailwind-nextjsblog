import logofooter from '@/data/logo03.png'
import Image from 'next/image'
import facebook_icon from '@/data/img/icon/facebook-icon.png'
import Line_icon from '@/data/img/icon/Line-icon.png'
import youtube_icon from '@/data/img/icon/youtube-icon.png'

export default function Footer() {
  return (
    <footer
      className="mx-auto max-w-7xl xl:px-0 bg-[url('/static/images/bg-footer-01.png')] object-cover"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-6 py-16 sm:py-24 lg:px-8 lg:py-32 xl:grid xl:grid-cols-4 xl:gap-8">
        <div className="w-full flex items-center">
          <Image className="w-full h-auto object-contain px-10" src={logofooter} alt="logofooter" />
        </div>

        <div className="w-full md:grid md:grid-cols-2 md:gap-8 col-span-2">
          <div className="w-full ">
            <h3 className="text-sm font-semibold leading-6 text-[#004FB3]">ที่อยู่</h3>
            <ul role="list" className="mt-6 space-y-4 text-[#004FB3]">
              <p className="text-sm leading-6 ">DATA CENTER BUU CHANTHABURI</p>
              <p className="text-sm leading-6 ">มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี</p>
              <p className="text-sm leading-6 ">อาคาร 100 ปี สมเด็จพระศรีนครินทร์</p>
              <p className="text-sm leading-6 ">57 หมู่ 1 ถนนชลประทาน ตำบลโขมง</p>
              <p className="text-sm leading-6 ">อำเภอท่าใหม่ จังหวัดจันทบุรี 22170</p>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-lg font-semibold text-[#004FB3]">โทรศัพท์</h3>
            <p className="text-sm leading-6 text-[#004FB3]">039-310000</p>
            <h3 className="text-lg font-semibold text-[#004FB3]">อีเมล์</h3>
            <p className="text-sm leading-6 text-[#004FB3]">arees@go.buu.ac.th</p>
          </div>
        </div>

        <div className="w-full">
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-[#004FB3]">ช่องทางการติดต่อ</h3>
            <div className="w-full flex items-center">
              <div>
                <Image
                  className="w-full h-auto object-contain px-2"
                  src={facebook_icon}
                  alt="logofooter"
                />
              </div>
              <div>
                <Image
                  className="w-full h-auto object-contain px-2"
                  src={Line_icon}
                  alt="logofooter"
                />
              </div>
              <div>
                <Image
                  className="w-full h-auto object-contain px-2"
                  src={youtube_icon}
                  alt="logofooter"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
