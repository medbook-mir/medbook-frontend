import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '@/theme/container'
import { testimonialsData } from './data'
import MarqueeCarousel from '@/components/shared/marquee-carousel'


const TestimonialsSection = () => {
  const t = useTranslations('homePage.testimonialsSection')

  return (
    <section className="py-[100px] bg-[#F7F7F7]">
      <Container>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mx-auto mb-[60px] flex max-w-[750px] flex-col gap-4 text-center">
          <h1 className="text-[46px] leading-[100%] font-bold text-[#0D0D0D]">{t('title')}</h1>
          <p className="text-[20px] leading-7 font-normal text-[#565656]">{t('description')}</p>
        </div>
        
        <MarqueeCarousel items={testimonialsData} speed={15} visibleCards={3.5} />
      </div>
      </Container>
    </section>
  )
}
export default TestimonialsSection
