'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { CalendarCheckIcon, CopyIcon,  EmailIcon,  GiftIcon, ShareIcon, TelegramIcon, UserAddIcon } from '@/utils/icons'
import Image from 'next/image'
import doctorAndPatient from '@/assets/images/doctorAndPatient.png'

const Referrals = () => {
  const t = useTranslations('settingsLayout.referralsPage')
  const [copied, setCopied] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(t('referralCode.code'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const steps = [
    {
      number: 1,
      icon: <CopyIcon />,
      title: t('howItWorks.steps.copy.title'),
      description: t('howItWorks.steps.copy.description')
    },
    {
      number: 2,
      icon: <ShareIcon />,
      title: t('howItWorks.steps.share.title'),
      description: t('howItWorks.steps.share.description')
    },
    {
      number: 3,
      icon: <UserAddIcon />,
      title: t('howItWorks.steps.signup.title'),
      description: t('howItWorks.steps.signup.description')
    },
    {
      number: 4,
      icon: <CalendarCheckIcon />,
      title: t('howItWorks.steps.book.title'),
      description: t('howItWorks.steps.book.description')
    },
    {
      number: 5,
      icon: <GiftIcon />,
      title: t('howItWorks.steps.earn.title'),
      description: t('howItWorks.steps.earn.description')
    }
  ]

  const friends = [
    { username: '@friend1' }
  ]

  return (
    <div className="p-10">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t('header.title')}
        </h1>
        <p className="text-gray-600">
          {t('header.description')}
        </p>
      </div>

      {/* Referral Code Card */}
      <div className="bg-[#046D5F] rounded-2xl p-8 mb-8 relative overflow-hidden">
                
        <div className="flex justify-between items-start">
          {/*Left Content*/}
          <div className="text-white flex-1 pr-40">
            <h3 className="text-lg font-medium mb-4">{t('referralCode.title')}</h3>
            
            {/* Referral Code Display */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-bold tracking-wider">{t('referralCode.code')}</span>
              <button
                onClick={handleCopyCode}
                className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors ml-2"
                title="Copy code"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.33 1H3.33C2.42 1 1.67 1.75 1.67 2.67V14.33H3.33V2.67H13.33V1ZM15.83 4.33H6.83C5.92 4.33 5.17 5.08 5.17 6V18C5.17 18.92 5.92 19.67 6.83 19.67H15.83C16.75 19.67 17.5 18.92 17.5 18V6C17.5 5.08 16.75 4.33 15.83 4.33ZM15.83 18H6.83V6H15.83V18Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>

            {/* Social Share Buttons */}
            <div className="flex gap-3 mb-8">
              <button className="flex items-center gap-2 bg-[#F5F5F5] px-4 py-2.5 rounded-lg text-[#046D5F] hover:bg-white/30 transition-colors">
                <TelegramIcon />
                <span className="text-sm font-medium">{t('referralCode.telegram')}</span>
              </button>
              <button className="p-2.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <EmailIcon />
              </button>
              <button className="p-2.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <ShareIcon />
              </button>
            </div>
          </div>

          {/*Right Content*/}
          <div className="absolute top-0 right-0 mr-5">
          <Image
            src={doctorAndPatient}
            alt="Doctor and Patient"
            width={290}
            height={180}
            className="object-contain rounded-tr-2xl"
          />
        </div>
        </div>

          {/* Progress */}
            <div className="space-y-3 mt-6">
              <p className="text-medium text-white/90">{t('referralCode.progress')}</p>
              <div className="w-full bg-[#F2F7F6] rounded-full h-3">
                <div className="bg-[#FEA725] h-3 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>


        {copied && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
            Copied!
          </div>
        )}
      </div>

      {/* How it works Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('howItWorks.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              {/* Step Circle */}
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <div className="text-teal-600">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Your Friends Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t('yourFriends.title')}</h2>
        
        <div className="space-y-2">
          {friends.map((friend, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4">
              <span className="text-gray-700 font-medium">{friend.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Referrals
