'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { sidebarData } from './sidebar-data'
import { sidebarIcons, LogoutIcon, type SidebarIconType } from '@/utils/icons'

const Sidebar = () => {
  const pathname = usePathname()
  const t = useTranslations('settingsLayout')

  const handleLogout = () => {
    console.log('logout')
  }

  const getIcon = (iconName: string, isActive: boolean) => {
    const IconComponent = sidebarIcons[iconName as SidebarIconType]
    if (!IconComponent) return null
    
    return (
      <IconComponent 
        className={isActive ? 'text-white' : 'text-[#6B7280]'}
        color={isActive ? 'white' : '#6B7280'}
      />
    )
  }

  return (
    <aside className="flex flex-col rounded-2xl border-2 border-[#E9ECF4] text-[16px] leading-1.5 font-normal overflow-hidden">
      <div className="flex flex-col">
        {sidebarData.map((item, index) => {
          const isActive = pathname.includes(item.href)
          return (
            <Link
              href={`/settings/${item.href}`}
              key={item.href}
              className={`flex items-center gap-3 px-6 py-4 transition-colors ${
                isActive 
                  ? 'bg-[#046D5F] text-white font-medium' 
                  : 'text-[#6B7280] hover:bg-gray-50 font-normal'
              } ${index === 0 ? 'rounded-t-2xl' : ''}`}
            >
              {getIcon(item.icon, isActive)}
              {t(item.title)}
            </Link>
          )
        })}
      </div>
      
      <button 
        className="flex items-center gap-3 px-6 py-4 text-start text-[#6B7280] hover:bg-gray-50 transition-colors font-normal"
        onClick={handleLogout}
      >
        <LogoutIcon className="text-[#6B7280]" color="#6B7280" />
        {t('logout')}
      </button>
    </aside>
  )
}

export default Sidebar
