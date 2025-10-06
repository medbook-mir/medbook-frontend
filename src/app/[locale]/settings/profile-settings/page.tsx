'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { settingsSections } from './data'
// import icons from utils
import { ChevronRightIcon, ArrowRightIcon } from '@/utils/icons'


const ProfileSettings = () => {
  const t = useTranslations('settingsLayout.profileSettingsPage')
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'login-security', 
    'data-privacy', 
    'payment-settings', 
    'notifications', 
    'general-settings'
  ])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('title')}</h2>
      </div>
      
      <div className="space-y-4">
        {settingsSections.map(section => {
          const isExpanded = expandedSections.includes(section.id)

          return (
            <div
              key={section.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                aria-expanded={isExpanded}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <ChevronRightIcon isExpanded={isExpanded} />
                  <span className="font-medium text-xl text-gray-900">{t(section.titleKey)}</span>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-gray-200">
                  <div className="p-6 space-y-0">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex items-center justify-between py-4 ${
                          itemIndex < section.items.length - 1 ? 'border-b border-gray-100' : ''
                        }`}
                      >
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 mb-1">{t(item.labelKey)}</div>
                          <div className="text-sm text-gray-500"></div>
                        </div>
                        <ArrowRightIcon />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProfileSettings
