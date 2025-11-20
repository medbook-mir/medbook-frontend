'use client'

import { images } from '@/assets'
import { Container } from '@/theme/container'
import { CheckIcon } from '@/utils/icons/CheckIcon'
import Image from 'next/image'
import { DoctorCardList } from './available-doctors'
import AnimatedInView from '@/components/shared/animated-in-view'

export const FindDoctor = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <div className="relative w-full px-0 py-[32px] md:px-[50px] md:py-[80px]">
        <div data-aos="fade-right" className="flex max-w-[645px] flex-col items-start justify-between gap-[26px]">
          <h1 className="text-center text-[32px] leading-[40px] font-bold text-[#0D0D0D] md:text-left md:text-[48px] md:leading-[60px]">
            Find the right doctor according to your complaint
          </h1>
          <p className="max-w-[530px] text-center text-[14px] leading-[20px] text-[#696969] md:text-left">
            HealthCare.ly is a free, health app that goes beyond matching you with doctors. It actively helps you find
            the right doctor based on your medical and personal needs and connects you with your HealthCarely community
            for ongoing support throughout your journey to healthier living.
          </p>
          <div>
            <div className="mb-[16px] flex items-center gap-[12px] text-[#121212]">
              <CheckIcon />
              <p className='font-bold'>100% free app designed to help you find the right doctor for you.</p>
            </div>
            <div className="flex items-center gap-[12px] text-[#121212]">
              <CheckIcon />
              <p className='font-bold'>Available 900 doctors specialist</p>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="mx-auto rounded-[10px] bg-[#046D5F] px-[36px] py-[16px] text-[16px] font-[500] text-white transition hover:bg-[#035a4f] md:mx-0"
          >
            Search the doctor
          </button>
        </div>
        <div className="absolute right-0 bottom-0 -mr-4 hidden h-full w-[50%] md:block">
          <div className="absolute top-[50px] left-[50px]">
            <DoctorCardList onFindDoctor={scrollToTop} />
          </div>
          <Image
            src={images.searchDoctor}
            alt="search doctor image"
            height={600}
            width={700}
            className="right-0 bottom-0 object-contain"
            priority
          />
        </div>
      </div>
    </Container>
  )
}