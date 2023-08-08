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

export default function DataServices() {
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description={siteMetadata.description} />
      <Image
        className="w-full h-auto object-contain rounded-2xl"
        src={'/static/images/DataServic/data-center.webp'}
        alt="Banner-Contact"
        width="1920"
        height="1080"
      />
      <div className="bg-[url('/static/images/Contact_Us/bg_contact_3.png')] bg-cover py-8 rounded-2xl">
        <div className="mx-auto max-w-4xl bg-gradient-to-b from-gray-100 rounded-2xl">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              DATA CENTER
            </h1>
            <p className="text-lg text-center leading-7 text-[#004DB3] dark:text-gray-400">
              ศูนย์ข้อมูลเทคโนโลยีสารสนเทศและการสื่อสาร
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
