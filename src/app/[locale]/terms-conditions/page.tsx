'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect, useRef } from 'react'
import { Container } from '@/theme/container'
import { Link } from '@/i18n/navigation'
import { metadata } from './metadata'

const TermsConditions = () => {
  const t = useTranslations('termsConditions')
  const [isAccepted, setIsAccepted] = useState(false)
  const [readSections, setReadSections] = useState<Set<string>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
        const progress = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
        setScrollProgress(Math.min(progress, 100))
        
        // Check if user has scrolled to bottom
        if (scrollTop + clientHeight >= scrollHeight - 10) {
          setHasScrolledToBottom(true)
        }
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Track which sections have been read
  const handleSectionView = (sectionId: string) => {
    setReadSections(prev => new Set([...prev, sectionId]))
  }

  const handleAccept = async () => {
    if (isAccepted && hasScrolledToBottom) {
      try {
        // Handle acceptance logic here
        console.log('Terms accepted')
        // You can redirect to another page or close a modal
        // await acceptTermsAPI()
      } catch (error) {
        console.error('Error accepting terms:', error)
      }
    }
  }

  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Terms cancelled')
    // You can redirect back or close a modal
  }

  // Table of contents
  const sections = [
    { id: 'agreement', title: t('section1.title') },
    { id: 'privacy', title: t('section2.title') },
    { id: 'linked-sites', title: t('section3.title') },
    { id: 'statements', title: t('section4.title') },
    { id: 'disclaimer', title: t('section5.title') },
    { id: 'exclusions', title: t('section6.title') },
    { id: 'proprietary', title: t('section7.title') },
    { id: 'indemnity', title: t('section8.title') },
    { id: 'copyright', title: t('section9.title') },
    { id: 'infringement', title: t('section10.title') },
    { id: 'performance', title: t('section11.title') },
    { id: 'general', title: t('section12.title') }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-[#20B2AA] transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
          aria-label={`Reading progress: ${scrollProgress}%`}
        />
      </div>

      <Container>
        <div className="py-8 lg:py-12">
          <div className="mx-auto max-w-6xl">
            {/* Header Section */}
            <header className="mb-8">
              <h1 className="mb-4 text-3xl lg:text-4xl font-bold text-[#046D5F]">
                {t('title')}
              </h1>
              <h2 className="mb-2 text-xl lg:text-2xl font-semibold text-gray-700">
                {t('subtitle')}
              </h2>
              <time 
                className="text-sm text-gray-500"
                dateTime="2024-01-01"
              >
                {t('lastRevised')}: {t('lastRevisedDate')}
              </time>
            </header>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Table of Contents */}
              <nav 
                className="lg:w-80 flex-shrink-0"
                aria-label="Table of contents"
              >
                <div className="sticky top-8">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    Table of Contents
                  </h3>
                  <ul className="space-y-2">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                            readSections.has(section.id)
                              ? 'bg-green-50 text-green-700 border-l-4 border-green-500'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                          }`}
                          onClick={() => handleSectionView(section.id)}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Terms Content */}
              <main 
                className="flex-1"
                role="main"
                aria-label="Terms and conditions content"
              >
                <article 
                  ref={scrollContainerRef}
                  className="max-h-[70vh] overflow-y-auto rounded-lg border border-gray-200 p-6 custom-scrollbar"
                >
                  <div className="space-y-8 text-sm leading-relaxed text-gray-700">
                    <section className="prose prose-sm max-w-none">
                      <p className="text-base mb-6">{t('introduction')}</p>
                    </section>
                    
                    <section 
                      id="agreement"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('agreement')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section1.title')}
                      </h3>
                      <p className="text-justify">{t('section1.content')}</p>
                    </section>

                    <section 
                      id="privacy"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('privacy')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section2.title')}
                      </h3>
                      <p className="text-justify">{t('section2.content')}</p>
                    </section>

                    <section 
                      id="linked-sites"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('linked-sites')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section3.title')}
                      </h3>
                      <p className="text-justify">{t('section3.content')}</p>
                    </section>

                    <section 
                      id="statements"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('statements')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section4.title')}
                      </h3>
                      <p className="text-justify">{t('section4.content')}</p>
                    </section>

                    <section 
                      id="disclaimer"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('disclaimer')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section5.title')}
                      </h3>
                      <p className="text-justify">{t('section5.content')}</p>
                    </section>

                    <section 
                      id="exclusions"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('exclusions')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section6.title')}
                      </h3>
                      <p className="text-justify">{t('section6.content')}</p>
                    </section>

                    <section 
                      id="proprietary"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('proprietary')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section7.title')}
                      </h3>
                      <p className="text-justify">{t('section7.content')}</p>
                    </section>

                    <section 
                      id="indemnity"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('indemnity')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section8.title')}
                      </h3>
                      <p className="text-justify">{t('section8.content')}</p>
                    </section>

                    <section 
                      id="copyright"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('copyright')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section9.title')}
                      </h3>
                      <p className="text-justify">{t('section9.content')}</p>
                    </section>

                    <section 
                      id="infringement"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('infringement')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section10.title')}
                      </h3>
                      <p className="text-justify">{t('section10.content')}</p>
                    </section>

                    <section 
                      id="performance"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('performance')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section11.title')}
                      </h3>
                      <p className="text-justify">{t('section11.content')}</p>
                    </section>

                    <section 
                      id="general"
                      className="prose prose-sm max-w-none"
                      onMouseEnter={() => handleSectionView('general')}
                    >
                      <h3 className="mb-4 text-lg font-semibold text-[#046D5F] border-b border-gray-200 pb-2">
                        {t('section12.title')}
                      </h3>
                      <p className="text-justify">{t('section12.content')}</p>
                    </section>
                  </div>
                </article>
              </main>
            </div>

            {/* Acceptance Section */}
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
              <div className="space-y-6">
                {/* Reading Status */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${hasScrolledToBottom ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-gray-600">
                      {hasScrolledToBottom ? 'Content fully read' : 'Please scroll to read all content'}
                    </span>
                  </div>
                  <div className="text-gray-500">
                    {scrollProgress}% read
                  </div>
                </div>

                {/* Acceptance Checkbox */}
                <div className="flex items-center-safe gap-3">
                  <input
                    type="checkbox"
                    id="accept-terms"
                    checked={isAccepted}
                    onChange={(e) => setIsAccepted(e.target.checked)}
                    className="mt-1 h-5 w-5 rounded border-2 border-gray-300 text-[#20B2AA] focus:ring-2 focus:ring-[#20B2AA] focus:ring-offset-0"
                    disabled={!hasScrolledToBottom}
                  />
                  <label 
                    htmlFor="accept-terms" 
                    className={`text-sm leading-relaxed ${
                      hasScrolledToBottom ? 'text-gray-700' : 'text-gray-400'
                    } mr-auto`}
                  >
                    {t('acceptanceText')}
                  </label>
                  {/* Action Buttons */}
                <div className="flex sm:flex-row gap-4 sm:justify-end">
                  <button
                    onClick={handleCancel}
                    className="order-2 sm:order-1 rounded-lg border border-[#046D5F] bg-white px-6 py-3 text-[#046D5F] font-medium transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#046D5F] focus:ring-offset-2"
                  >
                    {t('cancelButton')}
                  </button>
                  <button
                    onClick={handleAccept}
                    disabled={!isAccepted || !hasScrolledToBottom}
                    className={`order-1 sm:order-2 rounded-lg px-6 py-3 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isAccepted && hasScrolledToBottom
                        ? 'bg-[#20B2AA] text-white hover:bg-[#1a9a94] focus:ring-[#20B2AA]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed focus:ring-gray-300'
                    }`}
                    aria-describedby={!hasScrolledToBottom ? 'scroll-required' : undefined}
                  >
                    {t('acceptButton')}
                  </button>
                </div>
                </div>

                

                {/* Help Text */}
                {!hasScrolledToBottom && (
                  <p id="scroll-required" className="text-xs text-amber-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Please scroll through all content before accepting
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TermsConditions
