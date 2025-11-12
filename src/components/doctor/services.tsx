import { DoctorService } from '@/types/doctor-type'

interface ServicesProps {
  services?: DoctorService[]
}

const Services = ({ services = [] }: ServicesProps) => {

  if (!services || services.length === 0) {
    return (
      <section className="border-b border-[#EBEBEB] pb-8">
        <h2 className="text-[20px] leading-[100%] font-semibold">Range of services and symptoms treated</h2>
        <div className="pt-6">
          <p className="text-[#515B6F] text-[16px]">No services available</p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-[#EBEBEB] pb-8">
      <h2 className="text-[20px] leading-[100%] font-semibold">Range of services and symptoms treated</h2>
      <div className="flex flex-wrap gap-3 pt-6">
        {services.map((service) => (
          <div key={service.id} className="rounded-full bg-[#E7F0FA] px-4 py-1 text-[16px] leading-[160%] text-[#515B6F]">
            {service.name}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Services
