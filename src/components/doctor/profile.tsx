import { AddressIcon, EmailIcon, ExperienceIcon, PhoneIcon, WebsiteIcon, SocialIcon } from '@/utils/icons/doctor-icons'
import { DoctorType, DoctorSchedule, DoctorEducation } from '@/types/doctor-type'

interface ProfileProps {
  doctor: DoctorType
}

const InfoBlock = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div className="flex flex-col gap-1">
        <h4 className="text-[16px] leading-[160%] font-medium">{value}</h4>
        <p className="text-[14px] leading-[20px] text-[#515B6F]">{title}</p>
      </div>
    </div>
  )
}

const Profile = ({ doctor }: ProfileProps) => {
  const fullName = `${doctor.user.first_name} ${doctor.user.last_name}${doctor.user.middle_name ? ` ${doctor.user.middle_name}` : ''}`
  const location = doctor.location ? `${doctor.location.city}, ${doctor.location.country}` : 'Location not specified'
  const experience = doctor.user.experience_years ? `${doctor.user.experience_years} Years` : 'Experience not specified'

  const info = [
    {
      icon: <EmailIcon />,
      title: 'Mail address',
      value: doctor.user.email
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone number',
      value: doctor.user.phone_number
    },
    {
      icon: <AddressIcon />,
      title: 'Country',
      value: location
    },
    {
      icon: <ExperienceIcon />,
      title: 'Years of experience',
      value: experience
    }
  ]

  return (
    <section className="border-b border-[#EBEBEB] pb-8">
      <h2 className="mb-4 text-[20px] leading-[100%] font-semibold">Profile</h2>
      <p className="text-[16px] leading-[160%] text-[#515B6F]">
        {doctor.user.bio || 'No bio available for this doctor.'}
      </p>
      <div className="grid grid-cols-1 gap-6 pt-6 sm:grid-cols-2">
        {info.map((data, index) => (
          <InfoBlock key={index} icon={data.icon} title={data.title} value={data.value} />
        ))}
      </div>
    </section>
  )
}

export default Profile
