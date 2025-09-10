import Image from 'next/image'
import { StarIcon, VerifiedIcon } from '@/utils/icons/doctor-icons'
import { AvatarIcon } from '@/utils/icons/AvatarIcon'
import { DoctorType } from '@/types/doctor-type'

interface HeadSectionProps {
  doctor: DoctorType
}

const HeadSection = ({ doctor }: HeadSectionProps) => {
  const fullName = `${doctor.user.first_name} ${doctor.user.last_name}${doctor.user.middle_name ? ` ${doctor.user.middle_name}` : ''}`
  const languages = doctor.languages?.map(lang => lang.name).join(', ') || 'Languages not specified'
  const primarySpecialization = doctor.specialty?.name || 'Specialization not specified'
  const rating = doctor.user.rating || 0

  return (
    <section className="flex flex-wrap items-center gap-6 border-b border-[#EBEBEB] pt-10 pb-8">
      <div className="flex h-[132px] w-[120px] shrink-0 items-center justify-center rounded-[16px] bg-[#F3F3F3]">
        {doctor.user.avatar ? (
          <Image 
            src={doctor.user.avatar} 
            alt={fullName} 
            width={120} 
            height={132} 
            className="rounded-[16px] object-cover"
          />
        ) : (
          <AvatarIcon />
        )}
      </div>
      <div className="flex h-full flex-col gap-2.5">
        <h3 className="flex items-center gap-2">
          <span className="text-[24px] leading-[100%] font-semibold">{fullName}</span>
          <div className="shrink-0">
            <VerifiedIcon />
          </div>
        </h3>
        <p className="text-[16px] leading-[100%] font-medium text-[#046D5F]">{primarySpecialization}</p>
        <p className="flex items-center gap-2 text-[16px] leading-[100%] font-semibold">
          <span className="text-[#046D5F]">Languages spoken:</span>
          <span>{languages}</span>
        </p>
        <div className="flex h-7 w-[59px] items-center justify-center gap-1 rounded-[8px] bg-[#FFF2E1]">
          <StarIcon />
          <span className="text-[12px] leading-[100%] font-semibold">{rating.toFixed(1)}</span>
        </div>
      </div>
    </section>
  )
}

export default HeadSection
