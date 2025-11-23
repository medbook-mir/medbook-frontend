'use client'

import { useState, useEffect } from 'react'
import { MainLogoWhite } from '@/utils/icons/MainLogoWhite'
import { LangSelect } from '../shared/lang-select'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { Container } from '@/theme/container'
import { useAppDispatch } from '@/redux/store'
import { homePageNavItems, otherPagesNavItems } from './data'
import { openModal } from '@/redux/reducers/modals'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

export default function Navbar() {
  const pathname = usePathname()
  
  const dispatch = useAppDispatch()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHomePage = pathname === '/'
  
  const navItems = isHomePage ? homePageNavItems : otherPagesNavItems

  

  const handleLogin = () => {
    dispatch(openModal('loginModal'))
  }

  const headerBgClass = isHomePage
    ? 'absolute top-0 left-0 right-0 z-50 py-3 bg-transparent'
    : 'relative z-50 py-3 bg-[#046D5F] mb-5 rounded-full px-10'

  
  return (
<header className={`absolute left-0 right-0 top-0 z-50 px-10 py-3 text-white transition-all duration-300 ${headerBgClass}`}>

      <Container>
        <div className={`flex items-center justify-between transition-all duration-300 `}>
          {/* Logo */}
          <Link href="/">
            <MainLogoWhite />
          </Link>

          {/* Desktop Nav*/}
          <div className="hidden md:flex items-center gap-[60px]">
            <nav className="flex gap-[60px] text-[18px] font-medium text-white">
              {navItems.map((item, index) => (
                <Link href={item.href} key={index}>
                  <p className="text-white hover:opacity-80 transition-opacity">{item.title}</p>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LangSelect />
              <button className="h-[40px] rounded-full border border-white px-[16px] text-[14px] transition hover:bg-white hover:text-teal-800 whitespace-nowrap">
                I am a Doctor
              </button>
              <button
                onClick={handleLogin}
                className="flex h-[40px] items-center justify-center rounded-full bg-white px-[16px] text-sm font-semibold text-teal-800 transition hover:bg-gray-200 whitespace-nowrap"
              >
                Login
              </button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#046D5F] rounded-b-xl shadow-lg z-40 mt-3">
            <nav className="flex flex-col gap-6 p-6 text-[18px] font-medium text-white">
              {navItems.map((item, index) => (
                <Link href={item.href} key={index} onClick={() => setMobileMenuOpen(false)}>
                  <p className="text-white hover:opacity-80 transition-opacity">{item.title}</p>
                </Link>
              ))}
              <div className="border-t border-white/20 pt-4 mt-2 flex flex-col gap-4">
                <LangSelect />
                <button className="h-[40px] rounded-full border border-white px-[16px] text-[14px] transition hover:bg-white hover:text-teal-800 w-full">
                  I am a Doctor
                </button>
                <button
                  onClick={() => {
                    handleLogin()
                    setMobileMenuOpen(false)
                  }}
                  className="flex h-[40px] items-center justify-center rounded-full bg-white px-[16px] text-sm font-semibold text-teal-800 transition hover:bg-gray-200 w-full"
                >
                  Login
                </button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
