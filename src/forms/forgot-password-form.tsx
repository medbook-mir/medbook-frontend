'use client'

import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { FilledButton } from '@/components/ui/filled-button'
import DefaultInput from '@/components/ui/default-input'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { closeModal, openModal } from '@/redux/reducers/modals'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { getForgotPasswordModal } from '@/redux/selectors/modals'
import forgotPasswordSchema, { ForgotPasswordType } from '@/schema/forgot-password-schema'
import { useForgotPassword } from '@/hooks/useForgotPassword'
import Link from 'next/link'
import { LeftGreenArrowIcon } from '@/utils/icons/LeftGreenArrowIcon'

const ForgotPasswordForm = () => {
  const t = useTranslations('forgotPasswordPage')
  const isOpen = useAppSelector(getForgotPasswordModal)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { forgotPassword } = useForgotPassword()

  const { control, handleSubmit } = useForm<ForgotPasswordType>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<ForgotPasswordType> = (data) => {
    // 🔥 your hook expects JUST STRING: email
    forgotPassword.mutate(data.email)

    // Close modal after sending
    dispatch(closeModal('forgotPasswordModal'))
  }

  const handleLogin = () => {
    if (isOpen) {
      dispatch(closeModal('forgotPasswordModal'))
      dispatch(openModal('loginModal'))
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex flex-col gap-8">
  <div className="flex items-center">
    <LeftGreenArrowIcon />
    <button onClick={handleLogin} className="!text-[#046D5F]">
            {t('login')}
          </button>
  </div>
      <h3 className="text-[32px] leading-[100%] font-semibold">{t('formTitle')}</h3>
      <span className="text-[16px] leading-[100%]">{t('formDescription')}</span>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Form.Item
                label={t('email')}
                required
                validateStatus={error ? 'error' : ''}
                help={error?.message}
              >
                <DefaultInput
                  {...field}
                  autoComplete="email"
                  placeholder={t('emailPlaceholder')}
                />
              </Form.Item>
            )}
          />

          <div className="flex flex-col gap-8">
            <FilledButton
              className="!py-5"
              htmlType="submit"
              loading={forgotPassword.isPending}
            >
              {t('continue')}
            </FilledButton>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm
