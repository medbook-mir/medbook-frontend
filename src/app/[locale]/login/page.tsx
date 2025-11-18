import { useTranslations } from 'next-intl'
import { MainLogoWhite } from '@/utils/icons/MainLogoWhite'
import LoginForm from '@/forms/login-form'
import { Link } from '@/i18n/navigation'
import { Container } from '@/theme/container'
import Image from 'next/image'
import imageInLogin_1 from "@/assets/images/imageInLogin_1.png"
import imageInLogin_2 from "@/assets/images/imageInLogin_2.png"

const Login = () => {
  const t = useTranslations('loginPage')
  return (
    <Container>
      <div className="flex h-screen items-center gap-20 py-6">
        <div className="hidden h-full flex-1 flex-col gap-[20px] rounded-4xl bg-[#046D5F] px-10 pt-[30px] lg:flex">
          <Link href="/">
            <MainLogoWhite width={210} height={60}/>
          </Link>
          <div className="flex flex-col gap-3">
            <h2 className="text-[36px] font-bold text-white leading-tight">{t('title')}</h2>
            <p className="text-[16px] font-medium text-white">{t('description')}</p>
          </div>
          <div className='relative'>
            <Image 
            src={imageInLogin_1}
            alt='Medical Professional'
            className='absolute top-0 left-0 w-[230px] lg:w-[280px] xl:w-[430px] z-10'/>
            <Image 
            src={imageInLogin_2}
            alt='Medical Illustration'
            className='absolute top-25 right-0 w-[230px] lg:w-[280px] xl:w-[430px] z-20'/>
          </div>
        </div>
        <div className="border-2 border-[#E9ECF4] rounded-4xl hidden h-7/8 flex-col gap-[20px] px-10 pt-[30px] lg:flex
        flex-1 sm:pr-20 sm:pl-12">
          <LoginForm />
        </div>
      </div>
    </Container>
  )
}

export default Login
