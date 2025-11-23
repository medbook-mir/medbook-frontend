'use client'

import { CustomBreadcrumb } from '@/components/ui/breadcrumb'
import { useWishlist } from '@/hooks/useWishlist'
import { useRouter } from 'next/navigation'
import { defaultWishlistDoctors } from './data'
import { DoctorCard } from '@/components/shared/doctor-card'
import { Container } from '@/theme/container'

const Wishlist = () => {
  const { wishlist, isLoading } = useWishlist()
  const router = useRouter()
  
  // Use default doctors if wishlist is empty
  const displayDoctors = wishlist.length > 0 ? wishlist : defaultWishlistDoctors
  
  const breadcrumbPages = [
    { title: 'Wishlist', href: '/wishlist' },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 max-w-[1200px]">
          <div className="mb-6">
            <CustomBreadcrumb pages={breadcrumbPages} />
          </div>
          <h1 className="text-[32px] font-bold text-[#1A1A1A] mb-8">
            Wishlist
          </h1>
          <div className="text-center py-16">
            <p className="text-[18px] text-[#666666]">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Container>
        {/* Breadcrumb */}
        <div className="mb-4 mt-6">
          <CustomBreadcrumb pages={breadcrumbPages} />
        </div>

        {/* Page Title */}
        <h1 className="text-[32px] font-bold text-[#1A1A1A] mb-8">
          Wishlist
        </h1>


        {/* Wishlist Content */}
        <div>
          {displayDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} router={router} />
          ))}
        </div>
      </Container>
  )
}

export default Wishlist
