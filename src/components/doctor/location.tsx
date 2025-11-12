import YandexMap from '@/components/shared/yandex-map'
import { DoctorLocation } from '@/types/doctor-type'

interface LocationProps {
  location?: DoctorLocation
}

const Location = ({ location }: LocationProps) => {
  if (!location) {
    return (
      <section className="rounded-[12px] bg-[#F2F7F6] p-5">
        <h3 className="mb-4 text-[16px] leading-[100%] font-bold">Map</h3>
        <div className="flex items-center justify-center h-[200px] text-[#515B6F]">
          No location information available
        </div>
      </section>
    )
  }

  const mapLocation = {
    id: location.id,
    name: location.address,
    latitude: location.latitude || 41.3118066546201, // Default to Tashkent coordinates
    longitude: location.longitude || 69.25474741848696
  }

  return (
    <section className="rounded-[12px] bg-[#F2F7F6] p-5">
      <h3 className="mb-4 text-[16px] leading-[100%] font-bold">Map</h3>
      <div className="mb-4">
        <p className="text-[14px] text-[#515B6F] mb-1">
          <strong>Address:</strong> {location.address}
        </p>
        <p className="text-[14px] text-[#515B6F] mb-1">
          <strong>City:</strong> {location.city}, {location.country}
        </p>
        {location.phone && (
          <p className="text-[14px] text-[#515B6F] mb-1">
            <strong>Phone:</strong> {location.phone}
          </p>
        )}
        {location.email && (
          <p className="text-[14px] text-[#515B6F]">
            <strong>Email:</strong> {location.email}
          </p>
        )}
      </div>
      <YandexMap locations={[mapLocation]} width="310px" height="400px" />
    </section>
  )
}
export default Location
