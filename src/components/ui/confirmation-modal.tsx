'use client'

import { useTranslations } from 'next-intl'
import Modal from './modal'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText: string
  cancelText: string
  confirmButtonClass?: string
  isLoading?: boolean
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText,
  cancelText,
  confirmButtonClass = 'bg-red-500 hover:bg-red-600 text-white',
  isLoading = false
}: ConfirmationModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      showCloseButton={false}
      className="max-w-sm"
    >
      <div className="flex gap-3 mt-6">
        <button
          onClick={onClose}
          disabled={isLoading}
          className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {cancelText}
        </button>
        <button
          onClick={onConfirm}
          disabled={isLoading}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${confirmButtonClass}`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            confirmText
          )}
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmationModal
