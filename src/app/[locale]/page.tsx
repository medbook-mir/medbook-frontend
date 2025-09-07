import HeroSection from '@/components/home/hero'
import HomeBlog from '@/components/home/home-blog'
import MobileApps from '@/components/home/mobile-apps'
import ScheduleInAdvance from '@/components/home/schedule-in-advance'
import { SolutionsSection } from '@/components/home/solutions'
import TestimonialsSection from '@/components/home/testimonials-section'
import ResultNumbers from '@/components/home/result-numbers'
import { FindDoctor } from '@/components/home/find-doctor'
import FAQSection from '@/components/home/faq-section'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <FindDoctor />
      <ResultNumbers />
      <ScheduleInAdvance />
      <HomeBlog />
      <TestimonialsSection />
      <FAQSection />
      <MobileApps />
    </>
  )
}

export default Home
