'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  showCloseButton?: boolean
  className?: string
}

const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  showCloseButton = true,
  className = ''
}: ModalProps) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}>
        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-gray-600 mb-6">
              {description}
            </p>
          )}

          {/* Custom content */}
          {children}
        </div>
      </div>
    </div>
  )

  // Render modal in portal to avoid z-index issues
  return typeof window !== 'undefined' 
    ? createPortal(modalContent, document.body)
    : null
}

export default Modal
