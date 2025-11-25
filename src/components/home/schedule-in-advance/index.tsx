import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Container } from '@/theme/container'
import { images } from '@/assets'

const DoctorPromoSection = () => {
  const t = useTranslations('homePage.doctorPromo')

  return (
    <section className="py-4 lg:py-24 bg-white ">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 min-h-[500px] lg:min-h-[550px]">
          {/* Left Side - Doctor with Laptop */}
          <div className="relative lg:h-[500px] lg:w-[1080px]">
            <Image
              src={images.portraitDoctor}
              alt="Confident male doctor in uniform"

              className="object-center object-contain lg:ml-[-150px] lg:mt-[-120px]"
              priority
            />
          </div>
          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2 lg:pl-8 md:text-center ">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-[1.1]">
                {t('title')}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-[1.1]">
                {t('subtitle')}
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl w-full md:mx-auto">
              {t('description')}
            </p>

            {/* CTA Button */}
            
              <div>
  <button
  className="
    w-full
    h-[56px]
    bg-[#046D5F]
    hover:bg-[#3a8a7a]
    text-white
    font-medium
    rounded-lg
    text-base sm:text-lg
    shadow-md
    hover:shadow-lg
    transform
    hover:scale-105
    transition-all
    duration-300
    cursor-pointer
    px-6 sm:px-8
    flex items-center justify-center
  "
>
  {t('ctaButton')}
</button>
</div>

            
            {/* Trust Statement and Partner Logos */}
            <div className="pt-4 lg:pt-6">
              <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 font-medium text-center">
                {t('trustStatement')}
              </p>

              {/* Partner Logos */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8">
                {/* Partner 1 - AKFA MEDLINE */}
                <div className="w-[100px]  h-auto">
                  <Image
                    src={images.image198}
                    alt="AKFA MEDLINE"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Partner 2 - HAYAT Medical Centre */}
                <div className="w-[100px] h-auto">
                  <Image
                    src={images.image203}
                    alt="HAYAT Medical Centre"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Partner 3 - DARMON SERVIS */}
                <div className="w-[100px]  h-auto">
                  <Image
                    src={images.image204}
                    alt="DARMON SERVIS"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Partner 4 - Hi Tech Lab */}
                <div className="w-[100px] h-auto">
                  <Image
                    src={images.image205}
                    alt="Hi Tech Lab Diagnostic Centre"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DoctorPromoSection