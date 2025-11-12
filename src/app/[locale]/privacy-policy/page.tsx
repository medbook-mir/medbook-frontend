'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Container } from '@/theme/container'
import { CustomBreadcrumb } from '@/components/ui/breadcrumb'
import { FilledButton } from '@/components/ui/filled-button'
import { Checkbox } from 'antd'

const PrivacyPolicy = () => {
  const t = useTranslations('privacyPolicy')
  const [isAccepted, setIsAccepted] = useState(false)

  const handleAccept = () => {
    if (isAccepted) {
      // Handle acceptance logic here
      console.log('Privacy policy accepted')
      // You can redirect or close modal here
    }
  }

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Privacy policy cancelled')
    // You can redirect back or close modal here
  }

  const breadcrumbPages = [
    { title: t('breadcrumb'), href: '/privacy-policy' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Container>
        {/* Breadcrumb */}
        <div className="py-4">
          <CustomBreadcrumb pages={breadcrumbPages} />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl py-8">
          <div className="bg-white p-8">
            {/* Title Section */}
            <div className="mb-8 ">
              <h1 className="mb-2 text-4xl font-bold text-[#046d5f]">{t('title')}</h1>
              <p className="text-lg text-gray-600 font-bold">{t('subtitle')}</p>
              <p className="mt-4 text-sm text-gray-500">{t('lastRevised')}</p>
            </div>

            {/* Content */}
            <div className="max-h-96 overflow-y-auto pr-4 custom-scrollbar">
              <div className="prose prose-sm max-w-none text-gray-700">
                <div className="mb-6">
                  <p className="mb-4">
                    {t('introduction')}
                  </p>
                </div>

                <div className="space-y-4">
                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.agreement.title')}</h2>
                  <p className="mb-4 text-gray-00">
                    {t('sections.agreement.content')}
                  </p>
                  <div className="rounded-lg bg-yellow-50 p-4">
                    <p className="text-sm font-light text-yellow-800">
                      <strong>{t('sections.agreement.note')}</strong>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.privacy.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.privacy.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.linkedSites.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.linkedSites.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.forwardLooking.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.forwardLooking.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.disclaimer.title')}</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="mb-2 font-medium">{t('sections.disclaimer.sectionA')}</p>
                      <ul className="ml-6 list-disc space-y-2">
                        {t.raw('sections.disclaimer.points').map((point: string, index: number) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">{t('sections.disclaimer.sectionB')}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.exclusions.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.exclusions.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.proprietaryRights.title')}</h2>
                  <p className="mb-4 text-gray-700">
                    {t('sections.proprietaryRights.content')}
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700">
                    {t.raw('sections.proprietaryRights.points').map((point: string, index: number) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-gray-700">
                    {t('sections.proprietaryRights.additional')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.indemnity.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.indemnity.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.copyright.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.copyright.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.intellectualProperty.title')}</h2>
                  <p className="mb-4 text-gray-700">
                    {t('sections.intellectualProperty.content')}
                  </p>
                  <div className="rounded-lg bg-gray-50 p-4">
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {t('sections.intellectualProperty.contact')}
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.placeOfPerformance.title')}</h2>
                  <p className="text-gray-700">
                    {t('sections.placeOfPerformance.content')}
                  </p>
                </section>

                <section>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">{t('sections.general.title')}</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="mb-2 font-medium">{t('sections.general.sectionA')}</p>
                    </div>
                    <div>
                      <p className="font-medium">{t('sections.general.sectionB')}</p>
                    </div>
                  </div>
                </section>
                </div>
              </div>
            </div>

            {/* Action Section */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={isAccepted}
                    onChange={(e) => setIsAccepted(e.target.checked)}
                    className="text-sm"
                  >
                    {t('actions.checkbox')}
                  </Checkbox>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleCancel}
                    className="rounded-lg px-6 py-2 text-sm font-medium text-[#046d5f] transition hover:bg-green-50 "
                  >
                    {t('actions.cancel')}
                  </button>
                  <button
                    onClick={handleAccept}
                    disabled={!isAccepted}
                    className={`rounded-lg px-6 py-2 text-sm font-medium text-white transition ${
                      isAccepted 
                        ? 'bg-[#046D5F] hover:bg-[#035a4f]' 
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {t('actions.accept')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Footer */}
    </div>
  )
}

export default PrivacyPolicy
