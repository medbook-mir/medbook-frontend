import { DoctorExperience } from '@/types/doctor-type'

interface JobExperienceProps {
  experience?: DoctorExperience[]
}

const JobExperience = ({ experience = [] }: JobExperienceProps) => {
  const Dot = () => <span className="h-1 w-1 rounded-full bg-[#A8ADB7]" />

  if (!experience || experience.length === 0) {
    return (
      <section className="border-b border-[#EBEBEB] pb-8">
        <h2 className="text-[20px] leading-[100%] font-semibold">Job experience</h2>
        <div className="pt-4">
          <p className="text-[#515B6F]">No work experience information available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-[#EBEBEB] pb-8">
      <h2 className="text-[20px] leading-[100%] font-semibold">Job experience</h2>
      <div className="pt-4 space-y-6">
        {experience.map((exp) => {
          const startDate = new Date(exp.start_date).toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
          })
          const endDate = exp.end_date 
            ? new Date(exp.end_date).toLocaleDateString('en-US', { 
                month: 'short', 
                year: 'numeric' 
              })
            : 'Present'

          return (
            <div key={exp.id} className="pb-3">
              <div className="flex flex-col gap-1.5 text-[16px] leading-[160%] font-normal text-[#515B6F]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium text-[#25324B]">{exp.hospital}</span>
                  <Dot />
                  <span className="">{exp.position}</span>
                  <Dot />
                  <span>{startDate}</span> - <span>{endDate}</span>
                </div>
                {exp.description && (
                  <p className="text-[16px] leading-[160%] text-[#515B6F] mt-2">{exp.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default JobExperience
