'use client'

import Image from 'next/image'
import { CameraIcon, ProfileAvatarIcon } from '@/utils/icons'
import { FilledButton } from '@/components/ui/filled-button'
import { Form, message, Upload } from 'antd'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import DefaultInput from '@/components/ui/default-input'
import { useTranslations } from 'next-intl'
import { yupResolver } from '@hookform/resolvers/yup'
import myDataSchema, { MyDataType } from '@/schema/mydata-schema'
import { useRouter } from '@/i18n/navigation'
import { useState } from 'react'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import DatepickerInput from '@/components/ui/date-picker'
import dayjs from 'dayjs'

const mockMyData = {
  firstName: 'Shohrux',
  lastName: 'Rahmatov',
  birthday: '27/08/2000',
  email: 'shohrux.rahmatov@gmail.com',
  phone: '+99890 002 6655',
  photo: ''
}

const MyDataEditing = () => {
  const router = useRouter()
  const t = useTranslations('settingsLayout.myDataEditingPage')
  const { control, handleSubmit } = useForm<MyDataType>({
    resolver: yupResolver(myDataSchema),
    defaultValues: {
      firstName: mockMyData.firstName,
      lastName: mockMyData.lastName,
      birthday: mockMyData.birthday,
      email: mockMyData.email,
      phone: mockMyData.phone,
      photo: mockMyData.photo
    },
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<MyDataType> = (data) => {
    console.log(data)
    router.back()
  }

  const [imageUrl, setImageUrl] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })

  const beforeUpload = (file: RcFile) => {
    const isImage = file.type.startsWith('image/')
    if (!isImage) {
      message.error('You can only upload image files!')
    }
    const isLt10M = file.size / 1024 / 1024 < 10
    if (!isLt10M) {
      message.error('Image must be smaller than 10MB!')
    }
    return isImage && isLt10M
  }

  const handleChange = async (info: UploadChangeParam) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      const base64 = await getBase64(info.file.originFileObj as RcFile)
      setImageUrl(base64)
      setLoading(false)
      message.success('Avatar updated!')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <div className="p-6 md:p-8">
          {/* Profile Header Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            {/* Circular Profile Picture */}
            <Upload
              name="avatar"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess && onSuccess('ok'), 500)}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              <button
                type="button"
                aria-label="Change profile picture"
                className="relative cursor-pointer group"
                disabled={loading}
              >
                {imageUrl || mockMyData?.photo ? (
                  <Image
                    src={imageUrl || mockMyData?.photo}
                    alt="profile photo"
                    width={80}
                    height={80}
                    className="!h-20 !w-20 rounded-full object-cover border-2 border-gray-200"
                  />
                ) : (
                  <div className="h-20 w-20 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center">
                    <ProfileAvatarIcon />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {loading ? (
                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  ) : (
                    <CameraIcon />
                  )}
                </div>
              </button>
            </Upload>

            {/* User Info */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-900">
                {mockMyData?.firstName} {mockMyData?.lastName}
              </h1>
              <p className="text-sm text-gray-500">{mockMyData?.email}</p>
            </div>
          </div>

          {/* Horizontal Separator */}
          <div className="border-t border-gray-200 mb-6"></div>

          {/* Form Fields - Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Controller
              name="firstName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Form.Item 
                  label={t('firstName')} 
                  required 
                  validateStatus={error ? 'error' : ''} 
                  help={error?.message}
                  className="mb-4"
                >
                  <DefaultInput 
                    {...field} 
                    autoComplete="given-name" 
                    placeholder={t('firstNamePlaceholder')} 
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Form.Item 
                  label={t('lastName')} 
                  required 
                  validateStatus={error ? 'error' : ''} 
                  help={error?.message}
                  className="mb-4"
                >
                  <DefaultInput 
                    {...field} 
                    autoComplete="family-name" 
                    placeholder={t('lastNamePlaceholder')} 
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Form.Item 
                  label={t('phone')} 
                  required 
                  validateStatus={error ? 'error' : ''} 
                  help={error?.message}
                  className="mb-4"
                >
                  <DefaultInput 
                    {...field} 
                    autoComplete="tel" 
                    placeholder={t('phonePlaceholder')} 
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="birthday"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Form.Item 
                  label={t('birthday')} 
                  required 
                  validateStatus={error ? 'error' : ''} 
                  help={error?.message}
                  className="mb-4"
                >
                  <DatepickerInput
                    placeholder={t('birthdayPlaceholder')}
                    className="w-full"
                    format="DD/MM/YYYY"
                    value={field.value ? dayjs(field.value, 'DD/MM/YYYY') : null}
                    onChange={(date) => field.onChange(date?.format('DD/MM/YYYY'))}
                    status={error ? 'error' : ''}
                    required
                  />
                </Form.Item>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Form.Item 
                  label={t('email')} 
                  required 
                  validateStatus={error ? 'error' : ''} 
                  help={error?.message}
                  className="mb-4"
                >
                  <DefaultInput 
                    {...field} 
                    autoComplete="email" 
                    placeholder={t('emailPlaceholder')} 
                  />
                </Form.Item>
              )}
            />
            
            
          </div>

          {/* Buttons - Bottom Right */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-end">
            <FilledButton
              className="!w-full sm:!w-auto !bg-[#F4F6F9] !text-black hover:!bg-[#E9ECF4] !px-6 !py-3 !rounded-md !font-normal !text-sm !h-12"
              onClick={() => router.back()}
            >
              {t('cancel')}
            </FilledButton>
            <FilledButton
              htmlType="submit"
              className="!w-full sm:!w-auto !bg-[#046d5f] hover:!bg-[#035a4d] !text-white !px-6 !py-3 !rounded-md !font-normal !text-sm !h-12"
            >
              {t('save')}
            </FilledButton>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default MyDataEditing
