'use client'

import { useState, useEffect } from 'react'
import { MainLogoWhite } from '@/utils/icons/MainLogoWhite'
import { LangSelect } from '../shared/lang-select'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Container } from '@/theme/container'
import { useAppDispatch } from '@/redux/store'
import { homePageNavItems, otherPagesNavItems } from './data'
import { openModal } from '@/redux/reducers/modals'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [isScrolled, setIsScrolled] = useState(false)

  const isHomePage = pathname === '/'
  const navItems = isHomePage ? homePageNavItems : otherPagesNavItems

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = () => {
    if (pathname === '/') {
      router.push('/login')
    } else {
      dispatch(openModal('loginModal'))
    }
  }

  const headerBgClass = isHomePage && !isScrolled
    ? 'bg-transparent'
    : 'bg-[#046D5F] px-10 py-5 rounded-full'

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-8 text-white transition-all duration-300 px-5`}
    >
      <Container>
        <div className={`flex items-center transition-all duration-300 ${headerBgClass}`}>
          <Link href="/">
            <MainLogoWhite />
          </Link>

          <nav className="hidden md:flex gap-[60px] text-[18px] font-medium text-white ml-auto">
            {navItems.map((item, index) => (
              <Link href={item.href} key={index}>
                <p className="text-white">{item.title}</p>
              </Link>
            ))}
          </nav>

          <div className="ml-autohidden items-center gap-4 md:flex">
            <LangSelect />
            <button className="h-[40px] rounded-full border border-white px-[16px] text-[14px] transition hover:bg-white hover:text-teal-800">
              I am a Doctor
            </button>
            <button
              onClick={handleLogin}
              className="flex h-[40px] items-center rounded-full bg-white px-[16px] text-sm font-semibold text-teal-800 transition hover:bg-gray-200"
            >
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}