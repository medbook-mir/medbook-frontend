
import { MainLogoWhite } from '@/utils/icons/MainLogoWhite'
import { Link } from '@/i18n/navigation'
import { Container } from '@/theme/container'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import imageInLogin_1 from "@/assets/images/imageInLogin_1.png"
import imageInLogin_2 from "@/assets/images/imageInLogin_2.png"
import ForgotPasswordForm from '@/forms/forgot-password-form'


const ForgotPassword = () => {
  const t = useTranslations('forgotPasswordPage')

  return (
    <Container>
      <div className="flex h-screen items-center gap-20 py-6">
        <div className="hidden h-full flex-1 flex-col gap-[20px] rounded-4xl bg-[#046D5F] px-10 pt-[30px] lg:flex">
          <Link href="/">
            <MainLogoWhite width={210} height={60} />
          </Link>
          <div className="flex flex-col gap-3">
            <h2 className="text-[36px] font-bold text-white leading-tight">{t('title')}</h2>
            <p className="text-[16px] font-medium text-white">{t('description')}</p>
          </div>
          <div className='relative'>
            <Image src={imageInLogin_1}
            alt='Medical Professional'
            className='absolute top-0 left-0 w-[230px] lg:w-[280px] xl:w-[430px] z-10'/>
            <Image src={imageInLogin_2}
            alt='Medical Illustration'
            className='absolute top-25 right-0 w-[230px] lg:w-[280px] xl:w-[430px] h-auto object-contain z-20'/>
          </div>
        </div>
        <div className="border-2 items-center justify-center border-[#E9ECF4] rounded-4xl hidden h-1/2 flex-1 flex-col gap-[20px] pt-[20px] pb-[20px] lg:flex
        px-6 sm:pr-20 sm:pl-12">
          <ForgotPasswordForm />
        </div>
      </div>
    </Container>
  )
}

export default ForgotPassword
