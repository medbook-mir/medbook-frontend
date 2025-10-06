'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import DoctorInfoCard from '@/components/doctor/doctor-info-card'
import Dropdown from '@/components/shared/drop-down'
import { Container } from '@/theme/container'
import { CustomBreadcrumb } from '@/components/ui/breadcrumb'
import { CalendarIcon } from '@/utils/icons/CalendarIcon'
import { CheckIcon } from '@/utils/icons/CheckIcon'

const AppointmentConfirmationPage = () => {
  const t = useTranslations('appointmentConfirmation')
  

  return (
    <div className="pt-[33px]">
      <Container>
        <CustomBreadcrumb
          pages={[
            { title: t('breadcrumb.appointmentBooking'), href: `/book-doctor/` }
          ]}
        />

        {/* Success Header */}
      <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <CheckIcon size={48} />
            
            <div>
              <h1 className="text-2xl font-semibold text-[#046D5F]">
                {t('title')}
              </h1>
              <p className="text-sm text-gray-600">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  {/* Left Column */}
  <div className="lg:col-span-8 space-y-6">
    {/* Map Container */}
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-100 bg-gray-200 relative">
        {/* Placeholder for map */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Map will be integrated here</p>
          </div>
        </div>
      </div>
    </div>

    {/* Dropdown Sections */}
    <div className="space-y-4">
      <Dropdown
        title={t('chatWithDoctor')}
        content={t('chatWithDoctorContent')}
      />
      
      <Dropdown
        title={t('needHelp')}
        content={t('needHelpContent')}
      />
    </div>
  </div>

  {/* Right Column - 4/12 width on large screens */}
  <div className="lg:col-span-4">
    {/* Appointment Date/Time Badge */}
    <div className="bg-[#F2F7F6] rounded-[12px] px-5 py-3 mb-5 mr-1">
      <div className="flex items-center justify-around gap-2 text-sm">
        <CalendarIcon/>
        <span className="font-medium">9 November, 2025</span>
        <span className="text-gray-400">|</span>
        <span className="font-medium">09:30</span>
      </div>
    </div>
    <DoctorInfoCard />
  </div>
</div>
      </div>  
        
      </Container>
    </div>
      
    )
}

export default AppointmentConfirmationPage
