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
import { getResetPasswordModal } from '@/redux/selectors/modals'
import resetPasswordSchema, { ResetPasswordType } from '@/schema/reset-password-schema'
import { useResetPassword } from '@/hooks/useResetPassword'
import { LeftGreenArrowIcon } from '@/utils/icons/LeftGreenArrowIcon'
import { useState } from 'react'
import { EyeIcon } from 'lucide-react'
import { EyeOffIcon } from 'lucide-react'

const ResetPasswordForm = () => {
  const t = useTranslations('resetPasswordPage')
  const [showPassword, setShowPassword] = useState(false)
const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const isOpen = useAppSelector(getResetPasswordModal)
  const { resetPassword } = useResetPassword()

  const { control, handleSubmit, watch } = useForm<ResetPasswordType>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
      code: '' // code/token from email
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
    resetPassword.mutate(data, {
      onSuccess: () => {
        dispatch(closeModal('resetPasswordModal'))
        router.push('/login') // redirect to login after successful reset
      }
    })
  }

  const handleBack = () => {
    if (isOpen) {
      dispatch(closeModal('resetPasswordModal'))
      dispatch(openModal('loginModal'))
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <LeftGreenArrowIcon />
        <button onClick={handleBack} className="!text-[#046D5F] text-sm">
          {t('backToLogin')}
        </button>
      </div>

      <h3 className="text-[32px] font-semibold">{t('formTitle')}</h3>
      <span className="text-[16px]">{t('formDescription')}</span>

      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4">
          {/* Password */}
          {/* Password */}
<Controller
  name="password"
  control={control}
  render={({ field, fieldState: { error } }) => (
    <Form.Item
      label={t('newPassword')}
      required
      validateStatus={error ? 'error' : ''}
      help={error?.message}
    >
      <div className="relative">
        <DefaultInput
          {...field}
          type={showPassword ? 'text' : 'password'}
          placeholder={t('newPasswordPlaceholder')}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </Form.Item>
  )}
/>

{/* Confirm Password */}
<Controller
  name="confirmPassword"
  control={control}
  render={({ field, fieldState: { error } }) => (
    <Form.Item
      label={t('confirmPassword')}
      required
      validateStatus={error ? 'error' : ''}
      help={error?.message}
    >
      <div className="relative">
        <DefaultInput
          {...field}
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder={t('confirmPasswordPlaceholder')}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-gray-500 hover:text-gray-700"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
    </Form.Item>
  )}
/>

          {/* Submit Button */}
          <FilledButton
            className="!py-5 mt-2"
            htmlType="submit"
            loading={resetPassword.isPending}
          >
            {t('resetPassword')}
          </FilledButton>
        </div>
      </Form>
    </div>
  )
}

export default ResetPasswordForm
