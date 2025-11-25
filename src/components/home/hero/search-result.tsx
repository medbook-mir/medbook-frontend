'use client'

import React, { useEffect, useState } from 'react'
import { Select, Spin, Empty } from 'antd'
import { mockDoctors } from '@/utils/helper'
import { useRouter } from 'next/navigation'
import { DoctorCard } from '@/components/shared/doctor-card'
import { useTranslations } from 'next-intl'

const { Option } = Select

const DoctorSearchResult = ({ searchDoctor }: { searchDoctor: string }) => {
  const t = useTranslations('homePage.searchResults')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<typeof mockDoctors>([])
  const [language, setLanguage] = useState<string | undefined>(undefined)
  const [specialty, setSpecialty] = useState<string | undefined>(undefined)
  const [gender, setGender] = useState<string | undefined>(undefined)
  const [locationRadius, setLocationRadius] = useState<string | undefined>(undefined)
  const [visibleResults, setVisibleResults] = useState(3)
  const router = useRouter()

  useEffect(() => {
    if (!searchDoctor) {
      setResults([])
      setVisibleResults(3)
      return
    }

    setLoading(true)
    const timeout = setTimeout(() => {
      const filtered = mockDoctors.filter((doc) => doc.name.toLowerCase().includes(searchDoctor.toLowerCase()))
      setResults(filtered)
      setLoading(false)
      setVisibleResults(3)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [searchDoctor])

  const handleResetFilter = () => {
    setLanguage(undefined)
    setSpecialty(undefined)
    setGender(undefined)
    setLocationRadius(undefined)
  }

  const handleShowMore = () => {
    setVisibleResults((prev) => prev + 3)
  }

  const displayedResults = results.slice(0, visibleResults)
  const hasMoreResults = visibleResults < results.length

  const specialties = [
    { value: 'gynecologist', label: t('specialties.gynecologist') },
    { value: 'pediatrician', label: t('specialties.pediatrician') },
    { value: 'dentist', label: t('specialties.dentist') },
    { value: 'surgeon', label: t('specialties.surgeon') },
    { value: 'dermatologist', label: t('specialties.dermatologist') },
  ]

  const languages = [
    { value: 'english', label: t('languages.english') },
    { value: 'russian', label: t('languages.russian') },
    { value: 'uzbek', label: t('languages.uzbek') },
  ]

  const genders = [
    { value: 'male', label: t('genders.male') },
    { value: 'female', label: t('genders.female') },
    { value: 'any', label: t('genders.any') },
  ]

  return (
    <div className="mx-auto w-full max-w-[900px] space-y-6 px-4 py-6">
      {/* Header with title and reset filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium text-[#0D0D0D]">{t('title')}</h2>
        <button
          onClick={handleResetFilter}
          className="text-sm font-medium text-[#008A7C] hover:underline"
        >
          {t('resetFilter')}
        </button>
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Language Filter */}
        <Select
          placeholder={t('filters.language')}
          value={language}
          onChange={setLanguage}
          allowClear
          className="w-full"
          size="large"
        >
          {languages.map((lang) => (
            <Option key={lang.value} value={lang.value}>
              {lang.label}
            </Option>
          ))}
        </Select>

        {/* Specialty Filter */}
        <Select
          placeholder={t('filters.specialty')}
          value={specialty}
          onChange={setSpecialty}
          allowClear
          className="w-full"
          size="large"
          showSearch
          optionFilterProp="children"
        >
          {specialties.map((spec) => (
            <Option key={spec.value} value={spec.value}>
              {spec.label}
            </Option>
          ))}
        </Select>

        {/* Gender Filter */}
        <Select
          placeholder={t('filters.gender')}
          value={gender}
          onChange={setGender}
          allowClear
          className="w-full"
          size="large"
        >
          {genders.map((gen) => (
            <Option key={gen.value} value={gen.value}>
              {gen.label}
            </Option>
          ))}
        </Select>

        {/* Location Radius Filter */}
        <Select
          placeholder={t('filters.locationRadius')}
          value={locationRadius}
          onChange={setLocationRadius}
          allowClear
          className="w-full"
          size="large"
        >
          <Option value="5km">5 km</Option>
          <Option value="10km">10 km</Option>
          <Option value="20km">20 km</Option>
          <Option value="50km">50 km</Option>
        </Select>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <Spin size="large" tip={t('loading')} />
          </div>
        ) : results.length > 0 ? (
          <>
            {displayedResults.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} router={router} />)}
            
            {/* Show More Button */}
            {hasMoreResults && (
              <div className="flex justify-center pt-6">
                <button
                  onClick={handleShowMore}
                  className="rounded-full bg-[#008A7C] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#007067] focus:outline-none focus:ring-2 focus:ring-[#008A7C] focus:ring-offset-2"
                >
                  Show more
                </button>
              </div>
            )}
          </>
        ) : searchDoctor ? (
          <div className="py-12">
            <Empty description={t('noResults')} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default DoctorSearchResult
