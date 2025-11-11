'use client'

import { PersonIcon, LikeIcon, LocationIcon } from '@/utils/icons/doctor-icons'
import { FilledButton } from '../ui/filled-button'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { DoctorType } from '@/types/doctor-type'

interface ImportantThingsProps {
  doctor?: DoctorType // make it optional for safety
}

const ImportantThings = ({ doctor }: ImportantThingsProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const router = useRouter()
  const params = useParams()

  // ✅ Safe access with optional chaining
  const locationText = doctor?.location
    ? `${doctor.location.city}, ${doctor.location.address}`
    : 'Location not specified'

  const consultationFee = doctor?.user?.consultation_fee
    ? `$${doctor.user.consultation_fee}`
    : 'Fee not specified'

  // ✅ Optional guard before rendering
  if (!doctor) {
    return (
      <section className="flex max-w-[350px] flex-col gap-4 rounded-[12px] bg-[#F2F7F6] p-5">
        <h3 className="max-w-[230px] text-[16px] leading-[100%] font-bold">
          The most important things at a glance
        </h3>
        <span className="text-[14px] text-gray-500">Loading doctor info...</span>
      </section>
    )
  }

  return (
    <section className="flex max-w-[350px] flex-col gap-4 rounded-[12px] bg-[#F2F7F6] p-5">
      <h3 className="max-w-[230px] text-[16px] leading-[100%] font-bold">
        The most important things at a glance
      </h3>

      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <LocationIcon />
        </div>
        <span className="text-[14px] leading-[100%] font-normal">
          {locationText}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <PersonIcon />
        </div>
        <span className="text-[14px] leading-[100%] font-normal">
          Consultation fee: {consultationFee}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <PersonIcon />
        </div>
        <span className="text-[14px] leading-[100%] font-normal">
          Online booking also possible for new patients
        </span>
      </div>

      <div className="flex items-center gap-4">
        <FilledButton
          className="!rounded-full !p-5"
          onClick={() => router.push(`/book-doctor/${params.id}`)}
        >
          Book now
        </FilledButton>
        <div
          className="inline-block shrink-0 cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          <LikeIcon fill={isLiked ? '#f00' : '#CDCDCD'} />
        </div>
      </div>
    </section>
  )
}

export default ImportantThings
