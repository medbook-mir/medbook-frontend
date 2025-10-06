'use client'

import { LocationIcon } from '@/utils/icons/doctor-icons'
import { PhonePlus } from '@/utils/icons/PhonePlusIcon'
import { VideoPlayIcon } from '@/utils/icons/VideoPlayIcon'
import Image from 'next/image'

const DoctorInfoCard = () => {
  return (
    <section className="flex max-w-[350px] flex-col gap-6 rounded-[12px] bg-[#F2F7F6] p-6">
      {/* Doctor Header Section */}
      <div className="flex items-start gap-4">
        {/* Doctor Photo */}
        <div className="shrink-0">
          <Image
            src="/api/placeholder/80/80"
            alt="Doctor photo"
            width={80}
            height={80}
            className="rounded-[8px] object-cover"
          />
        </div>
        
        {/* Doctor Info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-tight">
            Kathrin Schenk-Losse
          </h3>
          <p className="text-[14px] font-medium text-[#046D5F]">
            Gynecologist
          </p>
          <p className="text-[14px] font-medium">
            <span className="font-medium text-[#046D5F]">Languages:</span> Uzbek
          </p>
        </div>
      </div>

      {/* Information Items */}
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <LocationIcon />
          </div>
          <span className="text-[14px] leading-[1.3] font-normal text-[#333333]">
            Tashkent, Chilanzar, Bunyodkor street 12/4 home 2A
          </span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <PhonePlus />
          </div>
          <span className="text-[14px] leading-[1.3] font-normal text-[#333333]">
            Contact your facility for simple inquiries outside of an appointment.
          </span>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <VideoPlayIcon />
          </div>
          <span className="text-[14px] leading-[1.3] font-normal text-[#333333]">
            Online consultation is Available
          </span>
        </div>
      </div>
    </section>
  )
}

export default DoctorInfoCard
