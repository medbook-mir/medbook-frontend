'use client'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { CustomBreadcrumb } from '@/components/ui/breadcrumb'
import { Container } from '@/theme/container'
import { FilledButton } from '@/components/ui/filled-button'
import DefaultInput from '@/components/ui/default-input'
import { Input} from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { createContactSchema } from '@/schema/contact-schema'
import { log } from 'console'
import { useCustomNotification } from '@/hooks/useNotification'

const { TextArea } = Input

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactUsPage() {
  const t = useTranslations('contactPage')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { openNotification } = useCustomNotification();
  
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = async (): Promise<boolean> => {
    try {
      const contactSchema = createContactSchema(t)
      await contactSchema.validate(formData, { abortEarly: false })
      setErrors({})
      return true
    } catch (error: any) {
      const validationErrors: Partial<FormData> = {}
      error.inner.forEach((err: any) => {
        // The err.message already contains the translated text from the schema
        validationErrors[err.path as keyof FormData] = err.message
      })
      setErrors(validationErrors)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const isValid = await validateForm()
    if (!isValid) {
      openNotification('error', t('form.notifications.fixErrors'), '')
      return
    }

    setIsSubmitting(true)
    
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      openNotification('success', t('form.notifications.success'), '')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      openNotification('error', t('form.notifications.error'), '')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Container>
        <div className="py-8 ">
          <CustomBreadcrumb
            pages={[
              {
                title: t('title'),
                href: '/contact-us'
              }
            ]}
          />
        </div>

        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Section */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-[#046D5F] mb-4">
                  {t('title')}
                </h1>
                <p className="text-[#696969] text-lg">
                  {t('description')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t('form.name')}
                  </label>
                  <DefaultInput
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder={t('form.namePlaceholder')}
                    className="w-full"
                    status={errors.name ? 'error' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t('form.email')}
                  </label>
                  <DefaultInput
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full"
                    status={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t('form.subject')}
                  </label>
                  <DefaultInput
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder={t('form.subjectPlaceholder')}
                    className="w-full"
                    status={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0D0D0D] mb-2">
                    {t('form.message')}
                  </label>
                  <TextArea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder={t('form.messagePlaceholder')}
                    className={`w-full bg-[#f7f7f7] border-none rounded-md px-4 py-3 text-[#0d0d0d] placeholder:text-[#696969] focus:outline-none focus:ring-2 focus:ring-[#046d5f] ${
                      errors.message ? 'ring-2 ring-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <FilledButton
                    htmlType="submit"
                    className="px-12 !py-5 text-base font-medium !rounded-[20px]"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('form.sending') : t('form.sendButton')}
                  </FilledButton>
                </div>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#046d5f] rounded-lg flex items-center justify-center">
                    <EnvironmentOutlined className="!text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D0D0D] mb-2">
                      {t('contactInfo.address.title')}
                    </h3>
                    <p className="text-[#696969] leading-relaxed">
                      {t('contactInfo.address.value')}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#046d5f] rounded-lg flex items-center justify-center">
                    <MailOutlined className="!text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D0D0D] mb-2">
                      {t('contactInfo.email.title')}
                    </h3>
                    <p className="text-[#696969]">
                      {t('contactInfo.email.value')}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#046d5f] rounded-lg flex items-center justify-center">
                    <PhoneOutlined className="!text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0D0D0D] mb-2">
                      {t('contactInfo.phone.title')}
                    </h3>
                    <p className="text-[#696969]">
                      {t('contactInfo.phone.value')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
