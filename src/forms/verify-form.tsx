'use client'

import { useRef, useState, KeyboardEvent } from 'react'
import { Form } from 'antd'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { FilledButton } from '@/components/ui/filled-button'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { closeModal, openModal } from '@/redux/reducers/modals'
import { getVerifyModal } from '@/redux/selectors/modals'
import { useVerify } from '@/hooks/useVerify'

const VerifyForm = () => {
  const t = useTranslations('verifyPage')
  const isVerifyModalOpen = useAppSelector(getVerifyModal)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { verify } = useVerify()

  const [code, setCode] = useState(['', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Get email from localStorage or use placeholder
  const userEmail = typeof window !== 'undefined' ? localStorage.getItem('userEmail') || 'example@gmail.com' : 'example@gmail.com'

  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1)
    }

    const newCode = [...code]
    newCode[index] = value

    setCode(newCode)

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 4)
    const newCode = pastedData.split('').slice(0, 4)
    
    const updatedCode = [...code]
    newCode.forEach((char, index) => {
      if (index < 4) {
        updatedCode[index] = char
      }
    })
    
    setCode(updatedCode)
    
    // Focus last filled input or next empty
    const nextIndex = Math.min(newCode.length, 3)
    inputRefs.current[nextIndex]?.focus()
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const email_code = code.join('')
    
    if (email_code.length === 4) {
      verify.mutate({ email_code })
      dispatch(closeModal('verifyModal'))
    }
  }

  const handleResendCode = () => {
    // Implement resend code logic
    console.log('Resending code...')
  }

  const handleLogin = () => {
    if (isVerifyModalOpen) {
      dispatch(closeModal('verifyModal'))
      dispatch(openModal('loginModal'))
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-[32px] font-semibold text-[#0D0D0D]">{t('formTitle')}</h3>
        <p className="text-[14px] text-[#696969]">
          {t(`formDescription`)}<span className="font-semibold text-[#0D0D0D]">{userEmail}</span>.
        </p>
      </div>

      <Form onFinish={onSubmit}>
        <div className="flex flex-col gap-4">
          {/* 4-digit code inputs */}
          <div className="flex gap-3 justify-center">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={code[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-[60px] h-[60px] text-center text-[24px] font-semibold border-2 border-[#E5E5E5] rounded-lg focus:border-[#046D5F] focus:outline-none transition-colors"
              />
            ))}
          </div>

          {/* Resend code text */}
          <div className="text-center text-[14px] text-[#696969]">
            {t(`resendQuestion`)}{'  '}
            <button
              type="button"
              onClick={handleResendCode}
              className="text-[#046D5F] font-semibold hover:underline"
            >
              {'  '}{t(`resendCode`)}
            </button>
          </div>

          {/* Confirm button */}
          <FilledButton 
            className="!py-3 mt-2" 
            htmlType="submit" 
            loading={verify.isPending}
            disabled={code.join('').length !== 4}
          >
            {t(`confirm`)}
          </FilledButton>
        </div>
      </Form>

      
    </div>
  )
}

export default VerifyForm
