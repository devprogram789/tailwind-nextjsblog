import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo03.png'
import Image from 'next/image'
import Link from 'next/link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import LanguageSwitch from './LanguageSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="fixed w-full top-0 z-10 px-4 md:px-4 flex items-center justify-between py-2 md:py-4 bg-white shadow-lg">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image className="w-20 md:w-32 h-auto" src={Logo} alt="LOGO" />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block ">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-semibold text-gray-900 hover:text-[#004DB3] hover:bg-[#e5edf7] hover:rounded-lg sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <LanguageSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto ">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
