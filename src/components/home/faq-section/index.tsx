"use client"

import { useTranslations } from 'next-intl'
import { Container } from '@/theme/container'
import Dropdown from '@/components/shared/drop-down'
import { useState } from 'react'

const FAQSection = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default (or null for all closed)

  const t = useTranslations('homePage.faqsSection')
  const faqItems = t.raw("items") as { title: string; content: string }[];

  const handleMouseEnter = (idx: number) => {
    setOpenIndex(idx);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <section className="py-[132px]">
      <Container>
        <div className="mx-auto mb-[60px] flex max-w-[750px] flex-col gap-4 text-center">
          <h1 className="text-[46px] leading-[100%] font-bold text-[#0D0D0D]">{t('title')}</h1>
          <p className="text-[20px] leading-7 font-normal text-[#565656]">{t('description')}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
        
        <div className="space-y-6 w-full">
            {faqItems.map((faq, idx) => (
              <Dropdown
                key={idx}
                title={faq.title}
                content={faq.content}
                isOpen={openIndex === idx}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === idx ? null : idx))
                }
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
      </div>
      </Container>
    </section>
  )
}
export default FAQSection
