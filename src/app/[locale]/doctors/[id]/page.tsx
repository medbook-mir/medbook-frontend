'use client'

import React from 'react'
import { Container } from '@/theme/container'
import { CustomBreadcrumb } from '@/components/ui/breadcrumb'
import HeadSection from '@/components/doctor/head-section'
import DoctorTabs from '@/components/doctor/doctor-tabs'
import ImportantThings from '@/components/doctor/important-things'
import Location from '@/components/doctor/location'
import { useCompleteDoctorData } from '@/hooks/useDoctor'
import { Skeleton } from 'antd'

const DoctorsProfile = ({ params }: { params: Promise<{ id: string }> }) => {
  const [doctorId, setDoctorId] = React.useState<string>('')
  
  React.useEffect(() => {
    params.then(({ id }) => setDoctorId(id))
  }, [params])

  const { data: doctor, isLoading, error } = useCompleteDoctorData(doctorId)

  if (isLoading) {
    return (
      <div className="pt-[33px]">
        <Container>
          <Skeleton active paragraph={{ rows: 4 }} />
          <Skeleton active paragraph={{ rows: 6 }} />
        </Container>
      </div>
    )
  }

  if (error || !doctor) {
    return (
      <div className="pt-[33px]">
        <Container>
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold text-red-600">Error loading doctor data</h2>
            <p className="text-gray-600 mt-2">Please try again later</p>
            {error && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700">
                  Error: {error.message || 'Unknown error occurred'}
                </p>
                <p className="text-xs text-red-600 mt-1">
                  Doctor ID: {doctorId}
                </p>
              </div>
            )}
          </div>
        </Container>
      </div>
    )
  }
  
  return (
    <div className="pt-[33px]">
      <Container>
        <CustomBreadcrumb pages={[{ title: "Doctor's profile", href: `/doctors/${doctorId}/` }]} />
        <HeadSection doctor={doctor} />
        <DoctorTabs doctor={doctor} />
        <div className="flex flex-col gap-14 pt-[22px] pb-2.5 md:flex-row md:justify-between">
          <div className="flex flex-1 flex-col gap-8 py-2.5">
            <ImportantThings doctor={doctor} />
            <Location location={doctor.location} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DoctorsProfile
