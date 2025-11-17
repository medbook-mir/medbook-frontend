'use client'

import { useState } from 'react'
import Image from 'next/image'
import { images } from '@/assets'
import { LocationIcon } from '@/utils/icons/LocationIcon'
import { SearchIcon } from '@/utils/icons/SearchIcon'
import DoctorSearchResult from './search-result'
import { Container } from '@/theme/container'
import { CurrentLocationIcon } from '@/utils/icons/CurrentLocationIcon'

export default function HeroSection() {
  const [searchResult, setSearchResult] = useState('')
  const [location, setLocation] = useState('')
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)

  const handleGetCurrentLocation = async () => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser')
      return
    }

    setIsLoadingLocation(true)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          
          // Use reverse geocoding to get address from coordinates
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
          
          if (!response.ok) {
            throw new Error('Failed to fetch address')
          }

          const data = await response.json()
          const address = data.display_name || `${latitude}, ${longitude}`
          
          setLocation(address)
          setIsLoadingLocation(false)
        } catch (error) {
          console.error('Error fetching address:', error)
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
          setIsLoadingLocation(false)
        }
      },
      (error) => {
        setIsLoadingLocation(false)
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert('Location permission denied. Please enable location access in your browser settings.')
            break
          case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.')
            break
          case error.TIMEOUT:
            alert('Location request timed out.')
            break
          default:
            alert('An unknown error occurred while fetching location.')
        }
      }
    )
  }

  return (
    <section className="rounded-b-[35px] bg-gradient-to-b via-[#046D5F] from-[#093637] to-[#44A08D] pt-[180px] pb-[52px]">
      <Container>
        <div className="relative flex-col-reverse items-center justify-between gap-10 text-white lg:flex-row">
          <div className="relative">
            <h1 className="mb-6 w-full text-center text-[32px] leading-[120%] font-bold md:w-[550px] md:text-left md:text-[56px]">
              Better Health Starts with a Click
            </h1>
            <p className="mb-[28px] w-full text-center text-[24px] leading-[34px] text-white md:mb-[100px] md:w-[550px] md:text-left">
              Find Trusted Doctors. Book Appointments. Manage Your Health — All in One Place.
            </p>

            <div className="flex h-[56px] w-full max-w-[500px] items-center justify-between overflow-hidden rounded-[16px] bg-white px-[4px] shadow-md sm:max-w-[100%] md:max-w-[500px] xl:max-w-[790px]">
              <div className="flex items-center flex-1">
                <div className="flex items-center gap-[14px] px-4 text-gray-500">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-3 text-black placeholder-[#6E6E6E] outline-none"
                    onChange={(e) => setSearchResult(e.target.value)}
                    value={searchResult}
                  />
                </div>
                <div className="h-[38px] border-l border-[#046D5F]"></div>
                <div className="flex items-center gap-[14px] px-4 text-gray-500 flex-1">
                  <LocationIcon />
                  <input
                    type="text"
                    placeholder={isLoadingLocation ? "Getting location..." : "Location"}
                    className="w-full py-3 text-black placeholder-[#6E6E6E] outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    disabled={isLoadingLocation}
                  />
                </div>
              </div>
              <div className='flex'>
                <button 
                  className='pl-4 pr-4 rounded-full transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
                  onClick={handleGetCurrentLocation}
                  disabled={isLoadingLocation}
                  title="Get current location"
                >
                  <CurrentLocationIcon />
                </button>
                <button className="h-[48px] cursor-pointer rounded-[16px] bg-[#046D5F] px-[28px] text-[22px] font-semibold tracking-[3%] text-white transition-all hover:bg-teal-600">
                  Search
                </button>
              </div>
              
            </div>
            {searchResult && (
              <div className="absolute z-[999] mt-1 w-full max-w-[790px] rounded-[16px] bg-white text-gray-500 shadow-[0px_10px_40px_0px_#12121226]">
                <DoctorSearchResult searchDoctor={searchResult} />
              </div>
            )}
          </div>

          <div className="hidden flex-shrink-0 md:block">
            <Image
              src={images.heroImg}
              alt="Hero Image"
              className="absolute right-0 bottom-[-52px] h-[550px] w-[450px] rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
