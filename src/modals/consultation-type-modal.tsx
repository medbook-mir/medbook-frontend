'use client'

import React, { useState } from 'react'
import { Modal, Radio, type RadioChangeEvent } from 'antd'
import { useTranslations } from 'next-intl'
import { FilledButton } from '@/components/ui/filled-button'

interface ConsultationTypeModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (consultationType: 'online' | 'in-person') => void
  doctorName?: string
  appointmentDate?: string
  appointmentTime?: string
}

type ConsultationType = 'online' | 'in-person'

const ConsultationTypeModal: React.FC<ConsultationTypeModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  doctorName,
  appointmentDate,
  appointmentTime
}) => {
  const t = useTranslations('consultationModal')
  const [selectedType, setSelectedType] = useState<ConsultationType>('in-person')

  const handleRadioChange = (e: RadioChangeEvent) => {
    setSelectedType(e.target.value)
  }

  const handleConfirm = () => {
    onConfirm(selectedType)
    onClose()
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={480}
      className="consultation-type-modal"
      styles={{
        body: { padding: '24px' },
        content: { borderRadius: '12px' }
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-[24px] font-semibold text-black mb-2">
          {t('title')}
        </h2>
        <p className="text-[14px] text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      {/* Radio Group */}
      <div className="mb-6">
        <Radio.Group 
          onChange={handleRadioChange} 
          value={selectedType}
          className="w-full"
        >
          <div className="space-y-3">
            <Radio value="online" className="w-full">
              <div className="ml-2">
                <div className="font-medium text-black">{t('onlineConsultation')}</div>
                <div className="text-[13px] text-gray-600 mt-1">
                  {t('onlineDescription')}
                </div>
              </div>
            </Radio>
            
            <Radio value="in-person" className="w-full">
              <div className="ml-2 mt-5">
                <div className="font-medium text-black">{t('inPersonConsultation')}</div>
                <div className="text-[13px] text-gray-600 mt-1">
                  {t('inPersonDescription')}
                </div>
              </div>
            </Radio>
          </div>
        </Radio.Group>
      </div>

      {/* Confirm Button */}
      <FilledButton 
        onClick={handleConfirm}
        className="w-full h-12 rounded-[6px]"
      >
        {t('confirm')}
      </FilledButton>
    </Modal>
  )
}

export default ConsultationTypeModal
